import React, { useEffect, useRef, useState } from 'react'
import DynamicHeader from '../../../../components/DynamicHeader'
import { Footer } from '../styles/Footer.styled'
import { Logo } from '../../../../components/styles/Nav.styled'
import { TextFragment } from '../../../../components/styles/TextFragment.styled'
import { LogoText } from '../../../../components/styles/LogoText.styled'
import { Link } from 'react-router-dom'
import { CopyText, Hero, Main, Narration, div, SummarySection, Picture, HeroImg, Industry, Improve, How, InfoArchSection, VisualSection } from '../styles/NewLayout.styled'
import { VFlex, HFlex } from '../../../../components/styles/Flex'

// import AnchorLink from '../Components/AnchorLink'

import zoomIcon from '../TopSeed/assets/zoom.svg'
import coinIcon from '../TopSeed/assets/coin.svg'
import thinkIcon from '../TopSeed/assets/think.svg'
import cover from '../TopSeed/assets/cat-profile-tiny.png'
import logo from '../TopSeed/assets/logo.svg'
import flow from '../TopSeed/assets/flow.svg'
import meta from '../TopSeed/assets/meta.svg'
import radar1 from '../TopSeed/assets/radar1.svg'
import wire from '../TopSeed/assets/wire.svg'


const TopSeed = () => {

  const root = document.querySelector('root')

  return (
    <>
        <DynamicHeader big={false}></DynamicHeader>
        <Main>
            <Hero>
                <VFlex spacing={'4em'} style={{width: '18em'}}>
                    <img src={logo}  style={{width: '6em', marginBottom: '-2em'}} alt="" />
                    <VFlex spacing={'0.2em'} >
                        <h1>TopSeed</h1>
                        <h3>C2C Pet eCommerce of pedigree kittens</h3>
                    </VFlex>
                    <VFlex spacing={'1em'}>
                        <VFlex>
                            <h5>My Role</h5>
                            <p>Lead UI/UX Designer</p>
                        </VFlex>
                        <VFlex>
                            <h5>Project Type</h5>
                            <p>Web Application</p>
                        </VFlex>
                    </VFlex>
                </VFlex>
                <HeroImg>
                    <img src={cover} alt="" />
                </HeroImg>
            </Hero>

            <Industry>
                <CopyText sm={false} salient={false}>
                    <h2>Things about the industry</h2>
                    <p>In order to empathize with the users we’ve browsed over 50 breeder websites and spoke with both breeders and cat buyers to gain insights on the pedigree cat market.</p>
                </CopyText>
                <img src={zoomIcon} alt="" />
            </Industry>

            <SummarySection red={true}>
                <h1>Problems</h1>
                <ol>
                    <li>
                        <div><span>1</span></div>
                        <VFlex>
                            <p>Kittens lack description and individuality</p>
                            <p>One litter can have 3-8 kittens and a breeder may not have the time and knowledge to create a strong online presence for every kitten, especially when they could be taking care of multiple litters at the same time.</p>
                        </VFlex>
                    </li>
                    <li>
                        <div><span>2</span></div>
                        <VFlex>
                            <p>Risky offline payments</p>
                            <p>Payments between buyers and breeders take many form from cash to checks to wire transfer to Venmo. Both parties are at risk of fraud when transactions are unregulated and not monitored. </p>
                        </VFlex>
                    </li>
                    <li>
                        <div><span>3</span></div>
                        <VFlex >
                            <p>Kittens lack description and individuality</p>
                            <p>One litter can have 3-8 kittens and a breeder may not have the time and knowledge to create a strong online presence for every kitten, especially when they could be taking care of multiple litters at the same time.</p>
                        </VFlex>
                    </li>
                </ol>
            </SummarySection>

            <Improve>
                <img src={coinIcon} alt="" />
                <CopyText sm={false}  salient={false}>
                    <h2>What we did to improve</h2>
                    <p>Our app gives every kitten a page of its own to display all the information that a buyer would be interested in knowing. Communication and payment would take place inside our app, allowing both the buyer and the breeder to track application process.</p>
                </CopyText>
            </Improve>

            <SummarySection red={false}>
                <h1>Solution</h1>
                <ol>
                    <li>
                        <div><span>1</span></div>
                        <VFlex>
                            <p>Kittens lack description and individuality</p>
                            <p>One litter can have 3-8 kittens and a breeder may not have the time and knowledge to create a strong online presence for every kitten, especially when they could be taking care of multiple litters at the same time.</p>
                        </VFlex>
                    </li>
                    <li>
                        <div><span>2</span></div>
                        <VFlex>
                            <p>Risky offline payments</p>
                            <p>Payments between buyers and breeders take many form from cash to checks to wire transfer to Venmo. Both parties are at risk of fraud when transactions are unregulated and not monitored. </p>
                        </VFlex>
                    </li>
                    <li>
                        <div><span>3</span></div>
                        <VFlex >
                            <p>Kittens lack description and individuality</p>
                            <p>One litter can have 3-8 kittens and a breeder may not have the time and knowledge to create a strong online presence for every kitten, especially when they could be taking care of multiple litters at the same time.</p>
                        </VFlex>
                    </li>
                </ol>
            </SummarySection>

            <How spacing={'2em'} direction={'column'}>
                <CopyText sm={false} salient={false}>
                    <h2>How it's done</h2>
                    <p>To organize the information that goes into the kitten detail page, I compiled the metadata of a kitten and plan how each should be visualized. To digitalize the application process, I reimagined the task flow to fit the needs of both the buyer and the breeder, as well as our business.</p>
                </CopyText>
                <img src={thinkIcon} alt="" />
            </How>

            <InfoArchSection>
                <CopyText sm={false}>
                    <h2>Information architecture</h2>
                    <p>Prior to designing interface elements, I conceptualized all the defining attributes of a kitten and organized them by semantics and importance, which becomes the foundation for visual hierarchy.</p>
                </CopyText>
                <img src={meta} alt="" />
            </InfoArchSection>

            <VisualSection>
                <img src={wire} alt="" />
                <VFlex>
                    <CopyText>
                        <h2>Visualization like no other</h2>
                        <p>To stress the individuality of each kitten, I researched the common traits that can be quantified and compared with. Inspired by game character profile, the radar chart offers a delightful way to quickly gauge the value of each trait.</p>
                    </CopyText>
                    <Picture>
                        <img src={radar1} alt="" />
                    </Picture>
                </VFlex>
                <HFlex>
                    <img src="" alt="" />
                    <VFlex>
                        <img src="" alt="" />
                        <CopyText sm={true}>
                            <h4>Alternate data with a toggle</h4>
                            <p>The user can toggle between viewing the data of the kitten or of the breed it belongs to. The algorithm for calculating each metric is proprietary and devised pridely by me.</p>
                        </CopyText>
                    </VFlex>
                </HFlex>
            </VisualSection>

        </Main>



        <Footer>
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
        </Footer>
        
    </>
  )
}


export default TopSeed
