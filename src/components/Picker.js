import React, { useState, useEffect, useRef, useLayoutEffect, useContext } from 'react'
import styled from 'styled-components'
import { SlowLayer, ScrollLayer, ProjectTitle } from './styles/PickerLayers'
import { ScrollContext } from './MainContent'
import projectData from '../data/Project.data'



function Picker({ scrollAmount, setClickState}, ref) {

    const scrollPos = useContext(ScrollContext)
    const scrollPosRef = useRef(3)
    const slowRef = useRef(null)
    const titletRefs = useRef([])
    
    useEffect(() => {
        // console.log('picker', scrollPos)
        // let scrollDiff = scrollPos - scrollPosRef.current
        // console.log('scrolldiff', scrollDiff)
        // titletRefs.current.forEach(el => {
        //     let pos = el.className.slice(-1)
            
            

        //     pos = Number(pos) + scrollDiff
        //     // el.className = el.className.slice(0, el.className.length-1) + pos
        // })
        // scrollPosRef.current = scrollPos

        // console.log(scrollPosRef)
        // titletRefs.current.forEach(el => {
        //     console.log(el.className)
        // })
        // console.log(titletRefs.current[0].className)
        titletRefs.current.forEach((el, i) => {
            if (i == scrollPos - 1) {
                el.classList.add('current')
            } else {
                el.classList.remove('current')
            }
        })

    }, [scrollPos])

    const titleClickHandler = (e) => {
        let i = Number(e.target.id.slice(-1))
        console.log(i)
        setClickState(i+1)
    }



    return (
        <SideBar ref={ref} >
            {/* <ScrollLayer ref={scrollRef} pageLength={pageLength}> */}
                <SlowLayer  ref={slowRef} scrollAmount={scrollAmount}>
                    {/* assign position (classname = pos[0]) to each li and change based on scroll position */}
                    {/* <li>
                        <ProjectTitle ref={el => {titletRefs.current[0] = el}} className='current' id='title-1' onClick={titleClickHandler}>
                            Wildfire.org
                        </ProjectTitle>
                    </li> */}
                    {
                        projectData.map(proj => {
                            return (
                                <li>
                                    <ProjectTitle 
                                    ref={el => {titletRefs.current[proj.id] = el}} 
                                    key={proj.id}
                                    onClick={titleClickHandler}
                                    id={'project-' + proj.id}>
                                        {proj.title}
                                    </ProjectTitle>
                                </li>
                            )
                        })
                    }
                </SlowLayer>
            {/* </ScrollLayer> */}
        </SideBar>
    )
}

const forwardedPicker = React.forwardRef(Picker)

export default forwardedPicker

const SideBar = styled.div`
    /* width: 25%; */
    height: 70%;
    /* background-color: pink; */
    padding: 1em 2em 1em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 15vh;
    position: fixed;
    /* z-index: -1 */
    overflow: scroll;
    /* scroll-snap-type: y mandatory; */

    /* top: 10%; */

`

