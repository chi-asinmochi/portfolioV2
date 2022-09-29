import styled from "styled-components"


const VFlex = styled.div`
    display: flex;
    flex-direction: column;
`
const HFlex = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.div`
    position: relative;
    padding: 3em 1.5em;

`
export const BeveledBG = styled.div`
    background: linear-gradient(to bottom, rgba(123, 191, 253, 0.2), rgba(200, 255, 242, 0));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(3em 0%, 100% 0, 100% 100%, 0 100%, 0% 3em);
` 

export const OutlinedText = styled.h1`
    font-size: min(calc(3em + 1vw),5em);
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;

`



export const HeadingWrapper = styled(VFlex)`
    position: relative;
    top: 0;
    left: max(calc(-2em - 2vw), -3.5em);
    line-height: 0.6;
    margin-bottom: 1em;

    h1 {
        transition: all 0.8s;
        cursor: default;
    }

    h1:nth-of-type(1) {
        -webkit-text-stroke-color: var(--neon-green);

        &:hover {
            transform: translate( -2%, -8%);
        }
    }
    h1:nth-of-type(2) {
        -webkit-text-stroke-color: var(--blue700);
        font-size: min(calc(5em + 2vw),7em);
        font-weight: 900;
        position: absolute;
        /* z-index: -1; */
        left: 2em;
        top: 0.3em;

        &:hover {
            transform: translate(8%, -8%);
        }
    }
    h1:nth-of-type(3) {
        -webkit-text-stroke-color: var(--purple200);

        &:hover {
            transform: translate(2%, 8%);
        }
    }
`
export const Entries = styled(VFlex)`
    gap: ${({ wrapping }) => wrapping? '1em' : '0.8em'};

    & > div {
        flex-direction: ${({ wrapping }) => wrapping? 'column' : 'row'};
        gap: ${({ wrapping }) => wrapping? '0.1em' : '1.5em'};
        
        h4 {
            text-align: ${({ wrapping }) => wrapping? 'start' : 'end'};
        }
        p {
            width: ${({ wrapping }) => wrapping? '100%' : 'auto'};
        }
    }
`

export const Entry = styled(HFlex)`
    gap: 1.5em;
    align-items: start;
    font-size: 0.9rem;
    line-height: 1.4;
    /* flex-wrap: wrap; */
    p {
        line-height: 1.6;
        color: var(--blue500);
    }
`
export const Label = styled.h4`
    font-size: 1rem;
    letter-spacing: 0.05em;
    width: 8.5em;
    flex-shrink: 0;
    text-align: end;
    color: var(--grey100);
`
export const BarChartWrapper = styled(VFlex)`
    width: 100%;
    /* gap: 2em; */
`

export const BarChart = styled(HFlex)`
    /* align-self: center; */
    margin: 0.6em 0 0.6em 0;
    gap: 4px;
    width: 100%;
    
    div:nth-of-type(1) {
        width: 15%;
        background: var(--grey100);
        color: var(--grey100);
    }
    div:nth-of-type(2) {
        width: 50%;
        background: var(--neon-green);
        color: var(--neon-green);
    }
    div:nth-of-type(3) {
        width: 35%;
        background: var(--purple500);
        color: var(--purple500);
    }
`
export const Bar = styled.div`
    background: var(--blue700);
    height: 3px;
    border-radius: 6px;
    position: relative;

    span {
        position: absolute;
        top: 0.5em;
        left: 50%;
        transform: translateX(-50%);
        white-space: noWrap;
    }
`
export const BarLabelWrapper = styled(VFlex)`
    display: none;
    margin-top: 0.2em;
    gap: 0.2em;

    span:nth-of-type(1) {
        color: var(--grey100);
    }
    span:nth-of-type(2) {
        color: var(--neon-green);
    }
    span:nth-of-type(3) {
        color: var(--purple500);
    }
` 