import styled, { keyframes } from "styled-components";

export const Polygon = styled.div`
    --dimensions: calc(300px + 20vw);
    /* margin-left: -5vw; */
    width: var(--dimensions);
    height: var(--dimensions);
    /* background: #72719D; */



    /* clip-path: polygon(55% 0, 91% 23%, 88% 78%, 56% 100%, 5% 70%, 8% 16%); */



    position: relative;
    /* animation: morph 10s infinite linear alternate; */
    img {
        width: 90%;
        position: absolute;
        bottom: -30%;
        left: -5%;
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

    @media (max-width: 600px) {
        /* width: 100%; */
        img {
            width: 100%;
            bottom: -50%;
        }
    }
`
