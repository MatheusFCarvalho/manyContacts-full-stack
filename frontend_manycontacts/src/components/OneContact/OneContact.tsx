import { Container } from "./styles"
import { FaPencilAlt } from 'react-icons/fa';
import { IPropsOneContactGeted } from "../../interfaces/props";
import { useState } from "react";
import NewEmailOrPhone from "../NewEmailOrPhone/NewEmailOrPhone";

function OneContact({ props }: IPropsOneContactGeted) {
    const { nome, emails, telefones } = props.dataContact
    const [isUpdating, setIsUpdating] = useState(false)

    const toggleUpdating = () => {
        setIsUpdating(!isUpdating)
    }

    return <Container>
        <p>{nome}</p>
        {emails.map((obj) => <p key={obj.id}>{obj.email}</p>)}
        {telefones.map((obj) => <p key={obj.id}>{obj.telefone}</p>)}
        <NewEmailOrPhone />
        <button className="iconButton" onClick={toggleUpdating}><FaPencilAlt /></button>
    </Container>
}

export default OneContact