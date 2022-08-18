import styled from "styled-components"


export const Wrapper = styled.div`
    color: var(--neon-green);
    width: 100%;
    display: flex;
    justify-content: ${({ alignment }) => alignment == 'end'? "flex-end" : "flex-start"};
    a {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }
    h4 {
        white-space: nowrap;
    }

`