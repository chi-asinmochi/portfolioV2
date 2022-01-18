import styled from "styled-components";
import indicator from '../../assets/icon/indicator.svg'


export const SlowLayer = styled.ul.attrs(
    // ({ scrollAmount }) => ({
    //     style: {
    //         top: 'calc(60% - ' + scrollAmount + 'px)'
    //     }
    // })
)`
{

        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        z-index: -1;
        li {
            overflow: visible;
        }
        /* transform: translateY(-50%); */
        /* background: pink; */
    }
`
export const ScrollLayer = styled.div`
    width: 100%;
    height: 120%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: green; */
    /* opacity: 0.5; */

    
`
export const ProjectTitle = styled.h3`
    font-weight: 400;
    /* position: fixed; */
    /* scroll-snap-align: center; */
    /* scroll-snap-stop: always; */
    /* padding: 1.5em 0; */
    opacity: 0.6;
    font-size: 1.1rem;
    z-index: 2;
    transition: all 0.6s;
    cursor: pointer;
    padding: 1em 6em 1em 0;
    /* transform: translateX(15%) */
    &:hover {
        opacity: 1;
    }
    &.current {
        opacity: 1;
        font-size: 1.5rem;
        transform: translateX(3rem);
        font-weight 700;
        position: relative;

    }
    &.current::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -2em;
        width: 1.5em;
        height: 1.5em;
        transform: translateY(-50%);
        background: url(${indicator});
    }

    /* &.pos-8 {
        transform: translate(-8rem, -11.5rem) scale(0.9);
        opacity: 0.2;

    }
    &.pos-7 {
        transform: translate(-4rem, -10rem) scale(0.9);
        opacity: 0.4;

    }
    &.pos-6 {
        transform: translate(0rem, -8rem);

    }
    &.pos-5 {
        transform: translate(3rem, -4rem);
    }

    &.pos-4 {
        transform: translateX(7rem) scale(1.3);
        opacity: 0.9;
        font-weight: 700;
    }
    &.pos-3 {
        transform: translate(3rem, 4rem);
    }
    &.pos-2 {
        transform: translate(0rem, 8rem)
    }
    &.pos-1 {
        transform: translate(-4rem, 10rem) scale(0.9);
        opacity: 0.4;

    }
    &.pos-0 {
        transform: translate(-8rem, 11.5rem) scale(0.9);
        opacity: 0.2;

    } */
`