import React from 'react'
import { Wrapper } from './styled'
import chevronRight from '../../assets/icon/chevron-right.svg'
import { Link } from 'react-router-dom'


const ButtonText = ({ text, alignment, color, to, active}) => {
  return (
    <> 
        <Wrapper alignment = {alignment} active={active}>
            <Link to={to}>
                <h4 >{text}</h4>
                {active? <img src={chevronRight} alt="" /> : null}
            </Link>
        </Wrapper>
    </>
  )
}

export default ButtonText

