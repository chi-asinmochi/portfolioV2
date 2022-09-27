import React, { useRef, useEffect } from 'react'
import Construction from '../../components/Construction'
import styled from 'styled-components'
import Portrait from './components/Portrait'
import DynamicHeader from '../../components/DynamicHeader'
import ButtonText from '../../components/ButtonText'
import resume from './assets/Shawn-Chi-Resume.pdf'


function About() {

    const mobileLabelRef = useRef(null)
    const barLabelRefs = useRef([])

    useEffect(() => {

        const checkLabelWidth = () => {

            barLabelRefs.current.forEach(el => el.style.display = 'initial')
            mobileLabelRef.current.style.display = 'none'

            barLabelRefs.current.forEach(el => {
                let labelWidth = el.getBoundingClientRect().width
                let barWidth = el.parentNode.getBoundingClientRect().width
                console.log(labelWidth, barWidth)

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
            <DynamicHeader big={false} current='about'></DynamicHeader>
            <Main>
                <Portrait></Portrait>
                <Wrapper>
                    <Container>
                        <BeveledBG/>
                        <HeadingWrapper>
                            <OutlinedText>Design</OutlinedText>
                            <OutlinedText>X</OutlinedText>
                            <OutlinedText>Engineering</OutlinedText>
                        </HeadingWrapper>
                        <Entries>
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
                                <p>An experienced designer with solid understanding of UX principles and research methodologies. Skilled in HTML5, Cascading Style Sheets (CSS), Modern Javascript, and React.</p>
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

const VFlex = styled.div`
    display: flex;
    flex-direction: column;
`
const HFlex = styled.div`
    display: flex;
    flex-direction: row;
`

const Main = styled.main`
    /* background: yellow; */
    width: 100%;
    height: 80vh;
    padding: 0 var(--side-padding);
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
const Container = styled.div`
    position: relative;
    padding: 3em 1.5em;

`
const BeveledBG = styled.div`
    background: linear-gradient(to bottom, rgba(123, 191, 253, 0.2), rgba(200, 255, 242, 0));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(3em 0%, 100% 0, 100% 100%, 0 100%, 0% 3em);
` 

const OutlinedText = styled.h1`
    font-size: 5em;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;

`



const HeadingWrapper = styled(VFlex)`
    position: relative;
    top: 0;
    left: -3.5em;
    line-height: 0.6;
    margin-bottom: 1em;

    h1:nth-of-type(1) {
        -webkit-text-stroke-color: var(--neon-green);
    }
    h1:nth-of-type(2) {
        -webkit-text-stroke-color: var(--blue700);
        font-size: 7em;
        font-weight: 900;
        position: absolute;
        z-index: -1;
        left: 2.5em;
        top: 0.3em;
    }
    h1:nth-of-type(3) {
        -webkit-text-stroke-color: var(--purple200);
    }
`
const Entries = styled(VFlex)`
    gap: 0.8em;
`

const Entry = styled(HFlex)`
    gap: 1.5em;
    align-items: start;
    font-size: 0.9rem;
    line-height: 1.4;
    p {
        line-height: 1.4;
        color: var(--blue500);
    }
`
const Label = styled.h4`
    font-size: 1rem;
    letter-spacing: 0.05em;
    width: 8.5em;
    flex-shrink: 0;
    text-align: end;
    color: var(--grey100);
`
const BarChartWrapper = styled(VFlex)`
    width: 100%;
    /* gap: 2em; */
`

const BarChart = styled(HFlex)`
    /* align-self: center; */
    margin: 0.6em 0 0.6em 0;
    gap: 4px;
    width: 100%;
    
    div:nth-of-type(1) {
        width: 15%;
        background: var(--grey100);
        color: var(--grey100);
    }
    div:nth-of-type(2) {
        width: 50%;
        background: var(--neon-green);
        color: var(--neon-green);
    }
    div:nth-of-type(3) {
        width: 35%;
        background: var(--purple500);
        color: var(--purple500);
    }
`
const Bar = styled.div`
    background: var(--blue700);
    height: 3px;
    border-radius: 6px;
    position: relative;

    span {
        position: absolute;
        top: 0.5em;
        left: 50%;
        transform: translateX(-50%);
        white-space: noWrap;
    }
`
const BarLabelWrapper = styled(VFlex)`
    display: none;
    /* margin-bottom: -6em; */

    span:nth-of-type(1) {
        color: var(--grey100);
    }
    span:nth-of-type(2) {
        color: var(--neon-green);
    }
    span:nth-of-type(3) {
        color: var(--purple500);
    }
` 


export default About

