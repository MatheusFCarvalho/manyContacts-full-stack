import { Request, Response } from "express";
import { addEmailContactService } from "../services/contacts/addEmailContact.service";
import { addPhoneContactService } from "../services/contacts/addPhoneContact.service";
import { createContactService } from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import { listContactService } from "../services/contacts/listContacts.service";
import removeEmailContactService from "../services/contacts/removeEmailcontact.service";
import removePhoneContactService from "../services/contacts/removePhoneContact.service";
import updateEmailContactService from "../services/contacts/updateEmailContact.service";
import updatePhoneContactService from "../services/contacts/updatePhoneContact.service";


export const createContactController = async (req: Request, res: Response) => {
    const data = req.body;
    data.clientId = req.params.clientId
    const response = await createContactService(data);
    return res.status(201).json(response);
};

export const listContactsController = async (req: Request, res: Response) => {
    const response = await listContactService()
    return res.status(200).json(response)
}

export const deleteContactController = async (req: Request, res: Response) => {
    const { id } = req.params
    await deleteContactService(id)
    return res.status(204).json()
}

export const addPhoneContactController = async (req: Request, res: Response) => {
    const data = req.body
    data.contactId = req.params.contactId
    const response = await addPhoneContactService(data)
    return res.status(201).json(response)
}
export const addEmailContactController = async (req: Request, res: Response) => {
    const data = req.body
    data.contactId = req.params.contactId
    const response = await addEmailContactService(data)
    return res.status(201).json(response)
}
export const removeEmailContactController = async (req: Request, res: Response) => {
    const { id } = req.params
    await removeEmailContactService(id)
    return res.status(204).json()

}
export const removePhoneContactController = async (req: Request, res: Response) => {
    const { id } = req.params
    await removePhoneContactService(id)
    return res.status(204).json()
}
export const updatePhoneContactController = async (req: Request, res: Response) => {
    const { phone } = req.body
    const { id } = req.params
    const response = await updatePhoneContactService(id, phone)
    return res.status(200).json(response)
}
export const updateEmailContactController = async (req: Request, res: Response) => {
    const { email } = req.body
    const { id } = req.params
    const response = await updateEmailContactService(id, email)
    return res.status(200).json(response)
}