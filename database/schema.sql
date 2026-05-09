CREATE DATABASE IF NOT EXISTS pet_system;
USE pet_system;

CREATE TABLE EXAME (
    id_exame INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT,
    valor DECIMAL(10,2),
    ativo BOOLEAN
    );
CREATE TABLE RECEITA (
    id_receita INT PRIMARY KEY AUTO_INCREMENT,
    id_atendimento INT, -- Campo que será FK depois
    data_emissao DATE,
    orientacoes TEXT
);
CREATE TABLE ATENDIMENTO_EXAME (
    id_atendimento_exame INT PRIMARY KEY AUTO_INCREMENT,
    id_atendimento INT, -- Add FK depois
    id_exame INT,  -- Add FK depois
    resultado TEXT,
    data_realizacao DATE,
    observacoes TEXT
);
CREATE TABLE VETERINARIO (
    id_veterinario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    crmv VARCHAR(20),
    telefone VARCHAR(20),
    email VARCHAR(100),
    ativo BOOLEAN
);
CREATE TABLE PROCEDIMENTO (
    id_procedimento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT,
    valor DECIMAL(10,2),
    ativo BOOLEAN
);
CREATE TABLE VACINA (
    id_vacina INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    fabricante VARCHAR(100),
    descricao TEXT,
    intervalo_dias INT,
    ativa BOOLEAN
);
CREATE TABLE ATENDIMENTO (
    id_atendimento INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,           
    id_veterinario INT,  -- FK da tabela VETERINARIO
    data_hora DATETIME,
    tipo_atendimento VARCHAR(50),
    status VARCHAR(50),
    queixa_principal TEXT,
    diagnostico TEXT,
    observacoes TEXT
);
CREATE TABLE ATENDIMENTO_PROCEDIMENTO (
    id_atendimento_procedimento INT PRIMARY KEY AUTO_INCREMENT,
    id_atendimento INT,
    id_procedimento INT,
    observacoes TEXT,
    valor_cobrado DECIMAL(10,2)
    );
    CREATE TABLE APLICACAO_VACINA (
    id_aplicacao_vacina INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,
    id_vacina INT,
    id_atendimento INT, -- opcional
    data_aplicacao DATE,
    data_proxima_dose DATE,
    lote VARCHAR(50),
    observacoes TEXT
);
CREATE TABLE SERVICO (
    id_servico INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT,
    valor DECIMAL(10,2),
    ativo BOOLEAN
);
CREATE TABLE PET (
    id_pet INT PRIMARY KEY AUTO_INCREMENT,
    id_tutor INT, -- FK Cliente/tutor
    nome VARCHAR(100),
    especie VARCHAR(50),
    raca VARCHAR(50),
    idade INT,
    sexo VARCHAR(20),
    peso FLOAT,
    observacoes TEXT,
    ativo BOOLEAN
);
CREATE TABLE LAUDO (
    id_laudo INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,              
    id_atendimento INT,      
    id_veterinario INT,      
    titulo VARCHAR(150),
    descricao TEXT,
    data_emissao DATE
);
CREATE TABLE LANCAMENTO_FINANCEIRO (
    id_lancamento INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,             
    id_tutor INT,            
    id_atendimento INT,     
    id_servico INT,          
    tipo_lancamento VARCHAR(50),
    categoria VARCHAR(50),
    descricao TEXT,
    valor DECIMAL(10,2),      
    data_lancamento DATE,   
    forma_pagamento VARCHAR(50)
);
CREATE TABLE AGENDAMENTO (
    id_agendamento INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,          
    id_veterinario INT, 
    tipo_agendamento VARCHAR(100),
    data DATE,
    hora TIME,
    status VARCHAR(50),
    observacoes TEXT
);
CREATE TABLE PRONTUARIO (
    id_prontuario INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT UNIQUE, 
    data_abertura DATE,
    observacoes_gerais TEXT
);
CREATE TABLE TUTOR (
    id_tutor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cpf VARCHAR(14) UNIQUE, 
    telefone VARCHAR(20),
    endereco TEXT,
    login VARCHAR(50),
    senha_hash VARCHAR(255),
    ativo BOOLEAN
);
CREATE TABLE USUARIO (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    id_tutor INT, -- se tutor for func
    nome VARCHAR(100),
    login VARCHAR(50),
    senha_hash VARCHAR(255),
    tipo_usuario VARCHAR(50),
    ativo BOOLEAN
);
CREATE TABLE INTERNACAO (
    id_internacao INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,
    id_veterinario_responsavel INT,
    data_entrada DATETIME,
    data_saida DATETIME,
    status VARCHAR(50),
    motivo TEXT,
    observacoes TEXT
);
CREATE TABLE ATUALIZACAO_INTERNACAO (
    id_atualizacao_internacao INT PRIMARY KEY AUTO_INCREMENT,
    id_internacao INT,
    id_usuario INT,
    descricao TEXT,
    data_hora DATETIME,
    enviada_ao_tutor BOOLEAN
);
CREATE TABLE NOTIFICACAO (
    id_notificacao INT PRIMARY KEY AUTO_INCREMENT,
    id_tutor INT,
    id_usuario INT,
    id_pet INT,
    tipo_notificacao VARCHAR(50),
    titulo VARCHAR(100),
    mensagem TEXT,
    canal VARCHAR(50), -- E-mail, SMS, App, etc.
    data_envio DATETIME,
    lida BOOLEAN
);
CREATE TABLE RECADO_INTERNO (
    id_recado INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario_remetente INT,
    titulo VARCHAR(100),
    mensagem TEXT,
    data_criacao DATETIME,
    ativo BOOLEAN
);
CREATE TABLE RECADO_DESTINATARIO (
    id_recado_destinatario INT PRIMARY KEY AUTO_INCREMENT,
    id_recado INT,
    id_usuario_destinatario INT,
    lido BOOLEAN,
    data_leitura DATETIME
);
CREATE TABLE MOVIMENTACAO_ESTOQUE (
    id_movimentacao INT PRIMARY KEY AUTO_INCREMENT,
    id_produto INT,     
    id_usuario INT,     
    tipo_movimentacao VARCHAR(50), -- entrada, saída, ajuste...
    quantidade INT,
    data_hora DATETIME,
    observacoes TEXT
);
CREATE TABLE PRODUTO (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    marca VARCHAR(50),
    descricao TEXT,
    quantidade_estoque INT DEFAULT 0,
    estoque_minimo INT DEFAULT 0,
    valor_unitario DECIMAL(10,2),
    ativo BOOLEAN DEFAULT TRUE
);
CREATE TABLE VENDA (
    id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_tutor INT, 
    data_venda DATE,
    canal_venda VARCHAR(50), -- canais tipo site, zap zap, ou o balcao ner
    status VARCHAR(50),
    valor_total DECIMAL(10,2)
);
CREATE TABLE ITEM_VENDA (
    id_item_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_venda INT,     
    id_produto INT,    
    quantidade INT,
    valor_unitario DECIMAL(10,2),
    subtotal DECIMAL(10,2)
);

