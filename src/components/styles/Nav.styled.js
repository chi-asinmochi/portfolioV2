import styled from "styled-components"

export const Nav = styled.nav`
/* width: 8em; */
${({ big }) => big ? 'display: grid;place-content: center; height 100%' :
 'position: fixed; top: 0; z-index: 10; width: 100%;'}
/* background-color: red; */
`
export const Container = styled.div`
    margin-top: ${
        ({ big }) => big ? 'min(calc(-200px + 8vw), -100px)' : '0'
    };
    width: ${({big}) => big? 'auto' : '100%'};
    display: flex;
    flex-direction: ${({big}) => big? 'column' : 'row'};
    /* gap: 10px; */
    justify-content: ${({big}) => big? '' : 'space-between'};
    padding: 0 10vw;
`
export const Logo = styled.div`
    & {
        position: relative;
        transform: ${({big}) => big ? 'scale(1)' : 'scale(0.2)'};
        transform-origin: left;
        animation: fuzzy 4s linear infinite;
    }
    @keyframes fuzzy {
        0% {
            filter: blur(4px);
        }
        30% {
            filter: blur(0px);
        }
        100% {
            0% {
            filter: blur(0px);
        }
        }
    }
    &:hover {
        cursor: ${({big}) => big? 'default' : 'pointer'};
    }
    &::before, &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1%;
        background-color: ${({ theme }) => theme.colors.background};
        z-index: 4;
        opacity: 0.3;
    }
    &::before {
        /* width: 70%; */
        height: 1%;
        left: 0;
        /* bottom: 60%; */
        animation: glitch-up linear 8s infinite reverse 
    }
    &::after {
        /* top: 40%; */
        /* width: 60%; */
        right: -10%;
        animation: glitch-up linear 6s infinite alternate
    }
    @keyframes glitch-up {
        0% {
            bottom: 10%;
            /* width: 100% */
        }
        28% {
            height: 1%;
        }
        29% {
            height: 5%;
        }
        30%{
            height: 1%;
        }
        59% {
            bottom: 50%;
            /* width: 100%; */
        }
        60% {
            bottom: 20%;
            /* width: 30%; */
        }
        61% {
            bottom: 60%;
            /* opacity: 0.3; */
            /* width: 100%; */
        }
        100% {
            bottom: 90%;
        }
    }
`

export const Menu = styled.ul`
    align-self: ${({big}) => big? 'end' : 'center'};
    display: flex;
    width: 50%;
    justify-content: space-between;
    list-style: none;
    li {
        padding: 1em 2em;

        a {
        text-decoration: none;
        color: grey;
        cursor: pointer;
        filter: blur(1px);
        transition: 0.3s all;   
        }

        a:hover, a.current {
            color: white;
            text-shadow: 0px 0px 6px cyan;
            /* font-size: 1.1em; */
            /* letter-spacing: 0.2em; */
            filter: blur(0px);
            
        }
    }
    li:last-of-type {
        padding-right: 0;
    }

`