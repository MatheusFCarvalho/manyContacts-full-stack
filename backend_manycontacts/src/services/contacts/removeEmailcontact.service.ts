import AppDataSource from "../../data-source";
import EmailContact from "../../entities/emailContact.entity";
import AppError from "../../errors/AppError";

const removeEmailContactService = async (id: string): Promise<boolean> => {
    const emailContactRepo = AppDataSource.getRepository(EmailContact);

    const emailContact = await emailContactRepo.findOneBy({ id });

    if (!emailContact) {
        throw new AppError("Email not found.", 404);
    }

    await emailContactRepo.delete({ id: emailContact.id });

    return true;
};

export default removeEmailContactService;
