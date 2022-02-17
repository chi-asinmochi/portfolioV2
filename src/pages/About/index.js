import React from 'react'
import Construction from '../../components/Construction'
import styled from 'styled-components'
import Portrait from './components/Portrait'
import Particles from 'react-tsparticles'
import tsOption from '../../components/styles/TsOptions'

function About() {


    return (
        <>
           
            <Particles
                    id="tsparticles"
                    // init={particlesInit}
                    // loaded={particlesLoaded}
                    options={tsOption}
            />
        
            {/* <Construction></Construction>  */}
            <Main>
                <Portrait></Portrait>
                <Wrapper>
                    <h1>A Designer Who Codes</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. I should probably say something humble yet imporessive here.
                    </p>
                </Wrapper>
            </Main>
            
        </>
    )
}

const Main = styled.main`
    /* background: yellow; */
    width: 100%;
    height: 100%;
    padding: 15vh var(--side-padding);
    display: flex;
    letter-spacing: 0.3em;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-wrap: wrap;
        gap: 30vh;

    }
`
const Wrapper = styled.div`
    margin: auto 0 auto auto;
    width: 45%;
    h1 {
        font-size: 2.5em;
        margin-bottom: 1.8em;
    }
    p {
        font-family: var(--font-cyber);
        font-size: 1.2em;
        line-height: 2;
    }
    @media (max-width: 800px) {
        width: 100%;
        padding-bottom: 15vh;
    }

`

export default About

