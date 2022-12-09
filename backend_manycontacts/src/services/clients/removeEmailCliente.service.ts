import AppDataSource from "../../data-source";
import EmailClient from "../../entities/emailClient.entity";
import AppError from "../../errors/AppError";

const removeEmailClientService = async (id: string): Promise<boolean> => {
    const emailClientRepo = AppDataSource.getRepository(EmailClient);

    const emailClient = await emailClientRepo.findOneBy({ id });

    if (!emailClient) {
        throw new AppError("Email not found.", 404);
    }

    await emailClientRepo.delete({ id: emailClient.id });

    return true;
};

export default removeEmailClientService;
