import styled from "styled-components";

export const StyledDashboard = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--grey-4);

    .profile-info {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 118px;
        width: 100%;
        border-bottom: 1px solid var(--grey-3);
    }

    .name-and-module {
        width: 100%;
        max-width: 1400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }

    .name-and-module p {
        font-size: var(--font-size-6);
        color: var(--grey-0);
        font-weight: var(--font-weight-4);
    }

    .name-and-module span {
        font-size: var(--font-size-3);
        color: var(--grey-1);
        font-weight: var(--font-weight-1);
    }
    
    .div-techs {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 20px;
        height: 32px;
    }

    .title-and-button {
        width: 100%;
        height: 100%;
        max-width: 1400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }

    .title-and-button h3 {
        font-size: var(--font-size-6);
        color: var(--grey-0);
        font-weight: var(--font-weight-3);
    }

    .title-and-button button {
        background-color: var(--grey-3);
        border: none;
        font-size: var(--font-size-8);
        font-weight: var(--font-weight-2);
        color: var(--grey-0);
        height: 32px;
        width: 32px;
    }

    .ul-techs {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    ul {
        width: 100%;
        max-width: 1375px;
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: var(--grey-3);
    }

    ul li {
        width: 100%;
        flex-wrap: wrap;
        background-color: var(--grey-4);
        display: flex;
        justify-content: space-between;
        height: 49px;
        align-items: center;
        padding: 0px 25px;
    }

    ul li:hover {
        background-color: var(--grey-2);
    }

    li > p {
        color: var(--grey-0);
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-4);
    }

    .span-and-button {
        display: flex;
        gap: 25px;
    }

    .span-and-button span {
        color: var(--grey-1);
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-1);
    }

    .span-and-button img {
        cursor: pointer;
    }

`