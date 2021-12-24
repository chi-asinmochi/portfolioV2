import styled from "styled-components";

export const LogoText = styled.h1`
   & {
        color: #E1F1F4;
        z-index: 3;
        font-size: min(calc(2em + 5vw), 8em);
        letter-spacing: 0.2em;
        font-weight: 900;
        text-transform: uppercase;
        margin-right: -0.2em;
        position: relative;
        animation: main-glitch linear 1s infinite; 
        width: 8em;
        text-align: end;
        text-shadow: 3px 6px 30px rgb(242, 61, 224, 0.4),
            -3px -3px 10px rgb(81, 245, 255, 0.5);
    }
    @keyframes main-glitch {
        2%,64%{
            left: -0.5%;
        }
        4%,60%{
            left: -0.2%;
        }
        62%{
            left: -0.8%;
        }
    }

    &::before, &::after {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    &::before {
        /* cyan */
        left: -0.3%;
        top: 2%;
        color: ${({ theme }) => theme.colors.neonTeal};
        z-index: -1;
        clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        animation: left-glitch linear 1s infinite;
    }

    &::after {
        /* pink */
        top: -1%;
        left: 0%;
        color: ${({ theme }) => theme.colors.neonPink};
        z-index: -1;
        clip-path: polygon(0 48%, 100% 48%, 100% 100%, 0 100%);
        animation: right-glitch linear 1s infinite;
    }

`
