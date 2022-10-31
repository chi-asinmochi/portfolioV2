import styled from "styled-components"

export const NeonFrame = styled.div`
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: min(80%, 1200px);
    height: 80%;
    border: 4px var(--grey100) solid;
    border-radius: 8px;
    filter: drop-shadow(0px 0px 16px var(--pink));
    animation: flicker 3s infinite alternate;

    @media (max-width: 450px) {
        height: 98%;
        width: 98%;
    }


    @keyframes flicker {
        0% {
            opacity: 1;
            border: 4px var(--grey100) solid;
            /* filter: drop-shadow(0px 0px 32px var(--pink)); */    

        }

        68% {
            opacity: 1;
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */


        }
        70% {
            opacity: 0.8;
            /* border: 4px var(--grey100) solid; */
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */

        }
        75% {
            opacity: 1;
            /* border: 4px var(--grey100) solid; */
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */
        }
        75% {
            opacity: 1;
            border: 4px pink solid;
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */
        }

    }
`
