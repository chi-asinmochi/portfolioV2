import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Frame } from '../styled'

import selfie2 from '../assets/portrait-pink.png'



const Portrait = () => {

    const blurRef = useRef(0)
    const [blur, setBlur] = useState(0)
    const blurMax = 18

    let i = 0
    const hoverHandler = (hovered) => {
        // console.log(hovered)
        // if (hovered) {
        //     if (blurRef.current < blurMax) {
        //         setBlur(blurRef.current)
        //         blurRef.current++
        //             hoverHandler(true)
        //     } else {
        //         return
        //     }
        // } else {
        //     if (blurRef.current > 1) {
        //         setBlur(blurRef.current)
        //         blurRef.current--
        //         // setTimeout(() => {
        //             hoverHandler(false)
        //         // }, 70);
        //     } else {
        //         return
        //     }
        // }

    }


    


    return (
        <Frame onMouseEnter={()=>hoverHandler(true)} onMouseLeave={()=>hoverHandler(false)}>
            {/* <Polygon> */}
                <img src={selfie2}></img>
                
            {/* </Polygon> */}


            {/* <svg style={{visibility: 'hidden'}, {position: 'absolute'}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg> */}
        </Frame>

  )
}

export default Portrait