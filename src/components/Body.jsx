import { styled, createGlobalStyle } from "styled-components";
import { COLORS } from '../constants'
import MetronomePulse from "./MetronomePulse.jsx";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${COLORS.PRIMARY}
    }
`


const BodyDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
`

const Body = () => {
    return (
        <>
            <GlobalStyle />
            <BodyDiv>
                <MetronomePulse />
            </BodyDiv>
        </>
    )
}

export default Body