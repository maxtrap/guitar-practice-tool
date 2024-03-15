import { styled, createGlobalStyle } from "styled-components"
import { COLORS } from '../constants'
import Metronome from "./Metronome.jsx";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${COLORS.QUATERNARY}
    }
    
    p {
        color: ${COLORS.FONT_COLOR}
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
                <Metronome />
            </BodyDiv>
        </>
    )
}

export default Body