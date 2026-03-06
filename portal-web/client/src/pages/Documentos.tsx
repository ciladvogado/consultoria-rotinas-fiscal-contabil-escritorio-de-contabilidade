/**
 * Design: Warm Folio — Editorial Corporativo Quente
 * Página de listagem dos documentos gerais (Plano Mestre, Changelog, README)
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, FileText, GitBranch } from "lucide-react";

const DOCS = [
  {
    title: "Plano Mestre",
    desc: "Documento central do projeto v2.0 — escopo, decisões, estrutura dos 9 módulos e plano de execução em 12 fases.",
    icon: BookOpen,
    path: "/documentos/plano-mestre",
  },
  {
    title: "Changelog",
    desc: "Histórico completo de versões do planejamento, desde a v1.0 até a versão atual.",
    icon: GitBranch,
    path: "/documentos/changelog",
  },
  {
    title: "README",
    desc: "Índice geral do repositório com links para todos os módulos e documentos.",
    icon: FileText,
    path: "/documentos/readme",
  },
];

export default function Documentos() {
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
            Governança do Projeto
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Documentos Gerais
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl">
            Documentos de governança, versionamento e controle do planejamento.
          </p>
        </motion.div>

        <div className="space-y-4">
          {DOCS.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <Link
                  href={doc.path}
                  className="flex gap-5 bg-card border border-border rounded-sm p-6 hover:border-[#0f766e]/30 hover:shadow-sm transition-all no-underline group"
                >
                  <Icon
                    size={24}
                    className="text-muted-foreground group-hover:text-[#0f766e] transition-colors shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-foreground mb-1.5 group-hover:text-[#0f766e] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {doc.desc}
                    </p>
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
