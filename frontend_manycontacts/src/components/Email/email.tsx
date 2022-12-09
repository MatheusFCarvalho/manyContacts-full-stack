import { FaPencilAlt } from 'react-icons/fa';
import { IEmail, IEmailProps } from "../../interfaces/props";
import { useState } from "react";
import { Container } from './styles';
import { deletingEmail } from '../../utils/deletingApi';
import { changeEmailApi } from '../../utils/updatingApi';



function Email({ props }: IEmailProps) {
    const { type, emailsState, setEmailsState } = props.modifierEmails
    const { email, id }: IEmail = props.email

    const [isUpdating, setIsUpdating] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [emailInput, setEmailInput] = useState(email)


    const openUpdate = () => { setIsUpdating(!isUpdating) }
    const handleDelete = () => { setIsDeleting(!isDeleting) }

    const propsChangeEmail = { type, id, emailsState, emailInput, setEmailsState, setIsUpdating, isUpdating }
    const propsDeleteEmail = { type, emailsState, setEmailsState, id, setIsUpdating, isUpdating, setIsDeleting, isDeleting }

    const changeEmail = () => { changeEmailApi(propsChangeEmail) }
    const deleteEmail = () => { deletingEmail(propsDeleteEmail) }

    const onChanged = (event: any) => {
        const { value } = event.target
        setEmailInput(value)
    }

    return <Container>
        {!isUpdating && !isDeleting && <div> {email} <FaPencilAlt onClick={openUpdate} /></div>}
        {isUpdating && !isDeleting && <>
            <input defaultValue={email} onChange={onChanged} />
            <button onClick={changeEmail}>atualizar</button>
            <button onClick={handleDelete}>deletar</button>
        </>}
        {isDeleting && <>
            <button onClick={handleDelete}>voltar</button>
            <button onClick={deleteEmail}>delete permanente ! ! !</button>
        </>}

    </Container>
}

export default Email