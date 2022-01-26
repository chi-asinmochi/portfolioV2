import React, { useRef, useEffect, useState, } from 'react'
import styled from 'styled-components'
import { ProjectContainer, BG, ProjectWrapper, ProjectCover, IMG } from './styles/ProjectContainer.styled'
import WFCover from '../assets/img/WFCover.svg'
import ModalComponent from './ModalComponent'
import projectData from '../data/Project.data'

export const ScrollContext = React.createContext()

function MainSection({ setScrollPos, clickState}) {

    const containerRef = useRef(null)
    const mainRef = useRef(null)
    // const pickerRef = useRef(null)
    // const testRef = useRef(null)
    // const firstRender = useRef(true)
    const projectRefs = useRef([])

    // const [scrollAmount, setPickerScroll] = useState(0)
    // const [pageLength, setPageLength] = useState(0)
    // const [ratio, setRatio] = useState(0)
    const [modalState, setModal] = useState({isActive: false, projNum: 0})

    const projObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                // console.log(entry.target)
                if (entry.isIntersecting) {

                    setScrollPos(entry.target.id)
                    
                } else if (!entry.isIntersecting) {
                }
            })
        },
        {
            // root: graphFrameRef.current,
            threshold: 1,
        }
    )

    console.log(projectRefs.current)


    useEffect(() => {
        projectRefs.current.forEach(proj => {
            projObserver.observe(proj)
        })
        return () => {
          projObserver.disconnect()
        };
      }, []);

    useEffect(() => {
        projectRefs.current.forEach((proj, i)=> {
            if (i == clickState) {
                proj.scrollIntoView({behavior: 'smooth'})
            }
        })
    }, [clickState])


    


    return (
        <>
            <ModalComponent modalState={modalState} setModal={setModal}></ModalComponent>
            <Main ref={mainRef} >
                {/* <ScrollContext.Provider value={scrollPos}> */}
                    {/* <Picker pageLength={pageLength} scrollAmount={scrollAmount} mainRef={mainRef} ref={pickerRef} setClickState={setClickState} ></Picker> */}
                    {/* <Frame> */}
                        <BG src={WFCover}></BG>
                        <ProjectContainer ref={containerRef}>
                            {
                                projectData.map((proj, i) => {
                                    switch (proj.content.type) {
                                        case 'image':
                                            return (
                                                <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                                                // onLoad={(e) => {OBSRV(e.target)}}
                                                >
                                                    <ProjectCover  onClick={()=>{setModal(prev => {
                                                        return ({...prev, isActive: true, projNum: proj.id})
                                                    })}}>
                                                        <IMG src={proj.content.cover}></IMG>
                                                    </ProjectCover>
                                                    <p>{proj.intro}</p>
                                                </ProjectWrapper>
                                            )
                                            break;
                                        case 'iframe':
                                            return (
                                                <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                                                // onLoad={(e) => OBSRV(e.target)}
                                                >
                                                    <ProjectCover>
                                                        <iframe src={proj.content.src} className={proj.content.class}></iframe>
                                                    </ProjectCover>
                                                    <p>
                                                        {proj.intro}
                                                        <a href={proj.content.link} className='externalLink'>
                                                            {proj.content.hasOwnProperty('link')? "View live" : null}
                                                        </a>
                                                    </p>
                                                </ProjectWrapper>
                                            )
                                            break;
                                            case 'video':
                                                return (
                                                    <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                                                    // onLoad={(e) => OBSRV(e.target)}
                                                    >
                                                        <ProjectCover>
                                                            <IMG src={proj.content.cover}></IMG>
                                                        </ProjectCover>
                                                        <p>{proj.intro}</p>
                                                    </ProjectWrapper>
                                                )
                                                break;
                                        default:
                                            break;
                                    }

                                })
                            }

                        </ProjectContainer>
                    {/* </Frame> */}
                {/* </ScrollContext.Provider> */}
    
            </Main>
        </>
    )
}

export default MainSection

const Main = styled.main`
    position: relative;
    padding-top: 15vh;


`