import styled from "styled-components";

export const StyledLogin = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--grey-4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container {
        margin-top: 30px;
        width: 400px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 12px;
    }

    .logo h1 {
        color: var(--color-primary);
    }

    form {
        display: flex;
        flex-direction: column;
        background-color: var( --grey-3);
        width: 100%;
        padding: 28px 14px; 
    }

    form h3 {
        color: var(--grey-0);
        font-size: var(--font-size-6);
        margin-bottom: 22px;
    }

    form button {
        margin-top: 10px;
        margin-bottom: 30px;
    }

    form span {
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-3);
        color: var(--grey-1);
        margin-bottom: 15px;
    }

    form a {
        background-color: var(--grey-1);
        border: 1px solid var(--grey-1);
        border-radius: var(--border-radius-2);
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-5);
        color: var(--grey-0);
    }

    form > p {
        display: flex;
        justify-content: center;
        margin-top: -10px;
        margin-bottom: 10px;
        color: var(--color-primary-focus);
    }
`