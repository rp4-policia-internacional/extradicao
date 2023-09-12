-- CreateTable
CREATE TABLE "People" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR NOT NULL,
    "sobrenome" VARCHAR NOT NULL,
    "endereco" VARCHAR NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "quantidadeMacas" INTEGER NOT NULL,

    CONSTRAINT "People_pkey" PRIMARY KEY ("id")
);

