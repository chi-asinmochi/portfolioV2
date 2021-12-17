import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        background-color: ${({ theme }) => theme.colors.background};
        width: 100vw;
        height: 100vh;
        font-family: 'Overpass Mono', monospace;
        color: white
    }
    #root {
        width: 100vw;
        height: 100vh;
    }
`

export default GlobalStyles