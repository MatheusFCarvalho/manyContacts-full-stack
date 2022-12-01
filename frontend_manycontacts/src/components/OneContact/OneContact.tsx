import { Container } from "./styles"
import { FaPencilAlt } from 'react-icons/fa';
import { IPropsOneContactGeted } from "../../interfaces/props";

function OneContact({ props }: IPropsOneContactGeted) {
    const { dataContact } = props

    return <Container>
        {dataContact.map((data: string) => <p>{data}</p>)}
        <button><FaPencilAlt /></button>
    </Container>
}

export default OneContact