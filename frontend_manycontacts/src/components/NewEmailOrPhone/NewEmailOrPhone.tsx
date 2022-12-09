import { Container } from "./styles"
import { useState } from "react";
import { addingEmail, addingPhone } from "../../utils/api";

function NewEmailOrPhone({ props }: any) {
    const { emailsState, setEmailsState, phonesState, setPhonesState, id, type } = props

    const [isUpdating, setIsUpdating] = useState(false)
    const [isUpdatingPhone, setIsUpdatingPhone] = useState(false)
    const [emailInput, setEmailInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')

    const propsCreateEmail = { type, id, emailsState, emailInput, setEmailsState, setIsUpdating, isUpdating }
    const propsCreatePhone = { type, id, phonesState, phoneInput, setPhonesState, setIsUpdatingPhone, isUpdatingPhone }

    const onChangedEmail = (event: any) => {
        const { value } = event.target
        setEmailInput(value)
    }
    const onChangedPhone = (event: any) => {
        const { value } = event.target
        setPhoneInput(value)
    }
    const createEmail = () => { addingEmail(propsCreateEmail) }
    const createPhone = () => {
        addingPhone(propsCreatePhone)
    }


    const openInputEmail = () => { setIsUpdating(!isUpdating) }
    const openInputPhone = () => { setIsUpdatingPhone(!isUpdatingPhone) }

    return <Container>
        <button onClick={openInputEmail}>Novo email</button>
        {isUpdating && <div className="inputSubmit">
            <input placeholder="example@mail.com" onChange={onChangedEmail} />
            <button onClick={createEmail}>Criar!</button>
        </div>}
        <button onClick={openInputPhone}>Novo celular</button>
        {isUpdatingPhone && <div>
            <p>Digitar somente os numeros</p>
            <div className="inputSubmit">
                <input maxLength={11} placeholder="00990009900" onChange={onChangedPhone} />
                <button onClick={createPhone}>Criar!</button>
            </div>
        </div>}
    </Container>
}

export default NewEmailOrPhone