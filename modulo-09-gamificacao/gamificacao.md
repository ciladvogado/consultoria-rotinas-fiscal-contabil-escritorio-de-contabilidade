# Módulo 9 — Gamificação

**Versão:** 1.0
**Data:** 06/03/2026

Este módulo introduz um sistema de gamificação projetado para aumentar o engajamento, a qualidade e a pontualidade na execução das rotinas fiscais e contábeis. O princípio central é usar mecânicas de jogos para tornar o trabalho mais transparente, recompensador e para fornecer uma medida clara de que o **sucesso foi alcançado**, vinculando o desempenho a um **índice de engajamento** visível a todos.

---

## 9.1. Públicos-Alvo e Objetivos

A gamificação será aplicada a todos os públicos envolvidos no processo, cada um com um objetivo específico.

| Público-Alvo | Objetivo da Gamificação |
|---|---|
| **Colaboradores da Empresa (Perfil 1)** | Engajar a equipe interna no cumprimento das novas rotinas durante e após a implantação, incentivando a adoção dos POPs e a busca pela excelência. |
| **Colaboradores do Escritório (Perfil 2)** | Fomentar a adesão à metodologia padronizada, promover uma competição saudável e recompensar a alta performance na gestão de múltiplos clientes. |
| **Clientes da Consultoria** | Incentivar a colaboração durante o projeto de implantação, reconhecendo o esforço do cliente no fornecimento de informações e na adoção das novas rotinas. |

## 9.2. Mecânicas de Gamificação

O sistema se baseia em quatro pilares: Pontos, Níveis, Conquistas e Rankings.

### 9.2.1. Sistema de Pontuação

Cada tarefa do Kanban (Módulo 4) terá uma pontuação final calculada com base na sua complexidade e na qualidade da sua execução.

**Pontos Finais = Pontos Base x Multiplicador de Prazo x Multiplicador de Qualidade**

**Tabela de Pontos Base (por complexidade):**

| Tipo de Tarefa | Pontos Base | Exemplo |
|---|---|---|
| Rotina diária | 5 | Classificação de documentos |
| Obrigação mensal simples | 20 | PGDAS-D, DAS-MEI |
| Obrigação mensal complexa | 40 | EFD-ICMS/IPI, EFD-Contribuições |
| Fechamento mensal | 50 | Fechamento contábil |
| Obrigação anual simples | 80 | DEFIS, DASN-SIMEI |
| Obrigação anual complexa | 150 | ECF, ECD |

**Tabela de Multiplicadores (Prazo e Qualidade):**

| Condição | Multiplicador |
|---|---|
| Entrega com 5+ dias de antecipação ao prazo interno | **x 1.5** |
| Entrega com 1-4 dias de antecipação ao prazo interno | **x 1.2** |
| Entrega no prazo interno | **x 1.0** |
| Entrega após o prazo interno, mas antes do prazo legal | **x 0.8** |
| Entrega após o prazo legal | **x 0.5** |
| Qualidade Nota 5 (Excelente) | **x 1.3** |
| Qualidade Nota 4 (Bom) | **x 1.1** |
| Qualidade Nota 3 (Satisfatório) | **x 1.0** |
| Qualidade Nota 2 (Insuficiente - retrabalho) | **x 0.7** |
| Qualidade Nota 1 (Crítico) | **x 0.4** |

### 9.2.2. Níveis e Progressão

Os pontos acumulados ao longo do tempo permitem que os colaboradores subam de nível, representando sua experiência e consistência.

| Nível | Nome Sugerido | Pontuação Acumulada Necessária |
|---|---|---|
| 1 | Iniciante Fiscal/Contábil | 0 - 499 |
| 2 | Praticante Fiscal/Contábil | 500 - 1.499 |
| 3 | Proficiente Fiscal/Contábil | 1.500 - 3.499 |
| 4 | Especialista Fiscal/Contábil | 3.500 - 6.999 |
| 5 | Mestre Fiscal/Contábil | 7.000+ |

### 9.2.3. Conquistas (Badges)

Conquistas são medalhas virtuais que reconhecem feitos específicos, incentivando comportamentos desejáveis.

