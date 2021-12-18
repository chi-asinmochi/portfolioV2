import styled from 'styled-components'
import { useState } from 'react'
import { LogoText } from './styles/LogoText.styled' 
import { TextFragment } from './styles/TextFragment'


const letters = '*+-/@_$[%£!XO1&>'

function DynamicHeader({ big }) {
    let isBig = big
    const [text, setLogoText] = useState('shawnchi')
    const [shuffling, setShuffling] = useState(false)

    const shuffle = (e) => {
        if (shuffling) {return}
        setShuffling(true)
        console.log('shuffle called')
        let i = 10
        const shuffler = setInterval(() => {
            if (i>0) {
                setLogoText((prev) => {
                    let arr = [...prev].map(l => 
                        letters[parseInt(Math.random()*100%letters.length)]
                    )
                    console.log('render')
                    return arr
                })
                i--
            } else {
                clearInterval(shuffler)
                setLogoText(prev => {
                    let arr = [...prev].map((l, i) => {
                        switch (i) {
                            case 1:
                                return 'h'
                                break
                            case 2:
                                return 'e'
                                break
                            case 4:
                                return 'l'
                                break
                            case 5:
                                return 'l'
                                break
                            case 6:
                                return 'o'
                                break
                            default:
                                return letters[parseInt(Math.random()*100%letters.length)]
                        }
                    }
                    )
                    console.log('render')
                    return arr
                })
            }
        }, 10);
    }
    const shuffleReady = () => {
        setShuffling(false)
        console.log('shuffle ready')
        let i = 10
        const shuffler = setInterval(() => {
            if (i>0) {
                setLogoText((prev) => {
                    let arr = [...prev].map(l => 
                        letters[parseInt(Math.random()*100%letters.length)]
                    )
                    console.log('render')
                    return arr
                })
                i--
            } else {
                clearInterval(shuffler)
                setLogoText('shawnchi')
                // setShuffling(false)
            }
        }, 10);
    }


    return (
        <BigNav>
            <Container onMouseLeave={shuffleReady} onMouseEnter={shuffle} >
                <Logo> 
                    <TextFragment bottom={true}>{text}</TextFragment>
                    <TextFragment bottom={false}>{text}</TextFragment>
                    <LogoText text={text} shuffling={shuffling}>{text} </LogoText>
                </Logo>
                <Menu>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </Menu>
            </Container>
        </BigNav>
    )
}

const BigNav = styled.nav`
    /* width: 8em; */
    height: ${({ big }) => big ? '100%' : ''};
    display: grid;
    place-content: center;
    /* background-color: red; */
`
const Logo = styled.div`
    & {
        position: relative;
        transform: ${({big}) => big ? 'scale(1)' : 'scale(0.2)'};
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

const Menu = styled.ul`
    align-self: end;
    display: flex;
    gap: calc(40px + 5vw);
    list-style: none;
`

const Container = styled.div`
    margin-top: ${
        ({ big }) => big ? 'min(calc(-200px + 8vw), -100px)' : '0'
    };
    display: flex;
    flex-direction: ${({big}) => big? 'column' : 'row'};
    gap: 10px;
    
`

export default DynamicHeader
