import { createGlobalStyle } from "styled-components";
import interFont from '../../assets/font/Inter-V.ttf'


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    /* @font-face {
        font-family: "custom-inter";
        src: url(${interFont});
    } */
    html {
        font-size: min(14px, calc(11px + 0.4vw));
        --big-logo: min(calc(1.8em + 4vw), 6em);
        --small-logo: calc(1.4em + 0.2vw);
        --cyan: #51F5FF;
        --blue700: #A1BFD0;
        --blue500: #BFDBFE;
        --blue400: #BFDBFE;
        --blue800: #29334A;
        --pink: #FF49A1;
        --neon-green: #87FFDB;
        --purple200: #DDD6FE;
        --purple500: #BB83CF;
        --purple700: #59576F;
        --bg-color: #18242c;
        --bg-trans: #15151B00;
        --side-padding: 10vw;
        --side-padding-sm: 5vw;
        --caution-yellow: #F8D34B;
        --font-cyber: 'Orbitron';
        --font-mono: 'Overpass Mono';
        --font-italic: 'Open Sans', 'sans serif';
        --font-inter: 'inter';
        --text-80: #ffffffba;
        --bg-gradient: linear-gradient(to bottom, #15151B , #372E72);
        --grey100: #F3F4F6;
        --grey800: #1F2937;
        --blueGrey300: #CBD5E1;
        --blueGrey500: #64748B;
        --blueGrey600: #475569;
        --max-content-width: 1800px;

        --rounded: min(calc(4px + 0.3vw), 8px);
        
        @media (max-width: 1000px) {
            --side-padding-sm: var(--side-padding);
        }
    }
    body {
        background: black;
        background-image: linear-gradient(to bottom, var(--bg-color), #0B2039);
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        font-family: var(--font-inter), monospace;
        color: white;
        font-weight: 300;
        display: grid;
        justify-content: center;
    }
    #root {
        width: 100vw;
        height: 100%;
        overflow: scroll;
        overflow-x: hidden;
        /* scroll-behavior: smooth; */
        /* scroll-snap-stop: always; */
        scroll-snap-type: y mandatory;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        > * {
            flex-shrink: 0;
        }
    }
    h1, h2, h3, h4, h5 {
        font-family: var(--font-cyber), sans-serif;
    }
    h1 {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 1.9rem;
        font-weight: 500;
    }
    h3 {
        font-size: 1.4rem;
        font-weight: 500;
    }
    h4 {
        font-weight: 500;
        font-size: 1.15rem;
    }
    h5 {
        font-weight: 400;
        font-size: 1.05rem;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    p {
        line-height: 1.6;
        font-weight: 300;
    }
    
    @keyframes skeleton {
        0% {
            background: #15151B4A;
        }
        100% {
            background: #0B2039B3;
        }

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