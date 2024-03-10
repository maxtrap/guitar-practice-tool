import { styled, createGlobalStyle } from "styled-components";
import { COLORS } from '../constants'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${COLORS.PRIMARY}
    }
`


const BodyDiv = styled.div`
    width: 100%;
    height: 100%;
`

const Body = () => {
    return (
        <>
            <GlobalStyle />
            <BodyDiv>

            </BodyDiv>
        </>
    )
}

export default Body