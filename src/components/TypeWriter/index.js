import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

const TypeWriter = ({ text, margin }) => {

    const [typeResult, setText] = useState('')

    
    const boxRef = useRef(null)
    const spaceHolderRef = useRef(null)
    const injectionRef = useRef(null)

    useEffect(() => {
        // console.log(spaceHolderRef)
        const textHeight = spaceHolderRef.current.getBoundingClientRect().height
        // console.log(boxRef.current.style.height)
        boxRef.current.style.margin = margin
        boxRef.current.style.height = textHeight + 'px'

        window.onresize = () => {
            boxRef.current.style.height = 'auto'
        }

        spaceHolderRef.current.style.opacity = 0
        spaceHolderRef.current.style.position = 'absolute'

        const stringArr = [...text]

        let typeInterval

        const type = (str, i) => {

            setText(prev => {
                return prev + str[i]
            })
            
            if (i+1 < str.length) {
                typeInterval =  setTimeout(() => {
                    type(str, i + 1)
                }, Math.random()*60 + 15)
            } else {
                clearInterval(typeInterval)
                boxRef.current.style.cursor = 'initial'
                injectionRef.current.classList.add('done')

            }
        }

        type(text, 0)

        boxRef.current.onclick = () => {
            clearInterval(typeInterval)
            setText(text)
            boxRef.current.style.cursor = 'initial'
            injectionRef.current.classList.add('done')
        }


    }, [])
    


    return (
    <Box ref={boxRef}>
        <SpaceHolderText ref={spaceHolderRef}>{text}</SpaceHolderText>
        <InjectionText ref={injectionRef}>
            {typeResult}
            <TypeHead></TypeHead>
        </InjectionText>
    </Box>

  )
}


const Box = styled.div`
    width: 100%;
    align-self: flex-start;
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 0.3s;

    p {
        color: var(--blue500);
        font-family: "Inconsolata";
        font-weight: 400;
        /* letter-spacing: 0.1em; */
        /* line-height: 200%; */
        font-size: 1.15em;
        white-space: pre-line;
        opacity: 1;
        /* transition: 0.6s opacity; */

    }
    p.done {
        /* color: var(--blue700); */
        /* opacity: 0.6; */
        /* transition: 1s all; */
    }
    &:hover {
        opacity: 1;
    }
`
const SpaceHolderText = styled.p`
    pointer-events: none;
`

const InjectionText = styled.p`

`
const TypeHead = styled.span`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        height: 0.8em;
        width: 0.5em;
        background: white;
        top: 50%;
        transform: translateY(-60%);
        left: 4px;
        animation: blink 0.6s alternate infinite;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export default TypeWriter