import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, adminProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── Mentorados ────────────────────────────────────────────────────────
  mentorado: router({
    list: protectedProcedure.query(async () => {
      return db.listMentorados();
    }),

    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return db.getMentoradoById(input.id);
      }),

    getStats: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return db.getMentoradoStats(input.id);
      }),

    create: adminProcedure
      .input(
        z.object({
          nome: z.string().min(1),
          cnpj: z.string().optional(),
          regimeTributario: z.enum(["mei", "simples_nacional", "lucro_presumido", "lucro_real"]).optional(),
          porte: z.enum(["mei", "micro", "pequena", "media", "grande"]).optional(),
          segmento: z.string().optional(),
          municipio: z.string().optional(),
          uf: z.string().max(2).optional(),
          tipo: z.enum(["empresa", "escritorio"]).default("empresa"),
          dataInicio: z.date().optional(),
          observacoes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await db.createMentorado(input);
        return { id };
      }),

    update: adminProcedure
      .input(
        z.object({
          id: z.number(),
          nome: z.string().min(1).optional(),
          cnpj: z.string().optional(),
          regimeTributario: z.enum(["mei", "simples_nacional", "lucro_presumido", "lucro_real"]).optional(),
          porte: z.enum(["mei", "micro", "pequena", "media", "grande"]).optional(),
          segmento: z.string().optional(),
          municipio: z.string().optional(),
          uf: z.string().max(2).optional(),
          tipo: z.enum(["empresa", "escritorio"]).optional(),
          semanaAtual: z.number().optional(),
          status: z.enum(["ativo", "pausado", "concluido", "cancelado"]).optional(),
          observacoes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await db.updateMentorado(id, data);
        return { success: true };
      }),
  }),

  // ─── Membros ───────────────────────────────────────────────────────────
  membro: router({
    listByMentorado: protectedProcedure
      .input(z.object({ mentoradoId: z.number() }))
      .query(async ({ input }) => {
        return db.listMembrosByMentorado(input.mentoradoId);
      }),

    myMentorados: protectedProcedure.query(async ({ ctx }) => {
      if (!ctx.user) return [];
      return db.getMentoradosByUserId(ctx.user.id);
    }),

    create: adminProcedure
      .input(
        z.object({
          userId: z.number(),
          mentoradoId: z.number(),
          appRole: z.enum(["mentor", "mentorado", "supervisor", "revisor", "operador"]),
          setor: z.string().optional(),
          cargo: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await db.createMembro(input);
        return { id };
      }),

    update: adminProcedure
      .input(
        z.object({
          id: z.number(),
          appRole: z.enum(["mentor", "mentorado", "supervisor", "revisor", "operador"]).optional(),
          setor: z.string().optional(),
          cargo: z.string().optional(),
          ativo: z.boolean().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await db.updateMembro(id, data);
        return { success: true };
      }),
  }),

  // ─── Reuniões ──────────────────────────────────────────────────────────
  reuniao: router({
    listByMentorado: protectedProcedure
      .input(z.object({ mentoradoId: z.number() }))
      .query(async ({ input }) => {
        return db.listReunioesByMentorado(input.mentoradoId);
      }),

    create: adminProcedure
      .input(
        z.object({
          mentoradoId: z.number(),
          semana: z.number(),
          diaSemana: z.enum(["segunda", "terca", "quarta", "quinta", "sexta"]),
          titulo: z.string().min(1),
          descricao: z.string().optional(),
          dataAgendada: z.date().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await db.createReuniao(input);
        return { id };
      }),

    update: adminProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["agendada", "realizada", "cancelada", "reagendada"]).optional(),
          dataRealizada: z.date().optional(),
          linkGravacao: z.string().optional(),
          linkTranscricao: z.string().optional(),
          ata: z.string().optional(),
          acoesCombinadas: z.string().optional(),
          proximosPassos: z.string().optional(),
          duracaoMinutos: z.number().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await db.updateReuniao(id, data);
        return { success: true };
      }),
  }),

  // ─── Documentos ────────────────────────────────────────────────────────
  documento: router({
    listByMentorado: protectedProcedure
      .input(z.object({ mentoradoId: z.number() }))
      .query(async ({ input }) => {
        return db.listDocumentosByMentorado(input.mentoradoId);
      }),

    create: adminProcedure
      .input(
        z.object({
          mentoradoId: z.number(),
          titulo: z.string().min(1),
          tipo: z.enum(["pop", "manual", "template", "relatorio", "ata", "checklist", "outro"]),
          modulo: z.string().optional(),
          semana: z.number().optional(),
          url: z.string().optional(),
          descricao: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await db.createDocumento(input);
        return { id };
      }),
  }),

  // ─── Progresso ─────────────────────────────────────────────────────────
  progresso: router({
    listByMentorado: protectedProcedure
      .input(z.object({ mentoradoId: z.number() }))
      .query(async ({ input }) => {
        return db.listProgressoByMentorado(input.mentoradoId);
      }),
  }),

  // ─── Gamificação ───────────────────────────────────────────────────────
  gamificacao: router({
    listByMentorado: protectedProcedure
      .input(z.object({ mentoradoId: z.number() }))
      .query(async ({ input }) => {
        return db.listGamificacaoByMentorado(input.mentoradoId);
      }),
  }),

  // ─── Indicadores ───────────────────────────────────────────────────────
  indicador: router({
    listByMentorado: protectedProcedure
      .input(z.object({ mentoradoId: z.number() }))
      .query(async ({ input }) => {
        return db.listIndicadoresByMentorado(input.mentoradoId);
      }),

    create: adminProcedure
      .input(
        z.object({
          mentoradoId: z.number(),
          semana: z.number(),
          reunioesNoPrazo: z.number().default(0),
          reunioesTotal: z.number().default(0),
          tarefasConcluidas: z.number().default(0),
          tarefasTotal: z.number().default(0),
          qualidadeMedia: z.number().default(0),
          observacoes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await db.createIndicador(input);
        return { id };
      }),
  }),
});

export type AppRouter = typeof appRouter;
