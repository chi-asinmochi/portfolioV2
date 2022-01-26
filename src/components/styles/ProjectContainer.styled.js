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
    gap: 30vh;
    flex-direction: column;
    /* background: pink; */
    p {
        margin-top: 2em;
        opacity: 0.7;
    }
    /* overflow: visible; */

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
    scroll-snap-stop: always;   
`

export const ProjectCover = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* height: 500px;  */
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
    }

`
export const IMG = styled.img`
    width: 100%;
    transition: all 0.6s;

    /* display: none; */

    &:hover {
        position: sticky;
        transform: scale(1.05);
        z-index:2;
        box-shadow: 0px 12px 30px black;
        border-radius: 6px;
        
    }
`