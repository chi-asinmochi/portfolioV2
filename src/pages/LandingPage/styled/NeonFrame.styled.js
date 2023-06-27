import styled from "styled-components"

export const NeonFrame = styled.div`
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: min(80%, 1200px);
    height: 75%;
    border: 4px var(--grey100) solid;
    border-radius: 24px;
    filter: drop-shadow(0px 0px 16px var(--cyan));
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

        68% {
            opacity: 1;
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */


        }
        70% {
            opacity: 1;
            border: 3px var(--grey100) solid;
            filter: drop-shadow(0px 0px 4px var(--purple200));
            /* border: 4px var(--grey100) solid; */
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */

        }

        75% {
            opacity: 1;
            /* border: 4px white solid; */
            filter: drop-shadow(0px 0px 16px var(--cyan));
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */
        }

    }
`
