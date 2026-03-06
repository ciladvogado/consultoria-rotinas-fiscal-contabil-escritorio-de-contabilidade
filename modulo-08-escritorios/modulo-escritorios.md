# Módulo 8 — Módulo Específico para Escritórios de Contabilidade

**Versão:** 1.0
**Data:** 06/03/2026

Este módulo aborda os processos e controles adicionais que são cruciais para escritórios de contabilidade (Perfil 2). Enquanto os módulos anteriores se aplicam a ambos os perfis, aqui o foco é a **gestão de múltiplos clientes**, a padronização em escala e a eficiência da carteira como um todo. O objetivo é transformar o escritório em uma operação escalável e de alta performance.

---

## 8.1. Gestão de Carteira de Clientes

Uma gestão de carteira eficaz começa com um cadastro de clientes estruturado e centralizado. Este cadastro é a fonte da verdade para todas as operações do escritório.

### Cadastro Estruturado de Clientes

O sistema de gestão (ou uma planilha-mestra) deve conter, no mínimo, os seguintes campos para cada cliente:

-   **Dados Cadastrais:** Razão Social, CNPJ, Inscrição Estadual/Municipal, endereço completo.
-   **Dados de Contrato:** Número do contrato, data de início, escopo dos serviços contratados, valor dos honorários.
-   **Parâmetros Fiscais:** Regime Tributário (SN, LP, LR), Segmento, Porte (MEI, ME, EPP, etc.), UF e Município.
-   **Obrigações Aplicáveis:** Um checklist ou etiquetas que indiquem exatamente quais obrigações do Catálogo (Módulo 2) se aplicam àquele cliente.
-   **Responsável Interno:** O colaborador do escritório que é o ponto focal para aquele cliente.
-   **Credenciais e Acessos:** Local seguro para armazenar informações de acesso a sistemas (e-CAC, prefeitura, ERP do cliente) e validade do certificado digital.

### Visão Consolidada e Matriz Cliente x Obrigação

Com base no cadastro, o sistema deve permitir a geração de uma **visão consolidada**, como uma matriz que cruza todos os clientes com todas as obrigações, mostrando claramente quem é o responsável por cada entrega. Isso é vital para o planejamento e a distribuição de carga.

## 8.2. Onboarding de Novos Clientes

O processo de entrada de um novo cliente deve ser padronizado para garantir que nenhuma informação se perca e que a operação comece de forma suave. Um checklist de onboarding é a ferramenta ideal para isso.

### Checklist de Onboarding

1.  **Fase Comercial/Contratual:**
    -   [ ] Contrato de prestação de serviços assinado.
    -   [ ] Carta de responsabilidade técnica anterior obtida (se aplicável).

2.  **Fase de Documentação e Acessos:**
    -   [ ] Cópia do Contrato Social e alterações.
    -   [ ] Procurações eletrônicas cadastradas (e-CAC, SEFAZ, Prefeitura).
    -   [ ] Certificado digital (A1) recebido e instalado, ou (A3) em posse do escritório.
    -   [ ] Credenciais de acesso ao ERP do cliente (se aplicável).
    -   [ ] Contatos do responsável financeiro e administrativo no cliente.

3.  **Fase de Diagnóstico e Parametrização:**
    -   [ ] Levantamento de todas as obrigações aplicáveis (preenchimento do cadastro).
    -   [ ] Análise do histórico fiscal (últimas declarações, pendências, parcelamentos).
    -   [ ] Parametrização do cliente no sistema interno do escritório.
    -   [ ] Definição do responsável interno pela conta.

4.  **Fase de Início da Operação:**
    -   [ ] Reunião de kick-off com o cliente para alinhar expectativas e fluxos de comunicação.
    -   [ ] Criação dos cartões de tarefas recorrentes no Kanban para o novo cliente.
    -   [ ] Comunicação ao cliente sobre os prazos para envio de documentos.

## 8.3. Distribuição de Carga de Trabalho

Em um escritório, a distribuição de tarefas não é apenas por complexidade, mas também por volume. O gestor precisa de ferramentas para balancear a carga de trabalho entre os colaboradores.

-   **Visão por Responsável:** O Kanban, filtrado por responsável, deve mostrar quantas tarefas e de qual complexidade cada colaborador tem em um determinado período.
-   **Limite de Clientes por Colaborador:** Estabelecer diretrizes internas para o número de clientes que um colaborador pode atender, com base na complexidade da carteira (ex: 1 analista para cada 10 clientes do Simples Nacional, ou 1 analista para cada 3 clientes do Lucro Real).
-   **Balanceamento por Competência:** Identificar meses de alta concentração de tarefas (ex: maio com ECD e DIRPF, julho com ECF) e planejar a distribuição, talvez com força-tarefa ou alocação temporária de recursos.
-   **Plano de Contingência:** Ter um plano claro para a cobertura de tarefas em caso de ausência (férias, licenças) de um colaborador, garantindo que outro profissional tenha acesso e conhecimento para assumir a carteira temporariamente.

## 8.4. Controle de Prazos Consolidado (Visão Multi-Cliente)

O gestor do escritório precisa de uma visão que vá além de um único cliente. O sistema de gestão deve oferecer:

-   **Painel Mestre:** Um dashboard que mostre o status de **todas as obrigações de todos os clientes** para uma determinada competência.
-   **Visão de Calendário:** Um calendário mensal consolidado com todas as datas de entrega, permitindo visualizar os dias de pico.
-   **Alertas de Concentração:** O sistema pode ser programado para alertar o gestor se um grande número de tarefas críticas estiver vencendo no mesmo dia ou atribuído ao mesmo responsável.

## 8.5. Padronização da Prestação de Serviço

A essência do serviço de consultoria para escritórios é a padronização. Isso se materializa em:

-   **POPs Unificados:** Todos os colaboradores devem seguir **exatamente o mesmo POP** para a mesma tarefa, independentemente do cliente.
-   **Templates de Comunicação:** Criar modelos (templates) de e-mail para as comunicações mais comuns com o cliente (solicitação de documentos, envio de guias, relatório mensal).
-   **Templates de Relatórios:** Padronizar o formato dos relatórios entregues aos clientes (balancetes, relatórios de apuração, etc.) para manter a identidade visual e a qualidade da informação.
-   **Controle de Versão dos POPs:** Quando um POP for atualizado (ex: por mudança na legislação), deve haver um processo claro para versionar o documento e comunicar a toda a equipe sobre a mudança, garantindo que ninguém continue usando o procedimento antigo.

## 8.6. Offboarding de Clientes

Assim como o onboarding, a saída de um cliente deve ser um processo controlado para proteger o escritório de responsabilidades futuras.

-   **Checklist de Offboarding:**
    -   [ ] Notificação formal de rescisão do contrato.
    -   [ ] Entrega de toda a documentação pertencente ao cliente (arquivos digitais, documentos físicos).
    -   [ ] Revogação de todas as procurações eletrônicas.
    -   [ ] Assinatura da **Carta de Responsabilidade Técnica**, delimitando claramente até qual competência o escritório foi responsável.
    -   [ ] Arquivamento seguro do histórico do cliente por, no mínimo, 5 anos.
