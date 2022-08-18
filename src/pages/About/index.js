import React from 'react'
import Construction from '../../components/Construction'
import styled from 'styled-components'
import Portrait from './components/Portrait'
import Particles from 'react-tsparticles'
import tsOption from '../../components/styles/TsOptions'
import DynamicHeader from '../../components/DynamicHeader'

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
                    <h1>A Designer Who Codes</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Thinking of something catchy.
                    </p>
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
    letter-spacing: 0.3em;
    justify-content: space-between;
    /* overflow-x: visible; */

    @media (max-width: 800px) {
        flex-wrap: wrap;
        /* gap: 30vh; */

    }
`
const Wrapper = styled.div`
    margin: auto 0 auto auto;
    width: 45%;
    h1 {
        font-size: 2.5em;
        margin-bottom: 1em;
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

