import { FaPencilAlt } from "react-icons/fa";
import { IpropsDinamicUpdate } from "../../interfaces/props";
import { Container } from "./styles";

function DinamicUpdate({ props }: IpropsDinamicUpdate) {
    const handleUpdate = () => {
        console.log('atualiza bebe')
    }
    return <Container>
        {props.map((infoClient) =>
            <div>
                <p>{infoClient}</p>
                <button className="iconButton" onClick={handleUpdate}><FaPencilAlt /></button>
            </div>
        )}
    </Container>
}
export default DinamicUpdate