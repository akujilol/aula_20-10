import { Router } from "express";
import { veiculosServices } from "../services/service.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.getall();
        res.json(veiculos);
    }catch (error) {
    
        console.error (error);
    }
});

veiculosRouter.get("/:id", async (req, res) => {
    const VeiculoId = req.params.id;
    try {
        const veiculos = await veiculosServices.getById(VeiculoId);
        res.json(veiculos);
    }catch (error) {
    
        console.error (error);
    }
});
veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.create(req.body);
         res.status(201).json(veiculos);
    }catch (error) {
        console.error (error);
    }
});