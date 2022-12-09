import { Container } from "./styles"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input/Input";
import { IPropsRegisterForms } from "../../interfaces/props";
import { api } from "../../utils/api";
import { toast } from "react-toastify";

function FormsRegister({ props }: IPropsRegisterForms) {
    const { isCreating, setIsCreating, type } = props

    const closeForm = () => {
        setIsCreating(!isCreating)
    }

    const schemaShape = {
        name: yup.string().required("Nome obrigatório."),
        email: yup.string().required("E-mail obrigatório.").email("E-mail inválido"),
        phone: yup.string().matches(/(\d{2})(\d{1})(\d{4})(\d{4})/, "Apenas os numeros.").required("Celular obrigatório").max(11),
    }

    const formSchema = yup.object().shape(schemaShape);

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) });

    const onSubmitFunction = (data: any) => {
        api.post(`/${type}`, data).then((response) => {
            toast("✔️ Registrado com sucesso")
        });
        closeForm()
    }

    return <Container >
        <>
            <h3>Registrar</h3>
        </>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
                name="name"
                label="Nome"
                type="name"
                register={register}
                placeholder="Digite seu nome"
                error={errors.name?.message}
            />
            <Input
                name="email"
                label="Email"
                type="email"
                register={register}
                placeholder="Digite seu email"
                error={errors.email?.message}
            />
            <Input
                name="phone"
                label="Celular"
                type="phone"
                register={register}
                placeholder="Digite seu celular"
                error={errors.phone?.message}
                maxlength={11}
            />
            <div className="buttons">
                <button type="submit">Enviar!</button>
                <button onClick={closeForm}>Cancelar!</button>

            </div>
        </form>
    </Container>
}

export default FormsRegister