import { styled, createGlobalStyle } from "styled-components"
import { COLORS } from '../constants'
import MetronomePulse from "./MetronomePulse.jsx"
import Slider from './Slider'
import {useState} from "react";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${COLORS.PRIMARY}
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
    const [tempo, setTempo] = useState(120)


    return (
        <>
            <GlobalStyle />
            <BodyDiv>
                <MetronomePulse tempo={tempo} />
                <Slider initialValue={tempo} onChange={value => setTempo(value)} />
            </BodyDiv>
        </>
    )
}

export default Body