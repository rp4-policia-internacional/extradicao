import "reflect-metadata";

import { injectable, inject } from "tsyringe";
import IExtradicaoRepository from "../repositories/IExtradicaoRepository";

@injectable()
class ListExtradicaoService {

    constructor(
        @inject('ExtradicaoRepository')
        private  extradicaoRepository: IExtradicaoRepository
    ){}

    public async execute() {
        return await this.extradicaoRepository.listAll();
    }
}

export default ListExtradicaoService;