import React from 'react'
import { Wrapper } from './styled'
import chevronRight from '../../assets/icon/chevron-right.svg'
import { Link } from 'react-router-dom'


const ButtonText = ({ text, alignment, color, to }) => {
  return (
    <> 
        <Wrapper alignment = {alignment}>
            <Link to={to}>
                <h4>{text}</h4>
                <img src={chevronRight} alt="" />
            </Link>
        </Wrapper>
    </>
  )
}

export default ButtonText

