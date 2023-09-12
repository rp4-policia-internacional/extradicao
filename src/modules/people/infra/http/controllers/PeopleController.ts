import CreatePeopleService from "@modules/people/services/CreatePeopleService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class PeopleController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createPeople = container.resolve(CreatePeopleService);

    const { nome, sobrenome, endereco, quantidadeMacas, dataNascimento } =
      req.body;
    const formmatedDate = new Date(dataNascimento).toISOString();

    const createdPeople = await createPeople.execute({
      dataNascimento: new Date(formmatedDate),
      endereco,
      nome,
      quantidadeMacas,
      sobrenome,
    });

    return res.json(createdPeople).status(201).send();
  }
}
