import React, { useState } from 'react'
import DynamicHeader from '../components/DynamicHeader'
import MainContent from '../components/MainContent'
import { Overlay, ModalContainer, Modal, SliderControl, Slot, GraphFrame, TextFrame } from '../components/Modal.styled.js'
import cover from '../assets/img/WFChart.png'



function Projects() {

    const [show, setShow] = useState(true)


    return (
        <>
            <Modal show = {show}>
                <Overlay  onClick={() => {setShow(false)}}></Overlay>
                <ModalContainer>
                    <GraphFrame>
                        <img src={cover}></img>
                    </GraphFrame>
                    
                    <SliderControl>
                        <Slot className='active'></Slot>
                        <Slot></Slot>
                        <Slot></Slot>
                        <Slot></Slot>
                        <Slot></Slot>
                    </SliderControl>
                    <TextFrame>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.
                    </TextFrame>
                </ModalContainer>


                
            </Modal>
            
            <MainContent>
            </MainContent>
        </>

    )
}

export default Projects
