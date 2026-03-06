# Módulo 4 — Estrutura do Kanban

**Versão:** 1.0
**Data:** 06/03/2026

Este módulo detalha a concepção de um sistema de gestão de tarefas baseado no método Kanban. O objetivo é fornecer uma ferramenta visual e poderosa para controlar o fluxo de trabalho, garantir que os prazos sejam cumpridos e dar visibilidade sobre quem está fazendo o quê e quando. A estrutura foi pensada para ser flexível e adaptável a ambos os perfis de cliente (empresas e escritórios).

---

## 4.1. Colunas do Kanban (Estágios do Fluxo)

O fluxo de trabalho é dividido em seis estágios, cada um representado por uma coluna no quadro Kanban. A movimentação dos cartões (tarefas) entre as colunas deve seguir regras claras para manter a integridade do processo.

| Coluna | Descrição | Regras de Movimentação |
|---|---|---|
| **Backlog da Competência** | Repositório de todas as tarefas previstas para a competência (mês/ano) selecionada. | As tarefas são geradas automaticamente com base no Catálogo de Obrigações (Módulo 2) e no perfil do cliente. Ficam aqui até que suas dependências sejam resolvidas. |
| **A Fazer** | Tarefas prontas para serem iniciadas. | Um cartão só pode ser movido para esta coluna quando todas as suas tarefas predecessoras (dependências) estiverem na coluna "Concluído". |
| **Em Execução** | Tarefas que estão sendo ativamente trabalhadas pelo responsável. | O responsável move o cartão para cá ao iniciar o trabalho. Recomenda-se um limite de tarefas em execução por colaborador (WIP - Work in Progress) para evitar gargalos e promover o foco. |
| **Em Revisão** | Tarefas concluídas pelo executor e que aguardam a verificação de qualidade por um segundo profissional (revisor). | O executor move o cartão para cá após completar todas as etapas do POP e a autoconferência. |
| **Concluído** | Tarefas finalizadas, revisadas e aprovadas. | O revisor move o cartão para cá após validar a tarefa conforme o Framework de Avaliação (Módulo 6). A data de conclusão é registrada para fins de indicadores. |
| **Bloqueado** | Tarefas que não podem prosseguir por um impedimento externo ou interno. | Qualquer cartão (de "A Fazer" ou "Em Execução") pode ser movido para cá. O motivo do bloqueio deve ser claramente documentado no cartão, e um plano de ação para o desbloqueio deve ser definido. |

## 4.2. Filtros Dinâmicos do Kanban

A capacidade de filtrar o quadro Kanban é essencial para a gestão. Os seguintes filtros devem estar disponíveis para permitir visões específicas e análises gerenciais:

-   **Competência (Mês/Ano):** O filtro principal, que define todo o universo de tarefas a serem exibidas.
-   **Cliente:** (Fundamental para escritórios) Permite visualizar o quadro de um único cliente por vez.
-   **Responsável:** Filtra todas as tarefas atribuídas a um colaborador específico.
-   **Área:** Exibe apenas tarefas da área Fiscal ou Contábil.
-   **Regime Tributário:** Filtra tarefas aplicáveis apenas ao Simples Nacional, Lucro Presumido ou Lucro Real.
-   **Periodicidade:** Permite focar em tarefas Mensais, Trimestrais ou Anuais.
-   **Status de Prazo:** Realça tarefas com base na proximidade do prazo (ex: Atrasado, Vence Hoje, Vence nesta Semana).
-   **UF / Município:** Útil para escritórios com clientes em várias localidades com obrigações específicas.
-   **Segmento Econômico:** Filtra tarefas específicas de um determinado setor (Indústria, Comércio, etc.).

## 4.3. Representação de Dependências

A correta gestão de dependências é crucial para a ordem do processo. O sistema Kanban deve suportar:

