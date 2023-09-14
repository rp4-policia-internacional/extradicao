import { inject, injectable } from "tsyringe";
import ExtradicaoEntity from "../entities/ExtradicaoEntity";
import AppError from "@shared/errors/AppError";
import IExtradicaoRepository from "../repositories/IExtradicaoRepository";
import IExtradicaoDTO from "../dtos/IExtradicao.dto";
import ExtradoicaoEntity from "../entities/ExtradicaoEntity";
@injectable()
class UpdateExtradicaoService {

    constructor(
        @inject('ExtradicaoRepository')
        private extradicaoRepository: IExtradicaoRepository
    ){}

    public async execute( data: ExtradoicaoEntity): Promise<ExtradicaoEntity> {
        const findExtradicao = await this.extradicaoRepository.findById(data.ID);

        if(!findExtradicao) {
            throw new AppError("Extradicao não encontrada", 404);
        }

        const updateExtradicao = await this.extradicaoRepository.update(data);
        return updateExtradicao;
    }
}

export default UpdateExtradicaoService;