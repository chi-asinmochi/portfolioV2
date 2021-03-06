import styled from "styled-components";
// import WFCover from '../../assets/img/WFCover.svg'
export const Frame = styled.div`
    width: 100%;

`
export const ProjectContainer = styled.div`

    float: right;
    width: min(60%, 600px);  
    padding: 8vh 0 30vh 0;
    display: flex;
    gap: calc(15vh + 10vw);
    flex-direction: column;
    /* background: pink; */
    p {
        margin-top: 2em;
        color: var(--text-80);
        font-size: 1.1em;
        line-height: 1.5;   
    }
    @media (max-width: 800px) {
        width: 100%;
        float: unset;
    }


`
export const BG = styled.div`
    width: 110%;
    background: url(${({src}) => src}) no-repeat;
    background-size: contain;
    background-position: center;
    position: fixed;
    top: 12%;
    left: 15%;
    width: 70%;
    height: 70%;
    filter: blur(20px);
    opacity: 0.2;
    z-index: -1;
    transition: all 1s;

    
`
export const ProjectWrapper = styled.div`
    scroll-snap-align: center;
    p {
        transition: all 0.6s;
        a {
            /* color: white; */
            text-decoration: underline;
            opacity: 1;
        }
        a:hover {
            color: white;
        }
    }

    scroll-snap-stop: always;       
`

export const ProjectCover = styled.div`
    width: auto;
    max-height: 55vh;
    display: flex;
    justify-content: center;
    /* overflow: clip; */
    /* height: 500px;  */

    &:hover > img {
        transform: scale(1.05);
        /* z-index:2; */
        box-shadow: 0px 12px 30px black;
    }
    &:not(.iframe-iframe):hover + p {
        transform: translateY(1em);
    }

    iframe {
        border: none;
    }
    .spline {
            width: 100%;
            height: 350px;
            /* display: none; */
        }
    }
    .codePen {
        width: 100%;
        border-radius: 8px;
        border: 1px solid #ffffff80;
        height: 55vh;
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