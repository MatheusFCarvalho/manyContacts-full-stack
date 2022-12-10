import styled from "styled-components";

export const Container = styled.div<{ isErrored: boolean }>`
  text-align: left;

  input {
    background-color: var(--color-grey-light);
    color: var(--color-primary);


    border-radius: 2px;

    width: 95%;
    height: fit-content;
    
    /* border: 2px var(--color-grey-light) solid; */
    border: ${(props) => (
    props.isErrored ? `2px var(--color-orange-dark) solid;`
      : `2px var(--color-grey-light) solid;
    `)}
  }

`