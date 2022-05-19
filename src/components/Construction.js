import React from 'react';
import styled from 'styled-components';
import bars from '../assets/img/construction/bars.svg'
import barMask from '../assets/img/construction/barMask.svg'
import Particles from 'react-tsparticles';
import tsOption from './styles/TsOptions';


function Construction() {
  return (
    <>
        <Frame>
            <Caution>&#128679; Oops You Got Me</Caution>
        </Frame>
        <OverlayMsg>
           <h4>Sorry, this page is currently under construction.</h4> 
           <Particles id="tsparticles" options={tsOption}/>
        </OverlayMsg>
    </>
  )

}

export default Construction;

const Frame = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2% 5% 2% 10%;
    overflow: clip;
    /* border: 1px solid red; */
    ::before {
        content: '';
        position: absolute;
        background: var(--caution-yellow);
        mask: url(${barMask});
        /* mask-size: auto cover; */
        mask-position: 1000% 30%;
        mask-repeat: repeat-x;
        width: 100%;
        height: 100%;
        left: 0%;
        top: 0%;
        z-index: -1;
        animation: infinite-right linear 30s infinite;
    }
    @keyframes infinite-right {
        0% {
            mask-position: 1000% 30%;
        }
        100% {
            mask-position: 30% 30%;
        }
    }
    @media (max-width: 600px) {
        ::before {
            animation: infinite-right linear 120s infinite;
        }
        
    }
`

const Caution = styled.h1`
    /* display: inline; */
    white-space: nowrap;
    font-weight: 900;
    text-transform: uppercase;
    font-size: min(calc(0.6em + 5.5vw), 10em);
    padding: min(2vw, 0.5em);
    color: var(--caution-yellow);
    background: var(--bg-color);
    z-index: 0;

`
const OverlayMsg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(calc(1.5px + 0.4vw));
    color: white;
    font-size: min(calc(0.8em + 0.8vw), 1.5em);
    /* text-align: center; */
    /* line-height: 80vh; */
    display: grid;
    place-items: center;
    z-index: 1;
    ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: var(--bg-color);
        opacity: 0.4;
        z-index: -1;
    }
    h4 {
        font-family: var(--font-cyber);
        font-weight: 600;
        color: white;
        /* position: sticky; */
        /* top: min(calc(5vh + 8vw), 18vh); */
        letter-spacing: 0.15em;
        max-width: 70vw;
        line-height: initial;
        margin-top: 5vw;
        /* text-align: center; */
        /* opacity: 0.8; */
    }
`