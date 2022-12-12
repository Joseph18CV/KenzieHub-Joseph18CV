import styled from "styled-components";

export const StyledModalBackgroundDeleteTech = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`

export const StyledModalDeleteTech = styled.div`
    width: 350px;
    height: 350px;
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .modal-header > button {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: var(--font-size-5);
        color: var(--grey-1);
        font-weight: var(--font-weight-3);
        background-color: transparent;
        border: none;
    }

    .content-modal-delete {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .content-modal-delete > button {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        width: 100%;
        height: 48px;
        text-align: center;
        font-size: var(--font-size-5);
        color: var(--grey-0);
        font-weight: var(--font-weight-2);
    }

    .content-modal-delete > p {
        font-size: var(--font-size-5);
        color: var(--grey-0);
        font-weight: var(--font-weight-3);
    }

`