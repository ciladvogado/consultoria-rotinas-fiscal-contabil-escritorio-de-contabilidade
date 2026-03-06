# Template de Pasta por Cliente

**Versão:** 2.0  
**Data de Criação:** 06/03/2026  
**Objetivo:** Estrutura padrão de organização de materiais para cada cliente

---

## Visão Geral

Este documento descreve como organizar os materiais de cada cliente em uma estrutura de pastas clara e acessível. Você vai replicar essa estrutura para cada novo cliente.

---

## Estrutura de Pastas Recomendada

```
clientes/
└── [NOME-CLIENTE]/
    ├── 00-informacoes-gerais/
    │   ├── dados-cliente.md
    │   ├── contatos.md
    │   ├── cronograma-confirmado.md
    │   └── termo-comprometimento.pdf
    │
    ├── 01-semana-1/
    │   ├── atas/
    │   │   ├── ata-seg-diagnostico.md
    │   │   ├── ata-ter-processos-fiscal.md
    │   │   ├── ata-qua-processos-contabil.md
    │   │   ├── ata-qui-gaps.md
    │   │   └── ata-sex-objetivos.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-1-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── questionario-diagnostico.pdf
    │   │   ├── matriz-contexto.xlsx
    │   │   ├── fluxograma-exemplo.pdf
    │   │   └── checklist-processos.pdf
    │   ├── entregaveis/
    │   │   ├── diagnostico-consolidado.md
    │   │   ├── mapeamento-processos.md
    │   │   ├── relatorio-gaps.md
    │   │   └── documento-objetivos.md
    │   └── dashboard-semana-1.md
    │
    ├── 02-semana-2/
    │   ├── atas/
    │   │   ├── ata-seg-modelo-consultoria.md
    │   │   ├── ata-ter-estrutura-org.md
    │   │   ├── ata-qua-competencias.md
    │   │   ├── ata-qui-alinhamento.md
    │   │   └── ata-sex-consolidacao.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-2-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── modelo-organograma.xlsx
    │   │   ├── modelo-competencias.xlsx
    │   │   ├── termo-comprometimento-template.docx
    │   │   └── exemplos-implementacao.pdf
    │   ├── entregaveis/
    │   │   ├── plano-customizado-v1.0.md
    │   │   ├── organograma.xlsx
    │   │   ├── matriz-competencias.xlsx
    │   │   └── termo-comprometimento-assinado.pdf
    │   └── dashboard-semana-2.md
    │
    ├── 03-semana-3/
    │   ├── atas/
    │   │   ├── ata-seg-catalogo-completo.md
    │   │   ├── ata-ter-filtro-regime.md
    │   │   ├── ata-qua-filtro-segmento.md
    │   │   ├── ata-qui-priorizacao.md
    │   │   └── ata-sex-consolidacao.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-3-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── catalogo-completo.xlsx
    │   │   ├── exemplos-por-regime.pdf
    │   │   ├── exemplos-por-segmento.pdf
    │   │   └── matriz-impacto.xlsx
    │   ├── entregaveis/
    │   │   ├── catalogo-customizado-v1.0.xlsx
    │   │   ├── mapa-prioridades.md
    │   │   └── cronograma-implementacao.md
    │   └── dashboard-semana-3.md
    │
    ├── 04-semana-4/
    │   ├── atas/
    │   │   ├── ata-seg-estrutura-pops.md
    │   │   ├── ata-ter-customizacao.md
    │   │   ├── ata-qua-pop-1.md
    │   │   ├── ata-qui-pop-2.md
    │   │   └── ata-sex-consolidacao.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-4-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── template-pop-padrao.docx
    │   │   ├── exemplo-pop-irpj.pdf
    │   │   ├── exemplo-pop-escrituracao.pdf
    │   │   └── guia-10-topicos.md
    │   ├── entregaveis/
    │   │   ├── estrutura-pops-customizada-v1.0.md
    │   │   ├── pop-irpj-detalhado.md
    │   │   ├── pop-escrituracao-detalhado.md
    │   │   └── diretrizes-demais-pops.md
    │   └── dashboard-semana-4.md
    │
    ├── 05-semana-5/
    │   ├── atas/
    │   │   ├── ata-seg-apresentacao-kanban.md
    │   │   ├── ata-ter-escolha-ferramenta.md
    │   │   ├── ata-qua-customizacao.md
    │   │   ├── ata-qui-configuracao-filtros.md
    │   │   └── ata-sex-treinamento.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-5-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── comparativo-ferramentas.xlsx
    │   │   ├── exemplo-kanban-notion.pdf
    │   │   ├── exemplo-kanban-trello.pdf
    │   │   └── guia-uso-kanban.md
    │   ├── entregaveis/
    │   │   ├── kanban-configurado/
    │   │   │   └── [link para ferramenta]
    │   │   ├── guia-uso-kanban-customizado.md
    │   │   └── primeiras-tarefas-cadastradas.md
    │   └── dashboard-semana-5.md
    │
    ├── 06-semana-6/
    │   ├── atas/
    │   │   ├── ata-seg-papeis.md
    │   │   ├── ata-ter-mapeamento.md
    │   │   ├── ata-qua-criterios.md
    │   │   ├── ata-qui-treinamento.md
    │   │   └── ata-sex-consolidacao.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-6-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── 6-papeis-sugeridos.pdf
    │   │   ├── exemplo-matriz-raci.xlsx
    │   │   ├── criterios-delegacao.pdf
    │   │   └── guia-delegacao.md
    │   ├── entregaveis/
    │   │   ├── matriz-raci-customizada.xlsx
    │   │   ├── modelo-delegacao-v1.0.md
    │   │   └── papeis-responsabilidades.md
    │   └── dashboard-semana-6.md
    │
    ├── 07-semana-7/
    │   ├── atas/
    │   │   ├── ata-seg-kpis.md
    │   │   ├── ata-ter-dimensoes.md
    │   │   ├── ata-qua-quality-gate.md
    │   │   ├── ata-qui-irpj-csll-fiscal.md
    │   │   └── ata-sex-contas-contabeis.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-7-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── 4-kpis-prazo.pdf
    │   │   ├── 5-dimensoes-qualidade.pdf
    │   │   ├── exemplo-quality-gate.pdf
    │   │   ├── pop-irpj-csll-template.docx
    │   │   └── pop-contas-contabeis-template.docx
    │   ├── entregaveis/
    │   │   ├── kpis-configurados.md
    │   │   ├── quality-gate-ativo.md
    │   │   ├── pop-irpj-csll-v1.0.md
    │   │   └── pop-contas-contabeis-v1.0.md
    │   └── dashboard-semana-7.md
    │
    ├── 08-semana-8/
    │   ├── atas/
    │   │   ├── ata-seg-pis-cofins.md
    │   │   ├── ata-ter-sped-fiscal.md
    │   │   ├── ata-qua-consolidacao.md
    │   │   ├── ata-qui-escrituracao.md
    │   │   └── ata-sex-demonstracoes.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-8-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── pop-pis-cofins-template.docx
    │   │   ├── pop-sped-template.docx
    │   │   ├── pop-escrituracao-template.docx
    │   │   └── pop-demonstracoes-template.docx
    │   ├── entregaveis/
    │   │   ├── pop-pis-cofins-v1.0.md
    │   │   ├── pop-sped-fiscal-v1.0.md
    │   │   ├── pop-escrituracao-v1.0.md
    │   │   └── pop-demonstracoes-v1.0.md
    │   └── dashboard-semana-8.md
    │
    ├── 09-semana-9/
    │   ├── atas/
    │   │   ├── ata-seg-efd-icms.md
    │   │   ├── ata-ter-reinf.md
    │   │   ├── ata-qua-consolidacao.md
    │   │   ├── ata-qui-conciliacao.md
    │   │   └── ata-sex-fechamento.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-9-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── pop-efd-template.docx
    │   │   ├── pop-reinf-template.docx
    │   │   ├── pop-conciliacao-template.docx
    │   │   └── pop-fechamento-template.docx
    │   ├── entregaveis/
    │   │   ├── pop-efd-icms-v1.0.md
    │   │   ├── pop-reinf-v1.0.md
    │   │   ├── pop-conciliacao-v1.0.md
    │   │   ├── pop-fechamento-v1.0.md
    │   │   └── plano-melhorado-v2.0.md
    │   └── dashboard-semana-9.md
    │
    ├── 10-semana-10/
    │   ├── atas/
    │   │   ├── ata-seg-dctf.md
    │   │   ├── ata-ter-gia.md
    │   │   ├── ata-qua-revisao.md
    │   │   ├── ata-qui-balancete.md
    │   │   └── ata-sex-irpj-pj.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-10-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── pop-dctf-template.docx
    │   │   ├── pop-gia-template.docx
    │   │   ├── pop-balancete-template.docx
    │   │   └── pop-irpj-pj-template.docx
    │   ├── entregaveis/
    │   │   ├── pop-dctf-v1.0.md
    │   │   ├── pop-gia-v1.0.md
    │   │   ├── pop-balancete-v1.0.md
    │   │   ├── pop-irpj-pj-v1.0.md
    │   │   └── andamento-consolidado.md
    │   └── dashboard-semana-10.md
    │
    ├── 11-semana-11/
    │   ├── atas/
    │   │   ├── ata-seg-reforma-fiscal.md
    │   │   ├── ata-ter-reforma-contabil.md
    │   │   ├── ata-qua-gamificacao.md
    │   │   ├── ata-qui-treinamento-fiscal.md
    │   │   └── ata-sex-treinamento-contabil.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-11-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── documento-reforma-tributaria.pdf
    │   │   ├── cronograma-reforma.xlsx
    │   │   ├── gamificacao-template.xlsx
    │   │   └── guia-gamificacao.md
    │   ├── entregaveis/
    │   │   ├── documento-reforma-customizado.md
    │   │   ├── gamificacao-ativa.md
    │   │   └── equipe-treinada-confirmacao.md
    │   └── dashboard-semana-11.md
    │
    ├── 12-semana-12/
    │   ├── atas/
    │   │   ├── ata-seg-revisao-fiscal.md
    │   │   ├── ata-ter-revisao-contabil.md
    │   │   ├── ata-qua-consolidacao-final.md
    │   │   ├── ata-qui-autonomia-fiscal.md
    │   │   └── ata-sex-encerramento.md
    │   ├── transcricoes/
    │   │   ├── transcricao-seg.txt
    │   │   ├── transcricao-ter.txt
    │   │   ├── transcricao-qua.txt
    │   │   ├── transcricao-qui.txt
    │   │   └── transcricao-sex.txt
    │   ├── slides/
    │   │   └── semana-12-slides.pptx
    │   ├── materiais-suporte/
    │   │   ├── checklist-validacao.pdf
    │   │   ├── guia-autonomia.md
    │   │   └── termo-encerramento-template.docx
    │   ├── entregaveis/
    │   │   ├── pops-validados-completos.md
    │   │   ├── relatorio-final-sucesso.md
    │   │   ├── plano-autonomia.md
    │   │   └── termo-encerramento-assinado.pdf
    │   └── dashboard-semana-12.md
    │
    ├── consolidados/
    │   ├── consolidado-mes-1.md
    │   ├── consolidado-mes-2.md
    │   ├── consolidado-mes-3.md
    │   └── consolidado-final.md
    │
    ├── feedback/
    │   ├── feedback-consolidado-completo.md
    │   ├── insights-para-proximo-cliente.md
    │   └── melhorias-identificadas.md
    │
    └── arquivos-finais/
        ├── todos-os-pops-compilados.md
        ├── kanban-exportado.xlsx
        ├── matriz-raci-final.xlsx
        ├── catalogo-final.xlsx
        ├── relatorio-metricas-finais.xlsx
        └── certificado-conclusao.pdf
```

