import React, { useRef, useEffect, useState } from 'react'
import MainContent from './components/MainContent'
import Picker from '../../components/Picker'
import styled from 'styled-components'

import DynamicHeader from '../../components/DynamicHeader'

function Projects({ projectsRef, inView }) {

    const sideBarRef = useRef(null);
    const titleRefs = useRef([])
    const projectRefs = useRef([])
    const scrollRef = useRef(0)

    const [scrollPos, setscrollPos] = useState(0)



    

    let windowWidth = window.innerWidth
    let breakpoint = 800
    window.addEventListener('resize', ()=> {
        // console.log(window.innerWidth)
        windowWidth = window.innerWidth
    })


    const projObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    let observedPos = Number(entry.target.id)

                    let  SITVSupported = false;
                    setscrollPos(observedPos)
                    
                    if (windowWidth < breakpoint) {
                        titleRefs.current[observedPos].scrollIntoView({inline: 'start', behavior: 'smooth'})
                        
                        setTimeout(() => {
                            titleObserver.observe(titleRefs.current[observedPos])
                        }, 500);
                    } else {
                        titleObserver.disconnect()
                    }
                    

                    titleRefs.current.forEach((el, i) => {
                        if (i == observedPos) {
                            // console.log(el.firstElementChild)
                            el.firstElementChild.classList.add('current')
                            

                        } else {
                            el.firstElementChild.classList.remove('current')
                        }
                    })
                } 
                // else if (!entry.isIntersecting) {
                // }
            })
        },
        {
            // root: graphFrameRef.current,
            threshold: 1,
        }
    )

    useEffect(() => {
      scrollRef.current = scrollPos
    }, [scrollPos])

    const titleObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    let observedPos = Number(entry.target.id.slice(-1))
                    titleObserver.disconnect()
                } 
                else if (!entry.isIntersecting) {
                    let observedPos = Number(entry.target.id.slice(-1))
                    
                    let scrollPercent
                    switch (observedPos) {
                        case 0:
                            scrollPercent = 0
                            break;
                        case 1:
                            scrollPercent = 0.19
                            break;
                        case 2:
                            scrollPercent = 0.39
                            break;
                        case 3:
                            scrollPercent = 0.58
                            break;
                        case 4:
                            scrollPercent = 0.78
                            break;
                        default:
                            scrollPercent = 0
                            break;
                    }    
                    sideBarRef.current.scrollLeft = scrollPercent * (sideBarRef.current.scrollWidth)
                }
            })
        },
        {
            // root: graphFrameRef.current,
            threshold: 0.5,
        }
    )



    useEffect(() => {
        projectRefs.current.forEach(proj => {
            projObserver.observe(proj)
        })
        titleRefs.current[0].classList.add('current')
        // titleRefs.current.forEach(title => {
        //     titleObserver.observe(title)
        // })
        return () => {
          projObserver.disconnect()
          titleObserver.disconnect()
        //   titleObserver.disconnect()
        //   console.log('ob disconnected')
        };
      });


      const titleClickHandler = (e) => {
        let clickedPos = Number(e.target.id.slice(-1))
        // setClickState(i)
        projectRefs.current.forEach((proj, i)=> {
            if (i == clickedPos) {
                proj.scrollIntoView({behavior: 'smooth'})
            }
        })
    }

    return (
        <>
            <DynamicHeader big={false} current='project' inView={inView}></DynamicHeader>
            <PageLayout id='projects' ref={projectsRef}
            >
                <Picker sideBarRef={sideBarRef} titleRefs={titleRefs} titleClickHandler={titleClickHandler} inView={inView}></Picker>
                <MainContent inView={inView} projectRefs={projectRefs} scrollPos={scrollPos}></MainContent>

            </PageLayout>
        </>

    )
}

export default Projects

const PageLayout = styled.section`
    padding: 0 var(--side-padding);
    width: 100%;
    max-width: var(--max-content-width);
    height: 100vh;
    overflow: scroll;
    position: relative;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    /* scroll-margin-top: 0px; */
    @media (max-width: 420px) {
        scroll-snap-type: y mandatory;
        scroll-padding-bottom : max(calc(20vh - 5vw), 12vh);
    }
` 

