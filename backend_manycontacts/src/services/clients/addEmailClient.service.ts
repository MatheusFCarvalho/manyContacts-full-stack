import AppDataSource from "../../data-source"
import Client from "../../entities/client.entity"
import EmailClient from "../../entities/emailClient.entity"
import AppError from "../../errors/AppError"
import { IReqAddEmailClient } from "../../interfaces/email.interface"

export const addEmailClientService = async (data: IReqAddEmailClient) => {
    const EmailClientRepo = AppDataSource.getRepository(EmailClient)
    const clientRepo = AppDataSource.getRepository(Client)

    const { email, clientId } = data

    const client = await clientRepo.findOneBy({ id: clientId })

    if (!client) {
        throw new AppError('Client not found', 404)
    }

    const response = await EmailClientRepo.save({ email, client })

    return response
}