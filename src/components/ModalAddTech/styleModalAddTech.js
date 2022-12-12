import styled from "styled-components";

export const StyledModalBackgroundAddTech = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`

export const StyledModalAddTech = styled.div`
    width: 350px;
    height: 350px;
    background-color: var(--grey-3);

    .header-modal {
        background-color: var(--grey-2);
        display: flex;
        height: 50px;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
        margin-bottom: 20px;
    }

    .header-modal h2 {
        font-size: var(--font-size-4);
        color: var(--grey-0);
        font-weight: var(--font-weight-4);
    }

    .header-modal button {
        font-size: var(--font-size-5);
        color: var(--grey-1);
        font-weight: var(--font-weight-3);
        background-color: transparent;
        border: none;
    }

    form {
        padding: 0px 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    form > label {
        font-size: var(--font-size-3);
        color: var(--grey-0);
        font-weight: var(--font-weight-1);
    }

    form > input {
        background-color: var(--grey-2);
        border: 1px solid var(--grey-2);
        color: var(--grey-0);
        height: 48px;
        width: 100%;
        padding-left: 10px;
    }

    form > input::placeholder {
        color: var(--grey-1)
    }

    form > select {
        background-color: var(--grey-2);
        border: 1px solid var(--grey-2);
        color: var(--grey-1);
        height: 48px;
        width: 100%;
        padding-left: 10px;
    }

    form > select > option {
        color: var(--grey-0)
    }

    form > button {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        width: 100%;
        height: 48px;
        text-align: center;
        font-size: var(--font-size-5);
        color: var(--grey-0);
        font-weight: var(--font-weight-2);
    }
`