import { Container } from "./styles"
import { FaPencilAlt } from 'react-icons/fa';
import { IPropsSelfInfo, IPropsSelfInfoGeted } from "../../interfaces/props";
import { useState } from "react";
import NewEmailOrPhone from "../NewEmailOrPhone/NewEmailOrPhone";
import DinamicUpdate from "../DinamicUpdate/dinamicUpdate";

function SelfInfo({ props }: IPropsSelfInfoGeted) {
    const { isOculted, dataClient } = props
    const [isUpdating, setIsUpdating] = useState(false)

    const { nome, emails, telefones, data } = dataClient

    const toggleUpdating = () => {
        setIsUpdating(!isUpdating)
    }

    return <Container>
        <p>{nome}</p>
        {isOculted && emails.map((obj) => <p key={obj.id}>{obj.email}</p>)}
        {isOculted && telefones.map((obj) => <p key={obj.id}>{obj.telefone}</p>)}
        {/* {isUpdating && <DinamicUpdate props={dataClient} />} */}



        {isOculted && <NewEmailOrPhone />}

        <div className="lastLine">
            <span>{data}</span>
            {isOculted && <button className="iconButton" onClick={toggleUpdating}><FaPencilAlt /></button>}
        </div>

    </Container>
}
export default SelfInfo