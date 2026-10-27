import { veiculosServices } from "../services/service.js";

class VeiculoController{
    async getAll(req, res){
        try{
            const veiculos = await veiculosServices.getall();
            res.json(veiculos);
        } catch (error) {
            console.error (error);
            }
    };
    async getById(req, res){
        const VeiculoId = req.params.id;
        try{
            const veiculos = await veiculosServices.getById(VeiculoId);
            res.json(veiculos)
        } catch (error) {
            console.error(error)
        }
    };
    async create(req, res){
        try{
            const veiculos = await veiculosServices.create(req.body);
            res.status(201).json(veiculos)
        }catch (error) {
            console.error(error)
        }
    };
    async delete(req, res){
        const veiculoId = req.params.id
        try{
            const veiculo = await veiculosServices.delete(veiculoId)
            res.status(201).json(veiculo)
        } catch(error) {
            console.error(error)
        }
    };
    async updatePatch(req, res){
        const veiculoId = req.params.id
        try{
            const veiculo = await veiculosServices.updatePatch(veiculoId, req.body)
            res.status(201).json(veiculo)
        } catch (error){
            console.log(error)
        }
    };
    async updatePut(req, res){
        const veiculoId = req.params.id
        console.log("body", req.body)
        console.log("params", req.params)
        try{
            const veiculo = await veiculosServices.updatePut(veiculoId, res.body)
            res.status(201).json(veiculo)
        } catch (error){
            console.log (error)
        }
    };


}
export const veiculoController = new VeiculoController()