import AppDataSource from "../../data-source";
import EmailClient from "../../entities/emailClient.entity";
import AppError from "../../errors/AppError";

const updateEmailClientService = async (id: string, email: string) => {
    const emailClientRepo = AppDataSource.getRepository(EmailClient);

    const emailClient = await emailClientRepo.findOneBy({ id });

    if (!emailClient) {
        throw new AppError("Email not found.", 404);
    }

    await emailClientRepo.update(emailClient!.id, { email })

    return emailClient;
};

export default updateEmailClientService;
