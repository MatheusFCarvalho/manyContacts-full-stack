import { Container } from "./styles"
import { IPropsContactGeted } from "../../interfaces/props";
import OneContact from "../OneContact/OneContact";

function Contacts({ props }: IPropsContactGeted) {
    const { contacts } = props

    return <Container>
        {contacts.map((dataContact) => <OneContact props={{ dataContact }} />)}
    </Container>
}

export default Contacts