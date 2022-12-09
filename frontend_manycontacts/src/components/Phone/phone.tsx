import { FaCheck, FaCut, FaPencilAlt, FaWindowClose } from 'react-icons/fa';
import { IPhone, IPhoneProps } from "../../interfaces/props";
import { useState } from "react";
import { Container } from './styles';
import { api } from '../../utils/api';
import { deletingPhone } from '../../utils/deletingApi';
import { changePhoneApi } from '../../utils/updatingApi';



function Phone({ props }: IPhoneProps) {
    const { type, phonesState, setPhonesState } = props.modifierPhones
    const { phone, id }: IPhone = props.phone

    const [isUpdating, setIsUpdating] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [phoneInput, setPhoneInput] = useState(phone)

    const openUpdate = () => {
        setIsUpdating(!isUpdating)
    }
    const handleDelete = () => {
        setIsDeleting(!isDeleting)
    }

    const propsChangePhone = { type, id, phonesState, phoneInput, setPhonesState, setIsUpdating, isUpdating }

    const changePhone = () => {
        changePhoneApi(propsChangePhone)
    }
    const propsDeletePhone = { type, phonesState, setPhonesState, id, setIsUpdating, isUpdating, setIsDeleting, isDeleting }

    const deletePhone = () => { deletingPhone(propsDeletePhone) }

    const formatPhone = (phone: string) => {
        let ddd = phone.slice(0, 2)
        let start = phone.slice(2, 7)
        let finish = phone.slice(7)
        let formated = ddd + " " + start + "-" + finish
        return formated
    }
    const onChanged = (event: any) => {
        const { value } = event.target
        setPhoneInput(value)
    }

    return <Container>
        {!isUpdating && !isDeleting && <div> {formatPhone(phone)} <FaPencilAlt onClick={openUpdate} /></div>}
        {isUpdating && !isDeleting && <>
            <input defaultValue={phone} onChange={onChanged} />
            <button onClick={changePhone}>atualizar</button>
            <button onClick={handleDelete}>deletar</button>
        </>}
        {isDeleting && <>
            <button onClick={handleDelete}>voltar</button>
            <button onClick={deletePhone}>delete permanente ! ! !</button>
        </>}

    </Container>
}

export default Phone