import React, { useState, useRef, useEffect } from 'react'
import { Modal, ModalContainer, GraphFrame, Overlay, SliderControl, TextFrame, Slot } from './styles/Modal.styled'
// import cover from '../assets/img/WFChart.png'
import projectData from '../assets/data/Project.data'
import styled from 'styled-components'

export default function ModalComponent({ modalState, setModal }) {

    const graphFrameRef = useRef(null)
    const imgRefs = useRef([])
    const scrollIndicators = useRef([])
    const [slideInView, setSlideInView] = useState(0)
    // console.log(graphFrameRef)

    // console.log(modalState)

    const observer = new IntersectionObserver(
        entries => {
            // console.log(entries)
            entries.forEach(entry => {
                // console.log(entry)
                if (entry.isIntersecting) {
                    
                    setSlideInView(entry.target.id)
                    // console.log(slideInView)
                    scrollIndicators.current[entry.target.id].classList.add('active')
                    
                } else if (!entry.isIntersecting) {
                    // console.log('no')
                    scrollIndicators.current[entry.target.id].classList.remove('active')
                }
            })
        },
        {
            root: graphFrameRef.current,
            threshold: 0.5,
        }
    )

    // clear nulls in ref 
    // if (imgRefs.current.length != 0) {
    //     console.log(imgRefs.current)
    //     imgRefs.current.forEach(item => {
    //         if (item != null) {observer.observe(item)}
    //     })
    // } 

    //Something's weird here!!!!!!
    // Try using different images for different projects
    useEffect(() => {
        if (imgRefs.current.length != 0) {
            imgRefs.current.forEach(item => {
                if (item != null) {observer.observe(item)}
            })
        } 
        return () => {
            observer.disconnect()
            // setSlideInView(0)
        };
    }, []);
    
    return (
        <Modal show = {modalState.isActive}>
            <Overlay  onClick={() => {setModal(prev => {
                // imgRefs.current.forEach(item => {
                //     observer.unobserve(item)
                // })
                return ({...prev, isActive: false})
                })
                // observer.disconnect()
                // setSlideInView(0)
            }
            //clear observer?
            }></Overlay>
            {
                projectData[modalState.projNum].content.type == 'video'?
                <Video autoPlay controls>
                    <source src={projectData[modalState.projNum].content.src} type='video/mp4'></source>
                </Video> :
                <>
                    <ModalContainer>
                        <GraphFrame ref={graphFrameRef} contentType={projectData[modalState.projNum].content.type}>
                            {
                                projectData[modalState.projNum].slides?.map((slide, i) => {
                                    return <img src={slide.image} id={i} key={i} ref={ el => imgRefs.current[i] = el}></img>
                                })
                            }

                        </GraphFrame>
                        
                        <SliderControl>
                            {projectData[modalState.projNum].slides?.map((slide, i) => {
                                return <Slot key={i} ref={ el => scrollIndicators.current[i] = el}></Slot>
                            })}
            
                        </SliderControl>

                        <TextFrame>
                            <p>
                                {projectData[modalState.projNum].slides?.[slideInView].text}
                            </p>
                        </TextFrame>

                    </ModalContainer> 
                    <div className='gradient'></div>
                </>
            }

            
        </Modal>
    )

}

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    z-index: 12;
`