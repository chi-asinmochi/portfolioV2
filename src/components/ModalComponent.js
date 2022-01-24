import React, { useState, useRef } from 'react'
import { Modal, ModalContainer, GraphFrame, Overlay, SliderControl, TextFrame, Slot } from './styles/Modal.styled'
// import cover from '../assets/img/WFChart.png'
import projectData from '../data/Project.data'

export default function ModalComponent({ modalState, setModal }) {

    const graphFrameRef = useRef(null)
    const imgRefs = useRef([])
    const scrollIndicators = useRef([])
    const [slideInView, setSlideInView] = useState(0)
    // console.log(graphFrameRef)

    const observer = new IntersectionObserver(
        entries => {
            // console.log(entries)
            entries.forEach(entry => {
                // console.log(entry)
                if (entry.isIntersecting) {
                    
                    setSlideInView(entry.target.id)
                    console.log(slideInView)
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

    // console.log(imgRefs.current)
    if (imgRefs.current.length != 0) {
        // console.log(imgRefs.current)
        imgRefs.current.forEach(item => {
            observer.observe(item)
        })
    } 
    
    return (
        <Modal show = {modalState.isActive}>
            <Overlay  onClick={() => {setModal(prev => {
                return ({...prev, isActive: false})
            })}
            //clear observer?
            }></Overlay>
            <ModalContainer>
                <GraphFrame ref={graphFrameRef}>
                    {projectData[modalState.projNum].slides.map((slide, i) => {
                        return <img src={slide.image} id={i} key={i} ref={ el => imgRefs.current[i] = el}></img>
                    })}
                </GraphFrame>
                <SliderControl>
                    {/* <Slot className='active'></Slot> */}
                    {projectData[modalState.projNum].slides.map((slide, i) => {
                        return <Slot key={i} ref={ el => scrollIndicators.current[i] = el}></Slot>
                    })}
 
                </SliderControl>

                <TextFrame>
                    <p>
                        {projectData[modalState.projNum].slides[slideInView].text}
                    </p>
                    
                </TextFrame>

            </ModalContainer> 
            <div className='gradient'></div>
        </Modal>
    )

}

