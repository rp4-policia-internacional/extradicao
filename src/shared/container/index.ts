import IPeopleRepository from "@modules/people/repositories/IPeopleRepository";
import { container } from "tsyringe";
import PeopleRepository from "@modules/people/infra/prisma/repositories/PeopleRepository";

container.registerSingleton<IPeopleRepository>(
  'PeopleRepository',
  PeopleRepository
)