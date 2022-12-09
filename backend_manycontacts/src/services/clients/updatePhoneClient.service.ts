import AppDataSource from "../../data-source";
import PhoneClient from "../../entities/phoneClient.entity";
import AppError from "../../errors/AppError";

const updatePhoneClientService = async (id: string, phone: string) => {
    const phoneClientRepo = AppDataSource.getRepository(PhoneClient);

    const phoneClient = await phoneClientRepo.findOneBy({ id });

    if (!phoneClient) {
        throw new AppError("Phone not found.", 404);
    }

    await phoneClientRepo.update(phoneClient!.id, { phone })

    return phoneClient;
};

export default updatePhoneClientService;
