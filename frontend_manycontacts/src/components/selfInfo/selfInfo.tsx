import { Container } from "./styles"
import { IPropsSelfInfoGeted } from "../../interfaces/props";
import { useState } from "react";
import NewEmailOrPhone from "../NewEmailOrPhone/NewEmailOrPhone";
import Phone from "../Phone/phone";
import Email from "../Email/email";
import { deletingClient } from "../../utils/deletingApi";

function SelfInfo({ props }: IPropsSelfInfoGeted) {
    const { isOculted, dataClient } = props
    const { name, emails, phones, createdAt, id } = dataClient

    const [emailsState, setEmailsState] = useState(emails)
    const [phonesState, setPhonesState] = useState(phones)

    const modifierEmails = { emailsState, setEmailsState, type: 'clients' }
    const modifierPhones = { phonesState, setPhonesState, type: 'clients' }

    const deleteClient = () => { deletingClient({ props }) }
    const propsNewEmailPhone = { emailsState, setEmailsState, phonesState, setPhonesState, id, type: 'clients' }

    return <Container>
        <p>{name}</p>
        {isOculted && emailsState.map((email) => <Email key={email.id} props={{ email, modifierEmails }} />)}
        {isOculted && phonesState.map((phone) => <Phone key={phone.id} props={{ phone, modifierPhones }} />)}
        {/* {isUpdating && <DinamicUpdate props={dataClient} />} */}



        {isOculted && <NewEmailOrPhone props={propsNewEmailPhone} />}
        {isOculted && <button onClick={deleteClient} className="fullBtn">Deletar cliente</button>}
        <span>{createdAt.slice(0, 10)}</span>


    </Container>
}
export default SelfInfo