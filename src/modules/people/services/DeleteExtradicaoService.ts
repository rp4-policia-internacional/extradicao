import AppError from "@shared/errors/AppError";
import IExtradicaoRepository from "../repositories/IExtradicaoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteExtradicaoService {
  constructor(
    @inject("ExtradicaoRepository")
    private extradicaoRepository: IExtradicaoRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const findExtradicao = await this.extradicaoRepository.findById(id);

    if (!findExtradicao) {
      throw new AppError("Extradicao nao encontrada", 404);
    }

    await this.extradicaoRepository.delete(id);

    return;
  }
}

export default DeleteExtradicaoService;
