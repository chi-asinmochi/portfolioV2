import styled from "styled-components";
// import WFCover from '../../assets/img/WFCover.svg'
export const Frame = styled.div`
    width: 100%;

`
export const ProjectContainer = styled.div`

    float: right;
    width: 60%;  
    padding: 8vh 0 30vh 0;
    display: flex;
    gap: calc(15vh + 10vw);
    flex-direction: column;
    /* background: pink; */
    p {
        margin-top: 2em;
        opacity: 0.7;
    }
    @media (max-width: 800px) {
        width: 100%;
        float: unset;
    }

`
export const BG = styled.div`
    width: 110%;
    /* height: 100%; */
    background: url(${({src}) => src}) no-repeat;
    background-size: contain;
    position: fixed;
    top: 12%;
    left: 35%;
    width: 70%;
    height: 70%;
    filter: blur(20px);
    opacity: 0.9;
    z-index: -1;
    /* z-index: 5; */
    
`
export const ProjectWrapper = styled.div`
    scroll-snap-align: center;
    p {
        transition: all 0.6s;
    }
    scroll-snap-stop: always;       
`

export const ProjectCover = styled.div`
    width: auto;
    max-height: 70vh;
    display: flex;
    justify-content: center;
    /* overflow: clip; */
    /* height: 500px;  */

    &:hover > img {
        transform: scale(1.05);
        /* z-index:2; */
        box-shadow: 0px 12px 30px black;
    }
    &:hover:not(.iframe-frame) + p {
        transform: translateY(1em);
    }

    iframe {
        border: none;
        height: 500px;

    }
    .spline {
            width: 70%;
            height: 350px;
            /* display: none; */
        }
    }
    .codePen {
        width: 100%;
        border-radius: 8px;
        border: 1px solid #ffffff80;
    }

`
export const IMG = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: all 0.6s;
    border-radius: 6px;
    cursor: pointer;

    /* display: none; */


`