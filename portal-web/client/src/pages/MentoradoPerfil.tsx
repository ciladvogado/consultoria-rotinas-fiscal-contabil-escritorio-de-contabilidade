import Layout from "@/components/Layout";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";
import {
  ArrowLeft,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Loader2,
  LogIn,
  Star,
  Target,
  Trophy,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const REGIME_LABELS: Record<string, string> = {
  mei: "MEI",
  simples_nacional: "Simples Nacional",
  lucro_presumido: "Lucro Presumido",
  lucro_real: "Lucro Real",
};

const PORTE_LABELS: Record<string, string> = {
  mei: "MEI",
  micro: "Microempresa",
  pequena: "Pequena Empresa",
  media: "Média Empresa",
  grande: "Grande Empresa",
};

const STATUS_REUNIAO: Record<string, { label: string; color: string; icon: typeof CheckCircle2 }> = {
  agendada: { label: "Agendada", color: "text-blue-600", icon: Clock },
  realizada: { label: "Realizada", color: "text-emerald-600", icon: CheckCircle2 },
  cancelada: { label: "Cancelada", color: "text-red-500", icon: XCircle },
  reagendada: { label: "Reagendada", color: "text-amber-600", icon: Clock },
};

const NIVEL_CONFIG: Record<string, { label: string; color: string; stars: number }> = {
  iniciante: { label: "Iniciante", color: "text-gray-500", stars: 1 },
  praticante: { label: "Praticante", color: "text-blue-500", stars: 2 },
  proficiente: { label: "Proficiente", color: "text-emerald-500", stars: 3 },
  especialista: { label: "Especialista", color: "text-purple-500", stars: 4 },
  mestre: { label: "Mestre", color: "text-amber-500", stars: 5 },
};

const ROLE_LABELS: Record<string, string> = {
  mentor: "Mentor",
  mentorado: "Mentorado",
  supervisor: "Supervisor",
  revisor: "Revisor",
  operador: "Operador",
};

function StatCard({
  label,
  value,
  total,
  icon: Icon,
  color = "#0f766e",
}: {
  label: string;
  value: number;
  total?: number;
  icon: typeof Target;
  color?: string;
}) {
  return (
    <div className="border border-border rounded-sm bg-card p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} style={{ color }} />
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-2xl text-foreground">{value}</span>
        {total !== undefined && (
          <span className="text-sm text-muted-foreground">/ {total}</span>
        )}
      </div>
    </div>
  );
}

export default function MentoradoPerfil({ params }: { params: { id: string } }) {
  const mentoradoId = parseInt(params.id, 10);
  const { user, loading: authLoading } = useAuth();

  const { data: mentorado, isLoading } = trpc.mentorado.getById.useQuery(
    { id: mentoradoId },
    { enabled: !!user && !isNaN(mentoradoId) }
  );

  const { data: stats } = trpc.mentorado.getStats.useQuery(
    { id: mentoradoId },
    { enabled: !!user && !isNaN(mentoradoId) }
  );

  const { data: reunioesData } = trpc.reuniao.listByMentorado.useQuery(
    { mentoradoId },
    { enabled: !!user && !isNaN(mentoradoId) }
  );

  const { data: documentosData } = trpc.documento.listByMentorado.useQuery(
    { mentoradoId },
    { enabled: !!user && !isNaN(mentoradoId) }
  );

  const { data: membrosData } = trpc.membro.listByMentorado.useQuery(
    { mentoradoId },
    { enabled: !!user && !isNaN(mentoradoId) }
  );

  const { data: progressoData } = trpc.progresso.listByMentorado.useQuery(
    { mentoradoId },
    { enabled: !!user && !isNaN(mentoradoId) }
  );

  const { data: gamificacaoData } = trpc.gamificacao.listByMentorado.useQuery(
    { mentoradoId },
    { enabled: !!user && !isNaN(mentoradoId) }
  );

  const { data: indicadoresData } = trpc.indicador.listByMentorado.useQuery(
    { mentoradoId },
    { enabled: !!user && !isNaN(mentoradoId) }
  );

  if (authLoading || isLoading) {
    return (
      <Layout>
        <div className="container py-16 flex justify-center">
          <Loader2 className="animate-spin text-muted-foreground" size={32} />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <Users className="mx-auto mb-4 text-muted-foreground" size={48} />
            <h2 className="font-serif text-2xl mb-2">Acesso Restrito</h2>
            <p className="text-muted-foreground mb-6">Faça login para visualizar este perfil.</p>
            <a href={getLoginUrl()}>
              <Button className="bg-[#0f766e] hover:bg-[#0f766e]/90 text-white">
                <LogIn size={16} className="mr-2" />
                Fazer Login
              </Button>
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  if (!mentorado) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <p className="text-muted-foreground">Mentorado não encontrado.</p>
          <Link href="/mentorados">
            <Button variant="outline" className="mt-4">
              <ArrowLeft size={16} className="mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const progressPercent = Math.round(((mentorado.semanaAtual - 1) / 12) * 100);

  return (
    <Layout>
      <div className="container py-10">
        {/* Breadcrumb */}
        <Link
          href="/mentorados"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#0f766e] transition-colors no-underline mb-6"
        >
          <ArrowLeft size={14} />
          Voltar aos Mentorados
        </Link>

        {/* Header do Perfil */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-border rounded-sm bg-card p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-serif text-3xl text-foreground">{mentorado.nome}</h1>
                <span
                  className={`px-2 py-0.5 text-xs font-mono rounded-sm ${
                    mentorado.status === "ativo"
                      ? "bg-emerald-100 text-emerald-700"
                      : mentorado.status === "pausado"
                      ? "bg-amber-100 text-amber-700"
                      : mentorado.status === "concluido"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {mentorado.status === "ativo"
                    ? "Ativo"
                    : mentorado.status === "pausado"
                    ? "Pausado"
                    : mentorado.status === "concluido"
                    ? "Concluído"
                    : "Cancelado"}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                {mentorado.tipo && (
                  <span className="flex items-center gap-1">
                    <Building2 size={14} />
                    {mentorado.tipo === "empresa" ? "Empresa" : "Escritório"}
                  </span>
                )}
                {mentorado.regimeTributario && (
                  <span>{REGIME_LABELS[mentorado.regimeTributario]}</span>
                )}
                {mentorado.porte && <span>{PORTE_LABELS[mentorado.porte]}</span>}
                {mentorado.municipio && mentorado.uf && (
                  <span>
                    {mentorado.municipio}/{mentorado.uf}
                  </span>
                )}
                {mentorado.cnpj && <span className="font-mono text-xs">{mentorado.cnpj}</span>}
                {mentorado.segmento && <span>{mentorado.segmento}</span>}
              </div>

              {/* Progresso geral */}
              <div className="flex items-center gap-3 max-w-md">
                <Calendar size={14} className="text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Semana {mentorado.semanaAtual}/12
                </span>
                <div className="flex-1">
                  <Progress value={progressPercent} className="h-2" />
                </div>
                <span className="text-sm font-mono text-muted-foreground">{progressPercent}%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Reuniões"
            value={stats?.reunioesRealizadas ?? 0}
            total={stats?.reunioesTotal ?? 0}
            icon={Calendar}
          />
          <StatCard
            label="Documentos"
            value={stats?.documentosEntregues ?? 0}
            total={stats?.documentosTotal ?? 0}
            icon={FileText}
            color="#6366f1"
          />
          <StatCard
            label="Progresso Médio"
            value={stats?.progressoMedio ?? 0}
            icon={Target}
            color="#f59e0b"
          />
          <StatCard
            label="Equipe"
            value={membrosData?.length ?? 0}
            icon={Users}
            color="#8b5cf6"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="reunioes" className="w-full">
          <TabsList className="bg-muted/50 border border-border rounded-sm p-1 mb-6 flex flex-wrap">
            <TabsTrigger value="reunioes" className="text-sm">
              Reuniões
            </TabsTrigger>
            <TabsTrigger value="documentos" className="text-sm">
              Documentos
            </TabsTrigger>
            <TabsTrigger value="progresso" className="text-sm">
              Progresso
            </TabsTrigger>
            <TabsTrigger value="equipe" className="text-sm">
              Equipe
            </TabsTrigger>
            <TabsTrigger value="gamificacao" className="text-sm">
              Gamificação
            </TabsTrigger>
            <TabsTrigger value="indicadores" className="text-sm">
              Indicadores
            </TabsTrigger>
          </TabsList>

          {/* Reuniões */}
          <TabsContent value="reunioes">
            {!reunioesData || reunioesData.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-border rounded-sm">
                <Calendar className="mx-auto mb-3 text-muted-foreground" size={36} />
                <p className="text-muted-foreground">Nenhuma reunião registrada ainda.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {reunioesData.map((r) => {
                  const statusInfo = STATUS_REUNIAO[r.status] ?? {
                    label: r.status,
                    color: "text-gray-500",
                    icon: Clock,
                  };
                  const StatusIcon = statusInfo.icon;
                  return (
                    <div
                      key={r.id}
                      className="border border-border rounded-sm bg-card p-4 flex items-center gap-4"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-sm bg-muted flex flex-col items-center justify-center">
                        <span className="text-xs font-mono text-muted-foreground">S{r.semana}</span>
                        <span className="text-xs font-mono capitalize">{r.diaSemana.slice(0, 3)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground truncate">{r.titulo}</h4>
                        {r.descricao && (
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {r.descricao}
                          </p>
                        )}
                      </div>
                      <div className={`flex items-center gap-1.5 text-xs ${statusInfo.color}`}>
                        <StatusIcon size={14} />
                        {statusInfo.label}
                      </div>
                      {r.duracaoMinutos && (
                        <span className="text-xs font-mono text-muted-foreground">
                          {r.duracaoMinutos}min
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </TabsContent>

          {/* Documentos */}
          <TabsContent value="documentos">
            {!documentosData || documentosData.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-border rounded-sm">
                <FileText className="mx-auto mb-3 text-muted-foreground" size={36} />
                <p className="text-muted-foreground">Nenhum documento registrado ainda.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {documentosData.map((d) => (
                  <div
                    key={d.id}
                    className="border border-border rounded-sm bg-card p-4 flex items-center gap-4"
                  >
                    <div
                      className={`shrink-0 w-10 h-10 rounded-sm flex items-center justify-center ${
                        d.entregue ? "bg-emerald-50 text-emerald-600" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <FileText size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground truncate">{d.titulo}</h4>
                      <div className="flex gap-2 mt-0.5">
                        <span className="text-xs font-mono text-muted-foreground uppercase">
                          {d.tipo}
                        </span>
                        {d.modulo && (
                          <span className="text-xs text-muted-foreground">Módulo {d.modulo}</span>
                        )}
                        {d.semana && (
                          <span className="text-xs text-muted-foreground">Semana {d.semana}</span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-sm ${
                        d.entregue
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {d.entregue ? "Entregue" : "Pendente"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Progresso por Módulo */}
          <TabsContent value="progresso">
            {!progressoData || progressoData.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-border rounded-sm">
                <Target className="mx-auto mb-3 text-muted-foreground" size={36} />
                <p className="text-muted-foreground">Nenhum progresso registrado ainda.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {progressoData.map((p) => (
                  <div key={p.id} className="border border-border rounded-sm bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-foreground">Módulo {p.modulo}</h4>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-sm ${
                          p.status === "concluido"
                            ? "bg-emerald-100 text-emerald-700"
                            : p.status === "em_andamento"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {p.status === "concluido"
                          ? "Concluído"
                          : p.status === "em_andamento"
                          ? "Em andamento"
                          : "Não iniciado"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={p.percentual} className="h-2 flex-1" />
                      <span className="text-sm font-mono text-muted-foreground">
                        {p.percentual}%
                      </span>
                    </div>
                    {p.observacoes && (
                      <p className="text-xs text-muted-foreground mt-2">{p.observacoes}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Equipe */}
          <TabsContent value="equipe">
            {!membrosData || membrosData.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-border rounded-sm">
                <Users className="mx-auto mb-3 text-muted-foreground" size={36} />
                <p className="text-muted-foreground">Nenhum membro registrado ainda.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {membrosData.map((m) => (
                  <div
                    key={m.membro.id}
                    className="border border-border rounded-sm bg-card p-4 flex items-center gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#0f766e]/10 flex items-center justify-center">
                      <span className="text-sm font-serif text-[#0f766e]">
                        {(m.userName ?? "?").charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground">
                        {m.userName ?? "Sem nome"}
                      </h4>
                      <div className="flex gap-2 mt-0.5">
                        {m.membro.cargo && (
                          <span className="text-xs text-muted-foreground">{m.membro.cargo}</span>
                        )}
                        {m.membro.setor && (
                          <span className="text-xs text-muted-foreground">
                            Setor: {m.membro.setor}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-muted text-muted-foreground">
                      {ROLE_LABELS[m.membro.appRole] ?? m.membro.appRole}
                    </span>
                    <span
                      className={`text-xs ${
                        m.membro.ativo ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {m.membro.ativo ? "Ativo" : "Inativo"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Gamificação */}
          <TabsContent value="gamificacao">
            {!gamificacaoData || gamificacaoData.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-border rounded-sm">
                <Trophy className="mx-auto mb-3 text-muted-foreground" size={36} />
                <p className="text-muted-foreground">Nenhum dado de gamificação registrado ainda.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {gamificacaoData.map((g, i) => {
                  const nivelInfo = NIVEL_CONFIG[g.gamificacao.nivel] ?? {
                    label: g.gamificacao.nivel,
                    color: "text-gray-500",
                    stars: 0,
                  };
                  return (
                    <div
                      key={g.gamificacao.id}
                      className="border border-border rounded-sm bg-card p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-lg text-muted-foreground">
                            #{i + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-medium text-foreground">
                              {g.membroNome ?? "Sem nome"}
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              {ROLE_LABELS[g.membroRole ?? ""] ?? g.membroRole}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-serif text-xl text-foreground">
                            {g.gamificacao.pontosTotal} pts
                          </div>
                          <div className={`flex items-center gap-1 ${nivelInfo.color}`}>
                            {Array.from({ length: nivelInfo.stars }).map((_, s) => (
                              <Star key={s} size={12} fill="currentColor" />
                            ))}
                            <span className="text-xs ml-1">{nivelInfo.label}</span>
                          </div>
                        </div>
                      </div>

                      {/* Índice de Engajamento */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          Engajamento
                        </span>
                        <Progress value={g.gamificacao.indiceEngajamento} className="h-2 flex-1" />
                        <span className="text-sm font-mono text-muted-foreground">
                          {g.gamificacao.indiceEngajamento}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </TabsContent>

          {/* Indicadores */}
          <TabsContent value="indicadores">
            {!indicadoresData || indicadoresData.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-border rounded-sm">
                <Target className="mx-auto mb-3 text-muted-foreground" size={36} />
                <p className="text-muted-foreground">Nenhum indicador registrado ainda.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-3 font-mono text-xs text-muted-foreground uppercase">
                        Semana
                      </th>
                      <th className="text-left py-3 px-3 font-mono text-xs text-muted-foreground uppercase">
                        Reuniões no Prazo
                      </th>
                      <th className="text-left py-3 px-3 font-mono text-xs text-muted-foreground uppercase">
                        Tarefas Concluídas
                      </th>
                      <th className="text-left py-3 px-3 font-mono text-xs text-muted-foreground uppercase">
                        Qualidade Média
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {indicadoresData.map((ind) => (
                      <tr key={ind.id} className="border-b border-border/50">
                        <td className="py-3 px-3 font-mono">S{ind.semana}</td>
                        <td className="py-3 px-3">
                          {ind.reunioesNoPrazo}/{ind.reunioesTotal}
                        </td>
                        <td className="py-3 px-3">
                          {ind.tarefasConcluidas}/{ind.tarefasTotal}
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <Star
                                key={s}
                                size={12}
                                className={
                                  s < ind.qualidadeMedia
                                    ? "text-amber-400 fill-amber-400"
                                    : "text-muted-foreground/30"
                                }
                              />
                            ))}
                            <span className="ml-1 text-xs text-muted-foreground">
                              {ind.qualidadeMedia}/5
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
