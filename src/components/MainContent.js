import React, { useRef, useEffect, useState, } from 'react'
import styled from 'styled-components'
import { ProjectContainer, BG, ProjectWrapper, ProjectCover, IMG } from './styles/ProjectContainer.styled'
import WFCover from '../assets/img/WFCover.svg'
import ModalComponent from './ModalComponent'
import projectData from '../data/Project.data'

export const ScrollContext = React.createContext()

function MainSection({ projectRefs, scrollPos}) {

    const containerRef = useRef(null)
    const mainRef = useRef(null)

    const [modalState, setModal] = useState({isActive: false, projNum: 0})

    

    return (
        <>
            {modalState.isActive? <ModalComponent modalState={modalState} setModal={setModal}></ModalComponent> : null }
            <Main ref={mainRef} >
                <BG src={projectData[scrollPos].content.cover}></BG>
                <ProjectContainer ref={containerRef}>
                    {
                        projectData.map((proj, i) => {
                            return (
                                <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                                >
                                    
                                    <ProjectCover className={proj.content.type == 'iframe'? 'iframe-iframe' : null}  onClick={()=>{setModal(prev => {
                                        return ({...prev, isActive: true, projNum: proj.id})
                                    })}}>
                                        
                                        {proj.content.type == 'image'? <IMG src={proj.content.cover}></IMG> : null}
                                        {proj.content.type == 'iframe'? <iframe src={proj.content.src} className={proj.content.class}></iframe> : null}
                                        {proj.content.type == 'video'? <IMG src={proj.content.cover } width='400px' max-height='100%'></IMG> : null}
                                    </ProjectCover>
                                    {proj.id == 0? 
                                        <p>Wildfires.org is a website (in design and development phase) for a fire-tech startup that aims to mitigate the mega-fire crisis in US by visualizing the true impact of wildfires and understanding our progress of fuel treatment</p> : null
                                    }
                                    {proj.id == 1? 
                                        <p>An experimental attempt to visualize wildfire impact and treatment methods through 3D models</p> : null
                                    }
                                    {proj.id == 2? 
                                        <p>An animation for a card flipping interaction. Designed by <a href='https://ettrics.com/' target='_blank'>Ettrics</a> and was handed off to me for development. Finalized by <a href='https://retool.com/' target='_blank'>Retool</a>'s internal engineers. <a target='_blank' href={proj.content.link}>View live</a></p> : null
                                    }
                                    {proj.id == 3? 
                                        <p>A design project for <a href='https://www.fico.com/' target="_blank">Fico</a>'s fraud protection program. This is a B2B enterprise application aimed for managerial employees at banking industries.</p> : null
                                    }
                                    {proj.id == 4? 
                                        <p>A conceptual app created early in the 2020 in light of the COVID pandemic. Perhaps not very practical but a fun practice for me.</p> : null
                                    }
                                    
                                </ProjectWrapper>
                            )

                            // switch (proj.content.type) {
                            //     case 'image':
                            //         return (
                            //             <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                            //             >
                            //                 <ProjectCover  onClick={()=>{setModal(prev => {
                            //                     return ({...prev, isActive: true, projNum: proj.id})
                            //                 })}}>
                            //                     <IMG src={proj.content.cover}></IMG>
                            //                 </ProjectCover>
                            //                 <p>{proj.intro}</p>
                            //             </ProjectWrapper>
                            //         )
                            //         break;
                            //     case 'iframe':
                            //         return (
                            //             <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                            //             >
                            //                 <ProjectCover className='iframe-frame'>
                            //                     <iframe src={proj.content.src} className={proj.content.class}></iframe>
                            //                 </ProjectCover>
                            //                 <p>
                            //                     {proj.intro}
                            //                     <a href={proj.content.link} target='_blank' className='externalLink'>
                            //                         {proj.content.hasOwnProperty('link')? "View live here" : null}
                            //                     </a>
                            //                 </p>
                            //             </ProjectWrapper>
                            //         )
                            //         break;
                            //         case 'video':
                            //             return (
                            //                 <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                            //                 >
                            //                     <ProjectCover onClick={()=>{setModal(prev => {
                            //                         return ({...prev, isActive: true, projNum: proj.id})
                            //                     })}}>
                            //                         <IMG src={proj.content.cover } width='400px' max-height='100%'></IMG>
                            //                     </ProjectCover>
                            //                     <p>{proj.intro}</p>
                            //                 </ProjectWrapper>
                            //             )
                            //             break;
                            //     default:
                            //         break;
                            // }

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