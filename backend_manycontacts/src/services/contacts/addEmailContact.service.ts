import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import AppError from "../../errors/AppError";
import EmailContact from "../../entities/emailContact.entity";
import { IReqAddEmailContact } from "../../interfaces/email.interface";

export const addEmailContactService = async (data: IReqAddEmailContact) => {
    const EmailContactRepo = AppDataSource.getRepository(EmailContact)
    const contactRepo = AppDataSource.getRepository(Contact)

    const { email, contactId } = data

    const contact = await contactRepo.findOneBy({ id: contactId })

    if (!contact) {
        throw new AppError('Contact not found', 404)
    }

    const response = await EmailContactRepo.save({ email, contact })

    return response
}