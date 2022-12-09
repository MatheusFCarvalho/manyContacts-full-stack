import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";

export const listContactService = async () => {
    const ContactRepo = AppDataSource.getRepository(Contact)
    const contacts = await ContactRepo.find()
    return contacts
}