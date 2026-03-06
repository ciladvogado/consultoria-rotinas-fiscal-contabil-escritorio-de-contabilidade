# Sistema de Controle de Andamento da Mentoria

**Versão:** 2.0  
**Data de Criação:** 06/03/2026

---

## Visão Geral

O controle de andamento consolida dados de todas as reuniões em dois formatos:

1. **Dashboard Visual** — visão rápida do progresso (% concluído, KPIs, status)
2. **Documento Consolidado** — detalhamento completo com transcrições e atas

Ambos são alimentados automaticamente pelas transcrições das reuniões.

---

## Dashboard Visual (Semanal)

Crie um arquivo para cada semana: `dashboard-semana-XX-cliente-NOME.md`

### Template de Dashboard

```markdown
# Dashboard de Andamento — Semana XX

**Cliente:** [Nome da empresa]  
**Período:** [Data início - Data fim]  
**Semana:** [Número]  
**Fase:** [Sequencial / Paralela]  
**Data de Atualização:** [DD/MM/YYYY]

---

## Resumo Executivo

**Progresso Geral:** [XX%]  
**Status:** [Verde / Amarelo / Vermelho]  
**Próximos Marcos:** [Próximos 3 marcos]

---

## Indicadores de Desempenho (KPIs)

| KPI | Meta | Realizado | % | Status |
|---|---|---|---|---|
| Reuniões Realizadas | 5 | 5 | 100% | ✅ |
| Objetivos Atingidos | 5 | 4 | 80% | ⚠️ |
| Ações Concluídas | 10 | 8 | 80% | ⚠️ |
| POPs Detalhados | 2 | 2 | 100% | ✅ |
| Dúvidas Resolvidas | 8 | 7 | 87% | ✅ |
| Engajamento do Cliente | 90% | 95% | 105% | ✅ |

---

## Progresso por Módulo

| Módulo | Tema | Status | % Concluído | Observações |
|---|---|---|---|---|
| 1 | Visão Geral | ✅ Concluído | 100% | Customizado com sucesso |
| 2 | Catálogo | ✅ Concluído | 100% | 18 obrigações mapeadas |
| 3 | POPs | 🔄 Em Andamento | 50% | 2 de 4 POPs detalhados |
| 4 | Kanban | ✅ Concluído | 100% | Ferramenta: Notion |
| 5 | Delegação | ✅ Concluído | 100% | Matriz RACI assinada |
| 6 | Avaliação | 🔄 Em Andamento | 60% | KPIs configurados |
| 7 | Reforma | ⏳ Pendente | 0% | Semana 11 |
| 8 | Escritórios | ⏳ Pendente | 0% | Não aplicável |
| 9 | Gamificação | ⏳ Pendente | 0% | Semana 11 |

---

## Reuniões da Semana

### Seg - [Tema]
- **Status:** ✅ Realizada
- **Duração:** 1h
- **Setor:** [Fiscal / Contábil / Ambos]
- **Participantes:** [Nomes]
- **Objetivos Atingidos:** 3/3
- **Ações Combinadas:** 2
- **Dúvidas:** 1 (resolvida)
- **Engajamento:** Excelente

### Ter - [Tema]
- **Status:** ✅ Realizada
- **Duração:** 1h
- **Setor:** [Fiscal / Contábil / Ambos]
- **Participantes:** [Nomes]
- **Objetivos Atingidos:** 2/3
- **Ações Combinadas:** 2
- **Dúvidas:** 2 (1 resolvida, 1 pendente)
- **Engajamento:** Bom

[... continuar para Qua, Qui, Sex ...]

---

## Ações Pendentes

| Ação | Responsável | Prazo | Status | Prioridade |
|---|---|---|---|---|
| Configurar Kanban em Notion | Cliente | [Data] | ✅ Concluída | Alta |
| Treinar equipe fiscal | Você | [Data] | 🔄 Em Andamento | Alta |
| Detalhar POP IRPJ | Você | [Data] | ⏳ Pendente | Alta |
| Validar matriz RACI | Cliente | [Data] | ✅ Concluída | Média |

---

## Pontos de Atenção

- ⚠️ **Ação atrasada:** [Descrição]
- ⚠️ **Dúvida não resolvida:** [Descrição]
- ⚠️ **Engajamento baixo em:** [Descrição]

---

## Feedback do Cliente

**Pontos Positivos:**
- [Feedback 1]
- [Feedback 2]

**Pontos de Melhoria:**
- [Sugestão 1]
- [Sugestão 2]

---

## Próxima Semana

- **Tema:** [Tema da próxima semana]
- **Objetivos:** [3-4 objetivos]
- **Preparação Necessária:** [O que você precisa preparar]

---

## Assinatura

**Você (Consultor):** _________________________  
**Data:** [DD/MM/YYYY]
```

