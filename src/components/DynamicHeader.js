import { useState } from 'react'
import { LogoText } from './styles/LogoText.styled' 
import { Link } from 'react-router-dom'
import { TextFragment } from './styles/TextFragment.styled'
import { Nav, Container, Logo, Menu } from './styles/Nav.styled'


const letters = '*+-/@_$[%£!XO1&>'

function DynamicHeader({ big, current }) {
    // console.log(big)
    const [text, setLogoText] = useState('shawnchi')
    const [shuffling, setShuffling] = useState(false)

    const shuffle = (e) => {
        if (shuffling) {return}
        setShuffling(true)
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

    return (
        <Nav big = {big}>
            <Container big={big} >
                <Link to='/'>
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

                <Menu big={big}>
                    <li><Link id='projects' className={current=='project'? 'current' : ''} to='/projects'>Projects</Link></li>
                    <li><Link id='about' className={current=='about'? 'current' : ''} to='/about'>About</Link></li>
                    <li><Link id='contact' className={current=='contact'? 'current' : ''} to='/contact'>Contact</Link></li>
                </Menu>
            </Container>
        </Nav>
    )
}





export default DynamicHeader
