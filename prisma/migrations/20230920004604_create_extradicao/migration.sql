-- CreateTable
CREATE TABLE "Extradicao" (
    "id" TEXT NOT NULL,
    "agente_id" VARCHAR NOT NULL,
    "id_criminoso" VARCHAR NOT NULL,
    "transporte" VARCHAR NOT NULL,
    "data_inicio" DATE NOT NULL,
    "data_fim" DATE NOT NULL,
    "id_pais_origem" VARCHAR NOT NULL,

    CONSTRAINT "Extradicao_pkey" PRIMARY KEY ("id")
);
