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
                    <h1>A UX Generalist</h1>
                    <p>
                        Being someone who enjoys doing a bit of everything, I have juggled between fields, from research to design to development. Sometimes it’s a curse and sometimes a blessing. Either way it’s shaped me into who I am today.
                    </p>
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

export default About

