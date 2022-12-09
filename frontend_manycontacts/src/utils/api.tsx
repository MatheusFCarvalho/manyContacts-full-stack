import axios from 'axios'
import { IPropsCreateEmail, IPropsCreatePhone, ISetContacts, ISetCustomers } from '../interfaces/setStates';
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 15000,
})

export const gettingCustomers = async ({ setCustomers }: ISetCustomers) => {
    const response = await api.get("/clients").then((response) => {
        setCustomers(response.data)
    });
    return response
}
export const gettingContacts = async ({ setContacts }: ISetContacts) => {
    const response = await api.get("/contacts").then((response) => {
        setContacts(response.data)
    });
    return response
}

export const addingEmail = async (propsCreateEmail: IPropsCreateEmail) => {
    const { type, id, emailsState, emailInput, setEmailsState, setIsUpdating, isUpdating } = propsCreateEmail
    api.post(`/${type}/email/${id}`, { email: emailInput }).then((response) => {
        setEmailsState([...emailsState, response.data])
        toast("✔️ Email adicionado!")
    }).catch((reason) => {
        toast("❌ Email ja existente!")
    })
    setIsUpdating(!isUpdating)
}
export const addingPhone = async (propsCreatePhone: IPropsCreatePhone) => {
    const { type, id, phonesState, phoneInput, setPhonesState, setIsUpdatingPhone, isUpdatingPhone } = propsCreatePhone
    api.post(`/${type}/phone/${id}`, { phone: phoneInput }).then((response) => {
        setPhonesState([...phonesState, response.data])
        toast("✔️ Telefone adicionado!")
        setIsUpdatingPhone(!isUpdatingPhone)

    }).catch((reason) => {
        toast("❌ Telefone ja existente!")
    })
}