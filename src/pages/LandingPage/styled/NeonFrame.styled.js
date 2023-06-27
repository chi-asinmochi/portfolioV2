import styled from "styled-components"

export const NeonFrame = styled.div`
    --shadow-color: #8879E7;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: min(80%, 1200px);
    height: 72%;
    border: 5px white solid;
    border-radius: 24px;
    filter: drop-shadow(0px 0px 16px var(--blue400));
    animation: flicker 6s infinite alternate;

    @media (max-width: 450px) {
        height: 94%;
        width: 98%;
    }


    @keyframes flicker {
        0% {
            opacity: 1;

            /* filter: drop-shadow(0px 0px 32px var(--pink)); */    

        }

        20% {
            opacity: 1;
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */
            border: 5px white solid;


        }
        70% {
            opacity: 1;
            border: 4px var(--grey100) solid;
            /* filter: drop-shadow(0px 0px 4px var(--purple200)); */
            /* border: 4px var(--grey100) solid; */
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */

        }

        100% {
            opacity: 1;
            border: 4px white solid;
            /* border: 4px white solid; */
            /* filter: drop-shadow(0px 0px 16px var(--cyan)); */
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */
        }

    }
`
