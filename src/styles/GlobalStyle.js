import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter" sans-serif;
        font-style: normal;
    }

    button {
        cursor: pointer;
    }
    
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --sucess: #3FE864;
        --negative: #E83F5B;

        --border-radius-1: 2px;
        --border-radius-2: 4px;
        --border-radius-3: 6px;
        --border-radius-4: 8px;
        --border-radius-5: 10px;
        --border-radius-6: 12px;

        --font-size-1: 8px;
        --font-size-2: 10px;
        --font-size-3: 12px;
        --font-size-4: 14px;
        --font-size-5: 16px;
        --font-size-6: 18px;
        --font-size-7: 20px;
        --font-size-8: 22px;
        --font-size-9: 24px;
        --font-size-10: 26px;
        --font-size-11: 28px;
        --font-size-12: 30px;
        --font-size-13: 32px;
        --font-size-14: 34px;
        --font-size-15: 36px;
        --font-size-16: 38px;
        --font-size-17: 40px;
        --font-size-18: 42px;

        --font-weight-1: 400;
        --font-weight-2: 500;
        --font-weight-3: 600;
        --font-weight-4: 700;
        --font-weight-5: 800;
    }

`