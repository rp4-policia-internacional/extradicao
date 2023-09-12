import ICreatePeopleDTO from "../dtos/ICreatePeople.dto";
import PeopleEntity from "../entities/People.entity";

export default interface IPeopleRepository {
  create(data: ICreatePeopleDTO): Promise<PeopleEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<PeopleEntity>;
  update(data: PeopleEntity): Promise<PeopleEntity>;
  listAll(): Promise<PeopleEntity[]>;
}
