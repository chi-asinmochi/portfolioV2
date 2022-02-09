import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        font-size: calc(10px + 0.2vw);
        --big-logo: min(calc(2em + 5vw), 8em);
        --small-logo: calc(1.5em + 0.2vw);
        --cyan: ${({ theme }) => theme.colors.cyan};
        --pink: ${({ theme }) => theme.colors.pink};
        --bg-color: ${({ theme }) => theme.colors.background};
        --bg-trans: ${({ theme }) => theme.colors.backgroundTrans};
        --side-padding: 10vw;
        --caution-yellow: #F8D34B;
        --font-cyber: ${({ theme }) => theme.font.cyber};
        --font-mono: ${({ theme }) => theme.font.mono};
        --text-80: #ffffffba;
        --bg-gradient: linear-gradient(to bottom, #15151B , #372E72);
    }
    body {
        background-image: linear-gradient(to bottom, var(--bg-color), #0B2039);
        width: 100vw;
        height: 100vh;
        font-family: ${({ theme }) => theme.font.mono}, monospace;
        color: white;
        font-weight: 300;
    }
    #root {
        /* position: fixed; */
        /* background: pink; */
        width: 100%;
        height: 100%;
        overflow: scroll;
        
    }
    h1, h2, h3 {
        font-family: ${({ theme }) => theme.font.cyber}, sans-serif;
    }
    h1 {
        /* font-size: min(calc(2em + 5vw), 8em); */
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 1000px) {
        html {
            --side-padding: 5vw;
        }
    }
    @media (max-width: 700px) {
        html {
            --side-padding: 8vw;
        }
    }
    #tsparticles {
        position: absolute;
    }
`

export default GlobalStyles