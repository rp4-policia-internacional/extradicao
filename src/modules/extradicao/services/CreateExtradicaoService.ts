import "reflect-metadata";

import IExtradicaoRepository from "../repositories/IExtradicaoRepository";
import IExtradicaoDTO from "../dtos/IExtradicao.dto";
import AppError from "@shared/errors/AppError";
import { inject, injectable} from "tsyringe";

import ExtradoicaoEntity from "../entities/ExtradicaoEntity";
interface Handler{
    setNext(handler: Handler):Handler;
    handle(data:IExtradicaoDTO):Promise<ExtradoicaoEntity>
}
@injectable()
class CreateExtradicaoService implements Handler{
    private nextHandler: Handler | null = null;

    constructor(
        @inject('ExtradicaoRepository')
        private extradicaoRepository:IExtradicaoRepository
    ){}

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public async handle(data: IExtradicaoDTO): Promise<ExtradoicaoEntity>{
        // regra de negocio aqui

        const createExtradicao = await this.extradicaoRepository.create(data);
          if(this.nextHandler){
            return this.nextHandler.handle(data);
          }
          return createExtradicao;
    }
}


export default CreateExtradicaoService;
