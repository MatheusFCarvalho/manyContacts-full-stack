export interface IPropsDataCustomer {
    props: {
        modifierProps: IModifierPropsClient
        dataCustomer: IDataClient
    }
}
export interface IDataClient {
    id: string;
    name: string;
    emails: IEmail[];
    phones: IPhone[];
    contacts: IDataContact[];
    createdAt: string;
}

export interface IDataContact {
    id: string;
    name: string;
    emails: IEmail[];
    phones: IPhone[];
}
export interface IPhone {
    phone: string;
    id: string;
}
export interface IEmail {
    email: string;
    id: string;
}
export interface IPhoneProps {
    props: {
        phone: {
            phone: string;
            id: string;
        }
        modifierPhones: {
            phonesState: IPhone[];
            setPhonesState: React.Dispatch<React.SetStateAction<IPhone[]>>;
            type: string;
        }
    }
}
export interface IEmailProps {
    props: {
        email: {
            email: string;
            id: string;
        }
        modifierEmails: {
            emailsState: IEmail[];
            setEmailsState: React.Dispatch<React.SetStateAction<IEmail[]>>;
            type: string;
        }
    }
}


export interface IPropsSelfInfo {
    isOculted: boolean
    dataClient: IDataClient
    modifierProps: IModifierPropsClient
}
export interface IPropsSelfInfoGeted {
    props: {
        isOculted: boolean
        dataClient: IDataClient
        modifierProps: IModifierPropsClient


    }
}


export interface IPropsButton {
    setIsOculted: React.Dispatch<React.SetStateAction<boolean>>
    isOculted: boolean
    dataClient: IDataClient
    modifierProps: IModifierPropsClient
}
export interface IPropsButtonGeted {
    props: {
        setIsOculted: React.Dispatch<React.SetStateAction<boolean>>
        isOculted: boolean
        dataClient: IDataClient
        modifierProps: IModifierPropsClient
    }
}



export interface IPropsContactGeted {
    props: {
        dataContacts: IDataContact[]
        clientId: string
    }
}
export interface IPropsContacts {
    dataContacts: IDataContact[]
    clientId: string

}

export interface IPropsOneContacts {
    dataContact: IDataContact
}
export interface IPropsOneContactGeted {
    props: {
        dataContact: IDataContact
        modifierProps: IModifierPropsContact
    }
}
export interface IModifierPropsContact {
    contacts: IDataContact[];
    setContacts: React.Dispatch<React.SetStateAction<IDataContact[]>>;
}
export interface IModifierPropsClient {
    customers: IDataClient[];
    setCustomers: React.Dispatch<React.SetStateAction<IDataClient[]>>;
}

export interface IpropsInputGeted {
    name: string
    label: string
    type: string
    register: any
    placeholder: string
    error: any
    maxlength?: number

}
export interface IpropsDinamicUpdate {
    props: string[]

}
export interface IPropsRegisterForms {
    props: {
        setIsCreating: React.Dispatch<React.SetStateAction<boolean>>
        isCreating: boolean
        type: string
    }
}
// export interface IRegisterFormData {
//     FieldValues: {
//         name: string
//         email: string
//         phone: string
//     }
// }