import styled from "styled-components";

export const LogoText = styled.h1`
   & {
        color: white;
        z-index: 3;
        /* font-size: min(calc(2em + 5vw), 8em); */
        letter-spacing: 0.2em;
        font-weight: 900;
        text-transform: uppercase;
        margin-right: -0.2em;
        position: relative;
        animation: main-glitch linear 1.5s infinite; 
        width: 8em;
        /* text-align: end; */
        text-shadow: 3px 6px 30px rgb(242, 61, 224, 0.4),
            -3px -3px 10px rgb(81, 245, 255, 0.5);
    }
    @keyframes main-glitch {
        2%,64%{
            left: -0.5%;
        }
        4%,60%{
            left: -0.2%;
            filter: blur(0px);
        }
        62%{
            left: -0.8%;
            filter: blur(0px);
        }
    }


`
