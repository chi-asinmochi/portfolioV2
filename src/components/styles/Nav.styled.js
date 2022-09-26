import styled from "styled-components"

export const Nav = styled.nav`
/* width: 8em; */
    position: ${({big}) => big? '' : 'sticky'};
    top: 0;
    z-index: 10;
    width: ${({big}) => big? 'auto' : '100%'};
    background-image: ${({big}) => big? `transparent` : 'linear-gradient(to bottom, var(--bg-color), var(--bg-trans))'};
    @media (max-width: 800px) {
        padding-top: 4vh;
    }


/* background-color: red; */
`
export const Container = styled.div`
    margin-top: ${
        ({ big }) => big ? '0' : '0'
    };
    width: ${({big}) => big? 'min-content' : '100%'};
    display: flex;
    flex-direction: ${({big}) => big? 'column' : 'row'};
    /* gap: 10px; */
    justify-content: ${({big}) => big? '' : 'space-between'};
    gap: ${({big}) => big? '' : ''};
    padding: 1.5em var(--side-padding);
    .home-link {
        display: flex;
    }
    & > a {
        cursor: ${({big}) => big? 'default' : 'pointer'};
    }
`
export const Logo = styled.div`
    --Blur: ${({ big }) => big? 'blur(8px)' : 'blur(4px)'};
    & {
        margin: auto;
        position: relative;
        animation: fuzzy 4s linear infinite;
    }
    h1 {
        font-size: ${({big}) => big? 'var(--big-logo)' : 'var(--small-logo)'};
    }
    @keyframes fuzzy {
        0% {
            filter: var(--Blur);
        }
        30% {
            filter: blur(0px);

        }
        100% {
            filter: blur(0px);

        }
    }
    &::before, &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1%;
        background-color: var(--bg-color);
        z-index: 4;
        opacity: 0.3;
    }
    &::before {
        /* width: 70%; */
        height: 4%;
        /* background-color: var(--blue500); */
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
            /* background-color: var(--bg-color); */
        }
        29% {
            height: 100%;
            /* background-color: var(--blue800); */
        }
        30%{
            height: 1%;
            /* background-color: var(--bg-color); */
        }
        59% {
            bottom: 50%;
            background-color: var(--bg-color);
        }
        60% {
            bottom: 20%;
            background-color: var(--pink);
        }
        61% {
            bottom: 60%;
            background-color: var(--bg-color);
        }
        100% {
            bottom: 90%;
        }
    }
`

export const Menu = styled.ul`
    align-self: ${({big}) => big? 'flex-start' : 'center'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-family: var(--font-cyber);
    gap: 1em;
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    li {
        padding: 1em 2em;
        font-size: 1.1em;
        --glitch-shadow: 1px 1px 0px var(--pink),
                0px -1px 0px var(--cyan);     

        a {
            text-decoration: none;
            color: var(--blue500);
            opacity: 1;
            font-size: ${({ big }) => big? '1.1em' : '1em'};
            cursor: pointer;
            /* filter: blur(1px); */
            transition: 0.3s all;   
            font-weight: 500;
            letter-spacing: 0.05em

            
        }

        a:hover:not(.current) {
            /* background-color: var(--cyan); */
            color: white;
            opacity: 1;
            /* font-weight: 400; */

            text-shadow: ${({big}) => big? 'var(--glitch-shadow)' : '' };

        }
        
        a.current {
            color: white;
            text-shadow: var(--glitch-shadow);
            /* letter-spacing: 0.1em; */

            /* font-size: 1.1em; */
            /* letter-spacing: 0.2em; */
            /* font-weight: 400; */
            opacity: 1;

        }
    }
    li:last-of-type {
        padding-right: 0;
    }
    li:first-of-type {
        padding-left: 0;
    }
    

    

    @media (max-width: ${({ big }) => big? '0px':'800px'}) {
        .wrapper {
            flex-direction: column;
            align-items: flex-end;
            position: absolute;
            right: var(--side-padding);
            top: 30vh;
            text-align: right;
            transform: translate(0, -100%);
            transition: all 0.6s;
            li {
                transition: all 0.3s;
                padding: 0;
                opacity: 0;
                
            }
        }
        &.modal {
            .wrapper {
                transform: unset;
                li {
                    transition: all ease-out 0.6s;
                    padding: 1.2em 0 1.2em 1.2em;
                    opacity: 1;
                }
            }
            ::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                backdrop-filter: blur(4px);
            /* z-index: 1; */
            }
            ::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: var(--bg-color);
                opacity: 0.6;
                z-index: -1;
            }

        }


    }

`
export const Hamburger = styled.div`
    --length: 1.6em;
    --thickness: 1px;
    --scaleUp: 0%;
    width: var(--length);
    height: var(--length);
    position: relative;
    cursor: pointer;
    opacity: 0.8;
    display: none;

    &:hover {
        --thickness: 1px;
        --scaleUp: 20%;
        opacity: 1;
    }

    &::before {
        position: absolute;
        content: '';
        width: 200%;
        height: 200%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .line, .line::before, .line::after {
        pointer-events: none;
        position: absolute;
        height: var(--thickness);
        background-color: white;
        transition: all 0.4s;
        right: 0;
        /* z-index: 0; */
    }

    .line {
        width: calc(70% + var(--scaleUp));
        top: 50%;
    }
    .line::before {
        content: "";
        width: calc(120% + var(--scaleUp));
        top: calc(var(--length) * -0.4);
    }
    .line::after {
        content: "";
        width: calc(60% + var(--scaleUp));
        bottom: calc(var(--length) * -0.4);
    }

    &.close-btn {
        .line::before {
            width: calc(100%);
            transform: rotate(84deg);
            top: 0;
        }
        .line {
            width: calc(105% + var(--scaleUp));
            transform: rotate(-42deg);
        }
        .line::after {
            width: 0px;
            /* opacity: 0; */
        }
    } 
    @media (max-width: 800px) {
            display: block;
        }
`