import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import DynamicHeader from '../../components/DynamicHeader'
import { NeonFrame } from './styled/NeonFrame.styled'




export const Hero = ({heroRef}) => {

    const [scaleVar, setScale] = useState(1)

    // const root = document.getElementById('root')
    // root.onscroll = (e) => {
    //     setScale(prev => {
    //         let scale = 1 / root.scrollTop * 40
    //         scale = scale > 1? 1 : scale 
    //         scale = scale < 0.4? 0.4 : scale
    //         return scale
    //     })
    //     console.log(scaleVar)
    // }

    return (
    <Section ref={heroRef} id='home'>
        <NeonFrame scaleVar={scaleVar}/>
        <Wrapper>
            <DynamicHeader big={true} current='home' inView={true}></DynamicHeader>
        </Wrapper>
    </Section>
    )
}

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    scroll-snap-align: start;
    /* flex-shrink: 0; */
    @media (max-width: 450px) {
        height: 90vh;
    }
`
const Wrapper = styled.div`
    height: 100%;
    display: grid;
    place-content: center;

`