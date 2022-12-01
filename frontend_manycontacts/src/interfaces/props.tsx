export interface IPropsSelfInfo {
    isOculted: boolean
    dataClient: string[]
}
export interface IPropsSelfInfoGeted {
    props: {
        isOculted: boolean
        dataClient: string[]

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
    props: { contacts: string[][] }
}
export interface IPropsContacts {
    contacts: string[][]
}

export interface IPropsOneContacts {
    dataContact: string[]
}
export interface IPropsOneContactGeted {
    props: { dataContact: string[] }
} 
