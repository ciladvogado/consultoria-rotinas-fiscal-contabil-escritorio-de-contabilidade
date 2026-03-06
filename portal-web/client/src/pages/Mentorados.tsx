import Layout from "@/components/Layout";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";
import {
  Building2,
  Users,
  Calendar,
  ChevronRight,
  Plus,
  Search,
  Filter,
  Loader2,
  LogIn,
} from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  ativo: { label: "Ativo", color: "bg-emerald-100 text-emerald-700" },
  pausado: { label: "Pausado", color: "bg-amber-100 text-amber-700" },
  concluido: { label: "Concluído", color: "bg-blue-100 text-blue-700" },
  cancelado: { label: "Cancelado", color: "bg-red-100 text-red-700" },
};

const REGIME_LABELS: Record<string, string> = {
  mei: "MEI",
  simples_nacional: "Simples Nacional",
  lucro_presumido: "Lucro Presumido",
  lucro_real: "Lucro Real",
};

const TIPO_LABELS: Record<string, string> = {
  empresa: "Empresa",
  escritorio: "Escritório",
};

export default function Mentorados() {
  const { user, loading: authLoading } = useAuth();
  const { data: mentorados, isLoading } = trpc.mentorado.list.useQuery(undefined, {
    enabled: !!user,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("todos");
  const [tipoFilter, setTipoFilter] = useState<string>("todos");

  const filtered = useMemo(() => {
    if (!mentorados) return [];
    return mentorados.filter((m) => {
      const matchSearch =
        !searchTerm ||
        m.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.cnpj?.includes(searchTerm) ||
        m.municipio?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === "todos" || m.status === statusFilter;
      const matchTipo = tipoFilter === "todos" || m.tipo === tipoFilter;
      return matchSearch && matchStatus && matchTipo;
    });
  }, [mentorados, searchTerm, statusFilter, tipoFilter]);

  if (authLoading) {
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
            <p className="text-muted-foreground mb-6">
              Faça login para visualizar os mentorados e acompanhar o progresso das mentorias.
            </p>
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

  return (
    <Layout>
      <div className="container py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl lg:text-4xl text-foreground">Mentorados</h1>
            <p className="text-muted-foreground mt-1">
              {mentorados?.length ?? 0} mentorado{(mentorados?.length ?? 0) !== 1 ? "s" : ""} cadastrado{(mentorados?.length ?? 0) !== 1 ? "s" : ""}
            </p>
          </div>
          {user.role === "admin" && (
            <Link href="/mentorados/novo">
              <Button className="bg-[#0f766e] hover:bg-[#0f766e]/90 text-white">
                <Plus size={16} className="mr-2" />
                Novo Mentorado
              </Button>
            </Link>
          )}
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nome, CNPJ ou município..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-border rounded-sm bg-card focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2.5 text-sm border border-border rounded-sm bg-card focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
          >
            <option value="todos">Todos os status</option>
            <option value="ativo">Ativo</option>
            <option value="pausado">Pausado</option>
            <option value="concluido">Concluído</option>
            <option value="cancelado">Cancelado</option>
          </select>
          <select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            className="px-3 py-2.5 text-sm border border-border rounded-sm bg-card focus:outline-none focus:ring-1 focus:ring-[#0f766e]"
          >
            <option value="todos">Todos os tipos</option>
            <option value="empresa">Empresa</option>
            <option value="escritorio">Escritório</option>
          </select>
        </div>

        {/* Lista */}
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="animate-spin text-muted-foreground" size={32} />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded-sm">
            <Building2 className="mx-auto mb-3 text-muted-foreground" size={40} />
            <p className="text-muted-foreground">
              {mentorados?.length === 0
                ? "Nenhum mentorado cadastrado ainda."
                : "Nenhum mentorado encontrado com os filtros aplicados."}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered.map((m, i) => {
              const statusInfo = STATUS_LABELS[m.status] ?? {
                label: m.status,
                color: "bg-gray-100 text-gray-600",
              };
              const progressPercent = Math.round(((m.semanaAtual - 1) / 12) * 100);

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/mentorados/${m.id}`}>
                    <div className="group border border-border rounded-sm bg-card p-5 hover:border-[#0f766e]/30 hover:shadow-sm transition-all cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-serif text-lg text-foreground truncate">
                              {m.nome}
                            </h3>
                            <span
                              className={`px-2 py-0.5 text-xs font-mono rounded-sm ${statusInfo.color}`}
                            >
                              {statusInfo.label}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            {m.tipo && (
                              <span className="flex items-center gap-1">
                                <Building2 size={14} />
                                {TIPO_LABELS[m.tipo] ?? m.tipo}
                              </span>
                            )}
                            {m.regimeTributario && (
                              <span>{REGIME_LABELS[m.regimeTributario] ?? m.regimeTributario}</span>
                            )}
                            {m.municipio && m.uf && (
                              <span>
                                {m.municipio}/{m.uf}
                              </span>
                            )}
                            {m.cnpj && <span className="font-mono text-xs">{m.cnpj}</span>}
                          </div>

                          {/* Barra de progresso */}
                          <div className="mt-3 flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Calendar size={12} />
                              Semana {m.semanaAtual}/12
                            </div>
                            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#0f766e] rounded-full transition-all"
                                style={{ width: `${Math.min(progressPercent, 100)}%` }}
                              />
                            </div>
                            <span className="text-xs font-mono text-muted-foreground">
                              {progressPercent}%
                            </span>
                          </div>
                        </div>

                        <ChevronRight
                          size={20}
                          className="text-muted-foreground group-hover:text-[#0f766e] transition-colors mt-1 shrink-0"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
