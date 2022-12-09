import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import EmailClient from "../../entities/emailClient.entity";
import PhoneClient from "../../entities/phoneClient.entity";
import { IReqCreateClient } from "../../interfaces/client.interface";

export const createClientService = async (data: IReqCreateClient) => {
    const ClientRepo = AppDataSource.getRepository(Client)
    const PhoneClientRepo = AppDataSource.getRepository(PhoneClient)
    const EmailClientRepo = AppDataSource.getRepository(EmailClient)

    const { name, email, phone } = data
    const clientCreated = await ClientRepo.save({ name })
    const clientId = clientCreated.id

    await PhoneClientRepo.save({ phone, client: clientCreated })
    await EmailClientRepo.save({ email, client: clientCreated })

    const client = await ClientRepo.findOneBy({ id: clientId });
    return client
}