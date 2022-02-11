import React, { useRef, useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
import Picker from '../components/Picker'
import styled from 'styled-components'



function Projects() {

    const pageRef = useRef(null);
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

    // useEffect(() => {
    //     sideBarRef.current.scrollLeft = 0
    // },);
    

    // console.log(sideBarRef.current)
    // if (sideBarRef.current != null) {

    // }

    // console.log(titleRefs.current)

    const projObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    let observedPos = Number(entry.target.id)
                    if (windowWidth < breakpoint) {
                        let scrollPercent
                        switch (observedPos) {
                            case 0:
                                scrollPercent = 0.17
                                break;
                            case 1:
                                scrollPercent = 0.23
                                break;
                            case 2:
                                scrollPercent = 0.28
                                break;
                            case 3:
                                scrollPercent = 0.34
                                break;
                            case 4:
                                scrollPercent = 0.44
                                break;
                            default:
                                scrollPercent = 0.17
                                break;
                        }
                        // sideBarRef.current.scrollLeft = observedPos/5 * (sideBarRef.current.scrollWidth)
                    }
                    titleRefs.current.forEach((el, i) => {
                        if (i == observedPos) {
                            // console.log(el.firstElementChild)
                            el.firstElementChild.classList.add('current')

                            setscrollPos(observedPos)
                            
                            titleRefs.current[i].scrollIntoView({inline: 'start', behavior: 'smooth'})
                            // console.log( titleRefs.current[i], ' should be scrolled')


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

        // const titleObserver = new IntersectionObserver(
    //     entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 let scrollPos = entry.target.id
    //                 titleRefs.current.forEach((el, i) => {
    //                     if (i == scrollPos) {
    //                         el.classList.add('current')
    //                     } else {
    //                         el.classList.remove('current')
    //                     }
    //                 })
    //             } 
    //             // else if (!entry.isIntersecting) {
    //             // }
    //         })
    //     },
    //     {
    //         // root: graphFrameRef.current,
    //         threshold: 0.8,
    //     }
    // )



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
        //   titleObserver.disconnect()
          console.log('ob disconnected')
        };
      });


      const titleClickHandler = (e) => {
        let clickedPos = Number(e.target.id.slice(-1))
        console.log('clcked id ', clickedPos)
        // setClickState(i)
        projectRefs.current.forEach((proj, i)=> {
            if (i == clickedPos) {
                proj.scrollIntoView({behavior: 'smooth'})
                console.log(`scroll ${proj.id} into view`)
            }
        })
    }

    return (
        <>
            <PageLayout ref={pageRef}
            // onScroll={(e) => {
            //     console.log(e.target.scrollTop/ e.target.scrollHeight)
            // }}
            >
                <Picker sideBarRef={sideBarRef} titleRefs={titleRefs} titleClickHandler={titleClickHandler}></Picker>
                <MainContent projectRefs={projectRefs} scrollPos={scrollPos}></MainContent>
            </PageLayout>
        </>

    )
}

export default Projects

const PageLayout = styled.div`
    padding: 0 var(--side-padding);
    display: flex;
    /* overflow: scroll; */
    scroll-snap-type: y mandatory;
    /* scroll-padding-top: 15vh; */
    /* display: none; */
    height: 100vh;
    overflow: scroll;

` 

