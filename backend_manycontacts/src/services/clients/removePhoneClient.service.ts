import AppDataSource from "../../data-source";
import PhoneClient from "../../entities/phoneClient.entity";
import AppError from "../../errors/AppError";

const removePhoneClientService = async (id: string): Promise<boolean> => {
    const phoneClientRepo = AppDataSource.getRepository(PhoneClient);

    const phoneClient = await phoneClientRepo.findOneBy({ id });

    if (!phoneClient) {
        throw new AppError("Phone not found.", 404);
    }

    await phoneClientRepo.delete({ id: phoneClient.id });

    return true;
};

export default removePhoneClientService;
