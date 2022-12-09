import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import AppError from "../../errors/AppError";
import PhoneContact from "../../entities/phoneContact.entity";
import EmailContact from "../../entities/emailContact.entity";
import { IReqCreateContact } from "../../interfaces/contact.interface";
import Client from "../../entities/client.entity";

export const createContactService = async (data: IReqCreateContact) => {
    const ClientRepo = AppDataSource.getRepository(Client)
    const ContactRepo = AppDataSource.getRepository(Contact)
    const PhoneContactRepo = AppDataSource.getRepository(PhoneContact)
    const EmailContactRepo = AppDataSource.getRepository(EmailContact)

    const { name, email, phone, clientId } = data

    const client = await ClientRepo.findOneBy({ id: clientId });

    if (!client) {
        return new AppError('Client not exist')
    }

    const contactCreated = await ContactRepo.save({ name, client })
    const contactId = contactCreated.id

    await PhoneContactRepo.save({ phone, contact: contactCreated })
    await EmailContactRepo.save({ email, contact: contactCreated })

    const contact = await ContactRepo.findOneBy({ id: contactId });
    return contact
}