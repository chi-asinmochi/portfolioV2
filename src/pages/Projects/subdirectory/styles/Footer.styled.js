import styled from "styled-components";

export const Footer = styled.footer`
    box-shadow: 0 -12px 24px #42ffc61A;
    background-color: #07131F;
    width: 100%;

    display: grid;
    place-items: center;

    > div {
        padding: 3em var(--side-padding-sm);
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        flex-wrap: wrap;
        gap: 1em;
        max-width: var(--max-content-width);
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
    }




`
