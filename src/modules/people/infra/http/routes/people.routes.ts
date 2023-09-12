import { Router } from "express";
import PeopleController from "../controllers/PeopleController";

const peopleRoutes = Router();

const controller = new PeopleController();

peopleRoutes.post("/", controller.create);

export default peopleRoutes;
