CREATE TABLE "Extradicao"
(
    "ID" integer NOT NULL,
    "paisOrigem" "VARCHAR" NOT NULL,
    "agente_id" integer NOT NULL,
    "nome" "VARCHAR" NOT NULL,
    "transporte" "VARCHAR" NOT NULL,
    "data_inicio" date NOT NULL,
    "data_fim" date NOT NULL,
    CONSTRAINT "Extradicao_pkey" PRIMARY KEY ("ID")
)