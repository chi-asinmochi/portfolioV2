import styled from "styled-components";
import indicator from '../../assets/icon/indicator.svg'


export const Ul = styled.ul`
    --scroll-side-padding: 70vw;
    position: absolute;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    pointer-events: none;
    top: 20%;
    line-height: 2em;

    @media (max-width: 800px) {
        pointer-events: auto;

        width: 100%;
        /* height: 10rem; */
        overflow-x: scroll;
        scroll-snap-type: x mandatory;

        scroll-behavior: smooth;
        scroll-padding-left: var(--side-padding);
        overflow-y: hidden;
        overscroll-behavior: contain;
        position: fixed;
        top: 12%;
        left: 0;
        flex-direction: row;
        align-items: flex-end;

        padding: 0 var(--scroll-side-padding);

        &::-webkit-scrollbar {
            display: none;
        }
        &::after {
            content: '';
            padding-right: var(--scroll-side-padding);
        }

    }



`

export const ProjectTitle = styled.h3`

    font-weight: 400;
    font-size: 1.1rem;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.6s;
    pointer-events: auto;
    cursor: pointer;
    padding: 1em 0;
    &:hover {
        opacity: 1;
    }
    &.current {
        opacity: 1;
        transform: translateX(3rem) scale(1.2);
        transform-origin: left;
        font-weight: 700;
        position: relative;
    }
    &.current::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -2em;
        width: 1.5em;
        height: 1.5em;
        transform: translate(0, -50%);
        background: url(${indicator});
        background-size: contain;
    }
    @media (max-width: 800px) {
        vertical-align: text-bottom;
        pointer-events: auto;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        
        padding: 0 1.5em 0 0;
        transition: 0.3s font-size 0.5s linear;
        &.current {
            transform: unset;
            
            font-size: 1.8em;
            /* transform-origin: left;
            margin: 0 2em; */
        }
        &.current::before {
            display: none;
        }
    }


`