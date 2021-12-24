import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        font-size: calc(10px + 0.2vw);
    }
    body {
        background-color: ${({ theme }) => theme.colors.background};
        width: 100vw;
        height: 100vh;
        font-family: ${({ theme }) => theme.font.mono}, monospace;
        color: white;
        font-weight: 300;
    }
    h1, h2, h3 {
        font-family: ${({ theme }) => theme.font.cyber}, sans-serif;
    }
    #root {
        /* position: fixed; */
        /* background: pink; */
        width: 100%;
        height: 100%;
        overflow: scroll;
        scroll-snap-type: y mandatory;
    }
`

export default GlobalStyles