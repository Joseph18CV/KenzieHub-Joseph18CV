import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 15px;
    margin-bottom: 15px;

    label {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: var(--grey-0);
    }

    input {
        height: 48px;
        width: 100%;
        padding-left: 16px;
        background-color: var(--grey-2);
        border: 1px solid var(--grey-2);
        border-radius: var(--border-radius-2);
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-5);
        color: var(--grey-0);
    }

    input::placeholder {
        color: var(--grey-1);
    }
`