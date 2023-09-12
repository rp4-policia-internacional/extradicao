import AppError from "@shared/errors/AppError";
import IPeopleRepository from "../repositories/IPeopleRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeletePeopleService {
  constructor(
    @inject("PeopleRepository")
    private peopleRepository: IPeopleRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const findPeople = await this.peopleRepository.findById(id);

    if (!findPeople) {
      throw new AppError("Pessoa nao encontrada", 404);
    }

    await this.peopleRepository.delete(id);

    return;
  }
}

export default DeletePeopleService;
