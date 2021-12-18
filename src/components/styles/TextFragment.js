import styled from "styled-components";

export const TextFragment = styled.h1`
    color: ${
        ({ theme, bottom }) => bottom? theme.colors.pink : theme.colors.cyan
    };
    font-family: Orbitron, sans-serif;
    font-size: min(calc(2em + 5vw), 8em);
    letter-spacing: 0.2em;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: -0.2em;
    width: 8em;
    text-align: end;
    position: absolute;
    z-index: 2;
    top: ${
        ({ bottom }) => bottom ? '-2%' : '3%'
    };
    left: ${
        ({ bottom }) => bottom ? '0.5%' : '-0.8%'
    };
    clip-path: ${
        ({ bottom }) => bottom ? 'polygon(0 48%, 100% 48%, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
    };
    animation: ${
        ({ bottom }) => bottom ? 'right-glitch linear 1s infinite' : 'left-glitch linear 1s infinite'
    };
    @keyframes left-glitch {
        2% {
            left: -1%;
        }
        0%, 5% {
            left: -0.3%;
        }
    }
    @keyframes right-glitch {
        2%,64%{
            left: 1%;
            top: -1%;
            transform: skew(0deg);
            opacity: 0;
            
        }
        4%,60%{
            left: -0.1%;
            top: -1%;
            opacity: 1;
            transform: skew(0deg);
        }
        62%{
            left: 0.8%;
            top: 0%;
            transform: skew(1deg, -1deg); 
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
    }
`