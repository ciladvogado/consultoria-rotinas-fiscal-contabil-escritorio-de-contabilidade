import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  listMentorados: vi.fn().mockResolvedValue([
    {
      id: 1,
      nome: "Empresa ABC",
      cnpj: "12.345.678/0001-00",
      tipo: "empresa",
      regimeTributario: "simples_nacional",
      porte: "micro",
      segmento: "Comércio",
      municipio: "Goiânia",
      uf: "GO",
      semanaAtual: 3,
      status: "ativo",
    },
    {
      id: 2,
      nome: "Escritório XYZ",
      cnpj: "98.765.432/0001-00",
      tipo: "escritorio",
      regimeTributario: "lucro_presumido",
      porte: "pequena",
      segmento: "Serviços",
      municipio: "Jataí",
      uf: "GO",
      semanaAtual: 7,
      status: "ativo",
    },
  ]),
  getMentoradoById: vi.fn().mockImplementation(async (id: number) => {
    if (id === 1) {
      return {
        id: 1,
        nome: "Empresa ABC",
        cnpj: "12.345.678/0001-00",
        tipo: "empresa",
        regimeTributario: "simples_nacional",
        porte: "micro",
        segmento: "Comércio",
        municipio: "Goiânia",
        uf: "GO",
        semanaAtual: 3,
        status: "ativo",
      };
    }
    return null;
  }),
  getMentoradoStats: vi.fn().mockResolvedValue({
    reunioesRealizadas: 10,
    reunioesTotal: 60,
    documentosEntregues: 5,
    documentosTotal: 20,
    progressoMedio: 25,
  }),
  createMentorado: vi.fn().mockResolvedValue(3),
  updateMentorado: vi.fn().mockResolvedValue(undefined),
  listMembrosByMentorado: vi.fn().mockResolvedValue([]),
  getMentoradosByUserId: vi.fn().mockResolvedValue([]),
  listReunioesByMentorado: vi.fn().mockResolvedValue([]),
  listDocumentosByMentorado: vi.fn().mockResolvedValue([]),
  listProgressoByMentorado: vi.fn().mockResolvedValue([]),
  listGamificacaoByMentorado: vi.fn().mockResolvedValue([]),
  listIndicadoresByMentorado: vi.fn().mockResolvedValue([]),
  createMembro: vi.fn().mockResolvedValue(1),
  updateMembro: vi.fn().mockResolvedValue(undefined),
  createReuniao: vi.fn().mockResolvedValue(1),
  updateReuniao: vi.fn().mockResolvedValue(undefined),
  createDocumento: vi.fn().mockResolvedValue(1),
  createIndicador: vi.fn().mockResolvedValue(1),
  upsertUser: vi.fn().mockResolvedValue(undefined),
  getUserByOpenId: vi.fn().mockResolvedValue(undefined),
}));

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createUserContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("mentorado router", () => {
  it("lists mentorados for authenticated user", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.mentorado.list();

    expect(result).toHaveLength(2);
    expect(result[0].nome).toBe("Empresa ABC");
    expect(result[1].nome).toBe("Escritório XYZ");
  });

  it("gets mentorado by id", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.mentorado.getById({ id: 1 });

    expect(result).toBeDefined();
    expect(result?.nome).toBe("Empresa ABC");
    expect(result?.regimeTributario).toBe("simples_nacional");
  });

  it("gets mentorado stats", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.mentorado.getStats({ id: 1 });

    expect(result.reunioesRealizadas).toBe(10);
    expect(result.reunioesTotal).toBe(60);
    expect(result.documentosEntregues).toBe(5);
    expect(result.progressoMedio).toBe(25);
  });

  it("admin can create mentorado", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.mentorado.create({
      nome: "Nova Empresa",
      tipo: "empresa",
      regimeTributario: "lucro_real",
      porte: "grande",
      municipio: "São Paulo",
      uf: "SP",
    });

    expect(result.id).toBe(3);
  });

  it("regular user cannot create mentorado", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.mentorado.create({
        nome: "Nova Empresa",
        tipo: "empresa",
      })
    ).rejects.toThrow();
  });

  it("admin can update mentorado", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.mentorado.update({
      id: 1,
      semanaAtual: 5,
      status: "pausado",
    });

    expect(result.success).toBe(true);
  });
});

describe("reuniao router", () => {
  it("lists reunioes by mentorado", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.reuniao.listByMentorado({ mentoradoId: 1 });

    expect(Array.isArray(result)).toBe(true);
  });

  it("admin can create reuniao", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.reuniao.create({
      mentoradoId: 1,
      semana: 1,
      diaSemana: "segunda",
      titulo: "Apresentação do Plano",
    });

    expect(result.id).toBe(1);
  });
});

describe("membro router", () => {
  it("lists membros by mentorado", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.membro.listByMentorado({ mentoradoId: 1 });

    expect(Array.isArray(result)).toBe(true);
  });

  it("admin can create membro", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.membro.create({
      userId: 2,
      mentoradoId: 1,
      appRole: "supervisor",
      setor: "Fiscal",
      cargo: "Coordenador Fiscal",
    });

    expect(result.id).toBe(1);
  });
});
