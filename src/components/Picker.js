import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { SlowLayer, ScrollLayer, ProjectTitle } from './styles/PickerLayers'


function Picker({ pageLength, scrollAmount, mainRef}, ref) {

    // const [scrollAmount, setScrollAmount] = useState(0)
    // console.log('mainRef', mainRef)
    const scrollRef = useRef(null)
    const slowRef = useRef(null)

    // console.log('main', mainRef)

    // console.log(loadHandler2)
    // useEffect(() => {
    //     console.log('scrollRef', scrollRef)
    //     scrollRef.current.scrollTop = scrollAmount
    // }, [scrollAmount])
    // slowRef.current.scrollTop = scrollAmount / 14
    


    useLayoutEffect(() => {
        // console.log('sidebarScrollHeight',sideBarRef.current.scrollHeight)
        // console.log('pagelength', pageLength)
        // pickerRef.current.scrollTop = pageLength/2 - pickerRef.current.clientHeight/2
        // console.log('sblength', sideBarRef.current.clientHeight)
        // console.log('half page', sideBarRef.current.clientHeight/2)
    }, [pageLength])

    // const scrollHandler = (e) => {
    //     setScrollAmount(e.target.scrollTop / 16)
    // }
    // console.log('pl2', pageLength)
    // console.log('scrollAmount', scrollAmount)
    return (
        <SideBar ref={ref} >
            {/* <ScrollLayer ref={scrollRef} pageLength={pageLength}> */}
                <SlowLayer  ref={slowRef} scrollAmount={scrollAmount}>
                    {/* assign position (classname = pos[0]) to each li and change based on scroll position */}
                    <li><ProjectTitle className='far-up-2'>Dummy</ProjectTitle></li>
                    <li><ProjectTitle className='adjacent-up-1'>Lorem</ProjectTitle></li>
                    <li><ProjectTitle className='center'>Data Vis</ProjectTitle></li>
                    <li><ProjectTitle className='adjacent-down-1'>Ipsum</ProjectTitle></li>
                    <li><ProjectTitle className='far-down-2'>Wildfire</ProjectTitle></li>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    /* z-index: -1 */
    overflow: scroll;
    /* scroll-snap-type: y mandatory; */

    /* top: 10%; */

`

