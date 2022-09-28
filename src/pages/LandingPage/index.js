import React from 'react'
import DynamicHeader from '../../components/DynamicHeader'
import tsOption from '../../components/styles/TsOptions'
import styled from 'styled-components'
import TypeWriter from '../../components/TypeWriter'


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
                {/* <TypeWriter text={'Hi, This is Shawn. I specialize in the design and development of digital interfaces. Please feel free to poke around at my website!'}/> */}
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
const NeonFrame = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 90%;
    height: 90%;
    border: 4px var(--grey100) solid;
    border-radius: 8px;
    filter: drop-shadow(0px 0px 16px var(--pink));
    animation: flicker 3s infinite alternate;

    @media (max-width: 450px) {
        height: 90%;
        width: 98%;
    }


    @keyframes flicker {
        0% {
            opacity: 1;
            border: 4px var(--grey100) solid;
            /* filter: drop-shadow(0px 0px 32px var(--pink)); */

        }

        68% {
            opacity: 1;
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */


        }
        70% {
            opacity: 0.8;
            /* border: 4px var(--grey100) solid; */
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */


        }
        75% {
            opacity: 1;
            /* border: 4px var(--grey100) solid; */
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */
        }
        75% {
            opacity: 1;
            border: 4px pink solid;
            /* filter: drop-shadow(0px 0px 16px var(--pink)); */
        }

    }
`

export default LandingPage

