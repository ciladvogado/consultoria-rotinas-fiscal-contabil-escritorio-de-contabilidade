# Módulo 6 — Framework de Avaliação de Prazos e Qualidade

**Versão:** 1.0
**Data:** 06/03/2026

Este módulo institui um sistema robusto para medir e gerenciar o desempenho do processo fiscal e contábil, focando em duas dimensões críticas: **pontualidade** e **qualidade**. O objetivo é ir além da simples entrega, criando um ciclo de melhoria contínua que reduza riscos, aumente a eficiência e garanta a conformidade.

---

## 6.1. Avaliação de Cumprimento de Prazos

A gestão de prazos é a espinha dorsal da área fiscal. Este sistema visa não apenas evitar atrasos, mas também promover a antecipação, criando uma cultura de proatividade.

### 6.1.1. Indicadores de Prazo (KPIs)

Os seguintes indicadores devem ser monitorados continuamente, de preferência em um dashboard visual.

| Indicador | Fórmula de Cálculo | Meta Sugerida | Propósito |
|---|---|---|---|
| **Taxa de Pontualidade** | (Nº de tarefas entregues no prazo interno / Nº total de tarefas) x 100 | >= 98% | Mede a disciplina geral da equipe em cumprir os prazos acordados. |
| **Tempo Médio de Antecipação** | Média de (Data do prazo legal - Data da conclusão) em dias úteis | >= 3 dias | Incentiva a conclusão antecipada, criando uma margem de segurança para imprevistos. |
| **Taxa de Atraso** | (Nº de tarefas entregues após o prazo legal / Nº total de tarefas) x 100 | <= 2% | Mede a falha no cumprimento dos prazos legais, que pode gerar multas. |
| **Tarefas em Risco** | Contagem de tarefas a 2 dias úteis ou menos do prazo legal e ainda não concluídas | 0 | Indicador de alerta precoce para ações imediatas de mitigação. |

### 6.1.2. Rotina de Monitoramento de Prazos

-   **Diariamente:** O gestor deve realizar uma verificação rápida do painel Kanban, focando na coluna "Em Risco" e nas tarefas que vencem nos próximos dias. Ação imediata deve ser tomada para desbloquear ou apoiar tarefas em risco.
-   **Semanalmente:** Realizar uma reunião rápida de status (15-20 minutos) com a equipe para revisar o progresso das tarefas da semana, identificar possíveis bloqueios e alinhar prioridades.
-   **Mensalmente:** Gerar e analisar um relatório consolidado com os KPIs de prazo da competência que se encerrou. Discutir os resultados com a equipe na reunião de qualidade (seção 6.2.6).
-   **Sistema de Alertas:** A ferramenta de gestão (Kanban) deve ser configurada para emitir alertas visuais ou notificações automáticas em níveis:
    -   **Verde:** Tarefa com 5 ou mais dias úteis para o prazo.
    -   **Amarelo:** Tarefa com 2 a 4 dias úteis para o prazo.
    -   **Vermelho:** Tarefa com 1 dia útil para o prazo ou já vencida.

---

## 6.2. Framework de Avaliação de Qualidade

Qualidade não é subjetiva. Este framework estabelece critérios objetivos para avaliar se uma tarefa foi bem executada, permitindo a identificação de falhas e a promoção da excelência.

### 6.2.1. Dimensões da Qualidade

Toda tarefa revisada será avaliada com base em cinco dimensões, cada uma com um peso sugerido para compor uma nota final.

| Dimensão | O que Avalia | Peso Sugerido |
|---|---|---|
| **Conformidade Processual** | A tarefa seguiu rigorosamente o POP definido, utilizando as ferramentas e os templates corretos? | 20% |
| **Exatidão dos Dados** | Os valores, cálculos, alíquotas e bases de cálculo estão corretos e livres de erros? | 30% |
| **Completude** | Todas as informações necessárias foram incluídas? Nenhum campo obrigatório foi deixado em branco? | 20% |
| **Conformidade Legal** | A entrega está em total conformidade com a legislação vigente na data da sua execução? | 20% |
| **Documentação e Rastreabilidade** | Os registros, protocolos, memórias de cálculo e evidências foram devidamente arquivados e nomeados conforme o padrão? | 10% |

### 6.2.2. Checklist de Revisão por Tipo de Tarefa (Exemplos)

O revisor deve utilizar um checklist específico para cada categoria de tarefa. Estes checklists devem ser detalhados e anexados a cada POP.

-   **Apuração de Tributos:**
    -   [ ] As bases de cálculo foram conferidas com os relatórios do sistema de origem?
    -   [ ] As alíquotas estão corretas para o regime e o período?
    -   [ ] Os créditos apurados são legítimos e estão documentados?
    -   [ ] A guia de recolhimento foi gerada com o valor e o código de receita corretos?
-   **Obrigação Acessória (Transmissão):**
    -   [ ] Os dados cadastrais da empresa estão corretos?
    -   [ ] O período de referência está correto?
    -   [ ] Os valores totais batem com as apurações e com a contabilidade?
    -   [ ] O arquivo foi validado sem erros?
    -   [ ] O recibo de transmissão foi salvo no local correto?
