import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Ul, ScrollLayer, ProjectTitle } from './styles/PickerLayers.styled'
import projectData from '../assets/data/Project.data';


function Picker({ titleRefs, titleClickHandler, sideBarRef, inView}) {

    // const scrollPos = useContext(ScrollContext)
    useEffect(() => {
        console.log('picker in view', inView)
    },[inView])

    

    return (

        <Ul ref={sideBarRef} inView={inView} id='sideBar'
            // onScroll={(e)=> {
            //     console.log(e.target.scrollLeft/ e.target.scrollWidth)
            // }}
        >
            {
                projectData.map(proj => {
                    return (
                        <li 
                            key={'li-' + proj.id}
                            id={'li-' + proj.id}
                            ref={el => {titleRefs.current[proj.id] = el}} 
                            
                        >
                            <ProjectTitle key={'title-' + proj.id} id={'title-' + proj.id} onClick={titleClickHandler}>
                                {proj.title}
                            </ProjectTitle>
                        </li>
                    )
                })
            }
        </Ul>

    )
}


export default Picker

const SideBar = styled.div`

`

