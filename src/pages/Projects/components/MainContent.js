import React, { useRef, useEffect, useState, } from 'react'
import styled from 'styled-components'
import { ProjectContainer, BG, ProjectWrapper, ProjectCover, Badge, IMG, BadgeWrapper } from './ProjectContainer.styled'
// import WFCover from '../assets/img/WFCover.svg'
import ModalComponent from '../../../components/ModalComponent'
import projectData from '../../../assets/data/Project.data'
import ButtonText from '../../../components/ButtonText'
import { Link } from 'react-router-dom'

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
                                    <Link to={proj.id==0? '/projects/topseedui' : ''} >
                                        <ProjectCover className={proj.content.type == 'iframe'? 'iframe-iframe' : null}  onClick={()=>{
                                            if (proj.id != 0) {
                                                setModal(prev => {
                                                    return ({...prev, isActive: true, projNum: proj.id})
                                                })
                                            }
                                        }}>
                                            
                                            {proj.content.type == 'image'? <IMG src={proj.content.cover} width={'100%'}></IMG> : null}
                                            {proj.content.type == 'iframe'? <iframe src={proj.content.src} className={proj.content.class}></iframe> : null}
                                            {proj.content.type == 'video'? <IMG src={proj.content.cover } width={'auto'}></IMG> : null}
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
                                        <p>TopSeed is a web application for facilitating the sale of pedigree kittens. This case study goes over the design thinking behind the buyer-facing side of the product.</p> : null
                                    }
                                    {proj.id == 1? 
                                        <p>An experimental attempt to visualize wildfire impact and treatment methods through 3D models</p> : null
                                    }
                                    {proj.id == 2? 
                                        <p>A design project for <a href='https://www.fico.com/' target="_blank">Fico</a>'s fraud protection program. This is a B2B enterprise application aimed for managerial employees at banking industries.</p> : null
                                    }
                                    {proj.id == 3? 
                                        <p>Click on the logos to see cards flip. This is an interaction for <a href='https://retool.com/' target='_blank'>Retool</a>'s website designed by <a href='https://ettrics.com/' target='_blank'>Ettrics</a> and was handed off to me for development. View it live <a target='_blank' href={proj.content.link}>here</a></p> : null
                                    }
                                    {proj.id == 4? 
                                        <p>A conceptual app created early in the 2020 in light of the COVID pandemic. Perhaps not very practical but a fun practice for me.</p> : null
                                    }

                                    {proj.action === 'read'? <ButtonText text='Read More' alignment='end' active={true} to='/projects/topseedui'></ButtonText> : null}
                                    {proj.action === 'coming'? <ButtonText text='Coming Soon' alignment='end' active={false} to=''></ButtonText> : null}
                                    
                                    
                                </ProjectWrapper>

                                
                            )
                        })  
                    }


                </ProjectContainer>
            </Main>
        </>
    )
}

export default MainSection

const Main = styled.main`
    display: flex;
    justify-content: flex-end;
    position: relative;
    padding-top: 10vh;

    /* overflow: clip; */

    @media (max-width: 800px) {
        width: 100%;
    }
    /* z-index: 0; */

`