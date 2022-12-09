import { Container } from "./styles"
import { FaPencilAlt } from 'react-icons/fa';
import { IPropsOneContactGeted } from "../../interfaces/props";
import NewEmailOrPhone from "../NewEmailOrPhone/NewEmailOrPhone";
import Phone from "../Phone/phone";
import Email from "../Email/email";
import { deletingContact } from "../../utils/deletingApi";
import { useState } from "react";


function OneContact({ props }: IPropsOneContactGeted) {
    const { name, emails, phones, id } = props.dataContact
    const [emailsState, setEmailsState] = useState(emails)
    const [phonesState, setPhonesState] = useState(phones)

    const modifierEmails = { emailsState, setEmailsState, type: 'contacts' }
    const modifierPhones = { phonesState, setPhonesState, type: 'contacts' }
    const propsNewEmailPhone = { emailsState, setEmailsState, phonesState, setPhonesState, id, type: 'contacts' }

    const deleteContact = () => { deletingContact({ props }) }

    return <Container>
        <p>{name} <FaPencilAlt /></p>
        {!!emails && emailsState.map((email) => <Email key={email.id} props={{ email, modifierEmails }} />)}
        {!!phones && phonesState.map((phone) => <Phone key={phone.id} props={{ phone, modifierPhones }} />)}
        <NewEmailOrPhone props={propsNewEmailPhone} />
        <button className="fullBtn" onClick={deleteContact}>Deletar Contato</button>
    </Container>
}

export default OneContact