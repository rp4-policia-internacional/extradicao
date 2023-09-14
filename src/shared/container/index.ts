import ExtradicaoRepository from "@modules/extradicao/infra/prisma/repositories/ExtradicaoRepository";
import IExtradicaoRepository from "@modules/extradicao/repositories/IExtradicaoRepository";
import { container } from "tsyringe";

container.registerSingleton<IExtradicaoRepository>(
    'ExtradicaoRepository',
    ExtradicaoRepository
)//preparar o que vai ser executado quando chamar o reposition