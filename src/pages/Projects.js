import React, { useRef, useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
import Picker from '../components/Picker'
import styled from 'styled-components'



function Projects() {

    const pageRef = useRef(null);
    const sideBarRef = useRef(null);
    const titleRefs = useRef([])
    const projectRefs = useRef([])

    const [scrollPos, setscrollPos] = useState(0)

    

    let windowWidth = window.innerWidth
    let breakpoint = 800
    window.addEventListener('resize', ()=> {
        // console.log(window.innerWidth)
        windowWidth = window.innerWidth
    })

    useEffect(() => {
        sideBarRef.current.scrollLeft = 700
        // console.log(sideBarRef.current.scrollLeft += 500)
    },);
    

    // console.log(sideBarRef.current)
    // if (sideBarRef.current != null) {

    // }

    // console.log(titleRefs.current)

    const projObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let observedPos = entry.target.id
                    if (windowWidth < breakpoint) {
                        sideBarRef.current.scrollLeft = 30
                    }
                    titleRefs.current.forEach((el, i) => {
                        if (i == observedPos) {
                            // console.log(el.firstElementChild)
                            el.firstElementChild.classList.add('current')

                            setscrollPos(observedPos)
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
            <PageLayout ref={pageRef}>
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

