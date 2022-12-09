import { Request, Response } from "express";
import { addEmailClientService } from "../services/clients/addEmailClient.service";
import { addPhoneClientService } from "../services/clients/addPhoneCliente.service";
import { createClientService } from "../services/clients/createClient.service";
import deleteClientService from "../services/clients/deleteClient.service";
import { listClientService } from "../services/clients/listClients.service";
import removeEmailClientService from "../services/clients/removeEmailCliente.service";
import removePhoneClientService from "../services/clients/removePhoneClient.service";
import updateEmailClientService from "../services/clients/updateEmailClient.service";
import updatePhoneClientService from "../services/clients/updatePhoneClient.service";


export const createClientController = async (req: Request, res: Response) => {
    const data = req.body;
    const response = await createClientService(data);
    return res.status(201).json(response);
};

export const listClientsController = async (req: Request, res: Response) => {
    const response = await listClientService()
    return res.status(200).json(response)
}

export const deleteClientController = async (req: Request, res: Response) => {
    const { id } = req.params
    await deleteClientService(id)
    return res.status(204).json()
}

export const addPhoneClientController = async (req: Request, res: Response) => {
    const data = req.body
    data.clientId = req.params.clientId
    const response = await addPhoneClientService(data)
    return res.status(201).json(response)

}
export const addEmailClientController = async (req: Request, res: Response) => {
    const data = req.body
    data.clientId = req.params.clientId
    const response = await addEmailClientService(data)
    return res.status(201).json(response)

}
export const removeEmailClientController = async (req: Request, res: Response) => {
    const { id } = req.params
    await removeEmailClientService(id)
    return res.status(204).json()
}
export const removePhoneClientController = async (req: Request, res: Response) => {
    const { id } = req.params
    await removePhoneClientService(id)
    return res.status(204).json()
}
export const updatePhoneClientController = async (req: Request, res: Response) => {
    const { phone } = req.body
    const { id } = req.params
    const response = await updatePhoneClientService(id, phone)
    return res.status(200).json(response)
}
export const updateEmailClientController = async (req: Request, res: Response) => {
    const { email } = req.body
    const { id } = req.params
    const response = await updateEmailClientService(id, email)
    return res.status(200).json(response)
}