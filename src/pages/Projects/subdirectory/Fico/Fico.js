import React from 'react'
import styled from 'styled-components'
import DynamicHeader from '../../../../components/DynamicHeader'
import Footer from '../Components/Footer'

const Fico = () => {
  return (
    <>
        <DynamicHeader big={false} smPadding={true} inView={true}></DynamicHeader>
        
        <Figma src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/8cTCIXVUN2dj0RHMvXw9mF/portfolio?page-id=1501%3A4929&type=design&node-id=2006-5039&viewport=-3444%2C2254%2C0.42&scaling=scale-down-width&hide-ui=1"/>
        {/* <Figma
        src='https://www.figma.com/proto/8cTCIXVUN2dj0RHMvXw9mF/portfolio?page-id=1501%3A4929&node-id=1615%3A7594&viewport=118%2C856%2C0.13&scaling=scale-down-width&hotspot-hints=0&hide-ui=1'
        /> */}
        {/* <Footer></Footer> */}
    </>


  )
}

export default Fico


const Figma = styled.iframe`
    width: 100%;
    height: 100%;
    border-style: none;
    overscroll-behavior: auto;
`