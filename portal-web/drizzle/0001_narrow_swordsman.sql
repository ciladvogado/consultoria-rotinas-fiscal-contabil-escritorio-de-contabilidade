CREATE TABLE `documentos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`mentoradoId` int NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`tipoDocumento` enum('pop','manual','template','relatorio','ata','checklist','outro') NOT NULL,
	`modulo` varchar(64),
	`semana` int,
	`url` text,
	`descricao` text,
	`entregue` boolean NOT NULL DEFAULT false,
	`dataEntrega` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `documentos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `gamificacao` (
	`id` int AUTO_INCREMENT NOT NULL,
	`membroId` int NOT NULL,
	`mentoradoId` int NOT NULL,
	`pontosBase` int NOT NULL DEFAULT 0,
	`multiplicadorPrazo` int NOT NULL DEFAULT 100,
	`multiplicadorQualidade` int NOT NULL DEFAULT 100,
	`pontosTotal` int NOT NULL DEFAULT 0,
	`nivel` enum('iniciante','praticante','proficiente','especialista','mestre') NOT NULL DEFAULT 'iniciante',
	`conquistas` json DEFAULT ('[]'),
	`indiceEngajamento` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gamificacao_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `indicadores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`mentoradoId` int NOT NULL,
	`semana` int NOT NULL,
	`reunioesNoPrazo` int NOT NULL DEFAULT 0,
	`reunioesTotal` int NOT NULL DEFAULT 0,
	`tarefasConcluidas` int NOT NULL DEFAULT 0,
	`tarefasTotal` int NOT NULL DEFAULT 0,
	`qualidadeMedia` int NOT NULL DEFAULT 0,
	`observacoes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `indicadores_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `membros` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`mentoradoId` int NOT NULL,
	`appRole` enum('mentor','mentorado','supervisor','revisor','operador') NOT NULL,
	`setor` varchar(128),
	`cargo` varchar(128),
	`ativo` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `membros_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mentorados` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`cnpj` varchar(18),
	`regimeTributario` enum('mei','simples_nacional','lucro_presumido','lucro_real'),
	`porte` enum('mei','micro','pequena','media','grande'),
	`segmento` varchar(128),
	`municipio` varchar(128),
	`uf` varchar(2),
	`tipo` enum('empresa','escritorio') NOT NULL DEFAULT 'empresa',
	`dataInicio` timestamp,
	`dataFim` timestamp,
	`semanaAtual` int NOT NULL DEFAULT 1,
	`statusMentoria` enum('ativo','pausado','concluido','cancelado') NOT NULL DEFAULT 'ativo',
	`observacoes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mentorados_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `progressoModulos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`mentoradoId` int NOT NULL,
	`modulo` varchar(64) NOT NULL,
	`percentual` int NOT NULL DEFAULT 0,
	`statusModulo` enum('nao_iniciado','em_andamento','concluido') NOT NULL DEFAULT 'nao_iniciado',
	`observacoes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `progressoModulos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reunioes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`mentoradoId` int NOT NULL,
	`semana` int NOT NULL,
	`diaSemana` enum('segunda','terca','quarta','quinta','sexta') NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`descricao` text,
	`dataAgendada` timestamp,
	`dataRealizada` timestamp,
	`statusReuniao` enum('agendada','realizada','cancelada','reagendada') NOT NULL DEFAULT 'agendada',
	`linkGravacao` text,
	`linkTranscricao` text,
	`ata` text,
	`acoesCombinadas` text,
	`proximosPassos` text,
	`duracaoMinutos` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `reunioes_id` PRIMARY KEY(`id`)
);
