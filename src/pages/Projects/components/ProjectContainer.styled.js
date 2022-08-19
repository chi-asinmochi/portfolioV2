import styled from "styled-components";
// import WFCover from '../../assets/img/WFCover.svg'
export const Frame = styled.div`
    width: 100%;

`
export const ProjectContainer = styled.div`
    
    width: min(60%, 600px);  
    padding: 0vh 0 30vh 0;
    display: flex;
    gap: calc(15vh + 10vw);
    flex-direction: column;
    /* background: pink; */
    p {
        /* margin-top: 2em; */
        color: var(--text-80);
        font-size: 1rem;
        /* line-height: 1.5;    */
    }
    @media (max-width: 800px) {
        width: 100%;
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
    scroll-snap-align: end;
    display: flex;
    flex-direction: column;
    gap: 1em;
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
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: center;
    /* overflow: clip; */
    /* height: 500px;  */
    transition: all 0.6s;

    &:hover > img {
        transform: translateY(-2%) scale(1.05);
        /* z-index:2; */
        box-shadow: 0px 12px 30px black;
    }
    &:not(.iframe-iframe):hover {
        /* margin-bottom: 1em; */
    }

    iframe {
        height: 100%;
        border: none;
    }
    .spline {
            width: 100%;
            height: 350px;
            /* display: none; */
    }
    .codePen {
        width: 100%;
        border-radius: 8px;
        border: 1px solid #ffffff80;
        height: 100%;
    }

`
export const IMG = styled.img`
    width: ${({ width }) => width};
    height: 100%;
    object-fit: cover;
    transition: all 0.6s;
    border-radius: 6px;
    cursor: pointer;

`

export const BadgeWrapper = styled.div`
    display: flex;
    margin-top: 1em;
    gap: 0.6em;
`

export const Badge = styled.div`
    padding: 0.4em 0.8em;
    border: 1px solid #FFFFFF90;
    border-radius: 4px;
    background-color: #FFFFFF20;
    font-size: 0.9rem;
`
export const ButtonText = styled.a`

`
