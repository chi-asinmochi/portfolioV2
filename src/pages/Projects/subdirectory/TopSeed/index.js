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
import flowDiagram from './assets/flowchart.png'
import cover from './assets/cover.png'
import ticaScreenshot from './assets/ticaList.png'
import catterScreenshot from './assets/beye.png'
import storyYellow from './assets/story-yellow.svg'
import catProfile from './assets/cat-profile.png'
import pMatrix from './assets/p-matrix.png'
import application from './assets/application.png'
import qa from './assets/qa.png'
import priceChart from './assets/price-chart.png'
import radarChart from './assets/radar-chart.png'

const TopSeed = () => {

    const anchorRefs = useRef([])
    const linkRefs = useRef([])
    const [currentAnchor, setAnchor] = useState(0)

    const root = document.getElementById('root')
    root.style.scrollPaddingBottom = 0;
    root.style.scrollPaddingTop = '18vh';


    const anchorObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    setAnchor(parseInt(entry.target.getAttribute('index')))

                }
                
            })
    }, {
        rootMargin: `-${window.innerHeight * 0.2}px 0px -${window.innerHeight * 0.40}px 0px`,
        threshold: 0.5,
    })

    useEffect(()=>{
        anchorRefs.current.forEach((anchor, i) => {
            linkRefs.current[i].href = '#' + anchor.id

            anchor.setAttribute('index', i)

            anchorObserver.observe(anchor)


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
                    <Title id='anchor-0' ref={el => {anchorRefs.current[0] = el}}>
                        <h1>TopSeed</h1>
                        <h4>The conceptual work behind a pet eCommerce</h4>
                    </Title>
                    <MediumText>
                        TopSeed is an ecommerce company that facilitates peer-to-peer pedigree cat sales between breeders and buyers via its web application. This is an on-going project with the expectation of launching its MVP by the end of 2022.                    </MediumText>
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

                    <h2 id='anchor-1' ref={el => {anchorRefs.current[1] = el}}>Understanding the Problems</h2>
                    <SubSection>
                        <MediumText>
                            There’s a saying that goes, “a problem well stated is a problem half solved”. We did some research to identify what’s wrong or could be improved with the current pet shopping experience.                         </MediumText>
                        <HighlightBox>
                            <p>
                                Browsing breeders is an arduous task                           
                            </p>
                            <p>
                                There are mainly 2 ways to find pedigree cat breeders, Buyers can either comb through Google search results or the lengthy index of catteries on the website of a feline organization, assuming they knew of the organization.                            
                            </p>
                        </HighlightBox>
                        <Illustration padding='0'>
                            <img src={ticaScreenshot} alt="" />
                            <Description>A list of registered breeders on the website of <a href='https://tica.org/ragdoll-breeders' target='_blank'>The International Cat Association (TICA).</a></Description>
                        </Illustration>
                    </SubSection>
                    <SubSection>
                        <HighlightBox>
                            <p>Kitten data are unorganized and lacking </p>
                            <p>
                            Most breeders don’t have the time and knowledge to build or maintain a website tailored to displaying pet content. As a result buyers have little information about the kittens they are interested in. 
                            </p>
                        </HighlightBox>
                        <Illustration padding='0'>
                            <img src={catterScreenshot} alt="" />
                            <Description>This breeder’s website only display a picture and a line of text for each available kitten. (From <a href='https://www.blueeyedfrisco.com/available-kittens-cats' target='_blank'>BlueEyedFrisco</a>)</Description>
                        </Illustration>
                    </SubSection>

                </section>

                {/* <section>

                    <h2  id='section-3' ref={el => {anchorRefs.current[2] = el}}>Ideating Solutions</h2>
                    <MediumText>With the problems well defined, we tapped into everyone’s creativity again to ideate on solutions, keeping in mind that they have to align with our business goals (conducive to profit, that is). For instance, to facilitate communication between buyers and breeders, we intended to provide an in-app chat, but how do we prevent both parties from trading behind our backs, circumventing service fees?</MediumText>
                    <SubSection>
                        <h3 id='section-4' ref={el => {anchorRefs.current[3] = el}}>Defining the Product</h3>
                        <MediumText>
                            Translating the early ideation results to core functionalities, we aligned on a product definition that all of us contributed. With this big picture in mind we went our separate ways to talk to breeders and buyers in hopes to get more insights.
                        </MediumText>
                    </SubSection>

                </section> */}

                <section>
                    <h2 id='anchor-2' ref={el => {anchorRefs.current[2] = el}}>Knowing the Users</h2>
                    <SubSection>
                        <MediumText>
                            Different needs may require different accommodations, here we divided buyers into 3 types based on their domain knowledge and their goal.                            </MediumText>
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

                        </TableWrapper>
                    </SubSection>
 

 
                </section>
                <section >

                    <h2 id='anchor-3' ref={el => {anchorRefs.current[3] = el}}>How Does It Flow</h2>
                    <SubSection>
                        <MediumText>
                            We leveraged on a methodology call story mapping to lay out user stories chronologically similar to creating task flows. From there we broke down each task to granular steps that informed us functionalities.                             
                        </MediumText>
            
                        <Illustration padding='0' >
                            <img src={storyMap} alt="" />
                            <Description>The Story map for purchasing a a kitten. The tasks are listed in chronological order from left to right while going from top to bottom the task are broken into more granular steps.</Description>

                        </Illustration>
                        <MediumText>
                            In addition to story maps we created user flows to supplement navigational logics. They helped us understand how the user would move through our website from a bird’s eye view and see how many screens we might need.
                        </MediumText>
                        <Illustration padding='0'>
                            <img src={flowDiagram} alt="" />
                            <Description>The flowchart illustrating buyer onboarding.</Description>
                        </Illustration>
                    </SubSection>
 
                </section>
                <section >
                    <h2 id='anchor-4' ref={el => {anchorRefs.current[4] = el}}>Visual Hierarchy</h2>
                    <SubSection>
                        <MediumText>
                        Visual hierarchy controls how information is delivered to the user by organizing GUI in a way that captures the user’s attention in an intended order.                         
                        </MediumText>
                        <MediumText>
                        Take the kitten detail page as an example (equivalent to a product detail page in eCommerce), by having the kitten album take up almost half of the viewport we are quite certain the kitten’s photo is the first thing the user see, followed by the purchase actions on the right grouped together in an elevated container for emphasis.                        
                        </MediumText>
                        <Illustration padding='0'>
                            <img src={catProfile} alt="" />
                            <Description>A screenshot of the kitten detail page.</Description>
                        </Illustration>
                        <MediumText>
                        Moreover, the purchase panel is fixated during scroll to ensure findability while the CTA is colored with bright gradient for high salience.                         
                        </MediumText>
                        <MediumText>
                        A clear visualy hierarchy helps the user find what they are looking for quickly. The order reflects importance, which we derived from a prioritization matrix.
                        </MediumText>
                    </SubSection>
                    <SubSection>
                        <h3 id='anchor-5' ref={el => {anchorRefs.current[5] = el}}>Prioritization Matrix</h3>
                        <MediumText>
                        To determine how much emphasis a content deserve, we sorted user task based on 2 metrics: frequency and desirability. That is, how frequently it is done by the user and how valuable it is to the business owner. The tasks that score high on either or both dimensions   indicate high visual hierarchy for their associated content.                        
                        </MediumText>
                        <Illustration padding='0'>
                            <img src={pMatrix} alt="" />
                            <Description>The prioritization matrix of buyers’ user stories. A rule of thumb is to make desirable actions more prominent and frequent actions with less interaction cost.</Description>
                        </Illustration>

                    </SubSection>

                </section>

                <section >
                    <h2 id='anchor-6' ref={el => {anchorRefs.current[6] = el}}>Data Visualization</h2>
                    <SubSection>
                        <MediumText>
                        Data visualization is the graphical representation of information and data, such as charts and tables. The breeder-facing side (dashboard) of our website has more of those examples but since this article takes a buyer’s perspective let’s stick with it.                        
                        </MediumText>
                        <MediumText>
                        According to our discovery, breeders tend to desicribe their kittens in words, if at all.  However, people rather consume graphical information while they browse because it is often faster to read a chart than a paragraph.                        
                        </MediumText>
                    </SubSection>
                    <SubSection>
                        <h3 id='anchor-7' ref={el => {anchorRefs.current[7] = el}}>Between-Breed and Within-Breed</h3>
                        <MediumText>
                        With that in mind, I researched the common traits cats have and devised a reliable methodology for scoring each kitten based on those traits. Visualizing breed differences isn’t something new (see Petfinder and American Kernel club for examples), comparing within-breed differences to show the individual uniquness of each kitten and visualizing that with a radar chart are something that have not been attempted before.                         
                        </MediumText>
                        <Illustration padding='0'>
                            <img src={radarChart} alt="" />
                            <Description>Illustrations of the kitten trait chart. The user is able to toggle between viewing the attribute scores of the kitten or of the breed it belongs to.</Description>
                        </Illustration>
                    </SubSection>

                    <SubSection>
                        <h3 id='anchor-8' ref={el => {anchorRefs.current[8] = el}}>Auction in Disguise</h3>
                        <MediumText>
                        Pet breeding is controversial even when done legally and when the animals are treated with nothing but utmost love and care. We assumed our case is worse because we adopted a hybrid auction buiness model. That is, while purchasing a kitten on our website requires filling out an application, a buyer may offer a higher price than others to increase their chances of being accepted by the breeder.                        
                        </MediumText>
                        <MediumText>
                        To avoid feeling too much like a marketplace, I avoided sensitive vocabularies, such as bidding, and used a minimalistic bar chart to convey price distribution. Price intervals and number of competitors are revealed on mouse interaction such that ranking is implicit.                        
                        </MediumText>

                        <Illustration padding='0'>
                            <img src={priceChart} alt="" />
                            <Description>Illustrations of the price offering chart. The user is able to infer their price ranking among all the applicants by interaction with the chart.</Description>
                        </Illustration>

                    </SubSection>

                </section>

                <section >
                    <h2 id='anchor-9' ref={el => {anchorRefs.current[9] = el}}>All-in-One Application</h2>

                    <SubSection>
                        <MediumText>
                        Unlike most application process where an application form is sent by the breeder or the buyer has to download it somewhere and emailed it back. Our website combines questionnaire and payment all in one place so that the buyer doesn’t need to navigate away to their email or fill out any forms offline.                         
                        </MediumText>

                        <Illustration padding='0'>
                            <img src={application} alt="" />
                            <Description>Illustrations of the purchase process. On the left is the application menu for tracking tasks. On the right is one of the screening question from the Questionnaire task.</Description>
                        </Illustration>

                    </SubSection>

                </section>

                <section >
                    <h2 id='anchor-10' ref={el => {anchorRefs.current[10] = el}}>"Error" Prevention</h2>
                    <SubSection>
                        <MediumText>
                        A functionality we struggled to support is chatting between buyer and breeder, specifically prior to making a purchase. While allowing real-time chatting may make communication easier and thus a good UX, it poses the risk of two parties trading under the table, circumventing transaction fees.                        
                        </MediumText>

                        <MediumText>
                        To prevent such “error” from happening, we made their communication public by allowing pre-purchase communication to happen only through commenting on the kitten detail page. 
                        </MediumText>

                        <Illustration padding='0'>
                            <img src={qa} alt="" />
                            <Description>An illustration of the user posting a question at the Q&A section on the kitten detail page. </Description>
                        </Illustration>

                        <MediumText>
                        While having a comment section for a product isn’t something new, I thought to mentioned it in this case study because sometimes when we factor in the buisness goal, the solution isn’t in the user’s best interest anymore and that’s okay. It is the designer’s job to assess solutions and be concious of the desicions they make.                        
                        </MediumText>

                    </SubSection>

                </section>


                <section >
                    <h2 id='anchor-11' ref={el => {anchorRefs.current[11] = el}}>Concluding Thoughts</h2>

                    <SubSection>
                        <MediumText>
                        Although I am content with the concepts and design we came up with for the first release, I wasn't always certain about the decisions we made throughout the process, wishing we had a dedicated marketing or research team to provide insights. I suppose this is just one of the many challenges small start-ups like us need to deal with. That said, I am grateful we had these well-tested UX methodologies to follow such that even on a low budget, we can be confident that our ideas were examined and developed through critical thinking.
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
                        <li><AnchorLink ref={el => {linkRefs.current[2] = el}} active={currentAnchor==2}>Knowing the Users</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[3] = el}} active={currentAnchor==3}>How Does It Flow</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[4] = el}} active={currentAnchor==4}>Visual Hierarchy</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[5] = el}} active={currentAnchor==5} secondary={true}>Prioritization Matrix</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[6] = el}} active={currentAnchor==6} >Data Visualization</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[7] = el}} active={currentAnchor==7} secondary={true}>Between-Breed and Within-Breed</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[8] = el}} active={currentAnchor==8}  secondary={true}>Auction in Disguise</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[9] = el}} active={currentAnchor==9} >All-in-One Application</AnchorLink></li>
                        <li><AnchorLink ref={el => {linkRefs.current[10] = el}} active={currentAnchor==10} >"Error" Prevention</AnchorLink></li>
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





export default TopSeed