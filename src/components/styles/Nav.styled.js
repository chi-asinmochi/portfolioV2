import styled from "styled-components"

export const NeonNav = styled.nav`
    --shadow-color: #8879E7;

    opacity: ${({inView}) => inView? '1' : '0'};
    position: ${({big}) => big? '' : 'fixed'};
    top: 0;
    z-index: 10;
    width: ${({big}) => big? 'min(80vw, 1200px)' : '100%'};
    height: ${({big}) => big? '72%' : 'auto'};
    padding: ${({big}) => big? '8em 0' : ''};
    display: ${({big}) => big? 'grid' : 'block'};
    place-items: center;
    position: ${({big}) => big? 'relative' : ''};
    margin-top: ${({big}) => big? '-8vh' : ''};


    &::after {
        display: ${({big}) => big? 'initial' : 'none'};
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        border: 5px white solid;
        border-radius: 24px;
        filter: drop-shadow(0px 0px 16px var(--blue400));
        animation: flicker 6s infinite alternate;
        pointer-events: none;
    }



    background-image: ${({big}) => big? `transparent` : 'linear-gradient(to bottom, var(--bg-color), var(--bg-trans))'};
    @media (max-width: 800px) {
        /* padding-top: 4vh; */
    }

    @media (max-width: 450px) {
        height: ${({big}) => big? '80%' : 'auto'};
        width: ${({big}) => big? '92vw' : '100%'};
    }

    @keyframes flicker {
        0% {
            opacity: 1;
        }

        20% {
            opacity: 1;
            border: 5px white solid;


        }
        70% {
            opacity: 1;
            border: 4px var(--grey100) solid;

        }

        100% {
            opacity: 1;
            border: 4px white solid;
        }

    }
`
export const NavWrapper = styled.div`
    max-width: var(--max-content-width);
    margin-top: ${
        ({ big }) => big ? '0' : '0'
    };
    width: ${({big}) => big? 'min-content' : '100%'};
    display: flex;
    flex-direction: ${({big}) => big? 'column' : 'row'};
    justify-content: ${({big}) => big? '' : 'space-between'};
    gap: ${({big}) => big? '0em' : ''};
    padding: 1.5em ${({ smPadding }) => smPadding? 'var(--side-padding-sm)' : 'var(--side-padding)'} ;
    .home-link {
        display: flex;
    }
    & > a {
        cursor: ${({big}) => big? 'default' : 'pointer'};
    }
`
export const Logo = styled.div`
    --Blur: ${({ big }) => big? 'blur(4px)' : 'blur(2px)'};
    & {
        margin: auto;
        position: relative;
        animation: fuzzy 4s linear infinite;
    }
    h1 {
        font-size: ${({big}) => big? 'var(--big-logo)' : 'var(--small-logo)'};
        /* letter-spacing: 0.3em; */
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
    align-self: ${({big}) => big? 'center' : 'center'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-family: var(--font-cyber);

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${({big}) => big? '1.5em' : ''};
    }
    li {
        padding: 1em 2em;
        @media (max-width: 800px) {
        padding: 1em;
        }

        font-size: 1.1em;
        --glitch-shadow: 1px 1px 0px var(--pink),
                0px -1px 0px var(--cyan);     

        a {
            text-decoration: none;
            color: #E2E8F0;
            opacity: 1;
            cursor: pointer;
            /* filter: blur(1px); */
            transition: 0.3s all;   
            font-weight: 700;
            letter-spacing: 0.05em

            
        }

        a:hover:not(.current) {
            /* background-color: var(--cyan); */
            opacity: 1;
            /* font-weight: 400; */
            color: pink;
            filter: drop-shadow(2px 4px 8px #ffffff2c);
            text-shadow: var(--glitch-shadow);
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
        padding-right: ${({big}) => big? '' : '0'};
    }
    li:first-of-type {
        padding-left: ${({big}) => big? '' : '0'};
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
export const ScrollHint = styled.span`
    font-family: var(--font-cyber);
    font-weight: 600;
    letter-spacing: 0.2em;
    font-size: 0.9em;
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -0.5em);
    background: linear-gradient(to bottom, #4A8395, #48437D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    animation: fade-in 2s ease-out forwards;
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

`
export const ScrollChev = styled.div`
    --gap: -0.7em;
    --lux: 0.4;
    --delay: 1s;
    --duration: 4s;
    --yPos: 130%;
    display: flex;
    flex-direction: column;
    width: 7em;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, var(--yPos));
    animation: move var(--duration) ease-in var(--delay) infinite;
    
    @keyframes move {
        0% {
            transform: translate(-50%, var(--yPos));
        }
        40% {
            transform: translate(-50%, calc(var(--yPos) + 20%));
        }
        100% {
            transform: translate(-50%, var(--yPos));
        }
    }

    & > img {
        opacity: 0;
        object-fit: contain;
    }

    & > img:nth-of-type(1) {
        animation: dim-1 var(--duration) ease-out var(--delay) infinite;
        @keyframes dim-1 {
            0% {
                opacity: var(--lux);
            }
            60% {
                opacity: 0;
            }
        }
    }
    & > img:nth-of-type(2) {
        margin-top: var(--gap);
        animation: dim-2 var(--duration) ease-out var(--delay) infinite;
        @keyframes dim-2 {
            0% {
                opacity: 0;
            }
            4% {
                opacity: 0;
            }
            5% {
                opacity: var(--lux);
            }
            65% {
                opacity: 0;
            }
        }
    }
    & > img:nth-of-type(3) {
        margin-top: var(--gap);
        animation: dim-3 var(--duration) ease-out var(--delay) infinite;
        @keyframes dim-3 {
            0% {
                opacity: 0;
            }
            9% {
                opacity: 0;
            }
            10% {
                opacity: var(--lux);
            }
            68% {
                opacity: 0;
            }
        }
    } 
`