import { Container } from "./styles"
import { IPropsContactGeted } from "../../interfaces/props";
import OneContact from "../OneContact/OneContact";

function Contacts({ props }: IPropsContactGeted) {
    const { dataContacts } = props

    return <Container>
        <h2>Contatos</h2>
        {dataContacts.map((dataContact) => <OneContact props={{ dataContact }} />)}
    </Container>
}

export default Contacts