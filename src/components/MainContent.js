import React, { useRef, useEffect, useState, useMemo, useLayoutEffect } from 'react'
import Picker from './Picker'
import styled from 'styled-components'
import { Frame, ProjectContainer, BG, ProjectWrapper, ProjectCover, IMG } from './styles/ProjectContainer.styled'
import WFCover from '../assets/img/WFCover.svg'


export const ScrollContext = React.createContext()

function MainSection() {

    const containerRef = useRef(null)
    const mainRef = useRef(null)
    const pickerRef = useRef(null)
    const testRef = useRef(null)
    const firstRender = useRef(true)
    const projectRefs = useRef([])

    const [scrollAmount, setPickerScroll] = useState(0)
    const [pageLength, setPageLength] = useState(0)
    const [ratio, setRatio] = useState(0)
    const [scrollPos, setScrollPos] = useState(1)
    const [clickState, setClickState] = useState(3)


    // console.log(pickerRef)
    const loadHandler = () => {
        setPageLength(containerRef.current.scrollHeight*0.75) 
        // mainRef.current.scrollTop = mainRef.current.scrollHeight / 2 - mainRef.current.clientHeight / 2
        setRatio(pageLength/pickerRef.current.children[0].children[0].clientHeight + 5)
    }


    const scrollHandler = (e) => {
        setPickerScroll(mainRef.current.scrollTop / 14)
        let progress = mainRef.current.scrollTop * 100 / pageLength
        switch (true) {
            case (progress < 5):
                // console.log('pos 1')
                setScrollPos(1)
                break;
            case (progress > 20 && progress < 30):
                // console.log('pos 2')
                setScrollPos(2)
                break;
            case (progress > 45 && progress < 55):
                // console.log('pos 3')
                setScrollPos(3)
                break;
            case (progress > 70 && progress < 80):
                // console.log('pos 4')
                setScrollPos(4)
                break;
            case (progress > 90):
                // console.log('pos 5')
                setScrollPos(5)
                break;
            default:
                break;
        }
        // pickerRef.current.scrollTop = mainRef.current.scrollTop / ratio
    }
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        } else {
            projectRefs.current.forEach((proj, i)=> {
                if (i == clickState - 1) {
                    proj.scrollIntoView({behavior: 'smooth'})
                }
            })
        }
    }, [clickState])


    return (
        <Main ref={mainRef} onScroll={scrollHandler}>
            <ScrollContext.Provider value={scrollPos} >
                <Picker pageLength={pageLength} scrollAmount={scrollAmount} mainRef={mainRef} ref={pickerRef} setClickState={setClickState} ></Picker>
                <Frame>
                    <BG src={WFCover}></BG>
                    <ProjectContainer onLoad={loadHandler} ref={containerRef}>
                        <ProjectWrapper ref={el => {projectRefs.current[0] = el}} >
                            <ProjectCover src={WFCover}>
                                <IMG src={WFCover}></IMG>
                            </ProjectCover>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                            </p>
                        </ProjectWrapper>
                        <ProjectWrapper ref={el => {projectRefs.current[1] = el}}>
                            <ProjectCover src={WFCover}>
                                <IMG src={WFCover}></IMG>
                            </ProjectCover>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                            </p>
                        </ProjectWrapper>
                        <ProjectWrapper ref={el => {projectRefs.current[2] = el}}>
                            <ProjectCover src={WFCover}>
                                <IMG src={WFCover}></IMG>
                            </ProjectCover>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                            </p>
                        </ProjectWrapper>
                        <ProjectWrapper ref={el => {projectRefs.current[3] = el}}>
                            <ProjectCover src={WFCover}>
                                <IMG src={WFCover}></IMG>
                            </ProjectCover>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                            </p>
                        </ProjectWrapper>
                        <ProjectWrapper ref={el => {projectRefs.current[4] = el}}>
                            <ProjectCover src={WFCover}>
                                <IMG src={WFCover}></IMG>
                            </ProjectCover>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras donec amet, ac id lorem. Pharetra, ornare varius tellus non vel, in libero elementum.
                            </p>
                        </ProjectWrapper>

                    </ProjectContainer>
                </Frame>
            </ScrollContext.Provider>
 
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