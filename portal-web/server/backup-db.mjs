/**
 * Script de Backup do Banco de Dados
 * 
 * Exporta todas as tabelas do banco de dados em formato JSON.
 * Pode ser executado manualmente ou agendado.
 * 
 * Uso: node server/backup-db.mjs
 * 
 * O backup é salvo em: backups/backup-YYYY-MM-DD-HHmmss/
 * Cada tabela gera um arquivo JSON separado.
 * Um arquivo metadata.json registra informações do backup.
 */

import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Carregar variáveis de ambiente
import dotenv from 'dotenv';
dotenv.config({ path: path.join(projectRoot, '.env') });

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('[Backup] DATABASE_URL não configurada. Abortando.');
  process.exit(1);
}

// Tabelas a serem exportadas
const TABELAS = [
  'users',
  'mentorados',
  'membros',
  'reunioes',
  'documentos',
  'progresso',
  'gamificacao',
  'indicadores',
];

async function backup() {
  const agora = new Date();
  const timestamp = agora.toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const backupDir = path.join(projectRoot, 'backups', `backup-${timestamp}`);

  // Criar diretório de backup
  fs.mkdirSync(backupDir, { recursive: true });

  console.log(`[Backup] Iniciando backup em: ${backupDir}`);
  console.log(`[Backup] Data/Hora: ${agora.toISOString()}`);

  let connection;
  try {
    connection = await mysql.createConnection(DATABASE_URL);
    console.log('[Backup] Conectado ao banco de dados.');

    const metadata = {
      dataBackup: agora.toISOString(),
      timestamp: timestamp,
      tabelas: {},
      totalRegistros: 0,
      status: 'em_andamento',
    };

    for (const tabela of TABELAS) {
      try {
        const [rows] = await connection.execute(`SELECT * FROM \`${tabela}\``);
        const registros = Array.isArray(rows) ? rows : [];
        
        // Salvar dados da tabela
        const filePath = path.join(backupDir, `${tabela}.json`);
        fs.writeFileSync(filePath, JSON.stringify(registros, null, 2), 'utf-8');

        metadata.tabelas[tabela] = {
          registros: registros.length,
          arquivo: `${tabela}.json`,
          tamanhoBytes: fs.statSync(filePath).size,
        };
        metadata.totalRegistros += registros.length;

        console.log(`[Backup] ${tabela}: ${registros.length} registros exportados.`);
      } catch (err) {
        console.warn(`[Backup] Tabela "${tabela}" não encontrada ou erro: ${err.message}`);
        metadata.tabelas[tabela] = {
          registros: 0,
          arquivo: null,
          erro: err.message,
        };
      }
    }

    metadata.status = 'concluido';

    // Salvar metadata
    const metadataPath = path.join(backupDir, 'metadata.json');
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf-8');

    console.log(`\n[Backup] Concluído com sucesso!`);
    console.log(`[Backup] Total de registros: ${metadata.totalRegistros}`);
    console.log(`[Backup] Diretório: ${backupDir}`);

    // Gerar resumo em Markdown
    const resumoMd = gerarResumoMd(metadata, timestamp);
    const resumoPath = path.join(backupDir, 'RESUMO.md');
    fs.writeFileSync(resumoPath, resumoMd, 'utf-8');

    return { backupDir, metadata };
  } catch (err) {
    console.error(`[Backup] Erro fatal: ${err.message}`);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('[Backup] Conexão encerrada.');
    }
  }
}

function gerarResumoMd(metadata, timestamp) {
  let md = `# Backup do Banco de Dados\n\n`;
  md += `**Data:** ${metadata.dataBackup}\n\n`;
  md += `**Status:** ${metadata.status}\n\n`;
  md += `**Total de Registros:** ${metadata.totalRegistros}\n\n`;
  md += `## Tabelas Exportadas\n\n`;
  md += `| Tabela | Registros | Tamanho | Status |\n`;
  md += `|---|---|---|---|\n`;

  for (const [tabela, info] of Object.entries(metadata.tabelas)) {
    if (info.erro) {
      md += `| ${tabela} | 0 | - | Erro: ${info.erro} |\n`;
    } else {
      const tamanho = info.tamanhoBytes < 1024
        ? `${info.tamanhoBytes} B`
        : `${(info.tamanhoBytes / 1024).toFixed(1)} KB`;
      md += `| ${tabela} | ${info.registros} | ${tamanho} | OK |\n`;
    }
  }

  md += `\n## Como Restaurar\n\n`;
  md += `Para restaurar os dados, utilize o script \`restore-db.mjs\` ou importe os arquivos JSON manualmente.\n`;

  return md;
}

// Executar
backup().catch(console.error);
