import styled from "styled-components";

export const StyledHome = styled.div`
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
    
`