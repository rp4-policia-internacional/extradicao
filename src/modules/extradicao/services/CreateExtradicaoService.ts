import IExtradicaoRepository from "../repositories/IExtradicaoRepository";
import IExtradicaoDTO from "../dtos/IExtradicao.dto";
import AppError from "@shared/errors/AppError";
import { inject, injectable} from "tsyringe";

import ExtradoicaoEntity from "../entities/ExtradicaoEntity";

@injectable()
class CreateExtradicaoService{

    constructor(
        @inject('ExtradicaoRepository')
        private extradicaoRepository:IExtradicaoRepository
    ){}

    public async execute(data: IExtradicaoDTO): Promise<ExtradoicaoEntity>{
        // regra de negocio aqui

        const createExtradicao = await this.extradicaoRepository.create(data);
        return createExtradicao;
    }
}

export default CreateExtradicaoService;