import styled from "styled-components";

export const TextFragment = styled.h1`
    color: ${
        ({ bottom }) => bottom? 'var(--pink)' : 'var(--cyan)'
    };
    font-family: var(--font-cyber), sans-serif;
    /* font-size: min(calc(2em + 5vw), 8em); */
    letter-spacing: var(--logo-letter-spacing);
    font-weight: 900;
    text-transform: uppercase;
    margin-right: -0.2em;
    width: 8em;


    position: absolute;
    z-index: 2;
    top: ${
        ({ bottom }) => bottom ? '-2%' : '1%'
    };
    left: ${
        ({ bottom }) => bottom ? '1%' : '0%'
    };
    clip-path: ${
        ({ bottom }) => bottom ? 'polygon(0 48%, 100% 48%, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
    };
    animation: ${
        ({ bottom }) => bottom ? 'right-glitch linear 4s infinite' : 'left-glitch linear 1s infinite'
    };
    @keyframes left-glitch {
        3% {
            left: -2%;
            top: 0%;
            transform: skew(3deg, 0deg);
            color: purple;
            
        }
        0%, 5% {
            left: -0.5%;
            top: 0%;
        }
        100% {
            left: 0%;
            top: 0%;
            
        }
    }
    @keyframes right-glitch {
        2%{
            left: 1%;
            /* top: -1%; */
            /* transform: skew(3deg, 0deg); */
            filter: blur(2px);
            opacity: 1;
            
        }
        3% {
            left: -6%;
        }
        5%{
            left: 1%;
            opacity: 0;
            /* color: var(--purple200); */
        }
        20% {
            opacity: 0;
        }
        21% {
            opacity: 1;
            color: teal;
        }
        24% {
            opacity: 0;
            color: var(--pink)
        }
        
        66% {
            left: 2%%;
            opacity: 0.5;
        }
        
    }
`