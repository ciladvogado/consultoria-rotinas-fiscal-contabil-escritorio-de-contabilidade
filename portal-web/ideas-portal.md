# Brainstorm de Design — Portal de Planejamento

## Contexto
Site completo que exibe todo o conteúdo do repositório GitHub do planejamento de consultoria em rotinas fiscais/contábeis. Inclui dashboard, documentação navegável, busca, timeline das 12 semanas, e incorpora a página do roadmap existente.

---

<response>
<text>

## Opção A: "Corporate Slate" — Corporativo Clássico

**Design Movement:** Corporate Modernism com influência de relatórios anuais de Big Four (Deloitte, PwC)

**Core Principles:**
1. Autoridade e confiança através de tipografia forte e espaçamento generoso
2. Hierarquia visual clara com sistema de cores sóbrio
3. Navegação lateral persistente (sidebar) para acesso rápido
4. Dados apresentados em cards com bordas sutis e sombras leves

**Color Philosophy:**
- Fundo: Slate-50 (#f8fafc) — profissional, limpo
- Primária: Slate-900 (#0f172a) — autoridade
- Acento: Emerald-600 (#059669) — confiança, crescimento
- Secundário: Amber-500 (#f59e0b) — alertas, destaques
- Cards: Branco puro com borda Slate-200

**Layout Paradigm:**
- Sidebar fixa à esquerda (240px) com navegação hierárquica
- Área principal com header fixo + conteúdo scrollável
- Dashboard com grid de cards 3 colunas
- Documentação com table of contents lateral direita

**Signature Elements:**
- Sidebar com ícones monocromáticos e indicadores de seção ativa
- Breadcrumbs no topo de cada página
- Cards com barra lateral colorida indicando categoria

**Interaction Philosophy:**
- Transições suaves (200ms ease)
- Hover em cards eleva sombra
- Sidebar colapsa em mobile para hamburger menu

**Animation:**
- Fade-in sutil ao carregar páginas
- Slide-in da sidebar em mobile
- Sem animações excessivas — foco em eficiência

**Typography System:**
- Headings: Inter (700, 600) — profissional e universal
- Body: Inter (400) — legibilidade máxima
- Code/Labels: JetBrains Mono — técnico

</text>
<probability>0.08</probability>
</response>

---

<response>
<text>

## Opção B: "Midnight Consul" — Dark Corporate Premium

**Design Movement:** Dark Mode Executive Dashboard, inspirado em Bloomberg Terminal e Notion Dark

**Core Principles:**
1. Elegância através de contraste alto em fundo escuro
2. Informação densa mas organizada com hierarquia de luminosidade
3. Navegação por tabs horizontais + sidebar contextual
4. Destaque por cor em fundo neutro escuro

**Color Philosophy:**
- Fundo: Zinc-950 (#09090b) — sofisticação, foco
- Superfície: Zinc-900 (#18181b) — cards e painéis
- Primária: Sky-400 (#38bdf8) — clareza, tecnologia
- Acento: Amber-400 (#fbbf24) — atenção, prioridade
- Texto: Zinc-100 (#f4f4f5) — legibilidade em dark
- Bordas: Zinc-800 (#27272a) — separação sutil

**Layout Paradigm:**
- Top navigation bar com logo + tabs principais
- Sidebar contextual que muda conforme a página
- Dashboard com cards flutuantes em grid responsivo
- Documentação full-width com sidebar de navegação

**Signature Elements:**
- Glow sutil nos cards ao hover (box-shadow com cor primária)
- Badges com fundo translúcido e borda colorida
- Indicadores de progresso com gradiente luminoso

**Interaction Philosophy:**
- Hover revela informações adicionais
- Cards expandem ao clicar
- Transições com ease-out (300ms)

**Animation:**
- Stagger animation nos cards do dashboard
- Glow pulse em itens de alta prioridade
- Smooth scroll entre seções

**Typography System:**
- Headings: Space Grotesk (700, 600) — moderno, geométrico
- Body: Space Grotesk (400) — coeso
- Code/Labels: IBM Plex Mono — técnico premium

</text>
<probability>0.06</probability>
</response>

---

<response>
<text>

## Opção C: "Warm Folio" — Editorial Corporativo Quente

**Design Movement:** Editorial Design com influência de Harvard Business Review e McKinsey Reports

**Core Principles:**
1. Sofisticação através de tipografia serifada e espaço em branco
2. Warmth e acessibilidade com paleta terrosa
3. Navegação por seções com scroll suave
4. Conteúdo como protagonista — design serve ao texto

**Color Philosophy:**
- Fundo: Stone-50 (#fafaf9) — quente, acolhedor
- Primária: Stone-800 (#292524) — elegância terrosa
- Acento: Teal-700 (#0f766e) — profissionalismo com personalidade
- Destaque: Rose-600 (#e11d48) — urgência, prioridade alta
- Cards: Stone-100 (#f5f5f4) com borda Stone-200

**Layout Paradigm:**
- Header com navegação horizontal limpa
- Páginas com layout editorial (coluna principal + sidebar informativa)
- Dashboard com cards grandes e descritivos
- Documentação com tipografia generosa e espaçamento amplo

**Signature Elements:**
- Números de seção grandes e serifados como marcadores
- Linhas horizontais finas como separadores (herança do roadmap atual)
- Cards com cantos levemente arredondados e sombra suave

**Interaction Philosophy:**
- Scroll suave entre seções
- Hover sutil em links (underline animado)
- Sidebar de navegação aparece ao scrollar para baixo

**Animation:**
- Fade-up ao entrar na viewport
- Underline animado em links
- Transição de página com crossfade

**Typography System:**
- Headings: DM Serif Display (400) — editorial, sofisticado
- Body: DM Sans (400, 500) — legível, moderno
- Code/Labels: DM Mono — consistente com família tipográfica

</text>
<probability>0.07</probability>
</response>

---

## Decisão
Selecionar UMA opção e implementar com consistência total.