-   **Pontualidade Perfeita:** Concluir todas as tarefas do mês dentro do prazo interno.
-   **Qualidade de Ouro:** Atingir uma nota média de qualidade >= 4.5 no mês.
-   **Zero Retrabalho:** Passar um mês inteiro sem nenhuma tarefa devolvida para correção (Nota >= 3 em tudo).
-   **Mestre da Antecipação:** Entregar mais de 50% das tarefas do mês com antecipação.
-   **Maratonista:** Manter a "Pontualidade Perfeita" por 3 meses consecutivos.
-   **Mentor:** Atuar como revisor em mais de 10 tarefas no mês, ajudando a equipe a manter a qualidade.
-   **Caçador de Erros:** Identificar uma falha crítica (que seria Nota 1) durante uma revisão.

### 9.2.4. Rankings e Visibilidade

A transparência é fundamental. Os rankings devem ser visíveis a todos para estimular uma competição saudável.

-   **Ranking Mensal Individual:** Classificação dos colaboradores pela pontuação obtida no mês.
-   **Ranking Geral Individual:** Classificação pela pontuação acumulada (níveis).
-   **Ranking por Equipe/Área:** Soma da pontuação dos membros de cada equipe (Fiscal vs. Contábil).
-   **Ranking por Cliente (para escritórios):** Média de pontos por tarefa de cada cliente, mostrando quais carteiras são mais eficientes.

## 9.3. Estrutura de Controle e Apontamento

A gamificação deve ser integrada ao fluxo de trabalho, não uma tarefa a mais.

-   **Fonte de Dados:** Os dados para o cálculo dos pontos vêm diretamente do **Kanban (Módulo 4)** e do **Framework de Avaliação (Módulo 6)**. A pontuação deve ser calculada e atribuída automaticamente quando um revisor move um cartão para a coluna "Concluído" e registra a nota de qualidade.
-   **Registro de Apontamento:** Cada tarefa concluída gera um registro no histórico do colaborador, contendo: Tarefa, Pontos Base, Multiplicadores aplicados e Pontos Finais.
-   **Dashboard de Gamificação:** Um painel visual onde cada colaborador pode ver sua pontuação, seu nível, suas conquistas, sua posição nos rankings e seu histórico. O gestor tem acesso a um dashboard consolidado da equipe.

## 9.4. Índice de Engajamento: A Transparência do Sucesso

O objetivo final da gamificação é refletir o sucesso da operação em um único indicador. O **Índice de Engajamento** é uma métrica consolidada (de 0 a 100%) que demonstra de forma transparente o nível de maturidade e performance da equipe ou do cliente.

**Fórmula do Índice de Engajamento (Exemplo):**

`Índice = (Taxa de Pontualidade * 0.4) + (IQM Normalizado * 0.4) + (Taxa de Adoção * 0.2)`

-   **Taxa de Pontualidade:** KPI do Módulo 6.
-   **IQM Normalizado:** O Índice de Qualidade Médio (escala 1-5) convertido para uma escala de 0-100. (Ex: `(IQM - 1) * 25`)
-   **Taxa de Adoção:** (Nº de tarefas executadas / Nº total de tarefas previstas) x 100. Mede se todo o trabalho planejado está sendo feito.

**Interpretação do Índice:**

| Faixa do Índice | Classificação | Interpretação e Ação |
|---|---|---|
| 90-100% | **Engajamento Pleno** | **Sucesso alcançado.** A equipe opera com excelência, autonomia e melhoria contínua. Manter e reconhecer. |
| 75-89% | **Engajamento Alto** | **Bom desempenho.** A equipe é consistente, mas há pontos específicos de melhoria. Focar em otimização fina. |
| 60-74% | **Engajamento Moderado** | **Atenção necessária.** Existem falhas recorrentes em prazo ou qualidade. Identificar causas-raiz e aplicar treinamento. |
| 40-59% | **Engajamento Baixo** | **Intervenção urgente.** Os processos não estão sendo seguidos adequadamente. Risco operacional. Revisar o básico e reforçar a gestão. |
| 0-39% | **Engajamento Crítico** | **Falha na operação.** Os processos foram abandonados. Risco alto de multas e erros graves. Replanejamento e intervenção direta do gestor. |

## 9.5. Gamificação para Clientes da Consultoria

Durante a fase de implantação, o cliente também participa de uma gamificação simplificada para incentivar sua colaboração.

-   **Mecânica:** O projeto de implantação é um "tabuleiro" com etapas. Cada etapa concluída pelo cliente (ex: entregar documentação, liberar acessos, participar de reuniões) avança no tabuleiro e gera pontos.
-   **Recompensa:** Clientes que atingem o final do tabuleiro dentro do prazo podem receber um "selo" de "Cliente Parceiro de Excelência" ou um desconto na fase de acompanhamento.
