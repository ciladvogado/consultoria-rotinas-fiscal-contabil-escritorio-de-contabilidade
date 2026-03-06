/**
 * Script de Restauração do Banco de Dados
 * 
 * Restaura dados de um backup JSON para o banco de dados.
 * 
 * Uso: node server/restore-db.mjs <caminho-do-backup>
 * Exemplo: node server/restore-db.mjs backups/backup-2026-03-06-120000
 * 
 * ATENÇÃO: Este script INSERE dados. Se a tabela já tiver dados,
 * pode causar duplicatas. Recomenda-se limpar as tabelas antes.
 */

import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

import dotenv from 'dotenv';
dotenv.config({ path: path.join(projectRoot, '.env') });

const DATABASE_URL = process.env.DATABASE_URL;
const backupPath = process.argv[2];

if (!DATABASE_URL) {
  console.error('[Restore] DATABASE_URL não configurada. Abortando.');
  process.exit(1);
}

if (!backupPath) {
  console.error('[Restore] Uso: node server/restore-db.mjs <caminho-do-backup>');
  console.error('[Restore] Exemplo: node server/restore-db.mjs backups/backup-2026-03-06-120000');
  process.exit(1);
}

const fullBackupPath = path.resolve(projectRoot, backupPath);

if (!fs.existsSync(fullBackupPath)) {
  console.error(`[Restore] Diretório de backup não encontrado: ${fullBackupPath}`);
  process.exit(1);
}

// Ordem de restauração (respeitar foreign keys)
const ORDEM_RESTAURACAO = [
  'users',
  'mentorados',
  'membros',
  'reunioes',
  'documentos',
  'progresso',
  'gamificacao',
  'indicadores',
];

async function restore() {
  console.log(`[Restore] Restaurando de: ${fullBackupPath}`);

  // Ler metadata
  const metadataPath = path.join(fullBackupPath, 'metadata.json');
  if (fs.existsSync(metadataPath)) {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    console.log(`[Restore] Backup de: ${metadata.dataBackup}`);
    console.log(`[Restore] Total de registros no backup: ${metadata.totalRegistros}`);
  }

  let connection;
  try {
    connection = await mysql.createConnection(DATABASE_URL);
    console.log('[Restore] Conectado ao banco de dados.');

    let totalRestaurado = 0;

    for (const tabela of ORDEM_RESTAURACAO) {
      const filePath = path.join(fullBackupPath, `${tabela}.json`);
      
      if (!fs.existsSync(filePath)) {
        console.warn(`[Restore] Arquivo ${tabela}.json não encontrado. Pulando.`);
        continue;
      }

      const dados = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      if (!Array.isArray(dados) || dados.length === 0) {
        console.log(`[Restore] ${tabela}: vazio. Pulando.`);
        continue;
      }

      const colunas = Object.keys(dados[0]);
      const placeholders = colunas.map(() => '?').join(', ');
      const colunasStr = colunas.map(c => `\`${c}\``).join(', ');
      const updateStr = colunas.map(c => `\`${c}\` = VALUES(\`${c}\`)`).join(', ');

      const sql = `INSERT INTO \`${tabela}\` (${colunasStr}) VALUES (${placeholders}) ON DUPLICATE KEY UPDATE ${updateStr}`;

      let inseridos = 0;
      for (const row of dados) {
        const valores = colunas.map(c => row[c]);
        try {
          await connection.execute(sql, valores);
          inseridos++;
        } catch (err) {
          console.warn(`[Restore] Erro ao inserir em ${tabela}: ${err.message}`);
        }
      }

      totalRestaurado += inseridos;
      console.log(`[Restore] ${tabela}: ${inseridos}/${dados.length} registros restaurados.`);
    }

    console.log(`\n[Restore] Concluído! Total restaurado: ${totalRestaurado} registros.`);
  } catch (err) {
    console.error(`[Restore] Erro fatal: ${err.message}`);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('[Restore] Conexão encerrada.');
    }
  }
}

restore().catch(console.error);
