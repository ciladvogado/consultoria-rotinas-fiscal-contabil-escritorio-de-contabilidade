/**
 * Design: Warm Folio — Editorial Corporativo Quente
 * Dashboard: visão geral com cards dos 9 módulos + plano de ação + stats
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BookOpen,
  CheckSquare,
  ClipboardList,
  FileText,
  Gamepad2,
  GitBranch,
  Kanban,
  Landmark,
  LayoutGrid,
  Map,
  Scale,
  Search,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";

const MODULOS = [
  {
    num: "01",
    title: "Visão Geral do Negócio",
    desc: "Proposta de valor, perfis de clientes, jornada e modelo de atendimento",
    icon: LayoutGrid,
    color: "#0f766e",
    path: "/modulos/01",
  },
  {
    num: "02",
    title: "Catálogo de Obrigações",
    desc: "18+ obrigações/rotinas com etiquetas, prazos e penalidades",
    icon: ClipboardList,
    color: "#0f766e",
    path: "/modulos/02",
  },
  {
    num: "03",
    title: "POPs Conceituais",
    desc: "Estrutura-padrão dos Procedimentos Operacionais com 19 POPs",
    icon: FileText,
    color: "#0f766e",
    path: "/modulos/03",
  },
  {
    num: "04",
    title: "Estrutura do Kanban",
    desc: "6 colunas, 9 filtros, dependências e estrutura do cartão",
    icon: Kanban,
    color: "#0f766e",
    path: "/modulos/04",
  },
  {
    num: "05",
    title: "Modelo de Delegação",
    desc: "6 papéis, Matriz RACI, critérios e dimensionamento de equipe",
    icon: Users,
    color: "#0f766e",
    path: "/modulos/05",
  },
  {
    num: "06",
    title: "Framework de Avaliação",
    desc: "KPIs de prazo, 5 dimensões de qualidade, escala 1-5 e Quality Gate",
    icon: CheckSquare,
    color: "#0f766e",
    path: "/modulos/06",
  },
  {
    num: "07",
    title: "Reforma Tributária",
    desc: "Sinalização de impactos IBS/CBS, cronograma 2026-2033",
    icon: Scale,
    color: "#e11d48",
    path: "/modulos/07",
  },
  {
    num: "08",
    title: "Escritórios de Contabilidade",
    desc: "Carteira, onboarding, distribuição de carga e visão multi-cliente",
    icon: Landmark,
    color: "#0f766e",
    path: "/modulos/08",
  },
  {
    num: "09",
    title: "Gamificação",
    desc: "Pontuação, níveis, conquistas, rankings e Índice de Engajamento",
    icon: Gamepad2,
    color: "#0f766e",
    path: "/modulos/09",
  },
];

const MENTORIA_DOCS = [
  { title: "Plano de Ação — 3 Meses", path: "/mentoria/01", num: "01" },
  { title: "Protocolo de Reunião", path: "/mentoria/02", num: "02" },
  { title: "Controle de Andamento", path: "/mentoria/03", num: "03" },
  { title: "Feedback Loop e Versionamento", path: "/mentoria/04", num: "04" },
  { title: "Script de Apresentação (15 min)", path: "/mentoria/05", num: "05" },
  { title: "Mapa de Materiais por Reunião", path: "/mentoria/06", num: "06" },
  { title: "Template de Pasta por Cliente", path: "/mentoria/07", num: "07" },
  { title: "Script — Mapeamento Fiscal", path: "/mentoria/08", num: "08" },
];

const STATS = [
  { label: "Módulos", value: "9", sub: "documentados" },
  { label: "Reuniões", value: "60", sub: "planejadas (12 semanas)" },
  { label: "Obrigações", value: "18+", sub: "mapeadas" },
  { label: "POPs", value: "19", sub: "a detalhar" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModulos = MODULOS.filter(
    (m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMentoria = MENTORIA_DOCS.filter((d) =>
    d.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container py-10 md:py-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Portal de Planejamento
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
            Consultoria em Rotinas
            <br />
            Fiscais e Contábeis
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl">
            Planejamento completo para implantação de rotinas fiscais e contábeis
            em empresas e escritórios de contabilidade.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-sm p-5"
            >
              <p className="font-serif text-3xl md:text-4xl text-[#0f766e]">
                {s.value}
              </p>
              <p className="font-sans text-sm font-medium text-foreground mt-1">
                {s.label}
              </p>
              <p className="font-mono text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Search */}
        <div className="relative mb-10">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Buscar módulos, documentos, scripts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border rounded-sm pl-10 pr-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#0f766e]/30 focus:border-[#0f766e]/50 transition-colors"
          />
        </div>

        {/* Módulos */}
        <section className="mb-14">
          <div className="flex items-end gap-6 mb-6">
            <span className="font-serif text-7xl md:text-8xl text-foreground/5 leading-none select-none">
              01
            </span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Módulos do Planejamento
              </h2>
              <hr className="border-border mt-2 w-48" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredModulos.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.num}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <Link
                    href={mod.path}
                    className="block bg-card border border-border rounded-sm p-5 hover:border-[#0f766e]/30 hover:shadow-sm transition-all no-underline group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {mod.num}
                      </span>
                      <Icon
                        size={20}
                        className="text-muted-foreground group-hover:text-[#0f766e] transition-colors"
                      />
                    </div>
                    <h3 className="font-sans text-base font-semibold text-foreground mb-1.5 group-hover:text-[#0f766e] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {mod.desc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Plano de Ação da Mentoria */}
        <section className="mb-14">
          <div className="flex items-end gap-6 mb-6">
            <span className="font-serif text-7xl md:text-8xl text-foreground/5 leading-none select-none">
              02
            </span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Plano de Ação da Mentoria
              </h2>
              <hr className="border-border mt-2 w-48" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {filteredMentoria.map((doc, i) => (
              <motion.div
                key={doc.num}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Link
                  href={doc.path}
                  className="flex items-center gap-4 bg-card border border-border rounded-sm p-4 hover:border-[#0f766e]/30 hover:shadow-sm transition-all no-underline group"
                >
                  <span className="font-mono text-xs text-muted-foreground w-6 shrink-0">
                    {doc.num}
                  </span>
                  <span className="font-sans text-sm font-medium text-foreground group-hover:text-[#0f766e] transition-colors">
                    {doc.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Documentos Gerais */}
        <section>
          <div className="flex items-end gap-6 mb-6">
            <span className="font-serif text-7xl md:text-8xl text-foreground/5 leading-none select-none">
              03
            </span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Documentos Gerais
              </h2>
              <hr className="border-border mt-2 w-48" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { title: "Plano Mestre", path: "/documentos/plano-mestre" },
              { title: "Changelog", path: "/documentos/changelog" },
              { title: "Roadmap", path: "/roadmap" },
            ].map((doc, i) => (
              <motion.div
                key={doc.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Link
                  href={doc.path}
                  className="flex items-center gap-3 bg-card border border-border rounded-sm p-4 hover:border-[#0f766e]/30 hover:shadow-sm transition-all no-underline group"
                >
                  <GitBranch
                    size={16}
                    className="text-muted-foreground group-hover:text-[#0f766e] transition-colors shrink-0"
                  />
                  <span className="font-sans text-sm font-medium text-foreground group-hover:text-[#0f766e] transition-colors">
                    {doc.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
