import Buttons from "../Buttons/buttons"
import Contacts from "../contacts/contacts"
import SelfInfo from "../selfInfo/selfInfo"
import { Container } from "./styles"
import { useState } from "react";
import { IPropsButton, IPropsContacts, IPropsSelfInfo } from "../../interfaces/props";

let contacts: IPropsContacts = {
    contacts:
        [[
            'Nome: Richarlison faz o gol',
            'Email: Richar@gol.com',
            'Email: Lisson@gol.com',
            'Email: Lisson@gol.com',
            'Telefone: 12 98852-1525']
            , [
            'Nome: Richarlison faz o gol',
            'Email: Richar@gol.com',
            'Telefone: 12 98852-1525']
        ]
}

const dataClient: string[] = [
    'Nome: Matheus Florentino de Carvalho',
    'Email: Matheus.gordon@hotmail.com',
    'Telefone: 12 99623-9971',
    'Telefone: 12 99606-2872',
    'Data de registro:29/11/2022'
]

function Customer() {
    const [isOculted, setIsOculted] = useState(true)
    const propsSelfInfo: IPropsSelfInfo = { isOculted, dataClient }
    const propsButtons: IPropsButton = { setIsOculted, isOculted }
    const propsContacts: IPropsContacts = contacts
    return <Container>
        <h2>Cliente</h2>
        <SelfInfo props={propsSelfInfo} />
        <Buttons props={propsButtons} />
        {isOculted && <Contacts props={propsContacts} />}
    </Container>
}

export default Customer