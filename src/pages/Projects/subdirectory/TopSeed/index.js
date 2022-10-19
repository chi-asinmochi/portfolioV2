import React, { useEffect, useRef, useState } from 'react'
import DynamicHeader from '../../../../components/DynamicHeader'
import { Footer } from '../styles/Footer.styled'
import { Logo } from '../../../../components/styles/Nav.styled'
import { TextFragment } from '../../../../components/styles/TextFragment.styled'
import { LogoText } from '../../../../components/styles/LogoText.styled'
import { Link } from 'react-router-dom'
import { CopyText, Hero, Main, Narration, div, SummarySection, Picture, HeroImg, Industry, Improve, How, InfoArchSection, VisualSection, ApplicationSection, ApplicationSectionOne, ApplicationSectionTwo, EndingSection } from '../styles/NewLayout.styled'
import { VFlex, HFlex, Flex } from '../../../../components/styles/Flex'

// import AnchorLink from '../Components/AnchorLink'

import zoomIcon from '../TopSeed/assets/zoom.svg'
import coinIcon from '../TopSeed/assets/coin.svg'
import thinkIcon from '../TopSeed/assets/think.svg'
import cover from '../TopSeed/assets/cat-profile-tiny.png'
import logo from '../TopSeed/assets/logo.svg'
import flow from '../TopSeed/assets/flow.svg'
import meta from '../TopSeed/assets/meta.svg'
import radar1 from '../TopSeed/assets/radar1.svg'
import radar2 from '../TopSeed/assets/radar2.svg'
import wire from '../TopSeed/assets/wire.svg'
import detail from '../TopSeed/assets/detail.svg'
import toggle from '../TopSeed/assets/toggle.svg'
import application from '../TopSeed/assets/application.svg'
import bid from '../TopSeed/assets/bid.svg'
import congrats from '../TopSeed/assets/congrats.svg'
import progress from '../TopSeed/assets/progress.svg'




const TopSeed = () => {


  return (
    <>
        <DynamicHeader big={false} smPadding={true}></DynamicHeader>
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

            <SummarySection red={false} style={{minHeight: '80vh', display: 'grid', placeContent: 'center'}}>
                <h1>Solution</h1>
                <ol>
                    <li>
                        <div><span>1</span></div>
                        <VFlex>
                            <p>An information rich kitten profile</p>
                            <p>Similar to a product detail page in eCommerce, a kitten would have a dedicated page to display all its information relevant to a potential owner, from media to physical traits to personality to parent information.</p>
                        </VFlex>
                    </li>
                    <li>
                        <div><span>2</span></div>
                        <VFlex>
                            <p>In-app communication and payment from application to adoption</p>
                            <p>The app digitalizes the application process to minimize unnecessary communication between the buyer and the breeder. In addition, both parties would be able to communicate and make transactions without leaving the app.</p>
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
                    <img src={radar2} alt="" />
                    <VFlex>
                        <img src={toggle} alt="" />
                        <CopyText sm={true}>
                            <h4>Alternate data with a toggle</h4>
                            <p>The user can toggle between viewing the data of the kitten or of the breed it belongs to. The algorithm for calculating each metric is proprietary and devised pridely by me.</p>
                        </CopyText>
                    </VFlex>
                </HFlex>

                <HFlex>
                    <CopyText sm={true}>
                        <h4>Drill into details by clicking </h4>
                        <p>Clicking on the trait icon reveals more information of the trait and evaluation of the kitten by the trait. </p>
                    </CopyText>
                    <img src={detail} alt="" />
                </HFlex>
                
            </VisualSection>

            <ApplicationSectionOne>
                <CopyText>
                    <h2>Reimagine the process</h2>
                    <p>The app minimizes the amount of emails, texts, and phone calls that goes back and forth between the buyer and the breeder in a typical purchase process.</p>
                </CopyText>
                <img src={flow} alt="" />

                <HFlex>
                    <CopyText sm={true}>
                        <h4>All-in-one application</h4>
                        <p>The buyer is able to answer a questionnaire customizable by the breeder and make payments all at once in the application wizard.</p>
                    </CopyText>
                    <Picture>
                        <img src={application} alt="" />
                    </Picture>
                </HFlex>
            </ApplicationSectionOne>
            <ApplicationSectionTwo>

                <HFlex>
                    <Picture>
                        <img src={bid} alt="" />
                    </Picture>

                    <CopyText sm={true}>
                        <h4>Know the competition</h4>
                        <p>Since our business model allows higher prices to be offered to the breeder, I created a chart to convey price distribution among all applicants for the buyer  to gauge their standing.</p>
                    </CopyText>
                </HFlex>
                <HFlex>
                    <CopyText sm={true}>
                        <h4>Stay on top of every step</h4>
                        <p>System awareness matters. While having a success message or a progress bar doesn’t necessarily speed up anything for the buyer, it allows them to plan ahead for the arrival of their kitten, as well as mitigating the pain of waiting. </p>
                    </CopyText>
                    <Picture>
                        <img src={congrats} alt="" />
                    </Picture>
                </HFlex>
                <Picture>
                    <img src={progress} alt="" />
                </Picture>
            </ApplicationSectionTwo>
            <EndingSection>
                <VFlex>
                    <h1>Some Self reflection</h1>
                    <p>The project was a good reminder to never jump into design too early.</p>
                </VFlex>
                <HFlex>
                    <CopyText sm={true}>
                        <h4>Challenges</h4>
                        <p>During the early design phase, TopSeed’s business plan was still in its infancy. Much of the logistics, such as post-purchase delivery, was but a few vague concepts with details that were either missing or likely going to change in the future. As a result I often had to take on new trajectories during the middle of a design.</p>
                    </CopyText>
                    <CopyText sm={true}>
                        <h4>Lessons</h4>
                        <p>I should always design with scalability in mind and don’t rush into high-fidelity details too soon. Sometimes all I needed was a user flow to examine the feasibility of a concept or to communicate ideas across teams.</p>
                    </CopyText>
                </HFlex>
            </EndingSection>
        </Main>


        <Footer>
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

        </Footer>
        
    </>
  )
}


export default TopSeed
