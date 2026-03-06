/**
 * Design: Warm Folio — Editorial Corporativo Quente
 * Página do Roadmap — incorpora o conteúdo existente
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Circle,
  Clock,
  Flame,
  Minus,
  XCircle,
} from "lucide-react";

const REPO_URL =
  "https://github.com/ciladvogado/consultoria-rotinas-fiscal-contabil-escritorio-de-contabilidade";

interface RoadmapItem {
  id: number;
  title: string;
  type: string;
  priority: "alta" | "média" | "baixa";
  modules: string;
  issueNumber: number;
}

const nextVersionItems: RoadmapItem[] = [
  { id: 1, title: "Detalhar os POPs individuais", type: "Expansão", priority: "alta", modules: "Módulo 3", issueNumber: 4 },
  { id: 2, title: "Complementar com base legal", type: "Expansão", priority: "alta", modules: "Todos", issueNumber: 5 },
  { id: 3, title: "Guia de implementação do Kanban", type: "Nova funcionalidade", priority: "média", modules: "Módulo 4", issueNumber: 6 },
  { id: 4, title: "Templates de dashboards", type: "Nova funcionalidade", priority: "média", modules: "Módulo 6", issueNumber: 7 },
  { id: 5, title: "Obrigações setoriais específicas", type: "Expansão", priority: "baixa", modules: "Módulo 2", issueNumber: 8 },
  { id: 6, title: "Glossário de termos", type: "Nova funcionalidade", priority: "baixa", modules: "Geral", issueNumber: 9 },
];

const MODULOS = [
  "01 — Visão Geral do Negócio",
  "02 — Catálogo de Obrigações e Rotinas",
  "03 — POPs Conceituais",
  "04 — Estrutura do Kanban",
  "05 — Modelo de Delegação",
  "06 — Framework de Avaliação",
  "07 — Reforma Tributária",
  "08 — Escritórios de Contabilidade",
  "09 — Gamificação",
];

const priorityConfig = {
  alta: { color: "bg-[#e11d48]", text: "text-white", label: "Alta" },
  média: { color: "bg-[#f59e0b]", text: "text-foreground", label: "Média" },
  baixa: { color: "bg-[#0f766e]/20", text: "text-[#0f766e]", label: "Baixa" },
};

const STATUS_LEGEND = [
  { icon: Circle, label: "Nova", color: "text-muted-foreground" },
  { icon: Clock, label: "Em análise", color: "text-[#f59e0b]" },
  { icon: CheckCircle2, label: "Aprovada", color: "text-[#0f766e]" },
  { icon: Flame, label: "Em andamento", color: "text-[#e11d48]" },
  { icon: Minus, label: "Implementada", color: "text-foreground/30" },
  { icon: XCircle, label: "Descartada", color: "text-foreground/20" },
];

export default function Roadmap() {
  return (
    <Layout>
      <div className="container py-10 md:py-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Roadmap do Projeto
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
            Planejamento e Evolução
            <br />
            do Plano de Consultoria
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl">
            Este roadmap consolida as ideias aprovadas e priorizadas para as
            próximas versões do projeto. Novas ideias são registradas como Issues
            no repositório e, após análise, são incorporadas ao plano.
          </p>
        </motion.div>

        <hr className="border-border mb-12" />

        {/* Como funciona */}
        <section className="mb-14">
          <div className="flex items-end gap-6 mb-6">
            <span className="font-serif text-7xl md:text-8xl text-foreground/5 leading-none select-none">
              01
            </span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Como funciona
              </h2>
              <hr className="border-border mt-2 w-48" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Coleta", desc: "Ideias são registradas como Issues no GitHub" },
              { step: "02", title: "Análise", desc: "Cada ideia é avaliada por impacto e viabilidade" },
              { step: "03", title: "Priorização", desc: "Ideias aprovadas entram no roadmap com prioridade" },
              { step: "04", title: "Implementação", desc: "Ideias são desenvolvidas e versionadas" },
            ].map((item) => (
              <div key={item.step} className="bg-card border border-border rounded-sm p-5">
                <span className="font-mono text-xs text-muted-foreground">{item.step}</span>
                <h3 className="font-sans text-base font-semibold text-foreground mt-1 mb-1.5">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Próxima versão */}
        <section className="mb-14">
          <div className="flex items-end gap-6 mb-6">
            <span className="font-serif text-7xl md:text-8xl text-foreground/5 leading-none select-none">
              02
            </span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Próxima Versão — v1.2
              </h2>
              <hr className="border-border mt-2 w-48" />
            </div>
          </div>

          <div className="space-y-3">
            {nextVersionItems.map((item, i) => {
              const pc = priorityConfig[item.priority];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="bg-card border border-border rounded-sm p-5 flex flex-col sm:flex-row sm:items-center gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`inline-flex px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium ${pc.color} ${pc.text}`}>
                        {pc.label}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">
                      {item.modules}
                    </p>
                  </div>
                  <a
                    href={`${REPO_URL}/issues/${item.issueNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#0f766e] hover:underline no-underline shrink-0"
                  >
                    #{item.issueNumber} <ArrowUpRight size={12} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Módulos */}
        <section className="mb-14">
          <div className="flex items-end gap-6 mb-6">
            <span className="font-serif text-7xl md:text-8xl text-foreground/5 leading-none select-none">
              03
            </span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Módulos do Projeto
              </h2>
              <hr className="border-border mt-2 w-48" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MODULOS.map((mod) => (
              <div key={mod} className="bg-card border border-border rounded-sm p-4">
                <span className="font-sans text-sm text-foreground">{mod}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Legenda */}
        <section className="mb-10">
          <h3 className="font-sans text-sm font-semibold text-foreground mb-3">
            Legenda de Status
          </h3>
          <div className="flex flex-wrap gap-4">
            {STATUS_LEGEND.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-1.5">
                  <Icon size={14} className={s.color} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-card border border-border rounded-sm p-6 text-center">
          <p className="font-sans text-sm text-muted-foreground mb-3">
            Tem uma ideia para melhorar o planejamento?
          </p>
          <a
            href={`${REPO_URL}/issues/new/choose`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0f766e] text-white font-sans text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-[#0f766e]/90 transition-colors no-underline"
          >
            Registrar Nova Ideia <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </Layout>
  );
}
