import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import AppError from "../../errors/AppError";

const deleteContactService = async (id: string): Promise<boolean> => {
    if (id.length !== 36) { throw new AppError("Id format not valid.", 400) }

    const contactRepo = AppDataSource.getRepository(Contact);

    const checkContact = await contactRepo.findOneBy({ id });

    if (!checkContact) {
        throw new AppError("Contact not found.", 404);
    }

    await contactRepo.delete({ id });

    return true;
};

export default deleteContactService;
