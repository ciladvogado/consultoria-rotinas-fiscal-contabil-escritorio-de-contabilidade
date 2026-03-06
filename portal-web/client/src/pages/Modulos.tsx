/**
 * Design: Warm Folio — Editorial Corporativo Quente
 * Página de listagem dos 9 módulos com navegação
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BookOpen,
  CheckSquare,
  ClipboardList,
  FileText,
  Gamepad2,
  Kanban,
  Landmark,
  LayoutGrid,
  Scale,
  Users,
} from "lucide-react";

const MODULOS = [
  {
    num: "01",
    title: "Visão Geral do Negócio",
    desc: "Proposta de valor, perfis de clientes, jornada de atendimento e modelo de precificação. Define o posicionamento estratégico da consultoria e como ela se diferencia no mercado.",
    icon: LayoutGrid,
    tags: ["Estratégia", "Posicionamento"],
  },
  {
    num: "02",
    title: "Catálogo de Obrigações e Rotinas",
    desc: "Mapeamento completo de 18+ obrigações acessórias e rotinas contábeis nos três níveis (federal, estadual, municipal). Cada item com etiquetas de regime, porte, segmento, periodicidade e prazos.",
    icon: ClipboardList,
    tags: ["Federal", "Estadual", "Municipal"],
  },
  {
    num: "03",
    title: "POPs Conceituais",
    desc: "Estrutura-padrão dos Procedimentos Operacionais com 10 tópicos obrigatórios. Lista de 19 POPs a serem detalhados em versão futura.",
    icon: FileText,
    tags: ["Processos", "Padronização"],
  },
  {
    num: "04",
    title: "Estrutura do Kanban",
    desc: "Sistema de controle com 6 colunas, 9 filtros (incluindo competência mês/ano), gestão de dependências entre tarefas e estrutura completa do cartão.",
    icon: Kanban,
    tags: ["Controle", "Prazos", "Dependências"],
  },
  {
    num: "05",
    title: "Modelo de Delegação",
    desc: "6 papéis sugeridos para a equipe, Matriz RACI completa, critérios de delegação e modelo de dimensionamento de equipe por volume de trabalho.",
    icon: Users,
    tags: ["Equipe", "RACI", "Papéis"],
  },
  {
    num: "06",
    title: "Framework de Avaliação",
    desc: "4 KPIs de prazo, 5 dimensões de qualidade, escala 1-5, Quality Gate para aprovação e ciclo de melhoria contínua PDCA.",
    icon: CheckSquare,
    tags: ["Qualidade", "KPIs", "PDCA"],
  },
  {
    num: "07",
    title: "Reforma Tributária",
    desc: "Sinalização dos impactos da Reforma Tributária (IBS/CBS — LC 214/2025) nas rotinas atuais. Cronograma de transição 2026-2033 e recomendações.",
    icon: Scale,
    tags: ["IBS/CBS", "Transição", "2026-2033"],
    highlight: true,
  },
  {
    num: "08",
    title: "Escritórios de Contabilidade",
    desc: "Módulo específico para escritórios: gestão de carteira de clientes, onboarding, distribuição de carga de trabalho, visão multi-cliente e offboarding.",
    icon: Landmark,
    tags: ["Multi-cliente", "Onboarding", "Carteira"],
  },
  {
    num: "09",
    title: "Gamificação",
    desc: "Sistema de pontuação com multiplicadores, 5 níveis de progressão, 7 conquistas, rankings e Índice de Engajamento consolidado.",
    icon: Gamepad2,
    tags: ["Engajamento", "Pontuação", "Rankings"],
  },
];

export default function Modulos() {
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
            Documentação Completa
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Módulos do Planejamento
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl">
            9 módulos que compõem o planejamento estratégico da consultoria.
            Cada módulo é um documento independente e versionado.
          </p>
        </motion.div>

        <div className="space-y-4">
          {MODULOS.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <Link
                  href={`/modulos/${mod.num}`}
                  className="flex gap-5 bg-card border border-border rounded-sm p-6 hover:border-[#0f766e]/30 hover:shadow-sm transition-all no-underline group"
                >
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="font-serif text-3xl text-foreground/10 select-none">
                      {mod.num}
                    </span>
                    <Icon
                      size={22}
                      className={`${
                        mod.highlight
                          ? "text-[#e11d48]"
                          : "text-muted-foreground group-hover:text-[#0f766e]"
                      } transition-colors`}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`font-sans text-lg font-semibold mb-1.5 transition-colors ${
                        mod.highlight
                          ? "text-[#e11d48] group-hover:text-[#e11d48]/80"
                          : "text-foreground group-hover:text-[#0f766e]"
                      }`}
                    >
                      {mod.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                      {mod.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {mod.tags.map((tag) => (
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
