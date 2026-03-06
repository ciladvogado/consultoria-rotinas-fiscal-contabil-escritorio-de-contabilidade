# Módulo 3 — POPs Conceituais (Tópicos)

**Versão:** 1.0
**Data:** 06/03/2026

Este módulo estabelece a **estrutura-padrão** para a criação de todos os Procedimentos Operacionais Padrão (POPs). O objetivo, neste momento, não é detalhar cada procedimento, mas sim definir um esqueleto consistente que será replicado para cada obrigação e rotina mapeada no Módulo 2. A padronização da documentação é fundamental para a clareza, o treinamento e a manutenção da qualidade.

---

## 3.1. Estrutura-Padrão de um POP

Cada POP individual deverá ser um documento separado, seguindo rigorosamente a estrutura de tópicos abaixo. Esta consistência garante que todos os usuários, independentemente da tarefa, encontrem as informações no mesmo lugar, facilitando a consulta e reduzindo a probabilidade de erros.

### Título do POP: [Nome da Obrigação/Rotina - Código do Catálogo]

**Exemplo:** *POP: EFD-Contribuições - FED-002*

1.  **Objetivo do Procedimento**
    -   Descrição clara e concisa do propósito do POP. O que se espera alcançar ao final do procedimento? (Ex: "Transmitir a Escrituração Fiscal Digital das Contribuições, garantindo a correta informação dos débitos e créditos de PIS e COFINS do período.")

2.  **Escopo e Aplicabilidade**
    -   A quem este POP se aplica. Esta seção deve conter as **etiquetas** correspondentes do catálogo (Módulo 2), definindo claramente os cenários de aplicação.
    -   **Exemplo:**
        -   **Regimes:** Lucro Presumido, Lucro Real
        -   **Portes:** ME, EPP, Médio Porte, Grande Porte
        -   **Segmentos:** Todos

3.  **Papéis e Responsabilidades**
    -   **Executor (R - Responsible):** Papel responsável pela execução das etapas do procedimento (Ex: Analista Fiscal).
    -   **Aprovador (A - Accountable):** Papel que responde pelo resultado final e aprova a entrega (Ex: Gestor Fiscal/Contábil).
    -   **Consultado (C - Consulted):** Papéis que devem ser consultados para a execução (Ex: Analista Contábil para dados de receita).
    -   **Informado (I - Informed):** Papéis que são informados após a conclusão (Ex: Diretoria).

4.  **Periodicidade e Prazos**
    -   **Periodicidade:** Mensal, Trimestral, Anual etc.
    -   **Prazo Legal:** Data ou regra para a entrega final ao Fisco.
    -   **Prazo Interno:** Data-limite interna, com margem de segurança (Ex: 2 dias úteis antes do prazo legal).

5.  **Pré-requisitos e Documentação Necessária**
    -   Lista de todas as informações, documentos, acessos e tarefas que devem estar concluídos **antes** de iniciar este POP.
    -   **Exemplo:**
        -   Apuração de PIS/COFINS (APU-001) concluída e revisada.
        -   Acesso ao programa validador (PVA) da EFD-Contribuições.
        -   Certificado digital A1/A3 válido e instalado.
        -   Relatório de faturamento do período.

6.  **Etapas do Procedimento (Conceitual)**
    -   Descrição sequencial e lógica das principais macro-etapas do processo. Não deve entrar em detalhes de cliques, mas sim no fluxo de trabalho.
    -   **Exemplo (para EFD-Contribuições):**
        1.  Gerar o arquivo da EFD-Contribuições no sistema ERP.
        2.  Importar o arquivo para o Programa Validador e Assinador (PVA).
        3.  Validar o arquivo e verificar erros e advertências.
        4.  Corrigir os erros de validação na origem (ERP) e reimportar, se necessário.
        5.  Analisar e justificar as advertências.
        6.  Gerar o resumo da escrituração e conferir com a apuração (APU-001).
        7.  Assinar digitalmente com o certificado da empresa e do contador.
        8.  Transmitir a escrituração.
        9.  Salvar o recibo de transmissão em local padronizado.

7.  **Pontos de Verificação e Checklist de Qualidade**
    -   Lista de itens que devem ser obrigatoriamente verificados pelo executor e pelo revisor para garantir a qualidade.
    -   **Exemplo:**
        -   [ ] O valor total da receita no Bloco F é igual ao relatório de faturamento?
        -   [ ] Os créditos de PIS/COFINS estão devidamente documentados e são permitidos pela legislação?
        -   [ ] O recibo de transmissão foi salvo e renomeado conforme o padrão?

8.  **Registros Gerados**
    -   Lista de todos os artefatos e documentos que são gerados ao final do processo.
    -   **Exemplo:**
        -   Arquivo .txt da escrituração.
        -   Recibo de transmissão em PDF.
        -   Relatório de erros/advertências do PVA.

9.  **Tratamento de Exceções e Erros Comuns**
    -   Instruções sobre como proceder em caso de problemas comuns.
    -   **Exemplo:**
        -   **Erro:** "CNPJ do participante inválido." -> **Ação:** Verificar o cadastro do cliente/fornecedor no ERP e corrigir.
        -   **Problema:** O sistema da Receita Federal está indisponível. -> **Ação:** Documentar a indisponibilidade (print screen), comunicar o gestor e tentar novamente em horários alternativos.

10. **Referências Normativas**
    -   *Este tópico será preenchido em uma versão futura do plano.*
    -   Lista de links para a legislação, manuais e notas técnicas que fundamentam o procedimento.

---

## 3.2. Lista de POPs a Serem Elaborados

A seguir, uma lista (não exaustiva) dos principais POPs que devem ser criados seguindo a estrutura acima. Cada item corresponde a uma obrigação ou rotina do Módulo 2.

-   POP: DCTFWeb - FED-001
-   POP: EFD-Contribuições - FED-002
-   POP: EFD-Reinf - FED-003
-   POP: ECD - FED-004
-   POP: ECF - FED-005
-   POP: PGDAS-D - FED-006
-   POP: DEFIS - FED-007
-   POP: DASN-SIMEI - FED-008
-   POP: EFD-ICMS/IPI - EST-001
-   POP: GIA - EST-002
-   POP: DeSTDA - EST-003
-   POP: Declaração Eletrônica de Serviços (DES) - MUN-002
-   POP: Apuração PIS/COFINS - APU-001
-   POP: Apuração IRPJ/CSLL - APU-002
-   POP: Apuração ICMS/IPI - APU-003
-   POP: Apuração ISS - APU-004
-   POP: Conciliação Contábil - CTB-001
-   POP: Fechamento Contábil - CTB-002
-   POP: Elaboração de Demonstrações Financeiras - CTB-003

As etiquetas do Módulo 2 serão herdadas por cada POP, permitindo que o sistema de gestão (Kanban) filtre e apresente apenas os procedimentos aplicáveis a um determinado cliente ou cenário.
