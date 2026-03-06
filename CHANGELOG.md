# Changelog — Consultoria em Rotinas Fiscais e Contábeis

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [2.1] - 06/03/2026

### Adicionado
- **Portal Web Full-Stack** — Aplicação completa com React 19 + tRPC + TiDB, hospedada na Manus
- **Sistema de Mentorados** — Páginas de lista, perfil individual e cadastro de mentorados
- **Sistema de Papéis** — 5 papéis (Mentor, Mentorado, Supervisor, Revisor, Operador) com controle de acesso
- **Banco de Dados** — 8 tabelas (users, mentorados, membros, reunioes, documentos, progresso, gamificacao, indicadores)
- **Scripts de Backup/Restauração** — backup-db.mjs e restore-db.mjs para exportação/importação JSON
- **Documentação de Backup** — BACKUP.md com estratégia completa de backup e restauração
- **Script de Apresentação (Reunião 1)** — 05-script-apresentacao-15min-v2.md otimizado para leitura
- **Script de Mapeamento Fiscal (Reunião 2)** — 08-script-semana-1-terca-mapeamento-fiscal.md
- **Mapa de Materiais por Reunião** — 06-mapa-materiais-por-reuniao.md (matriz de 60 reuniões)
- **Template de Pasta por Cliente** — 07-template-pasta-cliente.md (estrutura replicável)
- **Código do portal exportado** para pasta `portal-web/` no repositório GitHub
- **11 testes vitest** passando para validação do backend

### Alterado
- Dashboard atualizado com link para Mentorados na navegação
- Repositório expandido com pasta portal-web contendo código-fonte completo

### Removido
- N/A

### Corrigido
- N/A

### Notas Importantes
- Portal web hospedado na Manus com deploy automático
- Código-fonte no GitHub serve como backup versionado e referência
- Backups do banco de dados devem ser realizados conforme frequência recomendada no BACKUP.md

---

## [2.0] - 06/03/2026

### Adicionado
- **Plano de Ação da Mentoria (3 meses)** — Estrutura completa sequencial → paralela com 12 semanas detalhadas
- **Protocolo de Reunião** — Template de ata, checklist de transcrição, fluxo de documentação
- **Sistema de Controle de Andamento** — Dashboard semanal + documento consolidado mensal
- **Processo de Feedback Loop e Versionamento** — Sistema de aprendizado contínuo com rastreamento de evolução
- **Página Web do Roadmap** — Visualizador interativo do roadmap com design editorial minimalista
- **Sistema de Issues no GitHub** — 6 issues iniciais com labels estruturadas para coleta de ideias
- **Pasta `plano-acao-mentoria/`** — Organização de documentos de mentoria

### Alterado
- Repositório alterado de privado para público
- Estrutura do repositório expandida para acomodar novo conteúdo de mentoria

### Removido
- N/A

### Corrigido
- N/A

### Notas Importantes
- Versionamento será mantido rigorosamente: v2.0 → v2.1 → v2.2 conforme feedback de cada cliente
- Cada cliente alimenta o próximo através do Feedback Loop
- Transcrições de reuniões (Google Meet) alimentam automáticamente o controle de andamento

---

## [1.1] - 06/03/2026

### Adicionado
- Módulo 9 — Gamificação (sistema de pontuação, níveis, conquistas, rankings)
- Controle de versão do plano (v1.0 → v1.1)
- MEI incluído explicitamente nos portes

### Alterado
- Base legal removida do escopo atual (será complementada em versão futura)
- ROADMAP.md criado com estrutura de priorização

### Removido
- Base legal de todos os módulos (economia de tokens)

### Corrigido
- N/A

---

## [1.0] - 06/03/2026

### Adicionado
- **Plano Mestre** — Visão geral do projeto, escopo, decisões
- **Módulo 1** — Visão Geral do Negócio (proposta de valor, perfis, jornada, precificação)
- **Módulo 2** — Catálogo de Obrigações e Rotinas (18+ obrigações com etiquetas)
- **Módulo 3** — POPs Conceituais (estrutura-padrão com 10 tópicos)
- **Módulo 4** — Estrutura do Kanban (6 colunas, 9 filtros, gestão de dependências)
- **Módulo 5** — Modelo de Delegação (6 papéis, matriz RACI, critérios)
- **Módulo 6** — Framework de Avaliação (KPIs de prazo, 5 dimensões de qualidade, Quality Gate)
- **Módulo 7** — Sinalização da Reforma Tributária (6 classificações de impacto, cronograma)
- **Módulo 8** — Módulo Específico para Escritórios (carteira, onboarding, distribuição, offboarding)
- **README.md** — Índice geral do projeto
- **Sistema de Issues** — Templates para coleta de ideias

### Alterado
- N/A

### Removido
- N/A

### Corrigido
- N/A

### Notas Importantes
- Versão 1.0 é a versão inicial com os 9 módulos de planejamento
- Base legal será adicionada em versão futura
- Sistema de versionamento implementado desde o início
