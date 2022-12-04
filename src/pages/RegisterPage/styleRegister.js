import styled from "styled-components";

export const StyledRegister = styled.div`
    width: 100%;
    height: 115vh;
    background-color: var(--grey-4);
    display: flex;
    flex-direction: column;
    align-items: center;


    .container {
        margin-top: 30px;
        width: 400px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 12px;
    }

    .div-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .div-header h1 {
        color: var(--color-primary);
        font-size: var(--font-size-10);
    }

    .div-header a {
        background-color: var( --grey-3);
        padding: 8px 16px;
        border-radius: var(--border-radius-2);
        color: var(--grey-0);
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-3);
    }

    form {
        display: flex;
        flex-direction: column;
        background-color: var( --grey-3);
        width: 100%;
        padding: 24px 12px; 
    }

    form h3 {
        color: var(--grey-0);
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-6);
        margin-bottom: 22px;
    }

    form > span{
        color: var(--grey-1);
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        margin-bottom: 22px;
    }

    form > label {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: var(--grey-0); 
        display: flex;
        margin-bottom: 22px;
        margin-top: 2.5px;
    }

    form select {
        height: 48px;
        width: 100%;
        padding-left: 16px;
        background-color: var(--grey-2);
        border: 1px solid var(--grey-2);
        border-radius: var(--border-radius-2);
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-5);
        color: var(--grey-1);
        margin-bottom: 20px;
    }

    form > p {
        display: flex;
        justify-content: center;
        margin-top: -10px;
        margin-bottom: 10px;
        color: var(--color-primary-focus);
    }

    @media(max-width: 1200px) {
        height: 190vh;
    }
    
`