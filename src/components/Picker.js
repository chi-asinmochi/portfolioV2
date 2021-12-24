import React from 'react'
import styled from 'styled-components'

function Picker() {
    return (
        <SideBar>
            <ul>
                <li><ProjectTitle>Dummy</ProjectTitle></li>
                <li><ProjectTitle>Lorem</ProjectTitle></li>
                <li><ProjectTitle>Data Vis</ProjectTitle></li>
                <li><ProjectTitle>Ipsum</ProjectTitle></li>
                <li><ProjectTitle>Wildfire</ProjectTitle></li>

            </ul>
        </SideBar>
    )
}

export default Picker

const SideBar = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: pink; */
    /* display: flex; */
    /* justify-content: center; */
    position: fixed;
    overflow: scroll;
    scroll-snap-type: y mandatory;

    /* top: 10%; */


    ul {
        padding: 50vh 0 80vh 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        /* gap: 3em; */
    }
`
const ProjectTitle = styled.h3`
    font-weight: 400;
    scroll-snap-align: center;
    padding: 1.5em 0;

`
