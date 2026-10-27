import { Router } from "express";
import { veiculoController } from "../controller/veiculo.controller.js";

export const veiculoRouter = Router()

veiculoRouter.get("/", veiculoController.getAll);
veiculoRouter.get("/id", veiculoController.getById);
veiculoRouter.post("/", veiculoController.create);
veiculoRouter.delete("/id", veiculoController.delete);
veiculoRouter.put("/id", veiculoController.updatePut);
veiculoRouter.patch("/id", veiculoController.updatePatch);