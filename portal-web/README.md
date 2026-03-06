# Portal Web — Consultoria em Rotinas Fiscais e Contábeis

Portal web para visualização do planejamento, gestão de mentorados e acompanhamento de mentorias.

## Tecnologias

O portal utiliza a seguinte stack:

- **Frontend:** React 19 + Tailwind CSS 4 + Framer Motion
- **Backend:** Express 4 + tRPC 11
- **Banco de Dados:** TiDB (MySQL compatível) + Drizzle ORM
- **Autenticação:** Manus OAuth
- **Design:** Warm Folio (Editorial Corporativo Quente)

## Funcionalidades

O portal possui as seguintes páginas e funcionalidades:

- **Dashboard** — Visão geral com estatísticas, busca e acesso rápido aos módulos
- **Módulos** — Listagem dos 9 módulos do planejamento com conteúdo renderizado do GitHub
- **Plano de Ação** — Timeline visual das 12 semanas de mentoria com documentos
- **Mentorados** — Lista de mentorados com filtros por tipo, regime, status
- **Perfil do Mentorado** — Progresso, reuniões, documentos, gamificação, indicadores
- **Documentos** — Plano Mestre, Changelog, README do projeto
- **Roadmap** — Issues do GitHub com prioridades e status

## Sistema de Papéis

O portal implementa 5 papéis com controle de acesso:

| Papel | Descrição | Acesso |
|---|---|---|
| Mentor | Administrador total | Tudo |
| Mentorado | Cliente (empresa/escritório) | Seu próprio perfil e progresso + equipe |
| Supervisor | Funcionário — supervisiona | Visão do setor + equipes + suas próprias |
| Revisor | Funcionário — revisa tarefas | Visão do setor + suas próprias |
| Operador | Funcionário — executa | Suas próprias tarefas |

## Estrutura do Banco de Dados

As tabelas principais são:

- **users** — Usuários autenticados via OAuth
- **mentorados** — Empresas/escritórios em mentoria
- **membros** — Funcionários vinculados a mentorados com papéis
- **reunioes** — Reuniões da mentoria (60 por ciclo de 12 semanas)
- **documentos** — Documentos entregues durante a mentoria
- **progresso** — Registro de progresso por módulo
- **gamificacao** — Pontuação e conquistas
- **indicadores** — Indicadores de qualidade e prazo

## Hospedagem

Este portal é hospedado na plataforma Manus com deploy automático. O código aqui serve como backup versionado e referência.

## Variáveis de Ambiente Necessárias

Para rodar localmente, configure as seguintes variáveis de ambiente:

- `DATABASE_URL` — String de conexão MySQL/TiDB
- `JWT_SECRET` — Segredo para assinatura de cookies de sessão
- `VITE_APP_ID` — ID da aplicação Manus OAuth
- `OAUTH_SERVER_URL` — URL do servidor OAuth
- `VITE_OAUTH_PORTAL_URL` — URL do portal de login

## Versão

Versão atual: **2.1**
