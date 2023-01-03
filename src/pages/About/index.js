import React, { useRef, useEffect, useState } from 'react'
import Construction from '../../components/Construction'
import styled from 'styled-components'
import Portrait from './components/Portrait'
import DynamicHeader from '../../components/DynamicHeader'
import ButtonText from '../../components/ButtonText'
import resume from './assets/Shawn-Chi-Resume.pdf'
import { Container, Entries, Entry, BeveledBG, HeadingWrapper, OutlinedText, Label, BarLabelWrapper, Bar, BarChart, BarChartWrapper, } from './styled/MyStats.styled'


function About() {

    const mobileLabelRef = useRef(null)
    const barLabelRefs = useRef([])
    const containerRef = useRef(null)
    const [wrap, setWrap] = useState(false)

    useEffect(() => {

        const checkLabelWidth = () => {

            setWrap(false)
            if (containerRef.current.getBoundingClientRect().width < 450) {
                setWrap(true)
            } 

            barLabelRefs.current.forEach(el => el.style.display = 'initial')
            mobileLabelRef.current.style.display = 'none'

            barLabelRefs.current.forEach(el => {
                let labelWidth = el.getBoundingClientRect().width
                let barWidth = el.parentNode.getBoundingClientRect().width

                if (labelWidth > barWidth) {
                    barLabelRefs.current.forEach(el => {el.style.display = 'none'})
                    mobileLabelRef.current.style.display = 'flex'

                }
            })

        }

        checkLabelWidth()
        window.onresize = () => {
            checkLabelWidth()
        }

    }, [])
    

    return (
        <>
           
            {/* <Particles
                    id="tsparticles"
                    options={tsOption}
            /> */}
        
            {/* <Construction></Construction>  */}
            <DynamicHeader big={false} current='about' inView={true}></DynamicHeader>
            <Main>
                <Portrait></Portrait>
                <Wrapper>
                    <Container ref={containerRef}>
                        <BeveledBG/>
                        <HeadingWrapper>
                            <OutlinedText>Design</OutlinedText>
                            <OutlinedText>X</OutlinedText>
                            <OutlinedText>Engineering</OutlinedText>
                        </HeadingWrapper>
                        <Entries wrapping = {wrap? true : false}>
                            <Entry>
                                <Label>Name</Label>
                                <p>Shawn Chi</p>
                            </Entry>
                            <Entry>
                                <Label>Occupation</Label>
                                <p>Interaction Designer</p>
                            </Entry>
                            <Entry>
                                <Label>Experience</Label>
                                <p>2 years</p>
                            </Entry>
                            <Entry>
                                <Label>Degree</Label>
                                <p>MS Human Factors and Ergonomics
                                    <br/>
                                    BA Psychology
                                </p>
                            </Entry>
                            <Entry>
                                <Label>Bio</Label>
                                <p>An experienced designer with a   solid understanding of UX principles and research methodologies. Skilled in HTML5, Cascading Style Sheets (CSS), Modern Javascript, and React.</p>
                            </Entry>
                            <Entry>
                                <Label>Specialization</Label>
                                <BarChartWrapper>
                                    <BarChart>
                                        <Bar><span ref={(el) => {barLabelRefs.current[0] = el}}>Research</span></Bar>
                                        <Bar><span ref={(el) => {barLabelRefs.current[1] = el}}>Design</span></Bar>
                                        <Bar><span ref={(el) => {barLabelRefs.current[2] = el}}>Front-end</span></Bar>
                                    </BarChart>
                                    <BarLabelWrapper ref={mobileLabelRef} >
                                        <span>Research</span>
                                        <span>Design</span>
                                        <span>Front-end</span>
                                    </BarLabelWrapper>
                                </BarChartWrapper>
                            </Entry>
                        </Entries>
                    </Container>

                    <ButtonText text={'PDF Resume'} active={true} alignment={'end'}
                        onClick={(e) => {
                            e.preventDefault()
                            window.open(resume)
                        }}>
                    </ButtonText>
                </Wrapper>
            </Main>
            
        </>
    )
}


const Main = styled.main`
    /* background: yellow; */
    width: 100%;
    height: 80vh;
    padding: 10vh var(--side-padding) 0 var(--side-padding);
    display: flex;
    letter-spacing: unset;
    justify-content: space-between;
    overflow-x: clip;
    flex-wrap: wrap;

    @media (max-width: 800px) {

    }
`
const Wrapper = styled.div`
    /* margin: 20vh 0 auto auto; */
    padding: 5vh 0;
    width: max(50%, 400px);
    h1 {
        margin-bottom: 0.5em;
    }
    p {
        font-size: 1.2em;
        line-height: 2;
        opacity: 0.9;
    }
    a {
        margin-top: 2em;
    }
    @media (max-width: 800px) {
        margin: auto;
        width: 100%;
        padding-bottom: 15vh;
    }
`


export default About

