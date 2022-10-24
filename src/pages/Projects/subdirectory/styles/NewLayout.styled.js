import styled from "styled-components"
import { Flex } from "../../../../components/styles/Flex"
import redBand from '../TopSeed/assets/red-band.svg'
import greenBand from '../TopSeed/assets/green-band.svg'


export const Main = styled.main`
    /* overflow-x: hidden; */
    --side-padding: var(--side-padding-sm);
    width: 100%;
    max-width: var(--max-content-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 4em var(--side-padding);
    font-size: 1.15em;
    p {
        color: white;
    }
    h1, h2, h3, h4 {
        letter-spacing: 0.05em;
        line-height: 1.5;
    }
    h1 {
        font-size: 3.8em;
        font-weight: 800;
    }
    h2 {
        font-size: 2em;
    }
    h3 {
        font-weight: 600;
        font-size: 1.3em;
    }
    @media (max-width: 1000px) {
        padding: 0 var(--side-padding);
    }

    section:not(section:first-of-type) {
        width: 100%;
        /* overflow-x: hidden; */
    }

` 
export const Picture = styled.div`

    /* overflow: hidden; */

    filter: drop-shadow(0px 12px 60px rgba(22, 25, 99, 0.25));
    img {
        width: 100%;
        /* height: 110%; */
        object-fit: fill;
        border-radius: var(--rounded);
    }
`

export const Hero = styled.section`
    width: 100%;
    background-color: var(--grey100);
    border-radius: var(--rounded);
    padding: 4vw 6vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    color: var(--grey800);

    h1 {
        color: var(--grey800);
    }
    h3 {
        color: var(--blueGrey500);
    }
    h5 {
        font-weight: 700;
        margin-bottom: 0.1em;
    }
    p {
        color: var(--blueGrey600);
        font-size: 0.9em;
        font-weight: 400;
    }
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: start;
        gap: 4em;

        > div:first-of-type {
            gap: 2em;
        }
    }
`
export const HeroImg = styled(Picture)`
    flex-shrink: 0;
    width: 50em;
    transform: translateX(8em);
    @media (max-width: 1000px) {
        transform: unset;
        width: 120%;
    }

`

export const Narration = styled(Flex)`
    padding: 2em 15vw;
    img {
        width: 3em;
        opacity: 0.6;
    }
    @media (max-width: 1000px) {
        padding: 2em 4em;
    }
    @media (max-width: 600px) {
        padding: 2em 0;
    }

`
export const Industry = styled(Narration)`
    position: relative;
    gap: 15vw;
    & > div {
        max-width: 30em;
        gap: 0.5em;
        flex-direction: column;
        h2 {
            width: 60%;
        }
    } 
    @media (max-width: 1000px) {
        gap: 8vw;
        > div h2 {
            width: 100%;
        }
    }
    @media (max-width: 700px) {
        width: 100%;
        img {
            position: absolute;
            right: 20%;
            top: 25%;
        }
    }
`
export const Improve = styled(Narration)`
    position: relative;
    gap: 8vw;
    & > div {
        gap: 0.5em;
        flex-direction: column;
    } 
    @media (max-width: 700px) {
        width: 100%;
        img {
            position: absolute;
            right: 20%;
            top: 25%;
        }
    }
    
`
export const How = styled(Narration)`
    gap: 2em;
    align-items: center;
    text-align: center;
    & > div {
        gap: 0.5em;
        flex-direction: column;
    } 
    img {
        width: 2em;
    }
`