---

## Documento Consolidado (Mensal)

Crie um arquivo para cada mês: `consolidado-mes-X-cliente-NOME.md`

### Template de Documento Consolidado

```markdown
# Consolidado de Andamento — Mês X

**Cliente:** [Nome da empresa]  
**Período:** [Data início - Data fim]  
**Mês:** [Número]  
**Data de Atualização:** [DD/MM/YYYY]

---

## Resumo Executivo

[Parágrafo resumindo o mês: o que foi alcançado, desafios, próximos passos]

---

## Progresso Geral

**Semanas Completadas:** [X de 4]  
**Progresso Total:** [XX%]  
**Ritmo:** [Dentro do cronograma / Adiantado / Atrasado]  
**Previsão de Conclusão:** [Data]

---

## Consolidado de Reuniões

| Semana | Tema | Reuniões | Objetivos | Ações | Status |
|---|---|---|---|---|---|
| 1 | Diagnóstico | 5 | 5/5 | 8 | ✅ |
| 2 | Módulo 1 | 5 | 4/5 | 6 | ✅ |
| 3 | Módulo 2 | 5 | 5/5 | 7 | ✅ |
| 4 | Módulo 3 | 5 | 3/5 | 5 | ⚠️ |

**Total:** 20 reuniões | 17/20 objetivos | 26 ações

---

## Consolidado de Transcrições

### Temas Mais Discutidos

1. **Kanban (12 menções)** — Dúvidas sobre filtros e dependências
2. **POPs (10 menções)** — Detalhamento e estrutura
3. **Delegação (8 menções)** — Papéis e responsabilidades
4. **Reforma Tributária (5 menções)** — Impactos futuros

### Palavras-chave Extraídas

- Automação (7 menções)
- Integração (6 menções)
- Treinamento (5 menções)
- Prazos (4 menções)

### Dúvidas Frequentes

1. **"Como configurar filtros no Kanban?"** — Respondida em 2 reuniões
2. **"Qual é o prazo para SPED Fiscal?"** — Respondida em 1 reunião
3. **"Como delegar tarefas com segurança?"** — Respondida em 3 reuniões

---

## Consolidado de Ações

### Ações Concluídas (26)

**Você (Consultor):**
- Detalhar POP IRPJ ✅
- Configurar Kanban ✅
- Treinar equipe fiscal ✅
- [...]

**Cliente:**
- Configurar acesso Notion ✅
- Validar matriz RACI ✅
- Treinar equipe contábil ✅
- [...]

### Ações Pendentes (4)

**Você (Consultor):**
- Detalhar POP COFINS (prazo: Semana 5)
- Criar guia de uso do Kanban (prazo: Semana 5)

**Cliente:**
- Implementar Kanban na prática (prazo: Semana 5)
- Treinar gerentes de departamento (prazo: Semana 5)

---

## Consolidado de Qualidade

### KPIs de Qualidade

| Dimensão | Meta | Realizado | Status |
|---|---|---|---|
| Clareza de Conceitos | 90% | 92% | ✅ |
| Aplicabilidade | 85% | 88% | ✅ |
| Engajamento | 80% | 95% | ✅ |
| Resolução de Dúvidas | 90% | 87% | ⚠️ |
| Cumprimento de Prazos | 95% | 92% | ⚠️ |

### Feedback do Cliente

**Satisfação Geral:** 4.5/5.0 ⭐

**Pontos Positivos:**
- Excelente didática e paciência
- Conteúdo muito relevante
- Flexibilidade para adaptar ao ritmo da empresa
- Uso de exemplos práticos

**Pontos de Melhoria:**
- Algumas reuniões poderiam ser mais objetivas
- Faltou mais tempo para praticar
- Documentação poderia ser mais visual

---

## Consolidado de Aprendizados

### Insights para Próximo Cliente

1. **Kanban:** Clientes têm dificuldade com filtros complexos. Simplificar na próxima.
2. **POPs:** Estrutura de 10 tópicos é adequada, mas pode ser reduzida para 8.
3. **Delegação:** Matriz RACI é essencial — sempre fazer no início.
4. **Engajamento:** Reuniões diárias mantêm motivação alta. Manter frequência.

### Melhorias no Plano de Ação

- Adicionar 1h de prática por semana (não apenas teoria)
- Criar templates de POPs mais visuais
- Incluir case studies de outros clientes (com autorização)
- Reduzir número de tópicos em POPs de 10 para 8

### Melhorias na Metodologia

- Usar mais exemplos do segmento específico do cliente
- Criar vídeos curtos para conceitos complexos
- Implementar quiz semanal para validar aprendizado

---

## Próximas Semanas

**Semana 5 (Próxima):**
- Tema: Módulo 4 — Kanban (Comum)
- Objetivos: [3-4 objetivos]
- Preparação: [O que você precisa preparar]

**Semana 6:**
- Tema: Módulo 5 — Delegação (Comum)
- Objetivos: [3-4 objetivos]

**Semana 7:**
- Tema: Fase Paralela — Início de temas específicos
- Objetivos: [3-4 objetivos]

---

## Assinatura

**Você (Consultor):** _________________________  
**Data:** [DD/MM/YYYY]
```

