import React from 'react'
import styled from 'styled-components'
import {ProjectWrapper, ProjectCover as DisplayWindow, IMG } from './ProjectContainer.styled'



const ProjectDisplay = ({ contentType, contentCover, contentSrc, description }) => {
  return (
    <>
        <ProjectWrapper>
            <DisplayWindow>
                {contentType == 'image'? <IMG src={contentCover}></IMG> : null}
                {contentType == 'iframe'? <iframe src={contentSrc} className={proj.content.class}></iframe> : null}
                {contentType == 'video'? <IMG src={contentCover } width='300px' max-height='100%'></IMG> : null}
            </DisplayWindow>
            <BadgeWrapper>
                <Badge>UI</Badge>
                <Badge>Design System</Badge>
            </BadgeWrapper>
            {description}
        </ProjectWrapper>
    </>
  )
}

export default ProjectDisplay

// const DisplayWindow = styled.div`
//     width: 40em;
//     height:30em;
//     overflow: hidden;
// `
