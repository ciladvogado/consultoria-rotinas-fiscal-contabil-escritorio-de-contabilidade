import { eq, and, desc, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  users,
  mentorados,
  membros,
  reunioes,
  documentos,
  progressoModulos,
  gamificacao,
  indicadores,
  type InsertMentorado,
  type InsertMembro,
  type InsertReuniao,
  type InsertDocumento,
  type InsertProgressoModulo,
  type InsertGamificacao,
  type InsertIndicador,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ─── Users ─────────────────────────────────────────────────────────────────

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }
  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};
    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];
    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };
    textFields.forEach(assignNullable);
    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = "admin";
      updateSet.role = "admin";
    }
    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }
    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }
    await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ─── Mentorados ────────────────────────────────────────────────────────────

export async function listMentorados() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(mentorados).orderBy(desc(mentorados.createdAt));
}

export async function getMentoradoById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(mentorados).where(eq(mentorados.id, id)).limit(1);
  return result[0];
}

export async function createMentorado(data: InsertMentorado) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(mentorados).values(data);
  return result[0].insertId;
}

export async function updateMentorado(id: number, data: Partial<InsertMentorado>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(mentorados).set(data).where(eq(mentorados.id, id));
}

// ─── Membros ───────────────────────────────────────────────────────────────

export async function listMembrosByMentorado(mentoradoId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select({
      membro: membros,
      userName: users.name,
      userEmail: users.email,
    })
    .from(membros)
    .leftJoin(users, eq(membros.userId, users.id))
    .where(eq(membros.mentoradoId, mentoradoId));
}

export async function getMembroByUserId(userId: number, mentoradoId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(membros)
    .where(and(eq(membros.userId, userId), eq(membros.mentoradoId, mentoradoId)))
    .limit(1);
  return result[0];
}

export async function getMentoradosByUserId(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select({
      membro: membros,
      mentorado: mentorados,
    })
    .from(membros)
    .innerJoin(mentorados, eq(membros.mentoradoId, mentorados.id))
    .where(eq(membros.userId, userId));
}

export async function createMembro(data: InsertMembro) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(membros).values(data);
  return result[0].insertId;
}

export async function updateMembro(id: number, data: Partial<InsertMembro>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(membros).set(data).where(eq(membros.id, id));
}

// ─── Reuniões ──────────────────────────────────────────────────────────────

export async function listReunioesByMentorado(mentoradoId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(reunioes)
    .where(eq(reunioes.mentoradoId, mentoradoId))
    .orderBy(reunioes.semana, reunioes.diaSemana);
}

export async function createReuniao(data: InsertReuniao) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(reunioes).values(data);
  return result[0].insertId;
}

export async function updateReuniao(id: number, data: Partial<InsertReuniao>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(reunioes).set(data).where(eq(reunioes.id, id));
}

// ─── Documentos ────────────────────────────────────────────────────────────

export async function listDocumentosByMentorado(mentoradoId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(documentos)
    .where(eq(documentos.mentoradoId, mentoradoId))
    .orderBy(documentos.semana);
}

export async function createDocumento(data: InsertDocumento) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(documentos).values(data);
  return result[0].insertId;
}

// ─── Progresso ─────────────────────────────────────────────────────────────

export async function listProgressoByMentorado(mentoradoId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(progressoModulos)
    .where(eq(progressoModulos.mentoradoId, mentoradoId));
}

export async function upsertProgresso(data: InsertProgressoModulo) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(progressoModulos).values(data).onDuplicateKeyUpdate({
    set: {
      percentual: data.percentual,
      status: data.status,
      observacoes: data.observacoes,
    },
  });
}

// ─── Gamificação ───────────────────────────────────────────────────────────

export async function getGamificacaoByMembro(membroId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(gamificacao)
    .where(eq(gamificacao.membroId, membroId))
    .limit(1);
  return result[0];
}

export async function listGamificacaoByMentorado(mentoradoId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select({
      gamificacao: gamificacao,
      membroNome: users.name,
      membroRole: membros.appRole,
    })
    .from(gamificacao)
    .leftJoin(membros, eq(gamificacao.membroId, membros.id))
    .leftJoin(users, eq(membros.userId, users.id))
    .where(eq(gamificacao.mentoradoId, mentoradoId))
    .orderBy(desc(gamificacao.pontosTotal));
}

export async function upsertGamificacao(data: InsertGamificacao) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(gamificacao).values(data).onDuplicateKeyUpdate({
    set: {
      pontosBase: data.pontosBase,
      multiplicadorPrazo: data.multiplicadorPrazo,
      multiplicadorQualidade: data.multiplicadorQualidade,
      pontosTotal: data.pontosTotal,
      nivel: data.nivel,
      conquistas: data.conquistas,
      indiceEngajamento: data.indiceEngajamento,
    },
  });
}

// ─── Indicadores ───────────────────────────────────────────────────────────

export async function listIndicadoresByMentorado(mentoradoId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(indicadores)
    .where(eq(indicadores.mentoradoId, mentoradoId))
    .orderBy(indicadores.semana);
}

export async function createIndicador(data: InsertIndicador) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(indicadores).values(data);
  return result[0].insertId;
}

// ─── Stats resumo ──────────────────────────────────────────────────────────

export async function getMentoradoStats(mentoradoId: number) {
  const db = await getDb();
  if (!db) return null;

  const [reunioesStats] = await db
    .select({
      total: sql<number>`COUNT(*)`,
      realizadas: sql<number>`SUM(CASE WHEN ${reunioes.status} = 'realizada' THEN 1 ELSE 0 END)`,
    })
    .from(reunioes)
    .where(eq(reunioes.mentoradoId, mentoradoId));

  const [docsStats] = await db
    .select({
      total: sql<number>`COUNT(*)`,
      entregues: sql<number>`SUM(CASE WHEN ${documentos.entregue} = true THEN 1 ELSE 0 END)`,
    })
    .from(documentos)
    .where(eq(documentos.mentoradoId, mentoradoId));

  const progresso = await listProgressoByMentorado(mentoradoId);
  const avgProgresso =
    progresso.length > 0
      ? Math.round(progresso.reduce((acc, p) => acc + p.percentual, 0) / progresso.length)
      : 0;

  return {
    reunioesTotal: Number(reunioesStats?.total ?? 0),
    reunioesRealizadas: Number(reunioesStats?.realizadas ?? 0),
    documentosTotal: Number(docsStats?.total ?? 0),
    documentosEntregues: Number(docsStats?.entregues ?? 0),
    progressoMedio: avgProgresso,
  };
}
