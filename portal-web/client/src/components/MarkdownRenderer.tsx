/**
 * Design: Warm Folio — Editorial Corporativo Quente
 * Renderiza Markdown com tipografia editorial DM Serif + DM Sans
 */

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="prose-warm">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6 mt-10 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 mt-8 pb-2 border-b border-border">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-sans text-lg font-semibold text-foreground mb-3 mt-6">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-sans text-base font-semibold text-foreground mb-2 mt-4">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="font-sans text-[15px] leading-relaxed text-foreground/85 mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="font-sans text-[15px] leading-relaxed text-foreground/85 mb-4 pl-5 list-disc space-y-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="font-sans text-[15px] leading-relaxed text-foreground/85 mb-4 pl-5 list-decimal space-y-1">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-3 border-[#0f766e] pl-4 py-1 my-4 bg-[#0f766e]/5 rounded-r-sm">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className="block bg-foreground/5 rounded-sm p-4 font-mono text-sm overflow-x-auto my-4">
                  {children}
                </code>
              );
            }
            return (
              <code className="bg-foreground/8 px-1.5 py-0.5 rounded-sm font-mono text-sm">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-foreground/5 rounded-sm p-4 overflow-x-auto my-4 text-sm">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm font-sans border-collapse">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b-2 border-foreground/20">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="text-left py-2 px-3 font-semibold text-foreground/90 text-sm">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="py-2 px-3 border-b border-border text-foreground/80 text-sm">
              {children}
            </td>
          ),
          hr: () => <hr className="border-border my-8" />,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f766e] underline underline-offset-2 decoration-[#0f766e]/30 hover:decoration-[#0f766e] transition-colors"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
