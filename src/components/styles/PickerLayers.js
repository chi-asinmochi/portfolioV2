import styled from "styled-components";

export const SlowLayer = styled.ul.attrs(
    // ({ scrollAmount }) => ({
    //     style: {
    //         top: 'calc(60% - ' + scrollAmount + 'px)'
    //     }
    // })
)`
{

        list-style: none;
        /* display: flex; */
        /* flex-direction: column; */
        /* gap: 3rem; */
        /* position: relative; */
        z-index: -1;
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
position: fixed;
/* scroll-snap-align: center; */
/* scroll-snap-stop: always; */
/* padding: 1.5em 0; */
opacity: 0.6;
font-size: 1.1rem;
z-index: 2;
/* transform: translateX(15%) */
    &:hover {
        opacity: 1;
    }
    &.far-up-2 {
        transform: translate(3rem, -8rem)
    }
    &.adjacent-up-1 {
        transform: translate(6rem, -4rem);
        /* display: none; */
    }

    &.center {
        transform: translateX(10rem);
        opacity: 0.9;
        font-weight: 700;
        font-size: 1.2em
    }
    &.adjacent-down-1 {
        transform: translate(6rem, 4rem);
        /* display: none; */
    }
    &.far-down-2 {
        transform: translate(3rem, 8rem)
    }
`