import { useState, useRef } from 'react'
import { LogoText } from './styles/LogoText.styled' 
import { Link } from 'react-router-dom'
import { TextFragment } from './styles/TextFragment.styled'
import { Nav, Container, Logo, Menu, Hamburger } from './styles/Nav.styled'
import useSound from 'use-sound'
import sounds from '../assets/audio/data-process.wav' 
import TypeWriter from './TypeWriter'


const letters = '*+-/@_$[%£!XO1&>'

const typeWriterText = 'Hi there, I\'m Shawn. I specialize in the design of digital interfaces. This website is built from scratch with React JS and styled-components. Bear in mind it is still a work in progress but please feel free to poke around nonetheless. Cheers!'
function DynamicHeader({ big, current }) {

    const [play] = useSound(sounds, {
        sprite: {
            in: [0, 320],
            out: [560, 870],
        },
    })
    // console.log(big)
    const [text, setLogoText] = useState('shawnchi')
    const [shuffling, setShuffling] = useState(false)
    const menuRef = useRef(null);

    const shuffle = (e) => {
        if (shuffling || !big)  {return}
        setShuffling(true)
        play({id: 'in'})
        // console.log('shuffle called')   
        let i = 10
        const shuffler = setInterval(() => {
            if (i>0) {
                setLogoText((prev) => {
                    let arr = [...prev].map(l => 
                        letters[parseInt(Math.random()*100%letters.length)]
                    )
                    // console.log('render')
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
                    // console.log('render')
                    return arr
                })
            }
        }, 10);
    }
    const shuffleReady = () => {
        if (!big) {
            return
        }
        play({id: 'in'})
        setShuffling(false)
        // console.log('shuffle ready')
        let i = 10
        const shuffler = setInterval(() => {
            if (i>0) {
                setLogoText((prev) => {
                    let arr = [...prev].map(l => 
                        letters[parseInt(Math.random()*100%letters.length)]
                    )
                    // console.log('render')
                    return arr
                })
                i--
            } else {
                clearInterval(shuffler)
                setLogoText('shawnchi')
                // setShuffling(false)
            }
        }, 20);
    }

    const modalMenuTrigger = (e) => {
        menuRef.current.classList.toggle('modal')
        e.target.classList.toggle('close-btn')
    }

    return (
        <Nav big = {big}>
            <Container big={big} >

                <Link to='/' className='home-link'>
                    <Logo className={current=='project'? 'current' : ''} big={big}
                        onMouseLeave={shuffleReady}
                        onMouseEnter={shuffle}
                        onClick={ (e)=>{if (big) {e.preventDefault()}} }
                    > 
                        <TextFragment bottom={true}>{text}</TextFragment>
                        <TextFragment bottom={false}>{text}</TextFragment>
                        <LogoText text={text}>{text} </LogoText>
                    </Logo>
                </Link>

                <Menu big={big} ref={menuRef}>
                    {big? null :
                    <Hamburger onClick={modalMenuTrigger}>
                        <div className='line'></div>
                    </Hamburger>}
                    <div className='wrapper'>
                        <li><Link id='projects' className={current=='project'? 'current' : ''} to='/projects'>Projects</Link></li>
                        <li><Link id='about' className={current=='about'? 'current' : ''} to='/about'>About</Link></li>
                        <li><Link id='contact' className={current=='contact'? 'current' : ''} to='/contact'>Contact</Link></li>
                    </div>

                </Menu>

                {big? <TypeWriter text={typeWriterText} margin='2em 0 0 0'/> : null}

            </Container>
        </Nav>
    )
}





export default DynamicHeader
