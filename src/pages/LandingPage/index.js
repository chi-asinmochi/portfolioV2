import { useEffect, useRef, useState } from 'react'
import DynamicHeader from '../../components/DynamicHeader'
import tsOption from '../../components/styles/TsOptions'
import styled from 'styled-components'
import TypeWriter from '../../components/TypeWriter'
import { NeonFrame } from './styled/NeonFrame.styled'
import { Hero } from './Hero'
import Projects from '../Projects'
import { useLocation } from 'react-router-dom'

function LandingPage() {

    const projectsRef = useRef(null)
    const heroRef = useRef(null)
    const [inView, setView] = useState(false)

    const location = useLocation()

    const projectsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setView(false)
                // location.hash = '#project'
                // console.log(entry.target, inView)
            } else {
                setView(true)
                // console.log(inView)
                // location.hash = '#home'
            }
        })
    },{
        threshold: 0.3,
    })
        

    useEffect(() => {
        projectsObserver.observe(heroRef.current)
        console.log(projectsRef.current, heroRef.current)

    }, [])
    
    useEffect(() => {
        if (location.hash === '#projects'){
            projectsRef.current.scrollIntoView({block: 'start', behavior: 'smooth'})
        } else if (location.hash === '#home') {
            heroRef.current.scrollIntoView({block: 'start', behavior: 'smooth'})    
        }
    }, [location])
    
    // const particlesInit = (main) => {
    //     console.log(main);
    
    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // };
    
    // const particlesLoaded = (container) => {
    //     console.log(container);
    
    const root = document.getElementById('root')
    // root.style.scrollPaddingBottom = 'max(calc(20vh - 5vw), 12vh)'
    // root.style.scrollSnapType = 'y mandatory'

    return (
        <>  
            <Hero heroRef={heroRef}></Hero>
            <Projects projectsRef={projectsRef} inView={inView}></Projects>
        </>
    )
}



export default LandingPage

