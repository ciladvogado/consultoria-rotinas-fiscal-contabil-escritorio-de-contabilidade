# Módulo 2 — Catálogo Completo de Obrigações Acessórias e Rotinas

**Versão:** 1.0
**Data:** 06/03/2026

Este módulo apresenta um catálogo abrangente das principais obrigações acessórias e rotinas fiscais/contábeis, servindo como base para o planejamento, a delegação e o controle das atividades. Cada item é detalhado com informações cruciais como periodicidade, prazos, etiquetas para filtragem e penalidades por descumprimento.

---

## 2.1. Obrigações Acessórias Federais

| Código | Nome | Descrição | Periodicidade | Prazo Legal | Etiquetas | Dependências | Sistema/Plataforma | Penalidade por Atraso | Impacto Reforma Tributária |
|---|---|---|---|---|---|---|---|---|---|
| FED-001 | **DCTFWeb** | Declaração de Débitos e Créditos Tributários Federais Previdenciários e de Outras Entidades e Fundos. Unificou a DCTF e a GFIP. | Mensal | Último dia útil do mês seguinte ao da apuração. | LP, LR, SN, MEI | EFD-Reinf, eSocial | e-CAC | 2% ao mês sobre tributos declarados (mín. R$ 200, máx. 20%) | Será alterada |
| FED-002 | **EFD-Contribuições** | Escrituração Fiscal Digital das Contribuições incidentes sobre a Receita (PIS/Pasep e Cofins). | Mensal | 15º dia útil do 2º mês subsequente ao de referência. | LP, LR | SPED | R$ 500/mês (LP) ou R$ 1.500/mês (LR) | Será extinta |
| FED-003 | **EFD-Reinf** | Escrituração Fiscal Digital de Retenções e Outras Informações Fiscais. Complementa o eSocial. | Mensal | Dia 15 do mês subsequente ao de referência. | Todos | SPED | 0,2% ao mês-calendário, sobre o montante dos tributos (mín. R$ 200) | Será alterada |
| FED-004 | **ECD** | Escrituração Contábil Digital. Substitui a escrituração em papel (Livros Diário, Razão etc.). | Anual | Último dia útil de maio do ano seguinte ao de referência. | LP, LR | SPED | 0,5% da receita bruta (LR) ou R$ 500/mês (demais) | Sem impacto |
| FED-005 | **ECF** | Escrituração Contábil Fiscal. Substitui a DIPJ. Cruza dados contábeis e fiscais. | Anual | Último dia útil de julho do ano seguinte ao de referência. | LP, LR | SPED | 0,25% do lucro líquido (mín. R$ 100, máx. R$ 10 milhões) | Será extinta |
| FED-006 | **PGDAS-D** | Programa Gerador do Documento de Arrecadação do Simples Nacional — Declaratório. | Mensal | Dia 20 do mês subsequente ao de referência. | SN | Portal do Simples Nacional | 2% ao mês sobre os tributos informados (mín. R$ 50) | Será extinta |
| FED-007 | **DEFIS** | Declaração de Informações Socioeconômicas e Fiscais. | Anual | 31 de março do ano seguinte ao de referência. | SN | Portal do Simples Nacional | R$ 50 por mês-calendário de atraso | Será extinta |
| FED-008 | **DASN-SIMEI** | Declaração Anual Simplificada para o Microempreendedor Individual. | Anual | 31 de maio do ano seguinte ao de referência. | MEI | Portal do Simples Nacional | 2% ao mês sobre os tributos (mín. R$ 50) | Será extinta |

---

## 2.2. Obrigações Acessórias Estaduais

| Código | Nome | Descrição | Periodicidade | Prazo Legal | Etiquetas | Dependências | Sistema/Plataforma | Penalidade por Atraso | Impacto Reforma Tributária |
|---|---|---|---|---|---|---|---|---|---|
| EST-001 | **EFD-ICMS/IPI** | Escrituração Fiscal Digital do ICMS e do IPI (SPED Fiscal). | Mensal | Varia por UF (geralmente entre dia 15 e 25 do mês subsequente). | LP, LR, SN (conforme UF) | Apuração ICMS/IPI | SPED | Varia por UF (multas pesadas) | Será extinta |
| EST-002 | **GIA** | Guia de Informação e Apuração do ICMS. | Mensal | Varia por UF (geralmente junto com a EFD-ICMS/IPI). | LP, LR | Apuração ICMS | Secretaria da Fazenda Estadual | Varia por UF | Será extinta |
| EST-003 | **DeSTDA** | Declaração de Substituição Tributária, Diferencial de Alíquota e Antecipação. | Mensal | Dia 28 do mês subsequente ao de referência. | SN (ME/EPP) | Apuração ICMS | Portal do Simples Nacional ou sistema estadual | Varia por UF | Será extinta |
| EST-004 | **SINTEGRA** | Sistema Integrado de Informações sobre Operações Interestaduais com Mercadorias e Serviços. | Mensal | Dia 15 do mês subsequente. | Contribuintes de ICMS (em desuso em muitas UFs) | Emissão de NF-e | Validador SINTEGRA | Varia por UF | Será extinta |

