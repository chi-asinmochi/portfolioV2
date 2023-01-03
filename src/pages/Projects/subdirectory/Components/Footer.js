import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../../../../components/styles/Flex'
import { LogoText } from '../../../../components/styles/LogoText.styled'
import { Logo } from '../../../../components/styles/Nav.styled'
import { TextFragment } from '../../../../components/styles/TextFragment.styled'

const Footer = () => {
  return (
    <Container>
        <Flex>
            <div>
                <Link to='/' className='home-link'>
                        <Logo big={false}
                        > 
                            <TextFragment bottom={true}>SHAWNCHI</TextFragment>
                            <TextFragment bottom={false}>SHAWNCHI</TextFragment>
                            <LogoText text={'SHAWNC'}>SHAWNCHI</LogoText>
                        </Logo>
                </Link>
                <p>Thanks for reading!</p>
            </div>
            <p>© 2021-present Shawn Chi. All Rights Reserved.</p>
        </Flex>
    </Container>
  )
}


export default Footer



const Container = styled.footer`
    box-shadow: 0 -12px 24px #42ffc61A;
    background-color: #07131F;
    width: 100%;

    display: grid;
    place-items: center;

    > div {
        padding: 3em var(--side-padding-sm);
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        flex-wrap: wrap;
        gap: 1em;
        max-width: var(--max-content-width);
        p {
            opacity: 0.7;
            font-size: 0.9rem;
            margin-top: 0.5em;
        }
        & > div p {
            color: var(--blue700);
            opacity: 1;
        }
        & > div {
            margin-right: 4em;
        }
    }
`