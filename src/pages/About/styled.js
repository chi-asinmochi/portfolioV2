import styled, { keyframes } from "styled-components";
import mask from './assets/mask.svg'
import halo from './assets/halo.svg'

export const Frame = styled.div`
    /* --dimensions: calc(300px + 20vw);
    width: var(--dimensions);
    height: var(--dimensions); */


    position: relative;
    width: min(40%, 700px);
    height: 100%;
    overflow: show;

    img {

        position: absolute;
        height: min(100vh,calc(60vh + 20vw));
        width: 100%;
        top: -30%;
        object-fit: cover;
        transition: all 1s;
        opacity: 1;
    }
    /* ::before {
        content: '';
        background: url('${halo}');
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        width: 100%;
        height: 100%;
        left: -10%;
        top: 0;

    } */
    :hover > img {
        /* transform: rotateY(60deg); */
        opacity: 1;
    }



    @keyframes morph {
        0% {
            clip-path: polygon(55% 0, 91% 23%, 88% 78%, 56% 100%, 5% 70%, 8% 16%);
        }
        25% {
            clip-path: polygon(78% 8%, 76% 49%, 79% 96%, 6% 86%, 4% 38%, 31% 0);

        }
        50% {
            clip-path: polygon(80% 62%, 60% 92%, 23% 70%, 0 46%, 35% 36%, 80% 20%);
        }
        75% {
            clip-path: polygon(63% 93%, 23% 100%, 0 39%, 23% 13%, 83% 14%, 80% 41%);
        }
        100% {
            clip-path: polygon(59% 100%, 5% 74%, 14% 18%, 56% 1%, 99% 28%, 91% 86%);


        }
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(180deg);
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        img {
            width: auto;
            top: -30%;
            left: calc(-120px + 30vw);
            height: 120%;
        }
    }
`
