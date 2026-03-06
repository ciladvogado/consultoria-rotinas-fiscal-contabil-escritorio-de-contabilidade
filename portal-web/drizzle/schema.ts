import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
  boolean,
  json,
} from "drizzle-orm/mysql-core";

// ─── Users (autenticação OAuth) ────────────────────────────────────────────
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Papéis do sistema de mentoria ─────────────────────────────────────────
// mentor, mentorado, supervisor, revisor, operador
export const appRoleEnum = mysqlEnum("appRole", [
  "mentor",
  "mentorado",
  "supervisor",
  "revisor",
  "operador",
]);

// ─── Mentorados (empresas/escritórios clientes) ────────────────────────────
export const mentorados = mysqlTable("mentorados", {
  id: int("id").autoincrement().primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  cnpj: varchar("cnpj", { length: 18 }),
  regimeTributario: mysqlEnum("regimeTributario", [
    "mei",
    "simples_nacional",
    "lucro_presumido",
    "lucro_real",
  ]),
  porte: mysqlEnum("porte", [
    "mei",
    "micro",
    "pequena",
    "media",
    "grande",
  ]),
  segmento: varchar("segmento", { length: 128 }),
  municipio: varchar("municipio", { length: 128 }),
  uf: varchar("uf", { length: 2 }),
  tipo: mysqlEnum("tipo", ["empresa", "escritorio"]).default("empresa").notNull(),
  dataInicio: timestamp("dataInicio"),
  dataFim: timestamp("dataFim"),
  semanaAtual: int("semanaAtual").default(1).notNull(),
  status: mysqlEnum("statusMentoria", [
    "ativo",
    "pausado",
    "concluido",
    "cancelado",
  ]).default("ativo").notNull(),
  observacoes: text("observacoes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Mentorado = typeof mentorados.$inferSelect;
export type InsertMentorado = typeof mentorados.$inferInsert;

// ─── Membros (pessoas vinculadas a um mentorado) ──────────────────────────
export const membros = mysqlTable("membros", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  mentoradoId: int("mentoradoId").notNull(),
  appRole: appRoleEnum.notNull(),
  setor: varchar("setor", { length: 128 }),
  cargo: varchar("cargo", { length: 128 }),
  ativo: boolean("ativo").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Membro = typeof membros.$inferSelect;
export type InsertMembro = typeof membros.$inferInsert;

// ─── Reuniões ──────────────────────────────────────────────────────────────
export const reunioes = mysqlTable("reunioes", {
  id: int("id").autoincrement().primaryKey(),
  mentoradoId: int("mentoradoId").notNull(),
  semana: int("semana").notNull(),
  diaSemana: mysqlEnum("diaSemana", [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
  ]).notNull(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  descricao: text("descricao"),
  dataAgendada: timestamp("dataAgendada"),
  dataRealizada: timestamp("dataRealizada"),
  status: mysqlEnum("statusReuniao", [
    "agendada",
    "realizada",
    "cancelada",
    "reagendada",
  ]).default("agendada").notNull(),
  linkGravacao: text("linkGravacao"),
  linkTranscricao: text("linkTranscricao"),
  ata: text("ata"),
  acoesCombinadas: text("acoesCombinadas"),
  proximosPassos: text("proximosPassos"),
  duracaoMinutos: int("duracaoMinutos"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Reuniao = typeof reunioes.$inferSelect;
export type InsertReuniao = typeof reunioes.$inferInsert;

// ─── Documentos entregues ──────────────────────────────────────────────────
export const documentos = mysqlTable("documentos", {
  id: int("id").autoincrement().primaryKey(),
  mentoradoId: int("mentoradoId").notNull(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  tipo: mysqlEnum("tipoDocumento", [
    "pop",
    "manual",
    "template",
    "relatorio",
    "ata",
    "checklist",
    "outro",
  ]).notNull(),
  modulo: varchar("modulo", { length: 64 }),
  semana: int("semana"),
  url: text("url"),
  descricao: text("descricao"),
  entregue: boolean("entregue").default(false).notNull(),
  dataEntrega: timestamp("dataEntrega"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Documento = typeof documentos.$inferSelect;
export type InsertDocumento = typeof documentos.$inferInsert;

// ─── Progresso por módulo ──────────────────────────────────────────────────
export const progressoModulos = mysqlTable("progressoModulos", {
  id: int("id").autoincrement().primaryKey(),
  mentoradoId: int("mentoradoId").notNull(),
  modulo: varchar("modulo", { length: 64 }).notNull(),
  percentual: int("percentual").default(0).notNull(),
  status: mysqlEnum("statusModulo", [
    "nao_iniciado",
    "em_andamento",
    "concluido",
  ]).default("nao_iniciado").notNull(),
  observacoes: text("observacoes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ProgressoModulo = typeof progressoModulos.$inferSelect;
export type InsertProgressoModulo = typeof progressoModulos.$inferInsert;

// ─── Gamificação ───────────────────────────────────────────────────────────
export const gamificacao = mysqlTable("gamificacao", {
  id: int("id").autoincrement().primaryKey(),
  membroId: int("membroId").notNull(),
  mentoradoId: int("mentoradoId").notNull(),
  pontosBase: int("pontosBase").default(0).notNull(),
  multiplicadorPrazo: int("multiplicadorPrazo").default(100).notNull(), // percentual (100 = 1.0x)
  multiplicadorQualidade: int("multiplicadorQualidade").default(100).notNull(),
  pontosTotal: int("pontosTotal").default(0).notNull(),
  nivel: mysqlEnum("nivel", [
    "iniciante",
    "praticante",
    "proficiente",
    "especialista",
    "mestre",
  ]).default("iniciante").notNull(),
  conquistas: json("conquistas").$type<string[]>(),
  indiceEngajamento: int("indiceEngajamento").default(0).notNull(), // 0-100
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Gamificacao = typeof gamificacao.$inferSelect;
export type InsertGamificacao = typeof gamificacao.$inferInsert;

// ─── Indicadores de qualidade e prazo ──────────────────────────────────────
export const indicadores = mysqlTable("indicadores", {
  id: int("id").autoincrement().primaryKey(),
  mentoradoId: int("mentoradoId").notNull(),
  semana: int("semana").notNull(),
  reunioesNoPrazo: int("reunioesNoPrazo").default(0).notNull(),
  reunioesTotal: int("reunioesTotal").default(0).notNull(),
  tarefasConcluidas: int("tarefasConcluidas").default(0).notNull(),
  tarefasTotal: int("tarefasTotal").default(0).notNull(),
  qualidadeMedia: int("qualidadeMedia").default(0).notNull(), // 0-5 (escala)
  observacoes: text("observacoes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Indicador = typeof indicadores.$inferSelect;
export type InsertIndicador = typeof indicadores.$inferInsert;
