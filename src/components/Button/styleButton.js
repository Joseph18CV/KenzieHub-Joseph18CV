import styled from "styled-components";

export const StyledButton = styled.button`
    height: 48px;
    width: 100%;
    background-color: var(--color-primary-negative);
    border: 1px solid var(--color-primary-negative);
    border-radius: var(--border-radius-2);
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-2);
    color: var(--grey-0);

    button:disabled {
        background-color: red;
    }
`