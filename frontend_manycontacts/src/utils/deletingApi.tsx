import { toast } from "react-toastify";
import { IEmail } from "../interfaces/props";
import { IPropsDeleteClientApi, IPropsDeleteContactApi, IPropsDeleteEmail, IPropsDeletePhone } from "../interfaces/setStates";
import { api } from "./api";

export const deletingContact = async ({ props }: IPropsDeleteContactApi) => {
    const { contacts, setContacts } = props.modifierProps
    const { id } = props.dataContact
    await api.delete(`/contacts/${id}`).then((response) => {
        const newDataContacts = contacts.filter((data) => data.id !== id)
        setContacts(newDataContacts)
        toast("✔️ Contato deletado!")
    }).catch((reason) => {
        toast("❌ api indisponível no momento")
    })
}
export const deletingClient = async ({ props }: IPropsDeleteClientApi) => {
    const { customers, setCustomers } = props.modifierProps
    const { id } = props.dataClient
    await api.delete(`/clients/${id}`).then((response) => {
        const newDataClients = customers.filter((data) => data.id !== id)
        setCustomers(newDataClients)
        toast("✔️ Cliente deletado!")
    }).catch((reason) => {
        toast("❌ api indisponível no momento")
    })
}

export const deletingEmail = async (propsDeleteEmail: IPropsDeleteEmail) => {
    const { type, emailsState, setEmailsState, id, setIsUpdating, isUpdating, setIsDeleting, isDeleting } = propsDeleteEmail
    await api.delete(`/${type}/email/${id}`).then((response) => {
        const newEmails = emailsState.filter((mail: IEmail) => mail.id !== id)
        setEmailsState(newEmails)
        setIsUpdating(!isUpdating)
        setIsDeleting(!isDeleting)
        toast("✔️ Email deletado!")
    }).catch((reason) => {
        toast("❌ api indisponível no momento")
    })
}
export const deletingPhone = async (propsDeletePhone: IPropsDeletePhone) => {
    const { type, phonesState, setPhonesState, id, setIsUpdating, isUpdating, setIsDeleting, isDeleting } = propsDeletePhone
    await api.delete(`/${type}/phone/${id}`).then((response) => {
        const newPhones = phonesState.filter((cellphone) => cellphone.id !== id)
        setPhonesState(newPhones)
        setIsUpdating(!isUpdating)
        setIsDeleting(!isDeleting)
        toast("✔️ Telefone deletado!")
    }).catch((reason) => {
        toast("❌ api indisponível no momento")
    })
}