-   **Bloqueio Visual:** Cartões no "Backlog" cujas dependências não foram concluídas devem exibir um indicador visual claro (ex: um ícone de cadeado).
-   **Automação de Fluxo:** Ao mover um cartão para "Concluído", o sistema deve verificar automaticamente se ele é uma dependência de outro cartão no "Backlog". Se for a última dependência pendente, o cartão dependente deve ser movido automaticamente para "A Fazer", notificando o responsável.
-   **Visualização da Cadeia:** Ao abrir um cartão, deve ser fácil visualizar quais tarefas ele depende e quais tarefas dependem dele.
-   **Subtarefas:** Para rotinas complexas (ex: Fechamento Contábil Anual), o cartão principal pode conter um checklist de subtarefas, que devem ser todas marcadas como concluídas antes de mover o cartão para "Em Revisão".

## 4.4. Estrutura do Cartão (Card)

Cada cartão no Kanban representa uma única tarefa e deve conter um conjunto padronizado de informações (campos) para garantir que todos os detalhes necessários estejam disponíveis.

| Campo do Cartão | Descrição |
|---|---|
| **Título** | Nome claro e objetivo da obrigação/rotina. |
| **Código** | Identificador único do Catálogo (Módulo 2) para rastreabilidade. |
| **Competência** | Mês/ano de referência da tarefa. |
| **Cliente** | Nome do cliente (para escritórios). |
| **Prazo Legal** | Data-limite final para entrega ao Fisco. |
| **Prazo Interno** | Data-limite para a conclusão interna, com margem de segurança. |
| **Responsável** | Colaborador designado para a execução. |
| **Revisor** | Colaborador designado para a revisão de qualidade. |
| **Etiquetas** | Todas as tags aplicáveis (Regime, Área, Periodicidade, etc.). |
| **Dependências** | Links para os cartões predecessores. |
| **Subtarefas** | Checklist de atividades internas do cartão. |
| **Anexos** | Espaço para upload de documentos, guias, protocolos e recibos. |
| **Observações** | Campo de texto livre para anotações, justificativas de bloqueio, etc. |
| **Status de Qualidade** | Resultado da avaliação do Módulo 6 (Ex: Aprovado, Aprovado com ressalvas). |
| **Pontos de Gamificação** | Pontuação atribuída à tarefa após sua conclusão, conforme Módulo 9. |
| **Histórico** | Log automático de todas as movimentações do cartão, com data, hora e usuário. |

## 4.5. Sugestões de Ferramentas para Implementação

A escolha da ferramenta depende do orçamento, da cultura da empresa e da complexidade desejada. Abaixo, algumas sugestões com suas vantagens e considerações.

| Ferramenta | Vantagens | Considerações |
|---|---|---|
| **Notion** | Altamente customizável, permite criar bancos de dados relacionais que se comportam como Kanban, com filtros poderosos e automações. Excelente para integrar com a documentação (POPs). | Curva de aprendizado pode ser um pouco maior. Exige uma boa estruturação inicial. |
| **Trello** | Simples, intuitivo e visual. O modelo de quadro, lista e cartão é a essência do Kanban. Power-Ups podem adicionar funcionalidades como dependências e calendários. | A versão gratuita tem limitações. Gestão de dependências e filtros avançados podem exigir planos pagos. |
| **ClickUp** | Ferramenta "tudo-em-um" que oferece Kanban, Gantt, listas, calendários, dependências nativas, automações avançadas e campos customizáveis. | Pode ser complexo demais para equipes pequenas ou para quem busca apenas um Kanban simples. |
| **Asana** | Robusto para gestão de projetos, com ótima visualização de dependências (timeline), regras de automação e integração entre projetos (portfólios). | O foco é mais em projetos do que em processos contínuos, mas se adapta bem. |
| **Jira** | Padrão de mercado para desenvolvimento de software, mas possui templates para gestão de negócios. Extremamente poderoso para fluxos de trabalho complexos e automação. | Pode ser excessivamente complexo e rígido para um ambiente fiscal/contábil. |
| **Planilhas (Google Sheets / Excel)** | Custo zero, totalmente flexível e familiar para a maioria dos profissionais da área. Pode ser um bom ponto de partida. | Requer muita disciplina manual. Não possui automações nativas, alertas ou gestão de dependências visual. O risco de erro humano é maior. |
