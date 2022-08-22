import styled from "styled-components";

export const Layout = styled.div`
    .root {
        display: none;
    }
    scroll-behavior: smooth;
    padding: 0 var(--side-padding);
    display: flex;
    main {
        flex: 1.5;
        padding: 0 0 5em 0;

        display: flex;
        flex-direction: column;
        gap: 6em; 



        section {
            display: flex;
            flex-direction: column;
            gap: 2em;

            h2 {
                /* opacity: 0.9; */
                color: var(--neon-green);
                /* margin: 1em 0; */
            }
            h3 {
                color: var(--blue500);
                /* padding: 1em 0; */
            }
            
        }
    }   
` 
export const SubSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`
export const Title = styled.div`
    /* padding: 0.5em 0 0.8em 0;  */
    h1 {
        margin-bottom: 0.3em;
    }
    h4 {
        color: var(--blue500);
        font-weight: 400;
        letter-spacing: 0.1em;
    }

`

export const Illustration = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 1em;

    img {
        width: 100%;
        border-radius: 8px;
        box-shadow: ${({ cover }) => cover? '0px 4px 16px #ffffff4D' : ''};
        opacity: ${({ bright }) => bright? 1 : 0.8};
        transition: all 0.3s;
    }
    img:hover {
        opacity: 1;
    }

`
export const Description = styled.p`
    font-size: 1rem;
    /* font-style: oblique; */
    font-weight: 300;
    opacity: 0.7;
` 

export const MediumText = styled.p`

    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 1em;
    line-height: 180%;

`

export const Anchor = styled.div`
    /* position: fixed; */
    top: -20vh;
`

export const LabelStack = styled.div`
    display: flex;
    gap: 4em;
    flex-wrap: wrap;
    h5 {
        color: var(--blue700);
        font-weight: 500;
        padding: 0.25em 0;
    }
    p {
        opacity: 0.8;
        font-size: 1.2rem;
        font-weight: 500;
        color: white
    }
`
export const HighlightBox = styled.div`
    padding: 1.5em 2em;
    background-color: var(--blue800);
    border-radius: 6px;
    border-left: 4px solid var(--purple500);

    p:first-of-type {
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 0.6em;
        color: var(--purple500);
    }
    p:last-of-type {
        font-weight: 300;
        font-size: 1.1rem;
        opacity: 0.8;
    }
`
export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: white;
    /* margin: 2em 0; */
    opacity: 0.1;
`

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 1em;
`

export const Table = styled.div`
    display: grid;
    grid-template-columns: max(20%, 8rem) auto;
    background-color: var(--purple700);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--blue500);
    gap: 1px;

`
export const TableHeader = styled.p`
    text-transform: uppercase;
    grid-column: span 2;
    text-align: center;
    padding: 0.2em 0;
    background-color: var(--blue500);
    color: var(--bg-color);
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 1.8;

`
export const RowHeader = styled.div`
    background-color: var(--blue800);
    padding: 1.2em;
    height: 100%;
    display: flex;
    align-items: center;
    p {
        font-weight: 400;
        width: 100%;
        font-size: 1rem;
        opacity: 0.9;
    }
`
export const BodyCell = styled.div`
    background-color: var(--blue800);
    padding: 1.2em;
    p {
        font-size: 1rem;
        font-weight: 200;
        opacity: 0.7;
    }
`
