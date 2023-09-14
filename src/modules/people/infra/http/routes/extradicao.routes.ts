import { Router } from "express";
import VitimaController from "../controllers/ExtradicaoController";

const extradicaoRoutes = Router();

const controller = new VitimaController();
extradicaoRoutes.post("/", controller.create);

extradicaoRoutes.delete("/:id", controller.delete);
extradicaoRoutes.get("/:id", controller.getOne);
extradicaoRoutes.get("/", controller.getAll);
extradicaoRoutes.put("/", controller.update);


 export default extradicaoRoutes;