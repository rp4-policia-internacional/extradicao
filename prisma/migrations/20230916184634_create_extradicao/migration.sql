-- CreateTable
CREATE TABLE "Extradicao" (
    "id" TEXT NOT NULL,
    "paisOrigem" VARCHAR NOT NULL,
    "agente_id" VARCHAR NOT NULL,
    "nome" VARCHAR NOT NULL,
    "transporte" VARCHAR NOT NULL,
    "data_inicio" DATE NOT NULL,
    "data_fim" DATE NOT NULL,

    CONSTRAINT "Extradicao_pkey" PRIMARY KEY ("id")
);
