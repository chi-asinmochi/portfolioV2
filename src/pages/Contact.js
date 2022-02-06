import React from 'react'
import Particles from 'react-tsparticles'
import tsOption from '../components/styles/TsOptions'
import Construction from '../components/Construction'

function Contact() {


    return (
        <>
            <Particles id="tsparticles" options={tsOption}/>
            <Construction></Construction>
        </>
    )
}

export default Contact

