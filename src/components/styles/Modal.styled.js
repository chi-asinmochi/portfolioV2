import React from 'react'
import styled from 'styled-components'

export const Modal = styled.div`
    display: ${( {show }) => show? 'flex' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    place-content: center;

    .gradient {
        content: "";
        position: absolute;
        width: 100%;
        height: 20%;
        left: 0;
        bottom: 0%;
        /* background: #00000030; */
        /* backdrop-filter: blur(2px) opacity(1); */
        background-image: linear-gradient(to top, #131313, #13131300);
        z-index: 13;
        pointer-events: none;
        /* backdrop-filter: blur(2px); */
        /* background: red; */
    }
`
export const ModalContainer = styled.div`
    /* width: 100%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 0 22vw; */
    width: min(80%, 1000px);
    z-index: 12;
    gap: 2em;  
    /* position: relative; */


`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000060;

    backdrop-filter: blur(4px) opacity(1);
    /* opacity: 0.1; */
    z-index: 11;

`
export const GraphFrame = styled.div`
    width: 100%;
    max-height: 70%;
    z-index: 12;
    display: flex;
    overflow: scroll;
    gap: 20vw;
    /* padding: 0 20vw; */
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
        display: none;
    }

    img {
        width: 100%;
        max-height: 100%;
        object-fit: contain;
        scroll-snap-align: center;
        scroll-snap-stop: always;   
    }
`
export const TextFrame = styled.div`
    z-index: 12;
    height: 15%;
    padding-bottom: 10vh;
    position: relative;
    overflow: scroll;
    position: relative;

    &::-webkit-scrollbar {
        display: none;
    }


`



export const SliderControl = styled.div`
    z-index: 12;    
    width: calc(18rem + 5vw);
    display: flex;
    gap: 6px;
    opacity: 0.8;
`
export const Slot = styled.div`
    flex-grow: 1;
    height: 4px;
    border-radius: 4px;
    background-color: white;
    opacity: 0.2;
    
    /* border: solid 1px white; */

    &.active {
        opacity: 0.9;
    }
`