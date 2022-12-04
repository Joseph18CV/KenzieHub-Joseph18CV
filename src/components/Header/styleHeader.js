import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    height: 72px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--grey-3);

    .header-container {
        width: 100%;
        max-width: 1400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }

    .header-container h1 {
        font-size: var(--font-size-8);
        color: var(--color-primary);
    }

    .header-container button {
        background-color: var(--grey-3);
        border: 1px solid var(--grey-3);
        border-radius: var(--border-radius-2);
        padding: 8px 16px;
        font-size: var(--font-size-3);
        color: var(--grey-0);
        font-weight: var(--font-weight-3);
    }
`