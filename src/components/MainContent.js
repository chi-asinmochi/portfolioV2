import React, { useRef, useEffect, useState, } from 'react'
import styled from 'styled-components'
import { ProjectContainer, BG, ProjectWrapper, ProjectCover, IMG } from './styles/ProjectContainer.styled'
import WFCover from '../assets/img/WFCover.svg'
import ModalComponent from './ModalComponent'
import projectData from '../data/Project.data'

export const ScrollContext = React.createContext()

function MainSection({ projectRefs}) {

    const containerRef = useRef(null)
    const mainRef = useRef(null)

    const [modalState, setModal] = useState({isActive: false, projNum: 0})



    return (
        <>
            {modalState.isActive? <ModalComponent modalState={modalState} setModal={setModal}></ModalComponent> : null }
            <Main ref={mainRef} >
                <BG src={WFCover}></BG>
                <ProjectContainer ref={containerRef}>
                    {
                        projectData.map((proj, i) => {
                            switch (proj.content.type) {
                                case 'image':
                                    return (
                                        <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
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
                                        >
                                            <ProjectCover className='iframe-frame'>
                                                <iframe src={proj.content.src} className={proj.content.class}></iframe>
                                            </ProjectCover>
                                            <p>
                                                {proj.intro}
                                                <a href={proj.content.link} target='_blank' className='externalLink'>
                                                    {proj.content.hasOwnProperty('link')? "View live here" : null}
                                                </a>
                                            </p>
                                        </ProjectWrapper>
                                    )
                                    break;
                                    case 'video':
                                        return (
                                            <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                                            >
                                                <ProjectCover onClick={()=>{setModal(prev => {
                                                    return ({...prev, isActive: true, projNum: proj.id})
                                                })}}>
                                                    <IMG src={proj.content.cover } width='400px' max-height='100%'></IMG>
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
            </Main>
        </>
    )
}

export default MainSection

const Main = styled.main`
    position: relative;
    padding-top: 15vh;
    @media (max-width: 800px) {
        width: 100%;
    }
    /* z-index: 0; */

`