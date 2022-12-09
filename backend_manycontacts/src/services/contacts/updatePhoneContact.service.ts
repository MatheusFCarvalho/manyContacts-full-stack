import AppDataSource from "../../data-source";
import PhoneContact from "../../entities/phoneContact.entity";
import AppError from "../../errors/AppError";

const updatePhoneContactService = async (id: string, phone: string) => {
    const phoneContactRepo = AppDataSource.getRepository(PhoneContact);

    const phoneContact = await phoneContactRepo.findOneBy({ id });

    if (!phoneContact) {
        throw new AppError("Phone not found.", 404);
    }

    await phoneContactRepo.update(phoneContact!.id, { phone })

    return phoneContact;
};

export default updatePhoneContactService;
