import AppDataSource from "../../data-source";
import EmailContact from "../../entities/emailContact.entity";
import AppError from "../../errors/AppError";

const updateEmailContactService = async (id: string, email: string) => {
    const emailContactRepo = AppDataSource.getRepository(EmailContact);

    const emailContact = await emailContactRepo.findOneBy({ id });

    if (!emailContact) {
        throw new AppError("Email not found.", 404);
    }

    await emailContactRepo.update(emailContact!.id, { email })

    return emailContact;
};

export default updateEmailContactService;
