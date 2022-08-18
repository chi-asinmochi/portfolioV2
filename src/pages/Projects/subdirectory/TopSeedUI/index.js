import React, { useEffect, useRef, useState } from 'react'
import DynamicHeader from '../../../../components/DynamicHeader'
import { NavWrapper, Sidebar, AnchorLink } from '../styles/Sidebar.styled'
import { Anchor,  Description, HighlightBox, Illustration, LabelStack, Layout, MediumText, Title, Divider, Table, TableHeader, RowHeader, BodyCell, TableWrapper, SubSection} from '../styles/Layout.styled'
import { Footer } from '../styles/Footer.styled'
import { Logo } from '../../../../components/styles/Nav.styled'
import { TextFragment } from '../../../../components/styles/TextFragment.styled'
import { LogoText } from '../../../../components/styles/LogoText.styled'
import { Link } from 'react-router-dom'
// import AnchorLink from '../Components/AnchorLink'

import userTable from './assets/user-table.svg'
import userStory from './assets/user-story.svg'
import storyMap from './assets/story-map.png'
import siteMap from './assets/sitemap.png'
import flowDiagram from './assets/flow-diagram.png'
import cover from './assets/cover.png'
import ticaScreenshot from './assets/tica-screenshot.png'
import catterScreenshot from './assets/cattery-screenshot.png'
import storyYellow from './assets/story-yellow.svg'


