import { Container } from "./styles"
import { useState } from 'react'

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input/Input";

function FormsRegister() {

    const [schemaShape, setSchemaShape] = useState({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        cellphone: yup.string().required("Telefone obrigatório"),
    })

    const formSchema = yup.object().shape(schemaShape);

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) });

    const onSubmitFunction = (data: any) => console.log(data);

    return <Container >
        <h3>Registrar</h3>
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
                placeholder="Digite seu nome"
                error={errors.email?.message}
            />
            <Input
                name="cellphone"
                label="Telefone"
                type="cellphone"
                register={register}
                placeholder="Digite seu nome"
                error={errors.cellphone?.message}
            />
            <button type="submit">Enviar!</button>
        </form>
    </Container>
}

export default FormsRegister