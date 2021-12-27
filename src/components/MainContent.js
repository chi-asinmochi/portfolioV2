import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import Picker from './Picker'
import styled from 'styled-components'
import { Frame, ProjectContainer, BG, ProjectWrapper, ProjectCover, IMG } from './styles/ProjectContainer.styled'
import WFCover from '../assets/img/WFCover.svg'

function MainSection() {
    window.onload = () => {
        // alert()
        // console.log('slowRef', slowRef)
    }
    // consol

    const containerRef = useRef(null)
    const mainRef = useRef(null)
    const pickerRef = useRef(null)
    const [scrollAmount, setPickerScroll] = useState(0)
    const [pageLength, setPageLength] = useState(0)
    const [ratio, setRatio] = useState(0)


    // console.log(pickerRef)
    const loadHandler = () => {
        // console.log('loaded')
        setPageLength(containerRef.current.scrollHeight*0.75) 
        // console.log('ContainerHeight', containerRef.current.scrollHeight)
        // console.log('pl1', pageLength)
        mainRef.current.scrollTop = mainRef.current.scrollHeight / 2 - mainRef.current.clientHeight / 2
        // pickerRef.current.onload = () => {
            setRatio(pageLength/pickerRef.current.children[0].children[0].clientHeight + 5)
        // }
        // console.log(pageLength, pickerRef.current.children[0].children[0].clientHeight, ratio)
        // console.log(pickerRef)
        // console.log('scrollheight', pickerRef.current.scrollHeight)
        // console.log(pickerRef.current.children[0].children[0].clientHeight)
    }

    const scrollHandler = (e) => {
        setPickerScroll(mainRef.current.scrollTop / 14)
        console.log(pageLength, mainRef.current.scrollTop/ (pageLength))
        // pickerRef.current.scrollTop = mainRef.current.scrollTop / ratio
    }
    
    

    return (
        <Main ref={mainRef} onScroll={scrollHandler}>
            <Picker pageLength={pageLength} scrollAmount={scrollAmount} mainRef={mainRef} ref={pickerRef} ></Picker>
            <Frame>
                <BG src={WFCover}></BG>
                <ProjectContainer onLoad={loadHandler} ref={containerRef}>
                    <ProjectWrapper >
                        <ProjectCover src={WFCover}>
                            <IMG src={WFCover}></IMG>
                        </ProjectCover>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                        </p>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        <ProjectCover src={WFCover}>
                            <IMG src={WFCover}></IMG>
                        </ProjectCover>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                        </p>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        <ProjectCover src={WFCover}>
                            <IMG src={WFCover}></IMG>
                        </ProjectCover>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                        </p>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        <ProjectCover src={WFCover}>
                            <IMG src={WFCover}></IMG>
                        </ProjectCover>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                        </p>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        <ProjectCover src={WFCover}>
                            <IMG src={WFCover}></IMG>
                        </ProjectCover>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                        </p>
                    </ProjectWrapper>

                </ProjectContainer>
            </Frame>


            
            
        </Main>
    )
}

export default MainSection

const Main = styled.div`
    /* align-items: flex-end; */
    padding: 15vh 10vw 0 10vw;
    /* background: green; */
    height: 90%;
    position: relative;
    overflow: scroll;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 15vh;

    /* top: 10%; */


`