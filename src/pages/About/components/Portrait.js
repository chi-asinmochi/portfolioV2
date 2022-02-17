import React from 'react'
import styled from 'styled-components'
import { Polygon } from '../styled'
import picture from '../assets/profile-pic.png'
import picture2 from '../assets/picture-v1.png'

const Portrait = () => {
  return (
    <Frame>
        <Polygon>
            <img src={picture2}></img>
        </Polygon>


        <svg style={{visibility: 'hidden'}, {position: 'absolute'}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
        </svg>
    </Frame>

  )
}

const Frame = styled.div`
    /* filter: url('#goo'); */
`

export default Portrait