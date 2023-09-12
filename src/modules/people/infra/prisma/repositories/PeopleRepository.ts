import ICreatePeopleDTO from "@modules/people/dtos/ICreatePeople.dto";
import PeopleEntity from "@modules/people/entities/People.entity";
import IPeopleRepository from "@modules/people/repositories/IPeopleRepository";
import { prisma } from "@shared/infra/prisma";

export default class PeopleRepository implements IPeopleRepository {
  public async create(data: ICreatePeopleDTO): Promise<PeopleEntity> {
    const people = await prisma.people.create({ data });

    return people as unknown as PeopleEntity;
  }
  public async delete(id: string): Promise<void> {
    await prisma.people.delete({ where: { id } });
  }
  public async findById(id: string): Promise<PeopleEntity> {
    const people = await prisma.people.findUnique({ where: { id } });

    return people as unknown as PeopleEntity;
  }
  public async update(data: PeopleEntity): Promise<PeopleEntity> {
    const people = await prisma.people.update({ where: { id: data.id }, data });
    return people as unknown as PeopleEntity;
  }
  public async listAll(): Promise<PeopleEntity[]> {
    return await prisma.people.findMany();
  }
}
