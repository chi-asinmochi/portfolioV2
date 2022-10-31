import styled from "styled-components";
import indicator from '../../assets/icon/indicator.svg'


export const Ul = styled.ul`
    width: max-content;
    --scroll-side-padding: 70vw;
    position: fixed;
    list-style: none;
    display: flex;
    flex-direction: column;
    /* gap: 0.1rem; */
    z-index: 1;
    pointer-events: none;
    top: 20%;
    left: var(--side-padding);
    line-height: 2em;
    opacity: ${({inView}) => inView? 1 : 0};
    /* transition: all ease-out 0.4s; */

    @media (max-width: 800px) {
        pointer-events: none;
        scrollbar-width: none;  /* Firefox */

        width: 100%;
        /* height: 10rem; */
        overflow-x: scroll;
        scroll-snap-type: x mandatory;

        scroll-behavior: smooth;

        overflow-y: hidden;
        overscroll-behavior: contain;
        /* position: fixed; */
        top: 12%;
        left: 0;
        flex-direction: row;
        align-items: flex-end;

        background-color: #18242c66;
        /* backdrop-filter: blur(2px); */

        padding: 0 var(--side-padding);
        scroll-padding-left: var(--side-padding);

        &::-webkit-scrollbar {
            display: none;
        }
        &::after {
            content: '';
            /* padding-right: var(--scroll-side-padding); */
        }
        li {
            /* padding-bottom: 1em;
            width: 100%;     */
        }
        /* li:last-of-type::after {
            position: static;
            right: 0;
            top: 0;
            content: '';
            width: 80vw;
            height: 50px;
            background: pink;
        } */
    }



`

export const ProjectTitle = styled.h4`

    font-weight: 400;
    letter-spacing: 0.05em;
    font-size: 1.2em;
    white-space: nowrap;
    color: var(--blueGrey300);
    transition: all 0.6s;
    pointer-events: auto;
    cursor: pointer;
    padding: 0.8em 0;
    &:hover {
        opacity: 1;
    }
    &.current {
        opacity: 1;
        color: white;
        transform: translateX(2em) scale(1.2);
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
        pointer-events: none;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        transform: unset;
        font-size: 2em;
        font-weight: 900;
        width: 150vw;

        /* transform-origin: left; */
        
        /* padding: 1.5em 0; */

        /* transition: 0.3s transform linear; */
        &.current {
            transform: unset;
            font-size: 1.8em;
            font-weight: 900;
        }   
        &.current::before {
            display: none;
        }

    }


`