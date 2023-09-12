import { inject, injectable } from "tsyringe";
import IPeopleRepository from "../repositories/IPeopleRepository";
import ICreatePeopleDTO from "../dtos/ICreatePeople.dto";
import AppError from "@shared/errors/AppError";
import PeopleEntity from "../entities/People.entity";

@injectable()
class CreatePeopleService {
  constructor(
    @inject("PeopleRepository")
    private peopleRepository: IPeopleRepository
  ) {}

  public async execute(data: ICreatePeopleDTO): Promise<PeopleEntity> {
    if (data.quantidadeMacas <= 2) {
      throw new AppError("Quantidade minima de maçãs é 3", 400);
    }

    const people = await this.peopleRepository.create(data);

    return people;
  }
}

export default CreatePeopleService;