---

## 2.3. Obrigações Acessórias Municipais

| Código | Nome | Descrição | Periodicidade | Prazo Legal | Etiquetas | Dependências | Sistema/Plataforma | Penalidade por Atraso | Impacto Reforma Tributária |
|---|---|---|---|---|---|---|---|---|---|
| MUN-001 | **NFS-e** | Nota Fiscal de Serviços Eletrônica. Documenta a prestação de serviços. | Eventual (por operação) | Imediato, na prestação do serviço. | Todos | - | Portal da Prefeitura ou Nacional | Varia por município | Será alterada |
| MUN-002 | **DES** | Declaração Eletrônica de Serviços. Informa os serviços prestados, tomados e intermediados. | Mensal | Varia por município (geralmente até o dia 20 do mês subsequente). | Todos | Emissão/recebimento de NFS-e | Portal da Prefeitura | Varia por município | Será extinta |

---

## 2.4. Rotinas de Apuração de Tributos

| Código | Nome | Descrição | Periodicidade | Prazo Legal | Etiquetas | Dependências | Sistema/Plataforma | Penalidade por Atraso | Impacto Reforma Tributária |
|---|---|---|---|---|---|---|---|---|---|
| APU-001 | **Apuração PIS/COFINS** | Cálculo das contribuições para o PIS/Pasep e Cofins nos regimes cumulativo e não cumulativo. | Mensal | - | LP, LR | Faturamento, compras, despesas | ERP / Planilhas | Juros e multa sobre o valor não recolhido | Será extinta |
| APU-002 | **Apuração IRPJ/CSLL** | Cálculo do Imposto de Renda Pessoa Jurídica e da Contribuição Social sobre o Lucro Líquido. | Trimestral ou Anual | - | LP, LR | Resultado contábil/ajustes fiscais | ERP / Lalur | Juros e multa sobre o valor não recolhido | Sem impacto |
| APU-003 | **Apuração ICMS/IPI** | Cálculo do Imposto sobre Circulação de Mercadorias e Serviços e do Imposto sobre Produtos Industrializados. | Mensal | - | LP, LR, SN (conforme UF) | Entradas e saídas de mercadorias | ERP / Livros Fiscais | Juros e multa sobre o valor não recolhido | Será extinta |
| APU-004 | **Apuração ISS** | Cálculo do Imposto Sobre Serviços de Qualquer Natureza. | Mensal | - | Todos | Faturamento de serviços | ERP / Livros Fiscais | Juros e multa sobre o valor não recolhido | Será extinta |

---

## 2.5. Rotinas Contábeis

| Código | Nome | Descrição | Periodicidade | Prazo Legal | Etiquetas | Dependências | Sistema/Plataforma | Penalidade por Atraso | Impacto Reforma Tributária |
|---|---|---|---|---|---|---|---|---|---|
| CTB-001 | **Conciliação Contábil** | Confronto dos saldos das contas contábeis com controles internos/externos (bancos, clientes, fornecedores). | Mensal | - | Todos | Lançamentos contábeis | ERP / Planilhas | Erros em demonstrações financeiras | Sem impacto |
| CTB-002 | **Fechamento Contábil** | Processo de encerramento do período, com apuração de resultados, provisões e ajustes. | Mensal/Anual | - | Todos | Conciliações, apurações | ERP | Informações incorretas para a gestão e o Fisco | Sem impacto |
| CTB-003 | **Elaboração de Demonstrações** | Preparação do Balanço Patrimonial, DRE, DMPL, DFC, DVA e Notas Explicativas. | Anual (ou gerencialmente mensal) | - | Todos | Fechamento contábil | ERP | Não conformidade com normas contábeis | Sem impacto |
