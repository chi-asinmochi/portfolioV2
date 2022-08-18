import styled from "styled-components";

export const Footer = styled.footer`
    padding: 3em var(--side-padding);
    background-color: #07131F;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-shadow: 0 -12px 24px #42ffc61A;
    flex-wrap: wrap;
    gap: 1em;

    p {
            opacity: 0.7;
            font-size: 0.9rem;
            margin-top: 0.5em;
    }
    & > div p {
        color: var(--blue700);
        opacity: 1;
    }
    & > div {
        margin-right: 4em;
    }

    /* @media (max-width: 700px) {
        flex-wrap: wrap;
    } */

`
