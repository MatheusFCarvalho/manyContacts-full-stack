export interface IDataClient {
    id: string;
    nome: string;
    emails: {
        email: string;
        id: string;
    }[];
    telefones: {
        telefone: string;
        id: string;
    }[];
    data: string;
}

export interface IDataContact {
    id: string;
    nome: string;
    emails: {
        email: string;
        id: string;
    }[];
    telefones: {
        telefone: string;
        id: string;
    }[];
}

export interface IPropsSelfInfo {
    isOculted: boolean
    dataClient: IDataClient
}
export interface IPropsSelfInfoGeted {
    props: {
        isOculted: boolean
        dataClient: IDataClient

    }
}


export interface IPropsButton {
    setIsOculted: React.Dispatch<React.SetStateAction<boolean>>
    isOculted: boolean
}
export interface IPropsButtonGeted {
    props: {
        setIsOculted: React.Dispatch<React.SetStateAction<boolean>>
        isOculted: boolean
    }
}


export interface IPropsContactGeted {
    props: { dataContacts: IDataContact[] }
}
export interface IPropsContacts {
    dataContacts: IDataContact[]
}

export interface IPropsOneContacts {
    dataContact: IDataContact
}
export interface IPropsOneContactGeted {
    props: { dataContact: IDataContact }
}

export interface IpropsInputGeted {
    name: string
    label: string
    type: string
    register: any
    placeholder: string
    error: any

}
export interface IpropsDinamicUpdate {
    props: string[]

}