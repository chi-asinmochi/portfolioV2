import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
    gap: ${({spacing}) => spacing};
    flex-direction: ${({direction}) => direction};
`

export const VFlex = styled(Flex)`

    flex-direction: column;
`
export const HFlex = styled(Flex)`

    flex-direction: row;
`