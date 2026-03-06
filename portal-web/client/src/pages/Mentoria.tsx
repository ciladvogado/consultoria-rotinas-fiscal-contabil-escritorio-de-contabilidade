/**
 * Design: Warm Folio — Editorial Corporativo Quente
 * Página de listagem dos documentos do Plano de Ação da Mentoria
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  FolderOpen,
  LayoutList,
  MessageSquare,
  Mic,
  RefreshCw,
} from "lucide-react";

const DOCS = [
  {
    num: "01",
    title: "Plano de Ação — 3 Meses",
    desc: "Cronograma detalhado de 12 semanas com estrutura sequencial (semanas 1-6) e paralela (semanas 7-12). 60 reuniões diárias de 1 hora.",
    icon: Calendar,
    tags: ["12 semanas", "60 reuniões", "Sequencial + Paralelo"],
  },
  {
    num: "02",
    title: "Protocolo de Reunião",
    desc: "Template de ata, checklist de transcrição, fluxo de documentação pós-reunião. Padrão para todas as 60 reuniões.",
    icon: ClipboardCheck,
    tags: ["Ata", "Transcrição", "Google Meet"],
  },
  {
    num: "03",
    title: "Controle de Andamento",
    desc: "Dashboard semanal de progresso e documento consolidado mensal com KPIs, métricas e indicadores visuais.",
    icon: LayoutList,
    tags: ["Dashboard", "KPIs", "Progresso"],
  },
  {
    num: "04",
    title: "Feedback Loop e Versionamento",
    desc: "Sistema de aprendizado contínuo: cada cliente alimenta melhorias para o próximo. Rastreamento de evolução do plano.",
    icon: RefreshCw,
    tags: ["Melhoria contínua", "Versionamento", "Aprendizado"],
  },
  {
    num: "05",
    title: "Script de Apresentação (15 min)",
    desc: "Script consultivo e conversacional para a primeira reunião com o cliente. Inclui diagnóstico, exemplos práticos e próximos passos.",
    icon: Mic,
    tags: ["15 min", "Consultivo", "Primeira reunião"],
  },
  {
    num: "06",
    title: "Mapa de Materiais por Reunião",
    desc: "Matriz completa de 60 reuniões documentando exatamente qual documento, slide e material usar em cada encontro.",
    icon: FileText,
    tags: ["60 reuniões", "Materiais", "Rastreabilidade"],
  },
  {
    num: "07",
    title: "Template de Pasta por Cliente",
    desc: "Estrutura de pastas replicável para cada cliente: 12 pastas semanais com subpastas de atas, transcrições, slides e entregáveis.",
    icon: FolderOpen,
    tags: ["Organização", "Replicável", "Padronização"],
  },
  {
    num: "08",
    title: "Script — Mapeamento Fiscal",
    desc: "Script para a segunda reunião (Semana 1, Terça): mapeamento de processos fiscais, identificação de problemas e soluções.",
    icon: MessageSquare,
    tags: ["1 hora", "Fiscal", "Fluxogramas"],
  },
];

export default function Mentoria() {
  return (
    <Layout>
      <div className="container py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Execução da Consultoria
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Plano de Ação da Mentoria
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl">
            8 documentos que guiam a execução da mentoria de 3 meses. Scripts,
            protocolos, controles e templates prontos para usar.
          </p>
        </motion.div>

        {/* Timeline visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="bg-card border border-border rounded-sm p-6 mb-10"
        >
          <h3 className="font-sans text-sm font-semibold text-foreground mb-4">
            Timeline da Mentoria — 12 Semanas
          </h3>
          <div className="flex gap-1">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className={`w-full h-3 rounded-sm ${
                    i < 1
                      ? "bg-[#0f766e]"
                      : i < 6
                      ? "bg-[#0f766e]/60"
                      : "bg-[#0f766e]/30"
                  }`}
                />
                <span className="font-mono text-[9px] text-muted-foreground hidden sm:block">
                  S{i + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="font-mono text-[10px] text-[#0f766e] font-medium">
              Fase Sequencial (S1-S6)
            </span>
            <span className="font-mono text-[10px] text-[#0f766e]/60 font-medium">
              Fase Paralela (S7-S12)
            </span>
          </div>
        </motion.div>

        <div className="space-y-4">
          {DOCS.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <Link
                  href={`/mentoria/${doc.num}`}
                  className="flex gap-5 bg-card border border-border rounded-sm p-6 hover:border-[#0f766e]/30 hover:shadow-sm transition-all no-underline group"
                >
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="font-serif text-3xl text-foreground/10 select-none">
                      {doc.num}
                    </span>
                    <Icon
                      size={22}
                      className="text-muted-foreground group-hover:text-[#0f766e] transition-colors"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-sans text-lg font-semibold text-foreground mb-1.5 group-hover:text-[#0f766e] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                      {doc.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 bg-foreground/5 text-muted-foreground rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
