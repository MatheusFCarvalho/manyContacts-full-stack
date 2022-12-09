import styled from "styled-components";

export const Container = styled.div`
background-color: var(--color-grey-dark);
border: 3px solid var(--color-primary);
color: var(--color-primary);
display: flex;
flex-direction: column;
gap: 5px;
padding: 5px;
height: fit-content;
width: fit-content;
position: fixed;
margin-left: 35px;

h3{text-align:center;}

.buttons{
    display: flex;
    flex-direction: row;
}
button{
    width: 100%;
    height: 27px;
}


input{
    margin-bottom: 5px;
}



`