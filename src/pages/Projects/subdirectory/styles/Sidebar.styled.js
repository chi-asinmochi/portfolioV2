import styled from "styled-components";

export const Sidebar = styled.nav`
    height: 80vh;
    flex: 1;
    position: sticky;
    top: 0;
    display: grid;
    place-items: center;

    @media (max-width: 700px) {
            display: none;
        }
`
export const NavWrapper = styled.div`
    h4 {
        margin-bottom: 1.2em;
        opacity: 0.8;
    }
    ul {
        li {
            list-style: none;
            margin-bottom: 1em;

        }
    }

`
export const AnchorLink = styled.a`
    font-size: ${({ sub }) => sub? '0.9em' : '1em'};
    opacity: ${({ active }) => active? 1 : 0.6 };
    color: ${({ active }) => active? 'var(--neon-green)' : 'white' };
    margin-left: ${({ secondary }) => secondary? '1em' : 0};

    transition: 0.3s;

    &:hover {
        opacity: 1;
        color: ${({ active }) => active? 'var(--neon-green)' : 'white' };
    }

`
