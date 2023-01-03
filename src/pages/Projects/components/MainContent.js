import React, { useRef, useEffect, useState, } from 'react'
import styled from 'styled-components'
import { ProjectContainer, BG, ProjectWrapper, ProjectCover, Badge, IMG, BadgeWrapper } from './ProjectContainer.styled'
// import WFCover from '../assets/img/WFCover.svg'
import ModalComponent from '../../../components/ModalComponent'
import projectData from '../../../assets/data/Project.data'
import ButtonText from '../../../components/ButtonText'
import { Link } from 'react-router-dom'

export const ScrollContext = React.createContext()

function MainSection({ projectsRef, projectRefs, scrollPos, inView}) {

    const containerRef = useRef(null)
    // const mainRef = useRef(null)

    const [modalState, setModal] = useState({isActive: false, projNum: 0})

    const iframeRefs = useRef([])

    

    return (
        <>
            {modalState.isActive? <ModalComponent modalState={modalState} setModal={setModal}></ModalComponent> : null }
            <Main id='projects' ref={projectsRef} >
                <BG inView={inView}
                    src={
                    projectData[scrollPos].content.type === 'gif'?
                    projectData[scrollPos].content.staticCover :
                    projectData[scrollPos].content.cover}>
                </BG>
                <ProjectContainer ref={containerRef}>
                    {
                        projectData.map((proj, i) => {
                            
                            return (


                                <ProjectWrapper key={proj.id} ref={el => {projectRefs.current[i] = el}} id={proj.id}
                                >
                                    <Link to={proj.url? proj.url : ''} >
                                        <ProjectCover className={proj.content.type == 'iframe'? 'iframe-iframe' : null}  onClick={()=>{
                                            if (proj.id === 5) {
                                                setModal(prev => {
                                                    return ({...prev, isActive: true, projNum: proj.id})
                                                })
                                            } 
                                            // else if (proj.id === 2) {
                                            //     window.open(proj.url)
                                            // }
                                        }}>
                                            {proj.content.type == 'image'? <IMG loading='lazy' src={proj.content.cover} width={'100%'}></IMG> : null}
                                            {proj.content.type == 'gif'? <video loading='lazy' autoPlay muted loop playsInline><source src={proj.content.src} type='video/mp4'></source></video> : null}
                                            {proj.content.type == 'iframe'? <iframe ref={el => {iframeRefs.current[proj.id] = el}} src={proj.content.src} className={proj.content.class}></iframe> : null}
                                            {proj.content.type == 'video'? <IMG loading='lazy' src={proj.content.cover } width={'auto'}></IMG> : null}
                                        </ProjectCover>
                                    </Link>


                                    <BadgeWrapper>
                                        {('badge' in proj)? proj.badge.map((item) => {
                                            return (
                                                <Badge>{item}</Badge>
                                            )
                                        }): null}
                                    </BadgeWrapper>

                                    {proj.id == 0? 
                                        <p>A dashboard design for <a href='https://www.fico.com/' target="_blank">Fico</a>'s fraud protection program. This is a B2B enterprise application aimed for managerial employees at banking industries.</p> : null
                                    }

                                    {proj.id == 1? 
                                        <p>TopSeed is a web application for facilitating the sale of pedigree kittens. This case study goes over the design thinking behind the buyer-facing side of the product.</p> : null
                                    }
                                    {proj.id == 2? 
                                       <p>The design system for Segment's marketing site. Direct contribution includes components such as the logo carousel, accordion, and buttonText.</p> : null

                                    }
                                    {proj.id == 3? 
                                        <p>An experimental attempt to visualize wildfire impact and treatment methods through 3D models.</p> : null

                                    }
                                    {proj.id == 4? 
                                        <p>Click on the logos to see cards flip. This is an interaction for <a href='https://retool.com/' target='_blank'>Retool</a>'s website designed by <a href='https://ettrics.com/' target='_blank'>Ettrics</a> and was handed off to me for development. View it live <a target='_blank' href={proj.content.link}>here.</a></p> : null
                                    }
                                    {proj.id == 5? 
                                        <p>A conceptual app created early in the 2020 in light of the COVID pandemic. Perhaps not very practical but a fun practice for me.</p> : null
                                    }

                                    {proj.action === 'read'? <ButtonText text='Read more' alignment='end' active={true} to={proj.url} onClick={() => {
                                        // if (proj.id === 2) {
                                        //     window.open(proj.url)
                                        // }
                                    }}></ButtonText> : null}
                                    {proj.action === 'coming'? <ButtonText text='Details coming soon' alignment='end' active={false} to=''></ButtonText> : null}
                                    

                                </ProjectWrapper>

                                
                            )
                        })  
                    }

                    <div className='empty-space' style={{opacity: 0}}>empty yo</div>
                </ProjectContainer>
            </Main>
        </>
    )
}

export default MainSection

const Main = styled.main`
    padding: 0 var(--side-padding);
    width: 100%;
    max-width: var(--max-content-width);
    display: flex;
    justify-content: flex-end;
    /* padding-bottom: 10vh; */


    @media (max-width: 800px) {
        width: 100%;
    }
    /* z-index: 0; */

`


