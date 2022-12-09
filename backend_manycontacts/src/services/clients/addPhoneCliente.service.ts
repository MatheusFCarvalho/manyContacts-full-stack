import AppDataSource from "../../data-source"
import Client from "../../entities/client.entity"
import PhoneClient from "../../entities/phoneClient.entity"
import AppError from "../../errors/AppError"
import { IReqAddPhoneClient } from "../../interfaces/phone.interface"

export const addPhoneClientService = async (data: IReqAddPhoneClient) => {
    const PhoneClientRepo = AppDataSource.getRepository(PhoneClient)
    const clientRepo = AppDataSource.getRepository(Client)

    const { phone, clientId } = data

    const client = await clientRepo.findOneBy({ id: clientId })

    if (!client) {
        throw new AppError('Client not found', 404)
    }

    const response = await PhoneClientRepo.save({ phone, client })

    return response
}