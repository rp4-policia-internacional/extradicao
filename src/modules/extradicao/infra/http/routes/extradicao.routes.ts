import { Router } from "express";
import ExtradicaoController from "../controllers/ExtradicaoController";

const capturaRoutes = Router();

const controller = new ExtradicaoController();

capturaRoutes.post("/", controller.create);
capturaRoutes.delete("/:id", controller.delete);
capturaRoutes.get("/:id", controller.getOne);
capturaRoutes.get("/", controller.getAll);
capturaRoutes.put("/", controller.update);

export default capturaRoutes;