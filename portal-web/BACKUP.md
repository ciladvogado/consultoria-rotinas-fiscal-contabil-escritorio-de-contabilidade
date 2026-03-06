# Estratégia de Backup do Banco de Dados

Este documento descreve a estratégia de backup e restauração do banco de dados do portal web.

## Visão Geral

O banco de dados utiliza TiDB (MySQL compatível) hospedado na plataforma Manus. Os scripts de backup exportam todas as tabelas em formato JSON, gerando arquivos versionados e rastreáveis.

## Scripts Disponíveis

### Backup (backup-db.mjs)

Exporta todas as tabelas do banco de dados para arquivos JSON organizados em uma pasta com timestamp.

```bash
node server/backup-db.mjs
```

O script gera a seguinte estrutura:

```
backups/
  backup-2026-03-06-120000/
    metadata.json        # Informações do backup (data, tabelas, contagens)
    RESUMO.md            # Resumo legível em Markdown
    users.json           # Dados da tabela users
    mentorados.json      # Dados da tabela mentorados
    membros.json         # Dados da tabela membros
    reunioes.json        # Dados da tabela reunioes
    documentos.json      # Dados da tabela documentos
    progresso.json       # Dados da tabela progresso
    gamificacao.json     # Dados da tabela gamificacao
    indicadores.json     # Dados da tabela indicadores
```

### Restauração (restore-db.mjs)

Restaura os dados de um backup para o banco de dados. Utiliza INSERT ... ON DUPLICATE KEY UPDATE para evitar duplicatas.

```bash
node server/restore-db.mjs backups/backup-2026-03-06-120000
```

## Tabelas Exportadas

| Tabela | Descrição | Dependências |
|---|---|---|
| users | Usuários autenticados | Nenhuma |
| mentorados | Empresas/escritórios em mentoria | Nenhuma |
| membros | Funcionários vinculados a mentorados | users, mentorados |
| reunioes | Reuniões da mentoria | mentorados |
| documentos | Documentos entregues | mentorados |
| progresso | Progresso por módulo | mentorados |
| gamificacao | Pontuação e conquistas | mentorados |
| indicadores | Indicadores de qualidade e prazo | mentorados |

## Frequência Recomendada

A frequência de backup depende da atividade do sistema. A recomendação é a seguinte:

| Cenário | Frequência |
|---|---|
| Mentoria ativa (reuniões diárias) | Backup diário |
| Período entre mentorias | Backup semanal |
| Antes de atualizações do sistema | Backup manual imediato |
| Antes de migração de dados | Backup manual imediato |

## Backup Automático via Manus

Para agendar backups automáticos, utilize o recurso de tarefas agendadas da Manus. O backup pode ser configurado para rodar diariamente e salvar os arquivos no repositório GitHub, garantindo versionamento automático.

## Acesso Direto ao Banco

Para acessar o banco de dados diretamente (via DBeaver, MySQL Workbench ou outro cliente), consulte as credenciais no painel de Database do projeto na Manus (Settings > Database). Lembre-se de habilitar SSL na conexão.

## Versionamento dos Backups

Cada backup é identificado por um timestamp único (YYYY-MM-DD-HHmmss). O arquivo metadata.json contém todas as informações necessárias para rastrear e validar o backup. Os backups podem ser commitados no GitHub para manter um histórico versionado.

## Versão

Versão atual: **1.0**
