import { IpropsInputGeted } from "../../interfaces/props";
import { Container } from "./style";

function Input({ name, label, type, register, error, ...rest }: IpropsInputGeted) {
    return (
        <Container isErrored={!!error} >
            <p>
                {label} {!!error && <span> - {error}</span>}
            </p>
            <input {...register(name)} {...rest} type={type} />
        </Container>
    );
}
export default Input;