-- Abaixo é a implementação das Foreign Keys!!!!


ALTER TABLE PET 
ADD CONSTRAINT fk_pet_tutor 
FOREIGN KEY (id_tutor) REFERENCES TUTOR(id_tutor); -- ligando pet com tutor

ALTER TABLE PRONTUARIO 
ADD CONSTRAINT fk_prontuario_pet 
FOREIGN KEY (id_pet) REFERENCES PET(id_pet); -- pront pra pet

ALTER TABLE AGENDAMENTO 
ADD CONSTRAINT fk_agendamento_pet FOREIGN KEY (id_pet) REFERENCES PET(id_pet),
ADD CONSTRAINT fk_agendamento_vet FOREIGN KEY (id_veterinario) REFERENCES VETERINARIO(id_veterinario); -- agendamento p pet e vet

ALTER TABLE ATENDIMENTO 
ADD CONSTRAINT fk_atendimento_pet FOREIGN KEY (id_pet) REFERENCES PET(id_pet),
ADD CONSTRAINT fk_atendimento_vet FOREIGN KEY (id_veterinario) REFERENCES VETERINARIO(id_veterinario); -- atendimento pra pet e vet

ALTER TABLE RECEITA 
ADD CONSTRAINT fk_receita_atendimento FOREIGN KEY (id_atendimento) REFERENCES ATENDIMENTO(id_atendimento); -- receita a atendimento

ALTER TABLE LAUDO 
ADD CONSTRAINT fk_laudo_pet FOREIGN KEY (id_pet) REFERENCES PET(id_pet),
ADD CONSTRAINT fk_laudo_atendimento FOREIGN KEY (id_atendimento) REFERENCES ATENDIMENTO(id_atendimento),
ADD CONSTRAINT fk_laudo_vet FOREIGN KEY (id_veterinario) REFERENCES VETERINARIO(id_veterinario); -- laudo ligado a pet, atendimento e vet

ALTER TABLE ATENDIMENTO_EXAME 
ADD CONSTRAINT fk_ate_exame_atend FOREIGN KEY (id_atendimento) REFERENCES ATENDIMENTO(id_atendimento),
ADD CONSTRAINT fk_ate_exame_exame FOREIGN KEY (id_exame) REFERENCES EXAME(id_exame); -- atendimentos a exames  q foram/são realizados

ALTER TABLE ATENDIMENTO_PROCEDIMENTO 
ADD CONSTRAINT fk_ate_proc_atend FOREIGN KEY (id_atendimento) REFERENCES ATENDIMENTO(id_atendimento),
ADD CONSTRAINT fk_ate_proc_proc FOREIGN KEY (id_procedimento) REFERENCES PROCEDIMENTO(id_procedimento); -- atendimentos a procedimentos q  foram/são realizados

ALTER TABLE VENDA 
ADD CONSTRAINT fk_venda_tutor FOREIGN KEY (id_tutor) REFERENCES TUTOR(id_tutor); -- venda a tutor

ALTER TABLE ITEM_VENDA 
ADD CONSTRAINT fk_item_venda_mae FOREIGN KEY (id_venda) REFERENCES VENDA(id_venda),
ADD CONSTRAINT fk_item_venda_prod FOREIGN KEY (id_produto) REFERENCES PRODUTO(id_produto); -- itens venda com a Venda (mãe/pai nsei) e o produto

ALTER TABLE MOVIMENTACAO_ESTOQUE 
ADD CONSTRAINT fk_mov_prod FOREIGN KEY (id_produto) REFERENCES PRODUTO(id_produto),
ADD CONSTRAINT fk_mov_user FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario); -- ligando ao produto e ao usuário que fez a açãooo

SHOW tables;