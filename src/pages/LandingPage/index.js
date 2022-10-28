import React from 'react'
import DynamicHeader from '../../components/DynamicHeader'
import tsOption from '../../components/styles/TsOptions'
import styled from 'styled-components'
import TypeWriter from '../../components/TypeWriter'
import { NeonFrame } from './styled/NeonFrame.styled'


function LandingPage() {

        
    // const particlesInit = (main) => {
    //     console.log(main);
    
    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // };
    
    // const particlesLoaded = (container) => {
    //     console.log(container);
    


    return (
        <>  
            <NeonFrame/>
            <Wrapper>
                <DynamicHeader big={true} current='home'></DynamicHeader>
                {/* <Particles
                        id="tsparticles"
                        // init={particlesInit}
                        // loaded={particlesLoaded}
                        options={tsOption}
                /> */}
            </Wrapper>

        </>
    )
}

const Wrapper = styled.div`
    height: 90%;
    display: grid;
    place-content: center;

`

export default LandingPage

