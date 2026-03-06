/**
 * Design: Warm Folio — Editorial Corporativo Quente
 * Visualizador genérico de documentos Markdown do GitHub
 */

import Layout from "@/components/Layout";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { useGithubContent } from "@/hooks/useGithubContent";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const REPO_URL =
  "https://github.com/ciladvogado/consultoria-rotinas-fiscal-contabil-escritorio-de-contabilidade";

interface Props {
  path: string;
  title: string;
  sectionNum?: string;
  backPath: string;
  backLabel: string;
}

export default function DocViewer({
  path,
  title,
  sectionNum,
  backPath,
  backLabel,
}: Props) {
  const { content, loading, error } = useGithubContent(path);

  return (
    <Layout>
      <div className="container py-10 md:py-16">
        {/* Back link */}
        <Link
          href={backPath}
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-[#0f766e] transition-colors no-underline mb-8"
        >
          <ArrowLeft size={14} />
          {backLabel}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          {sectionNum && (
            <span className="font-serif text-7xl md:text-8xl text-foreground/5 leading-none select-none block -mb-4">
              {sectionNum}
            </span>
          )}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            {title}
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <hr className="border-border flex-1 max-w-48" />
            <a
              href={`${REPO_URL}/blob/master/${path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-[#0f766e] transition-colors no-underline"
            >
              Ver no GitHub <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-4xl"
        >
          {loading && (
            <div className="flex items-center gap-3 py-12">
              <div className="w-4 h-4 border-2 border-[#0f766e] border-t-transparent rounded-full animate-spin" />
              <span className="font-sans text-sm text-muted-foreground">
                Carregando documento...
              </span>
            </div>
          )}
          {error && (
            <div className="bg-[#e11d48]/5 border border-[#e11d48]/20 rounded-sm p-4">
              <p className="font-sans text-sm text-[#e11d48]">
                Erro ao carregar: {error}
              </p>
            </div>
          )}
          {!loading && !error && <MarkdownRenderer content={content} />}
        </motion.div>
      </div>
    </Layout>
  );
}
