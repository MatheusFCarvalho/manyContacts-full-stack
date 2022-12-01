import { IPropsButton, IPropsButtonGeted } from "../../interfaces/props"
import { Container } from "./styles"

function Buttons({ props }: IPropsButtonGeted) {
    const { isOculted, setIsOculted } = props

    const toggleIsOculted = () => {
        setIsOculted(!isOculted)
    }
    return <Container>
        <button>Adicionar contato</button>
        <button>Gerar relatório</button>
        {!isOculted && <button onClick={toggleIsOculted}>Mostrar</button>}
        {isOculted && <button onClick={toggleIsOculted}>Ocultar</button>}

    </Container>
}
export default Buttons