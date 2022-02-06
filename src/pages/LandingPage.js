import React from 'react'
import Particles from 'react-tsparticles'
import particleImg from '../assets/img/particle.svg'
import tsOption from '../components/styles/TsOptions'

function LandingPage() {

        
    // const particlesInit = (main) => {
    //     console.log(main);
    
    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // };
    
    // const particlesLoaded = (container) => {
    //     console.log(container);
    


    return (
        <>
            <Particles
                    id="tsparticles"
                    // init={particlesInit}
                    // loaded={particlesLoaded}
                    options={tsOption}
            />
        </>
    )
}

export default LandingPage

