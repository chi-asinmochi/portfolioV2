import React from 'react'
import styled from 'styled-components'
import DynamicHeader from '../../components/DynamicHeader'
import { NeonFrame } from './styled/NeonFrame.styled'




export const Hero = ({heroRef}) => {
  return (
    <Section ref={heroRef} id='home'>
        <NeonFrame/>
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
`
const Wrapper = styled.div`
    height: 90%;
    display: grid;
    place-content: center;

`