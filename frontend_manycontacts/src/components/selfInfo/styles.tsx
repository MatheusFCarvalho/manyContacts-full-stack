import styled from "styled-components";

export const Container = styled.div`
background-color: var(--color-grey-dark);
color: var(--color-primary);
display: flex;
flex-direction: column;
gap: 5px;
padding: 5px;

button {
    width: 50%;
}
.iconButton{
    width: 30px;
    height: 27px;
    align-self: flex-end;
}

span {
    font-size: small;
    color: var(--color-grey-light);

}
.lastLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}


`