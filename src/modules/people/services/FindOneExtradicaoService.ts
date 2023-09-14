import { injectable, inject } from "tsyringe";
import IExtradicaoRepository from "../repositories/IExtradicaoRepository";

@injectable()
class FindOneExtradicaoService {
  constructor(
    @inject('ExtradicaoRepository')
    private extradicaoRepository: IExtradicaoRepository
  ) {}

  public async execute(id: string) {
    const findExtradicao = await this.extradicaoRepository.findById(id);
    return findExtradicao;
  }
}

export default FindOneExtradicaoService;