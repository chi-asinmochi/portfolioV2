import React from 'react'
import styled from 'styled-components'

const AnchorLink = ({secondary, text, href, anchor}) => {
  return (
    <Link href='' onClick={console.log(anchor)}>{text}</Link>
  )
}

export default AnchorLink

