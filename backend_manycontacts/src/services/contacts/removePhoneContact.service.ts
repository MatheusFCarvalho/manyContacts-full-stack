import AppDataSource from "../../data-source";
import PhoneContact from "../../entities/phoneContact.entity";
import AppError from "../../errors/AppError";

const removePhoneContactService = async (id: string): Promise<boolean> => {
    const phoneContactRepo = AppDataSource.getRepository(PhoneContact);

    const phoneContact = await phoneContactRepo.findOneBy({ id });

    if (!phoneContact) {
        throw new AppError("Phone not found.", 404);
    }

    await phoneContactRepo.delete({ id: phoneContact.id });

    return true;
};

export default removePhoneContactService;
