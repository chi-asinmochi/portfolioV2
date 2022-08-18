import styled from "styled-components"


export const Wrapper = styled.div`
    margin-top: 1em;
    color: ${({ active }) => active? 'var(--neon-green)' : 'var(--blue700)'} ;
    width: 100%;
    display: flex;
    justify-content: ${({ alignment }) => alignment == 'end'? "flex-end" : "flex-start"};
    a {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        cursor: ${({ active }) => active? 'pointer' : 'auto'};
    }
    h4 {
        white-space: nowrap;
    }

`