const TopSeedUI = () => {

    const anchorRefs = useRef([])
    const linkRefs = useRef([])
    const [currentAnchor, setAnchor] = useState(0)

    const root = document.getElementById('root')
    // root.onscroll = () => {
    //     if (root.scrollTop < 10) {
    //         setAnchor(0)
    //     }
    // }


    const anchorObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    setAnchor(parseInt(entry.target.getAttribute('index')))

                }
                
            })
    }, {
        rootMargin: `0px -${window.innerHeight * 0.19}px -${window.innerHeight * 0.78}px 0px`,
        threshold: 0.5,
    })

    useEffect(()=>{
        anchorRefs.current.forEach((anchor, i) => {
            linkRefs.current[i].href = '#' + anchor.id

            anchor.setAttribute('index', i)

            anchorObserver.observe(anchor)

            console.log(anchor.innerHTML)
        })

    }, [])

    useEffect(() => {
        // console.log(currentAnchor)
    }, [currentAnchor])



  return (
    <>
        <DynamicHeader big={false}></DynamicHeader>
        <Layout>
            <main>
                <section >
                    <Illustration padding={'1em'} cover={true} bright={true}>
                        <img src={cover} alt="" />
                    </Illustration>
                    <Title id='section-1' ref={el => {anchorRefs.current[0] = el}}>
                        <h1>TopSeed UX</h1>
                        <h4>The conceptual work behind a pet ecommerce</h4>
                    </Title>
                    <MediumText>
                        TopSeed is an ecommerce company that facilitates peer-to-peer pedigree cat sales between breeders and buyers via its web application. This is an on-going project with the expectation of launching an MVP by the end of 2022.                    </MediumText>
                    <LabelStack>
                        <div>
                            <h5>My Role</h5>
                            <p>Design Lead</p>
                        </div>
                        <div>
                            <h5>Product Type</h5>
                            <p>Web Application</p>
                        </div>
                        <div>
                            <h5>Duration</h5>
                            <p>April 2022 - Present</p>
                        </div>
                    </LabelStack>

                </section>
                <Divider></Divider>
                <section >

                    <h2 id='section-2' ref={el => {anchorRefs.current[1] = el}}>Understanding the Problems</h2>
                    <SubSection>
                        <MediumText>There’s a saying that goes, “a problem well stated is a problem half solved”. We started the project by having every company member came together and shared their observations or personal experience with owning pets.</MediumText>
                        <HighlightBox>
                            <p>Finding and comparing breeders are difficult for buyers</p>
                            <p>There are mainly 2 ways to find pedigree cat breeders, Buyers can either comb through Google search results or the lengthy index of catteries on the website of a feline organization (that is, assuming they knew of the organization). Neither of which offers images for effective comparison.</p>
                        </HighlightBox>
                        <Illustration padding='0'>
                            <img src={ticaScreenshot} alt="" />
                            <Description>A list of registered breeders on the website of The International Cat Association (TICA).</Description>
                        </Illustration>
                    </SubSection>
                    <SubSection>
                        <HighlightBox>
                            <p>Breeders lack resources to build a strong online portfolio</p>
                            <p>Building a website takes money and building one that is tailored to displaying pet content takes research and time.</p>
                        </HighlightBox>
                        <Illustration padding='0'>
                            <img src={catterScreenshot} alt="" />
                            <Description>This breeder’s website only display a picture and a line of text for each available kitten. (From BlueEyedFrisco)</Description>
                        </Illustration>
                    </SubSection>

                </section>

                <section>

                    <h2  id='section-3' ref={el => {anchorRefs.current[2] = el}}>Ideating Solutions</h2>
                    <MediumText>With the problems well defined, we tapped into everyone’s creativity again to ideate on solutions, keeping in mind that they have to align with our business goals (conducive to profit, that is). For instance, to facilitate communication between buyers and breeders, we intended to provide an in-app chat, but how do we prevent both parties from trading behind our backs, circumventing service fees?</MediumText>
                    <SubSection>
                        <h3 id='section-4' ref={el => {anchorRefs.current[3] = el}}>Defining the Product</h3>
                        <MediumText>
                            Translating the early ideation results to core functionalities, we aligned on a product definition that all of us contributed. With this big picture in mind we went our separate ways to talk to breeders and buyers in hopes to get more insights.
                        </MediumText>
                    </SubSection>

                </section>

                <section>
                    <h2 id='section-5' ref={el => {anchorRefs.current[4] = el}}>Knowing the Users</h2>

                    <SubSection>
                        <h3 id='section-6' ref={el => {anchorRefs.current[5] = el}}>User Types</h3>
                        <MediumText>Different needs may require different accommodations, we defined buyers into 3 categories and and breeders into 2 in the way that help clarify functionalities.</MediumText>
                        <TableWrapper>
                            <Table>
                            <TableHeader>Buyers</TableHeader>
                            <RowHeader>
                                <p>Browser</p>
                            </RowHeader>
                            <BodyCell>
                                <p>Buyers who do not have a clear idea which breed(s) they want. They browse kittens with little to none breed-specific knowledge.</p>
                            </BodyCell>
                            <RowHeader>
                                <p>Researcher</p>
                            </RowHeader>
                            <BodyCell>
                                <p>Buyers who typically know which breeds they want and may judge the kittens by breed-specific standards.</p>
                            </BodyCell>
                            <RowHeader>
                                <p>Breeder</p>
                            </RowHeader>
                            <BodyCell>
                                <p>Buyers who are also breeders or looking to become one. They have expert breed-specific knowledge and only look for non spayed/neutered kittens.</p>
                            </BodyCell>
                        </Table>

                        <Table>
                            <TableHeader>Breeders</TableHeader>
                            <RowHeader>
                                <p>Casual</p>
                            </RowHeader>
                            <BodyCell>
                                <p>Breeders who sell their kittens at the low to mid range of the market price</p>
                            </BodyCell>
                            <RowHeader>
                                <p>Prestigious</p>
                            </RowHeader>
                            <BodyCell>
                                <p>Breeders who specialize in breeding show quality kittens and usually sell them at the higher end of the market price</p>
                            </BodyCell>

                        </Table>
                        </TableWrapper>
                    </SubSection>
 

                    <SubSection>
                        <h3 id='section-7' ref={el => {anchorRefs.current[6] = el}}>User Stories</h3>

                        <MediumText>With these user archetypes defined, I leveraged on user stories to organize previously gathered data into bite-size information. </MediumText>
                        <Illustration padding='0' bright={true}>
                            <img src={storyYellow} />
                        </Illustration>
                        <MediumText>It’s a concise way of documenting functionality from a user’s point of view, focusing on what the user wants to do, and how that feature will help.</MediumText>
                    </SubSection>
 
                </section>
                <section >

                    <h2 id='section-8' ref={el => {anchorRefs.current[7] = el}}>Mapping Research to Design</h2>
                    <SubSection>
                        <h3 id='section-9' ref={el => {anchorRefs.current[8] = el}}>Story Maps</h3>
                        <MediumText>There are many ways to evolve user stories into designs. I like to start with story mapping. It allowed us to preview product development one feature at a time at 3 granularity levels: Activites, steps, and details. All of which consist of a simple verb phrase representing a user story</MediumText>
            
                        <Illustration padding='0' >
                            <img src={storyMap} alt="" />
                        </Illustration>
                        <MediumText>With the help of story mapping we were able to quickly define what our minimal viable product would be like by simply drawing a line across the details section of the map. Above the line were features that would be included while those below were deprioritized to later releases.  </MediumText>
                    </SubSection>
 
                </section>
                <section >
                    <SubSection>
                        <h3 id='section-10' ref={el => {anchorRefs.current[9] = el}}>Flow Diagram</h3>
                        <MediumText>User flows are like the visualized version of the details section in the story map, they map out the major paths the user could take on our website from one point to another during a task. They helped us understand how the user moved through our website and identify opportunities for improvements.</MediumText>


                        <Illustration padding='0'>
                            <img src={flowDiagram} alt="" />
                            <Description>The flow diagram for onboarding breeders. The circle shape represents the entry or destination point. The square represents pages or actions. The diamond represents a decision point. The parallelogram represents input or output. The pill represents a time delay.</Description>
                        </Illustration>
                    </SubSection>

                </section>
                <section >
                    <SubSection>
                        <h3 id='section-11' ref={el => {anchorRefs.current[10] = el}}>Site Map</h3>
                        <MediumText>
                        A site map is like the outline of a website, where relevant information is grouped by relevance to facilitate navigation for users. It also helped me, the designer, to keep track of how content was connected in a broader sense than flow diagrams did.
                        </MediumText>
                        <Illustration padding='0'>
                            <img src={siteMap} alt="" />
                            <Description>The site map of TopSeed from buyers’ perspective.</Description>
                        </Illustration>
                    </SubSection>

                </section>
                <section >
                    <SubSection>
                        <h2 id='section-12' ref={el => {anchorRefs.current[11] = el}}>Concluding Thoughts</h2>
                        <MediumText>
                            There are many more UX methodologies out there other than the ones mentioned in this case study. If given more time and more resources, we could have tried more research methods and carried out procedures more rigorously. However, for the first release, we are quite content with this current conceptual model we have. In the next part I will share about how my process for creating the UIs and also how adopting an agile approach helped ease the pressure on design.                         
                        </MediumText>

                    </SubSection>
                    <LabelStack>
                        <div>
                            <h5>Last Updated</h5>
                            <p>Aug 9th, 2022</p>
                        </div>

                    </LabelStack>

                </section>
            </main>
            <Sidebar>
                <NavWrapper>
                    <h4>Table of contents</h4>
                    <ul >
                        <li><AnchorLink ref={el => {linkRefs.current[0] = el}} active={currentAnchor==0}>Introduction</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[1] = el}} active={currentAnchor==1}>Understanding the Problems</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[2] = el}} active={currentAnchor==2}>Ideating Solutions</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[3] = el}} active={currentAnchor==3} secondary={true}>Defining the Product</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[4] = el}} active={currentAnchor==4}>Knowing the Users</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[5] = el}} active={currentAnchor==5} secondary={true}>User Types</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[6] = el}} active={currentAnchor==6} secondary={true}>User Stories</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[7] = el}} active={currentAnchor==7} >Mapping Research to Design</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[8] = el}} active={currentAnchor==8}  secondary={true}>Story Maps</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[9] = el}} active={currentAnchor==9} secondary={true}>Flow Diagrams</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[10] = el}} active={currentAnchor==10} secondary={true}>Site Map</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[11] = el}} active={currentAnchor==11} >Concluding Thoughts</AnchorLink></li>
                    </ul>
                </NavWrapper>
            </Sidebar>
        </Layout>
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





export default TopSeedUI

