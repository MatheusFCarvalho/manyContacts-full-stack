import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import AppError from "../../errors/AppError";
import PhoneContact from "../../entities/phoneContact.entity";
import { IReqAddPhoneContact } from "../../interfaces/phone.interface";

export const addPhoneContactService = async (data: IReqAddPhoneContact) => {
    const PhoneContactRepo = AppDataSource.getRepository(PhoneContact)
    const contactRepo = AppDataSource.getRepository(Contact)

    const { phone, contactId } = data

    const contact = await contactRepo.findOneBy({ id: contactId })

    if (!contact) {
        throw new AppError('Contact not found', 404)
    }

    const response = await PhoneContactRepo.save({ phone, contact })

    return response
}