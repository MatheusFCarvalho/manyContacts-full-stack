import { IDataClient, IDataContact, IEmail, IModifierPropsClient, IModifierPropsContact, IPhone } from "./props";

export interface IPropsDeleteContactApi {
    props: {
        dataContact: IDataContact
        modifierProps: IModifierPropsContact
    }
}
export interface IPropsDeleteClientApi {
    props: {
        isOculted: boolean
        dataClient: IDataClient
        modifierProps: IModifierPropsClient
    }
}
export interface IPropsCreatingClientApi {
    props: {
        isOculted: boolean
        dataClient: IDataClient
        modifierProps: IModifierPropsClient
        elements: any
        setElements: any
    }
}

export interface ISetContacts {
    setContacts: React.Dispatch<React.SetStateAction<IDataContact[]>>
}
export interface ISetCustomers {
    setCustomers: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
        emails: {
            email: string;
            id: string;
        }[];
        phones: {
            phone: string;
            id: string;
        }[];
        createdAt: string;
        contacts: IDataContact[]
    }[]
    >>
}
export interface IPropsDeleteEmail {
    type: string;
    emailsState: IEmail[];
    setEmailsState: React.Dispatch<React.SetStateAction<IEmail[]>>;
    id: string;
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
    isUpdating: boolean;
    setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>;
    isDeleting: boolean;
}
export interface IPropsDeletePhone {
    type: string;
    phonesState: IPhone[];
    setPhonesState: React.Dispatch<React.SetStateAction<IPhone[]>>;
    id: string;
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
    isUpdating: boolean;
    setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>;
    isDeleting: boolean;
}
export interface IPropsChangeEmail {
    type: string;
    id: string;
    emailsState: IEmail[];
    emailInput: string;
    setEmailsState: React.Dispatch<React.SetStateAction<IEmail[]>>;
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
    isUpdating: boolean;
}

export interface IPropsCreateEmail {
    type: any;
    id: any;
    emailsState: any;
    emailInput: string;
    setEmailsState: any;
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
    isUpdating: boolean;
}
export interface IPropsCreatePhone {
    type: any;
    id: any;
    phonesState: any;
    phoneInput: string;
    setPhonesState: any;
    setIsUpdatingPhone: React.Dispatch<React.SetStateAction<boolean>>;
    isUpdatingPhone: boolean;
}