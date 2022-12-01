import { Container } from "./styles"
import { FaPencilAlt } from 'react-icons/fa';
import { IPropsSelfInfo, IPropsSelfInfoGeted } from "../../interfaces/props";

function SelfInfo({ props }: IPropsSelfInfoGeted) {
    const { isOculted, dataClient } = props

    const [nameClient, ...restValues] = dataClient
    const dateJoined = restValues.pop()

    return <Container>
        <p>{nameClient}</p>
        {isOculted && restValues.map((infoClient) => <p>{infoClient}</p>)
        }
        <div className="lastLine">
            <span>{dateJoined}</span>
            <button><FaPencilAlt /></button>
        </div>

    </Container>
}
export default SelfInfo