export const CopyText = styled(Flex)`
    flex-direction: ${({ sm }) => sm? 'column' : ''};
    p {
        font-size: ${({ sm }) => sm? '0.9em' : '1em'};
        color: ${({ salient }) => salient? 'white' : 'var(--blueGrey300)'};
    }
    h4 {
        font-weight: 700;
    }
    h4 {
        margin-bottom: 0.5em;
    }
`
export const SummarySection = styled.section`
    background-color: ${({ red }) => red? '#f09ac41a' : '#87FFDB0D'};
    border-radius: var(--rounded);
    padding: 6em 15vw;
    min-height: 80vh;



    h1 {
        color: ${({ red }) => red? '#D3BCDB' : '#87FFDB'};
        margin-bottom: 1em;
        position: relative;
        width: 100%;
        /* max-width: 800px; */
        text-align: ${({ red }) => red? 'start' : 'end'};


        &::before {
            content: '';
            position: absolute;
            background-image: url(${({ red }) => red? redBand : greenBand});
            background-repeat: no-repeat;
            background-position: ${({ red }) => red? 'left' : 'right'};
            width: 100%;
            height: 1em;
            left: ${({ red }) => red? 0 : 'unset'};
            right: ${({ red }) => red? 'unset' : 0};
            /* transform: translateX(-100%); */
            bottom: 0.3em;
        }
        
    }
    ol {
        /* max-width: 800px; */
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 2em;

        li {
            display: flex;
            flex-direction: row;
            gap: 3em;
            
            /* circle */
            &>div:first-of-type { 
                background: ${({ red }) => red? '#F4CDE01A' : '#87FFDB1A'};
                width: 60px;
                height: 60px;
                border-radius: 100px;
                display: grid;
                place-content: center;
                flex-shrink: 0;

            }
            div:nth-of-type(2) {
                gap: 0.3em;
            }
            span {
                color: ${({ red }) => red? '#FF77D1' : '#87FFDB'};
                font-size: 2em;
                font-family: var(--font-cyber);
                font-weight: 700;
            }

            p:first-of-type {
                font-size: 1.1em;
                font-weight: 500;
                color: ${({ red }) => red? '#FF77D1' : '#87FFDB'};
            }
            p:nth-of-type(2) {
                color: ${({ red }) => red? 'var(--purple200)' : 'var(--blue400)'};
            }
        }
    }
    @media (max-width: 800px) {
        padding: 4em 8vw;
    }
    @media (max-width: 600px) {
        padding: 4em 2em;
        ol li > div:first-of-type {
            width: 40px;
            height: 40px;
        }
        ol li {
            gap: 1.5em;
        }
        ol li span {
            font-size: 1.2em;
        }
    }
`

export const InfoArchSection = styled.section`
    overflow: hidden;
    width: 100%;
    padding: 4em;
    padding-bottom: 1em;
    background-color: #1F2937;


    border-radius: var(--rounded);
    gap: 4em;
    display: flex;
    flex-direction: column;
    gap: 4em;
    & > div {
        padding-left: 2em;
        width: 75%; 
        gap: 5em;
    }
    img {
        /* transform: translate(-10%, 10%); */
        align-self: center;
    }
    @media (max-width: 1100px) {
        > div {
            width: 100%;
        }
    }
    @media (max-width: 800px) {
        > div {
            flex-direction: column;
            gap: 0.5em;
        }
    }
`
export const VisualSection = styled.section`
    padding: 4em;
    padding-bottom: 4em;
    background-color: var(--grey100);
    overflow: hidden;
    border-radius: var(--rounded);
    color: var(--grey800);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6em;

    & > img:first-of-type {
        position: absolute;
        z-index: 0;
        left: -15%;
    }

    & > div {
        position: static;
        z-index: 1;
    }

    & > div:nth-of-type(1) {
        width: 33em;
        gap: 1.5em;
        align-self: end;


        & > div {
            flex-direction: column;
            h2 {
                font-weight: 700;
            }
            p {
                color: var(--grey800);
                /* font-weight: 400; */
                margin-top: 0.5em;
            }

        }

    }

    p:last-of-type {
        color: var(--grey800);
    }

    & > div:nth-of-type(2) {
        justify-content: space-between;
        align-items: center;
        align-self: center;
        width: calc(100% - 10vw);
        gap: 2em;

        & > div {
                gap: 2em;
                width: 45%;
            img {
                width: 20em;
                /* flex-shrink: 1; */
            }
            & > div {
                flex-direction: column;
            }
        }
    }
    & > div:nth-of-type(3) {
        justify-content: space-between;
        align-items: center;
        align-self: center;
        /* width: calc(100% - 10vw); */
        & > div {
                flex-direction: column;
                min-width: 10em;
                max-width: 30em;
        }
        img {
            transform: translateX(8%);

        }

    }


    @media (max-width: 1000px) {
        padding: 4em 2em;
        & > div:nth-of-type(1) {
            align-self: center;
            width: 100%;
        }
        & > div:nth-of-type(2) {
            flex-direction: column;
            & > div {
                width: 100%;
                max-width: 30em;
                align-items: center;
                text-align: center;
            }
        } 

        & > div:nth-of-type(3) {
            flex-direction: column-reverse;
            & > div {
                width: 100%;
                max-width: 30em;
                align-items: center;
                text-align: center;
            }
            img {
                transform: unset;
                width: 100%;
            }
        }

    }
`

