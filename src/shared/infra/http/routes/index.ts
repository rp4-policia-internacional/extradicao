import peopleRoutes from "@modules/people/infra/http/routes/people.routes";
import { Router } from "express";

const routes = Router();

routes.use("/people", peopleRoutes);

export default routes;