-   **Escrituração Contábil:**
    -   [ ] Os lançamentos possuem histórico claro e padronizado?
    -   [ ] As contas contábeis utilizadas estão corretas conforme o plano de contas?
    -   [ ] Existe documento suporte para todos os lançamentos relevantes?

### 6.2.3. Escala de Avaliação de Qualidade

Após a revisão, cada tarefa receberá uma nota de 1 a 5, que será registrada no cartão do Kanban.

| Nota | Classificação | Critério de Avaliação |
|---|---|---|
| **5** | **Excelente** | Nenhum erro encontrado. POP seguido integralmente. Documentação impecável. |
| **4** | **Bom** | Erros mínimos identificados (ex: erro de digitação em campo não crítico), sem impacto material. POP seguido com pequenos desvios justificados. |
| **3** | **Satisfatório** | Erros foram identificados na revisão, mas foram corrigidos pelo executor antes da entrega final, sem necessidade de retrabalho complexo. |
| **2** | **Insuficiente** | Erros materiais foram encontrados, exigindo que a tarefa fosse devolvida para retrabalho significativo. |
| **1** | **Crítico** | Erros graves que, se não fossem pegos na revisão, gerariam penalidades, retificações ou prejuízos financeiros/fiscais. |

### 6.2.4. Processo de Revisão (Quality Gate)

1.  **Autoconferência:** O executor é o primeiro revisor. Ele deve usar o checklist da tarefa para uma autoconferência antes de movê-la para "Em Revisão".
2.  **Revisão por Pares:** A tarefa é movida para a coluna "Em Revisão" e atribuída a um segundo profissional (o revisor), que realiza a verificação completa usando o mesmo checklist.
3.  **Feedback e Correção:** Se erros forem encontrados, o revisor documenta no cartão e o devolve para "Em Execução". O executor corrige e o processo recomeça. Se aprovado, o revisor atribui a nota de qualidade.
4.  **Aprovação do Gestor:** Para tarefas de alto risco (definidas no POP), após a revisão por pares, o cartão passa por uma aprovação final do gestor antes de ser movido para "Concluído".

### 6.2.5. Indicadores de Qualidade (KPIs)

| Indicador | Fórmula de Cálculo | Meta Sugerida | Propósito |
|---|---|---|---|
| **Taxa de Acerto na Primeira Entrega (First Pass Yield)** | (Nº de tarefas aprovadas na primeira revisão / Nº total de tarefas revisadas) x 100 | >= 90% | Mede a qualidade do trabalho do executor, antes da correção. É o principal indicador de eficiência. |
| **Taxa de Retrabalho** | (Nº de tarefas devolvidas para correção / Nº total de tarefas revisadas) x 100 | <= 10% | Mede o esforço gasto corrigindo erros. |
| **Índice de Qualidade Médio (IQM)** | Média das notas de qualidade (escala 1-5) de todas as tarefas no período | >= 4.0 | Fornece uma visão geral do nível de qualidade do departamento ou da equipe. |
| **Taxa de Retificação** | (Nº de obrigações retificadas / Nº total de obrigações transmitidas) x 100 | <= 2% | Mede a qualidade do processo como um todo, incluindo a revisão. |
| **Incidentes de Penalidade** | Contagem de multas ou penalidades recebidas por atraso ou erro. | 0 | Indicador de falha crítica no processo. |

### 6.2.6. Relatórios e Ciclo de Melhoria Contínua

-   **Relatório Mensal de Qualidade:** Um relatório consolidado com todos os KPIs de prazo e qualidade deve ser gerado, com visão geral, por área e por colaborador.
-   **Reunião Mensal de Qualidade:** Uma reunião dedicada a analisar o relatório, celebrar os bons resultados e, principalmente, discutir as causas-raiz dos erros e atrasos. O foco não é culpar, mas entender **por que** os erros acontecem.
-   **Plano de Ação:** Para cada causa-raiz identificada (ex: POP confuso, falta de treinamento, falha no sistema), um plano de ação corretivo deve ser criado e acompanhado.
-   **Plano de Desenvolvimento Individual (PDI):** Os dados de qualidade por colaborador podem ser usados pelo gestor para criar planos de treinamento e desenvolvimento direcionados.

## 6.3. Sugestões de Ferramentas para Avaliação

| Ferramenta / Método | Aplicação |
|---|---|
| **Checklist Digital (no Kanban)** | A maioria das ferramentas de Kanban permite criar templates de cartão com checklists, que podem ser usados para a revisão. |
| **Formulários (Google Forms, etc.)** | Um formulário padronizado pode ser usado pelo revisor para registrar a avaliação de cada tarefa, alimentando uma planilha central. |
| **Dashboards (Power BI, Metabase, Google Sheets)** | Essencial para consolidar os dados dos formulários ou do Kanban e visualizar os KPIs de forma gráfica e intuitiva. |
| **Reuniões de Retrospectiva** | Adotar o formato ágil de retrospectiva ("O que foi bom?", "O que pode melhorar?", "Ações") para as reuniões mensais de qualidade. |
