import { inject, injectable } from "tsyringe";
import ExtradicaoEntity from "../entities/ExtradicaoEntity";
import AppError from "@shared/errors/AppError";
import IExtradicaoRepository from "../repositories/IExtradicaoRepository";
import IExtradicaoDTO from "../dtos/IExtradicao.dto";
@injectable()
class UpdateExtradicaoService {

    constructor(
        @inject('ExtradicaoRepository')
        private extradicaoRepository: IExtradicaoRepository
    ){}

    public async execute( data: ExtradicaoEntity): Promise<ExtradicaoEntity> {
        const findExtradicao = await this.extradicaoRepository.findById(data.id);

        if(!findExtradicao) {
            throw new AppError("Extradicao não encontrada", 404);
        }

        const updateExtradicao = await this.extradicaoRepository.update(data);
        return updateExtradicao;
    }
}

export default UpdateExtradicaoService;