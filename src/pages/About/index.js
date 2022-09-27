import React from 'react'
import Construction from '../../components/Construction'
import styled from 'styled-components'
import Portrait from './components/Portrait'
import DynamicHeader from '../../components/DynamicHeader'
import ButtonText from '../../components/ButtonText'
import resume from './assets/Shawn-Chi-Resume.pdf'

function About() {


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
                        <VFlex>
                            <OutlinedText>Design</OutlinedText>
                            <OutlinedText>X</OutlinedText>
                            <OutlinedText>Engineering</OutlinedText>
                        </VFlex>
                        <VFlex>
                            <Entry>
                                <Label>Name</Label>
                                <p>Shawn Chi</p>
                            </Entry>
                            <Entry>
                                <Label>Name</Label>
                                <p>Shawn Chi</p>
                            </Entry>
                            <Entry>
                                <Label>Name</Label>
                                <p>Shawn Chi</p>
                            </Entry>
                        </VFlex>


                    </Container>

                    <ButtonText text={'Resume'} active={true} 
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
    padding: 0 var(--side-padding);
    display: flex;
    letter-spacing: unset;
    justify-content: space-between;
    overflow-x: clip;

    @media (max-width: 800px) {
        flex-wrap: wrap;
        /* gap: 30vh; */

    }
`
const Wrapper = styled.div`
    margin: 20vh 0 auto auto;
    width: 45%;
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

`
const BeveledBG = styled.div`

` 

const OutlinedText = styled.h1`

`

const Label = styled.h4`

`
const VFlex = styled.div`
    display: flex;
    flex-direction: column;
`
const HFlex = styled.div`
    display: flex;
    flex-direction: row;
`
const Entry = styled(HFlex)`
    gap: 1em;
    align-items: start;
    line-height: 1.4;
    p {
        line-height: 1.4;
    }
`

export default About

