import { gettingCustomers } from "../../utils/api";
import Customer from "../customer/customer"
import { useEffect, useState } from "react";

import { Container } from "./styles"
import { IModifierPropsClient } from "../../interfaces/props";
import FormsRegister from "../FormsRegister/FormsRegister";
const dataCustomerOld = [{
    'id': '1231',
    'name': 'Example name',
    'emails': [{ 'email': 'example@example.com', 'id': '1234' },
    ],
    'phones': [{ 'phone': '12 99623-9971', 'id': '15' },
    { 'phone': '12 99606-2872', 'id': '1235' }],
    'createdAt': '29/11/2022',
    'contacts': [
        {
            'id': '1232',
            'name': 'Richazinha não perequinha',
            'emails': [{ 'email': 'hinata@kakashi.com', 'id': '1236' }],
            'phones': [{ 'phone': '12 99623-9971', 'id': '1237' },
            { 'phone': '12 99606-2872', 'id': '1238' }],
        }
    ]
}]
function ContainerCustomers() {
    const [customers, setCustomers] = useState(dataCustomerOld);
    const [isCreating, setIsCreating] = useState(false)
    const handleCreateClient = () => {
        setIsCreating(!isCreating)
    }

    const modifierProps: IModifierPropsClient = { customers, setCustomers }

    useEffect(() => {
        gettingCustomers({ setCustomers })
    }, []);

    useEffect(() => {
        gettingCustomers({ setCustomers })
    }, [isCreating]);

    const propsForms = { isCreating, setIsCreating, type: 'clients' }

    return <Container>
        {customers.map((dataCustomer) => <Customer key={dataCustomer.id} props={{ dataCustomer, modifierProps }} />)}
        <button className="addClient" onClick={handleCreateClient}>Adicionar cliente</button>
        {isCreating && <FormsRegister props={propsForms} />}
    </Container>
}
export default ContainerCustomers