import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Modulos from "./pages/Modulos";
import Mentoria from "./pages/Mentoria";
import Documentos from "./pages/Documentos";
import Roadmap from "./pages/Roadmap";
import DocViewer from "./pages/DocViewer";
import Mentorados from "./pages/Mentorados";
import MentoradoPerfil from "./pages/MentoradoPerfil";
import MentoradoNovo from "./pages/MentoradoNovo";

// Mapeamento de módulos para caminhos no GitHub
const MODULO_PATHS: Record<string, { path: string; title: string }> = {
  "01": { path: "modulo-01-visao-geral/visao-geral-negocio.md", title: "Visão Geral do Negócio" },
  "02": { path: "modulo-02-catalogo-obrigacoes/catalogo-obrigacoes-rotinas.md", title: "Catálogo de Obrigações e Rotinas" },
  "03": { path: "modulo-03-pops/estrutura-pops.md", title: "POPs Conceituais" },
  "04": { path: "modulo-04-kanban/estrutura-kanban.md", title: "Estrutura do Kanban" },
  "05": { path: "modulo-05-delegacao/modelo-delegacao.md", title: "Modelo de Delegação" },
  "06": { path: "modulo-06-avaliacao/framework-avaliacao.md", title: "Framework de Avaliação" },
  "07": { path: "modulo-07-reforma-tributaria/impactos-reforma.md", title: "Reforma Tributária" },
  "08": { path: "modulo-08-escritorios/modulo-escritorios.md", title: "Escritórios de Contabilidade" },
  "09": { path: "modulo-09-gamificacao/gamificacao.md", title: "Gamificação" },
};

const MENTORIA_PATHS: Record<string, { path: string; title: string }> = {
  "01": { path: "plano-acao-mentoria/01-plano-acao-3-meses.md", title: "Plano de Ação — 3 Meses" },
  "02": { path: "plano-acao-mentoria/02-protocolo-reuniao.md", title: "Protocolo de Reunião" },
  "03": { path: "plano-acao-mentoria/03-controle-andamento.md", title: "Controle de Andamento" },
  "04": { path: "plano-acao-mentoria/04-feedback-loop-versionamento.md", title: "Feedback Loop e Versionamento" },
  "05": { path: "plano-acao-mentoria/05-script-apresentacao-15min-v2.md", title: "Script de Apresentação (15 min)" },
  "06": { path: "plano-acao-mentoria/06-mapa-materiais-por-reuniao.md", title: "Mapa de Materiais por Reunião" },
  "07": { path: "plano-acao-mentoria/07-template-pasta-cliente.md", title: "Template de Pasta por Cliente" },
  "08": { path: "plano-acao-mentoria/08-script-semana-1-terca-mapeamento-fiscal.md", title: "Script — Mapeamento Fiscal" },
};

const DOC_PATHS: Record<string, { path: string; title: string }> = {
  "plano-mestre": { path: "PLANO-MESTRE.md", title: "Plano Mestre" },
  "changelog": { path: "CHANGELOG.md", title: "Changelog" },
  "readme": { path: "README.md", title: "README" },
};

function ModuloPage({ params }: { params: { id: string } }) {
  const mod = MODULO_PATHS[params.id];
  if (!mod) return <NotFound />;
  return (
    <DocViewer
      path={mod.path}
      title={mod.title}
      sectionNum={params.id}
      backPath="/modulos"
      backLabel="Voltar aos Módulos"
    />
  );
}

function MentoriaPage({ params }: { params: { id: string } }) {
  const doc = MENTORIA_PATHS[params.id];
  if (!doc) return <NotFound />;
  return (
    <DocViewer
      path={doc.path}
      title={doc.title}
      sectionNum={params.id}
      backPath="/mentoria"
      backLabel="Voltar ao Plano de Ação"
    />
  );
}

function DocPage({ params }: { params: { slug: string } }) {
  const doc = DOC_PATHS[params.slug];
  if (!doc) return <NotFound />;
  return (
    <DocViewer
      path={doc.path}
      title={doc.title}
      backPath="/documentos"
      backLabel="Voltar aos Documentos"
    />
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/modulos" component={Modulos} />
      <Route path="/modulos/:id">{(params) => <ModuloPage params={params} />}</Route>
      <Route path="/mentoria" component={Mentoria} />
      <Route path="/mentoria/:id">{(params) => <MentoriaPage params={params} />}</Route>
      <Route path="/documentos" component={Documentos} />
      <Route path="/documentos/:slug">{(params) => <DocPage params={params} />}</Route>
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/mentorados" component={Mentorados} />
      <Route path="/mentorados/novo" component={MentoradoNovo} />
      <Route path="/mentorados/:id">{(params) => <MentoradoPerfil params={params} />}</Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
