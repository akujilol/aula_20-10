import { veiculosRepository } from "../repositories/veiculo.repository.js";

class VeiculosService {
    async getall() {
        const veiculos = await  veiculosRepository.getall()
        return veiculos
    }

    async getById(id) {
        const veiculo = await veiculosRepository.getById(id)
        return veiculo
    }

    async create(body) {
        const veiculos = await veiculosRepository.create(body)
        return veiculos
    }

    async delete(id) {
        const veiculo = await veiculosRepository.delete(id)
        return veiculo
    }
    
    async updatePut(id, data) {
        const veiculo = await veiculosRepository.updatePut(id, data)
        return veiculo
    }

    async updatePatch(id, campos) {
        const veiculo = await veiculosRepository.updatePatch(id, campos)
        return veiculo 
    }
}

export const veiculosServices = new VeiculosService()