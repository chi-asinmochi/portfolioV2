import styled from "styled-components"
import { Flex } from "../../../../components/styles/Flex"
import redBand from '../TopSeed/assets/red-band.svg'
import greenBand from '../TopSeed/assets/green-band.svg'


export const Main = styled.main`

    padding: 4em var(--side-padding);
    font-size: 1.15em;
    p {
        color: white;
    }
    h1, h2, h3 {
        letter-spacing: 0.05em;
        line-height: 1.5;
    }
    h1 {
        font-size: 3em;
    }
    h2 {
        font-size: 2em;
    }
    h3 {
        font-weight: 600;
        font-size: 1.3em;
    }
` 
export const Picture = styled.div`

    /* overflow: clip; */

    filter: drop-shadow(0px 12px 60px rgba(22, 25, 99, 0.25));
    img {
        width: 100%;
        /* height: 110%; */
        object-fit: fill;
        border-radius: 12px;
    }
`

export const Hero = styled.section`
    background-color: var(--grey100);
    border-radius: 12px;
    padding: 5em;
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
`
export const HeroImg = styled(Picture)`
    flex-shrink: 0;
    width: 40em;
    position: relative;
    left: 12%;
`

export const Narration = styled(Flex)`
    padding: 4em 15vw;
    img {
        width: 3em;
        opacity: 0.6;
    }
`
export const Industry = styled(Narration)`
    gap: 15vw;
    & > div {
        gap: 0.5em;
        flex-direction: column;
        h2 {
            width: 60%;
        }
    } 
`
export const Improve = styled(Narration)`
    gap: 8vw;
    & > div {
        gap: 0.5em;
        flex-direction: column;
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
    p {
        font-size: ${({ sm }) => sm? '0.9em' : '1em'};
        color: ${({ salient }) => salient? 'white' : 'var(--blueGrey300)'};
    }
`
export const SummarySection = styled.section`
    background-color: ${({ red }) => red? '#FFBEDE1A' : '#87FFDB0D'};
    border-radius: 12px;
    padding: 6em 15vw;


    h1 {
        color: ${({ red }) => red? '#D3BCDB' : '#87FFDB'};
        margin-bottom: 1em;
        position: relative;
        width: 100%;
        text-align: ${({ red }) => red? 'start' : 'end'};

        &::before {
            content: '';
            position: absolute;
            background-image: url(${({ red }) => red? redBand : greenBand});
            background-repeat: no-repeat;
            width: 100%;
            height: 1.5em;
            left: ${({ red }) => red? 0 : 'unset'};
            right: ${({ red }) => red? 'unset' : 0};
            bottom: 0.2em;
        }
    }
    ol {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 2em;

        li {
            display: flex;
            flex-direction: row;
            gap: 3em;
            
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
`

export const InfoArchSection = styled.section`
    padding: 4em;
    padding-bottom: 1em;
    background-color: #1F2937;
    overflow: clip;
    border-radius: 12px;
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
`
export const VisualSection = styled.section`
    padding: 4em;
    background-color: var(--grey100);
    overflow: clip;
    border-radius: 12px;
    color: var(--grey800);
    position: relative;
    display: flex;
    flex-direction: column;

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
`
export const ApplicationSection = styled.section``

export const EndingSection = styled.section``