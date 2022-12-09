import AppDataSource from "../../data-source"
import Client from "../../entities/client.entity"

export const listClientService = async () => {
    const ClientRepo = AppDataSource.getRepository(Client)
    const clients = await ClientRepo.find()
    return clients
}