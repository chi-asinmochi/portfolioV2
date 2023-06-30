import { useState, useRef, useEffect } from 'react'
import { LogoText } from './styles/LogoText.styled' 
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { TextFragment } from './styles/TextFragment.styled'
import { Nav, Container, Logo, Menu, Hamburger } from './styles/Nav.styled'
import useSound from 'use-sound'
import sounds from '../assets/audio/data-process.wav' 
import TypeWriter from './TypeWriter'


const greeting = 'Shawnchi'
const scrambles = '*+-/@_$[%£!XO1&>'

const typeWriterText = 'Hi there, I\'m Shawn. I specialize in the design & development of digital interfaces. Fun fact, this website is built from scratch with React JS. Please bear with me if you catch any WIP. Cheers!'
function DynamicHeader({ big, current, smPadding, inView }) {

    const [play] = useSound(sounds, {
        sprite: {
            in: [0, 320],
            out: [560, 870],
        },
    })
    // console.log(big)
    const [text, setLogoText] = useState(greeting)
    const [shuffling, setShuffling] = useState(false)
    const menuRef = useRef(null);

    const homeRef = useRef(null)
    const projectsRef = useRef(null)


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
                        scrambles[parseInt(Math.random()*100%scrambles.length)]
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
                                return scrambles[parseInt(Math.random()*100%scrambles.length)]
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
                        scrambles[parseInt(Math.random()*100%scrambles.length)]
                    )
                    return arr
                })
                i--
            } else {
                clearInterval(shuffler)
                setLogoText(greeting)
                // setShuffling(false)
            }
        }, 20);
    }

    const modalMenuTrigger = (e) => {
        menuRef.current.classList.toggle('modal')
        e.target.classList.toggle('close-btn')
    }

    return (
        <Nav big = {big} inView={inView}>
            <Container big={big} smPadding={smPadding}>

                <HashLink to='/#home' smooth ref={homeRef} className='home-link'>
                    <Logo className={current=='project'? 'current' : ''} big={big}
                        onMouseLeave={shuffleReady}
                        onMouseEnter={shuffle}
                        onClick={ (e)=>{if (big) {e.preventDefault()}} }
                    > 
                        <TextFragment bottom={true}>{text}</TextFragment>
                        <TextFragment bottom={false}>{text}</TextFragment>
                        <LogoText text={text}>{text} </LogoText>
                    </Logo>
                </HashLink>

                <Menu big={big} ref={menuRef}>
                    {big? null :
                    <Hamburger onClick={modalMenuTrigger}>
                        <div className='line'></div>
                    </Hamburger>}
                    <div className='wrapper'>
                        <li><Link id='projects' className={current=='project'? 'current' : ''} to='/#projects' smooth >Projects</Link></li>
                        <li><Link id='about' className={current=='about'? 'current' : ''} to='/about'>About</Link></li>
                        <li><Link id='contact' className={current=='contact'? 'current' : ''} to='/contact'>Contact</Link></li>
                    </div>

                </Menu>

                {big? <TypeWriter text={typeWriterText} margin='0.5em 0 0 0'/> : null}

            </Container>
        </Nav>
    )
}





export default DynamicHeader
