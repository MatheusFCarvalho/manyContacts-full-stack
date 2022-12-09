import Buttons from "../Buttons/buttons"
import Contacts from "../contacts/contacts"
import SelfInfo from "../selfInfo/selfInfo"
import { Container } from "./styles"
import { useState } from "react";
import { IDataClient, IDataContact, IPropsButton, IPropsContacts, IPropsDataCustomer, IPropsSelfInfo } from "../../interfaces/props";


function Customer({ props }: IPropsDataCustomer) {
    const { dataCustomer, modifierProps } = props
    const dataContacts: IDataContact[] = dataCustomer.contacts
    const dataClient: IDataClient = dataCustomer

    const [isOculted, setIsOculted] = useState(true)
    const propsSelfInfo: IPropsSelfInfo = { isOculted, dataClient, modifierProps }
    const propsButtons: IPropsButton = { setIsOculted, isOculted, dataClient, modifierProps }
    const propsContacts: IPropsContacts = { dataContacts, clientId: dataClient.id }


    return <Container>
        <h2>Cliente</h2>
        <SelfInfo props={propsSelfInfo} />
        <Buttons props={propsButtons} />
        {isOculted && <Contacts props={propsContacts} />}
    </Container>
}

export default Customer