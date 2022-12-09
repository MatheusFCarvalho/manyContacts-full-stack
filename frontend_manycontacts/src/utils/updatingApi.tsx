import { toast } from "react-toastify";
import { IEmail, IPhone } from "../interfaces/props";
import { IPropsChangeEmail } from "../interfaces/setStates";
import { api } from "./api";

export const changeEmailApi = (propsChangeEmail: IPropsChangeEmail) => {
    const { type, id, emailsState, emailInput, setEmailsState, setIsUpdating, isUpdating } = propsChangeEmail
    api.patch(`/${type}/email/${id}`, { email: emailInput }).then((response) => {
        console.log(response)

        const newEmailsStates = emailsState.map((mail: IEmail) => {
            if (mail.id === id) {
                mail.email = emailInput
                return mail
            }
            return mail
        })
        setEmailsState(newEmailsStates)
        toast("✔️ Email atualizado!")
    }).catch((reason) => {
        toast("❌ Email escolhido indisponível!")
    })
    setIsUpdating(!isUpdating)
}
export const changePhoneApi = (propsChangePhone: any) => {
    const { type, id, phonesState, phoneInput, setPhonesState, setIsUpdating, isUpdating } = propsChangePhone
    api.patch(`/${type}/phone/${id}`, { phone: phoneInput }).then((response) => {
        console.log(response)
        const newPhonesStates = phonesState.map((cellphone: IPhone) => {
            if (cellphone.id === id) {
                cellphone.phone = phoneInput
                return cellphone
            }
            return cellphone
        })
        setPhonesState(newPhonesStates)
        toast("✔️ Telefone atualizado!")
    }).catch((reason) => {
        toast("❌ Telefone escolhido indisponível!")
    })
    setIsUpdating(!isUpdating)
}