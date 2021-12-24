import React from 'react'
import Picker from './Picker'
import styled from 'styled-components'
import { Frame, ProjectContainer, BG, ProjectWrapper, ProjectCover, IMG } from './styles/ProjectContainer.styled'
import WFCover from '../assets/img/WFCover.svg'

function MainSection() {
    return (
        <Main>
            <Picker></Picker>
            <Frame>
                <BG src={WFCover}></BG>
                <ProjectContainer>
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
    padding: 0 10vw;
    /* background: green; */
    height: 90%;
    position: relative;
    /* overflow: scroll; */
    /* top: 10%; */


`