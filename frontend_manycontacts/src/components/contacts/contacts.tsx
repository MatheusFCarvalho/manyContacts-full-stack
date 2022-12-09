import { Container } from "./styles"
import { IPropsContactGeted } from "../../interfaces/props";
import OneContact from "../OneContact/OneContact";
import { useState, useEffect } from 'react'
import FormsRegister from "../FormsRegister/FormsRegister";
import { gettingContacts } from "../../utils/api";

function Contacts({ props }: IPropsContactGeted) {
    const { dataContacts, clientId } = props

    const [contacts, setContacts] = useState(dataContacts)
    const modifierProps = { contacts, setContacts }
    const [isCreating, setIsCreating] = useState(false)

    const handleCreateContact = () => {
        setIsCreating(!isCreating)
    }

    useEffect(() => {
        gettingContacts({ setContacts })
    }, [isCreating]);

    const propsForms = { isCreating, setIsCreating, type: `contacts/${clientId}` }


    return <Container>
        <button onClick={handleCreateContact}>Adicionar contato</button>
        {isCreating && <FormsRegister props={propsForms} />}
        <h2>Contatos</h2>
        {contacts.map((dataContact) => <OneContact key={dataContact.id} props={{ dataContact, modifierProps }} />)}
    </Container>
}

export default Contacts