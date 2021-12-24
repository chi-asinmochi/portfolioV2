import { useState } from 'react'
import { LogoText } from './styles/LogoText.styled' 
import { TextFragment } from './styles/TextFragment'
import { Nav, Container, Logo, Menu } from './styles/Nav.styled'


const letters = '*+-/@_$[%£!XO1&>'

function DynamicHeader({ big }) {
    console.log(big)
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
        <Nav big = {big}>
            <Container big={big}  >
                <Logo big={big} onMouseLeave={shuffleReady} onMouseEnter={shuffle}> 
                    <TextFragment bottom={true}>{text}</TextFragment>
                    <TextFragment bottom={false}>{text}</TextFragment>
                    <LogoText text={text} shuffling={shuffling}>{text} </LogoText>
                </Logo>
                <Menu big={big}>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </Menu>
            </Container>
        </Nav>
    )
}





export default DynamicHeader
