import Buttons from "../Buttons/buttons"
import Contacts from "../contacts/contacts"
import SelfInfo from "../selfInfo/selfInfo"
import { Container } from "./styles"
import { useState } from "react";
import { IDataClient, IDataContact, IPropsButton, IPropsContacts, IPropsSelfInfo } from "../../interfaces/props";


const dataCustomer = {
    'id': '1231',
    'nome': 'Matheus Florentino de Carvalho',
    'emails': [{ 'email': 'Matheus.gordon@hotmail.com', 'id': '1234' }],
    'telefones': [{ 'telefone': '12 99623-9971', 'id': '1235' },
    { 'telefone': '12 99606-2872', 'id': '1235' }],
    'data': '29/11/2022',
    'contacts': [
        {
            'id': '1232',
            'nome': 'Richazinha não perequinha',
            'emails': [{ 'email': 'hinata@kakashi.com', 'id': '1236' }],
            'telefones': [{ 'telefone': '12 99623-9971', 'id': '1237' },
            { 'telefone': '12 99606-2872', 'id': '1238' }],
        },
        {
            'id': '1233',
            'nome': 'perequinha Richazinha não',
            'emails': [{ 'email': 'tsunade@jiraya.com', 'id': '1238' }],
            'telefones': [{ 'telefone': '12 99623-9971', 'id': '1239' },
            { 'telefone': '12 99606-2872', 'id': '1240' }],
        }
    ]
}
const dataContacts: IDataContact[] = dataCustomer.contacts
const dataClient: IDataClient = dataCustomer

function Customer() {
    const [isOculted, setIsOculted] = useState(true)
    const propsSelfInfo: IPropsSelfInfo = { isOculted, dataClient }
    const propsButtons: IPropsButton = { setIsOculted, isOculted }
    const propsContacts: IPropsContacts = { dataContacts }


    return <Container>
        <h2>Cliente</h2>
        <SelfInfo props={propsSelfInfo} />
        <Buttons props={propsButtons} />
        {isOculted && <Contacts props={propsContacts} />}
    </Container>
}

export default Customer