---

## Descrição das Pastas

### 00-informacoes-gerais/
Informações básicas do cliente que você consulta frequentemente:
- **dados-cliente.md** — Razão social, CNPJ, regime tributário, porte, segmento, contatos principais
- **contatos.md** — Nomes, emails, telefones de todos os participantes
- **cronograma-confirmado.md** — Datas exatas das reuniões (importante para não esquecer)
- **termo-comprometimento.pdf** — Documento assinado pelo cliente

### 01-semana-1 até 12-semana-12/
Cada semana tem uma pasta com a mesma estrutura:

**atas/** — Arquivo de ata para cada reunião (Seg, Ter, Qua, Qui, Sex)

**transcricoes/** — Arquivo de transcrição automática do Google Meet para cada reunião

**slides/** — Apresentação em PowerPoint/Google Slides com todos os slides da semana

**materiais-suporte/** — Documentos, templates, exemplos que você usa durante as reuniões

**entregaveis/** — Documentos que você entrega ao cliente (POPs, planos, matrizes, etc.)

**dashboard-semana-X.md** — Dashboard visual de progresso da semana

### consolidados/
Documentos que consolidam informações de múltiplas semanas:
- **consolidado-mes-1.md** — Semanas 1-4
- **consolidado-mes-2.md** — Semanas 5-8
- **consolidado-mes-3.md** — Semanas 9-12
- **consolidado-final.md** — Síntese dos 3 meses

### feedback/
Documentos gerados no encerramento:
- **feedback-consolidado-completo.md** — O que funcionou, o que não funcionou
- **insights-para-proximo-cliente.md** — O que você aprendeu para aplicar no próximo
- **melhorias-identificadas.md** — Mudanças no plano de ação

### arquivos-finais/
Compilações finais que o cliente leva:
- **todos-os-pops-compilados.md** — Todos os POPs em um único arquivo
- **kanban-exportado.xlsx** — Exportação do Kanban
- **matriz-raci-final.xlsx** — Matriz RACI final
- **catalogo-final.xlsx** — Catálogo final
- **relatorio-metricas-finais.xlsx** — Todas as métricas em um arquivo
- **certificado-conclusao.pdf** — Certificado de conclusão da mentoria

---

## Como Criar a Pasta para um Novo Cliente

### Passo 1: Clonar a Estrutura
```bash
# Copie a pasta template
cp -r clientes/TEMPLATE clientes/[NOME-CLIENTE]

# Ou crie manualmente seguindo a estrutura acima
```

### Passo 2: Preencher Informações Gerais
1. Abra `00-informacoes-gerais/dados-cliente.md`
2. Preencha com informações do cliente
3. Salve

### Passo 3: Confirmar Cronograma
1. Abra `00-informacoes-gerais/cronograma-confirmado.md`
2. Insira as datas exatas das reuniões
3. Salve e coloque no seu calendário

### Passo 4: Preparar Primeira Semana
1. Revise `06-mapa-materiais-por-reuniao.md` para Semana 1
2. Copie os templates necessários para `01-semana-1/materiais-suporte/`
3. Prepare os slides para `01-semana-1/slides/`

### Passo 5: Primeira Reunião
1. Abra `01-semana-1/atas/ata-seg-diagnostico.md`
2. Durante a reunião, preencha a ata
3. Após a reunião, baixe a transcrição do Google Meet e salve em `01-semana-1/transcricoes/transcricao-seg.txt`
4. Processe a transcrição (extração de dados, insights)
5. Consolide em `01-semana-1/entregaveis/`

---

## Boas Práticas

### Nomenclatura de Arquivos
- Use nomes descritivos e em português
- Use hífens para separar palavras (não espaços)
- Inclua versão quando aplicável: `pop-irpj-v1.0.md`
- Inclua data quando relevante: `ata-seg-2026-03-06.md`

### Organização de Arquivos
- Nunca coloque arquivos soltos na raiz da pasta do cliente
- Sempre coloque em uma subpasta (atas/, transcricoes/, etc.)
- Mantenha a estrutura consistente entre clientes

### Versionamento
- Use v1.0, v1.1, v2.0 nos nomes de arquivos
- Mantenha histórico de versões (não sobrescreva)
- Documente mudanças no CHANGELOG

### Backup
- Faça backup semanal da pasta do cliente
- Considere usar Google Drive ou OneDrive para sincronização automática
- Mantenha cópia no GitHub (repositório privado por cliente, se necessário)

---

## Integração com GitHub

Você pode manter as pastas de clientes em um repositório GitHub privado:

```bash
# Criar repositório privado por cliente
gh repo create consultoria-cliente-[NOME] --private

# Clonar estrutura
git clone https://github.com/ciladvogado/consultoria-cliente-[NOME].git

# Após cada semana, fazer commit
git add -A
git commit -m "Semana X: [Tema] — Atas, transcrições, entregáveis"
git push origin master
```

---

## Checklist de Preparação para Novo Cliente

- [ ] Pasta do cliente criada com estrutura completa
- [ ] Informações gerais preenchidas
- [ ] Cronograma confirmado e no calendário
- [ ] Termo de comprometimento assinado
- [ ] Slides da Semana 1 preparados
- [ ] Templates da Semana 1 copiados
- [ ] Google Meet agendado para primeira reunião
- [ ] Gravação do Google Meet ativada
- [ ] Transcrição automática ativada
- [ ] Acesso à ferramenta de Kanban confirmado

---

## Próxima Etapa

Com a estrutura de pastas pronta, você está 100% preparado para começar a primeira mentoria. Abra a pasta do cliente, siga o `06-mapa-materiais-por-reuniao.md` para cada reunião, e preencha as atas e transcrições conforme avança.
