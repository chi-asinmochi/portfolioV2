import React, { useState } from 'react'
import MainContent from '../components/MainContent'
import Picker from '../components/Picker'
import styled from 'styled-components'



function Projects() {

    const [scrollPos, setScrollPos] = useState(0);
    const [clickState, setClickState] = useState(0);
    console.log('scrollpos', scrollPos)



    return (
        <>
            <PageLayout>
                <Picker scrollPos={scrollPos} setClickState={setClickState}></Picker>
                <MainContent clickState={clickState} setScrollPos={setScrollPos}></MainContent>
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

