import { IPropsButton, IPropsButtonGeted } from "../../interfaces/props"
import { Container } from "./styles"
import { useState } from 'react'
import FormsRegister from "../FormsRegister/FormsRegister"

function Buttons({ props }: IPropsButtonGeted) {
    const { isOculted, setIsOculted, dataClient, modifierProps } = props

    const toggleIsOculted = () => {
        setIsOculted(!isOculted)
    }


    return <Container>
        {!isOculted && <button onClick={toggleIsOculted}>Mostrar</button>}
        {isOculted && <button onClick={toggleIsOculted}>Ocultar</button>}
    </Container>
}
export default Buttons