---

## Estrutura de Consolidação

### Por Semana
- `dashboard-semana-01-cliente-NOME.md`
- `dashboard-semana-02-cliente-NOME.md`
- ... até semana 12

### Por Mês
- `consolidado-mes-1-cliente-NOME.md` (semanas 1-4)
- `consolidado-mes-2-cliente-NOME.md` (semanas 5-8)
- `consolidado-mes-3-cliente-NOME.md` (semanas 9-12)

### Final
- `consolidado-final-cliente-NOME.md` (síntese dos 3 meses)

---

## Como Preencher o Dashboard

### Passo 1: Coletar Dados da Semana
- Abra todas as atas da semana
- Extraia: objetivos atingidos, ações, dúvidas, engajamento
- Calcule percentuais

### Passo 2: Atualizar KPIs
- Reuniões realizadas: conte as reuniões
- Objetivos atingidos: some dos checklists das atas
- Ações concluídas: verifique status em cada ata
- POPs detalhados: conte quantos foram finalizados
- Dúvidas resolvidas: extraia da transcrição
- Engajamento: avalie baseado em participação e feedback

### Passo 3: Atualizar Progresso por Módulo
- Verifique qual módulo foi trabalhado
- Calcule % baseado em objetivos atingidos
- Atualize status (Concluído / Em Andamento / Pendente)

### Passo 4: Registrar Reuniões
- Para cada reunião, preencha: tema, duração, setor, participantes, objetivos, ações, dúvidas, engajamento

### Passo 5: Listar Ações Pendentes
- Extraia de todas as atas da semana
- Indique responsável e prazo
- Atualize status conforme progride

### Passo 6: Registrar Pontos de Atenção
- Ações atrasadas
- Dúvidas não resolvidas
- Engajamento baixo

### Passo 7: Consolidar Feedback
- Extraia da transcrição e atas
- Resuma pontos positivos e de melhoria

---

## Dicas Práticas

1. **Automatização:** Use scripts Python para extrair dados das transcrições e preencher dashboards automaticamente (futuro).
2. **Consistência:** Preencha o dashboard no final de cada semana, enquanto as informações estão frescas.
3. **Visualização:** Use cores (verde/amarelo/vermelho) para status — facilita visualização rápida.
4. **Comparação:** Compare semanas anteriores para identificar tendências.
5. **Compartilhamento:** Compartilhe dashboard com cliente (sem dados sensíveis) para transparência.

---

## Próxima Etapa

Após preencher o dashboard semanal, alimente o **Feedback Loop** (documento 04) para melhorias contínuas.
