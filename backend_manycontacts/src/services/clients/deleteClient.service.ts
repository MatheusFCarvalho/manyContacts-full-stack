import AppDataSource from "../../data-source";
import Client from "../../entities/client.entity";
import AppError from "../../errors/AppError";

const deleteClientService = async (id: string): Promise<boolean> => {
    if (id.length !== 36) { throw new AppError("Id format not valid.", 400) }

    const clientRepo = AppDataSource.getRepository(Client);

    const checkClient = await clientRepo.findOneBy({ id });

    if (!checkClient) {
        throw new AppError("Client not found.", 404);
    }

    await clientRepo.delete({ id });

    return true;
};

export default deleteClientService;
