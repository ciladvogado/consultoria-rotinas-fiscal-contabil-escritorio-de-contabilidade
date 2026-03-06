/**
 * Design: Warm Folio — Editorial Corporativo Quente
 * - DM Serif Display for headings, DM Sans for body, DM Mono for labels
 * - Stone-50 warm background, teal-700 accents, rose-600 for priority
 * - Horizontal navigation + contextual sidebar
 */

import { Link, useLocation } from "wouter";
import {
  BookOpen,
  FileText,
  Home,
  LayoutDashboard,
  Map,
  Menu,
  Search,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/modulos", label: "Módulos", icon: BookOpen },
  { path: "/mentoria", label: "Plano de Ação", icon: Map },
  { path: "/mentorados", label: "Mentorados", icon: Users },
  { path: "/documentos", label: "Documentos", icon: FileText },
  { path: "/roadmap", label: "Roadmap", icon: Home },
];

const REPO_URL =
  "https://github.com/ciladvogado/consultoria-rotinas-fiscal-contabil-escritorio-de-contabilidade";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <div className="w-8 h-8 rounded-sm bg-[#0f766e] flex items-center justify-center">
                <span className="text-white font-serif text-sm font-bold">C</span>
              </div>
              <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground hidden sm:block">
                Consultoria Fiscal & Contábil
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-sans no-underline transition-colors rounded-sm ${
                    isActive
                      ? "text-[#0f766e] font-medium bg-[#0f766e]/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors no-underline hidden sm:block"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background border-t border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-sans no-underline rounded-sm transition-colors ${
                    isActive
                      ? "text-[#0f766e] font-medium bg-[#0f766e]/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-sm font-mono text-muted-foreground hover:text-foreground no-underline"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            Consultoria em Rotinas Fiscais & Contábeis — Planejamento v2.0
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-[#0f766e] transition-colors no-underline"
          >
            Ver no GitHub ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