export const ApplicationSectionOne = styled.section`
    width: 100%;
    padding: 6em;
    padding-top: 8em;
    background-color: #1F2937;
    overflow: hidden;
    border-radius: var(--rounded);
    gap: 4em;
    display: flex;
    flex-direction: column;
    gap: 4em;

    *:not(img) {
        position: static;
        z-index: 1;
    }
    > img {
        margin: -5em 0;
        margin-top: -10em;
        position: relative;
        left: -8%;
        z-index: 0;
        width: 110%;
        min-width: 700px;
    }

    > div:first-of-type {
        width: 60%;
        align-self: flex-end;
        gap: 2em;

        h2 {
            width: 8em;
            flex-shrink: 0;
        }
    }
    > div:nth-of-type(2) {
        align-items: center;
        gap: 10%;
        > div {
            flex-direction: column;
            min-width: 15em;
        }
        > div:last-of-type {
            flex-shrink: 0;
            width: max(60vw, 400px);
        }

    }

    @media (max-width: 1000px) {
        padding: 2em;

        img {
            width: 130%;
        }

        > div:first-of-type {
            width: 100%;
            align-self: center;
            gap: 2em;

            h2 {
                width: 8em;
                flex-shrink: 0;
            }
        }
    }
    @media (max-width: 700px) {
        > div:first-of-type {
            flex-direction: column;
            gap: 0.5em;

            h2 {
                width: 8em;
                flex-shrink: 0;
            }
        }
        > img {
            margin: -5em 0;
        }
        > div:nth-of-type(2) {
            align-items: flex-start;
            flex-direction: column;
            gap: 2em;   
            > div:last-of-type {
                flex-shrink: 0;
                width: max(60vw, 400px);
            }

        }
    }
    
    

`
export const ApplicationSectionTwo = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4em;
    padding-top: 0;
    margin-top: -3em;
    max-width: 1100px;


    > div {
        align-items: center;
    }

    > div:nth-of-type(1) {
        gap: 4em;
        div:first-of-type {
            flex-shrink: 0;
            max-width: 30em;
        }
    }
    > div:nth-of-type(2) {
        align-self: center;
        /* padding-right: 5vw; */
        gap: 4em;
        transform: translate(0, -4em);
        div:last-of-type {
            flex-shrink: 0;
        }
    }
    > div:last-of-type {
        width: 100%;
        img {
            min-width: 40em;
        }
    }



    @media (max-width: 1200px) {
        margin-top: 0;
        gap: 2em;
        > div:nth-of-type(2) {

            transform: unset;

        }
    }
    @media (max-width: 900px) {

        gap: 4em;
        padding: 2em;

        > div:nth-of-type(1) {
            flex-direction: column;
            max-width: 30em;
            width: 100%;
            gap: 2em;
        } 
        > div:nth-of-type(2)  {
            flex-direction: column-reverse;
            gap: 2em;
            width: 100%;
            max-width: 30em;
        }

        
    }
`

export const EndingSection = styled.section`
    width: 100%;
    padding: 4em;
    padding-top: 0;

    > div:first-of-type {
        margin-bottom: 3em;
        p {
            color: var(--blueGrey300);
        }
    }
    > div:last-of-type {
        gap: 4em;
        > div {
            flex: 1;
        }
    }

    @media (max-width: 800px) {
        padding: 2em 0 4em 0;
        > div:first-of-type {
            margin-bottom: 2em;
   
        }
        > div:last-of-type {
        flex-direction: column;
        gap: 1em;
        > div {
            flex: 1;
        }
    }
    }

`