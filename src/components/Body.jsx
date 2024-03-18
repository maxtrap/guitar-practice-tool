import { styled, createGlobalStyle } from "styled-components"
import {COLORS, NOTIF_TYPES} from '../constants'
import Metronome from "./Metronome.jsx";
import Notification from "./Notification.jsx";
import {useRef, useState} from "react";

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
    justify-content: flex-start;
    flex: 1 1 auto;
`


const Body = () => {
    const [notifType, setNotifType] = useState(NOTIF_TYPES.NONE)
    const timeoutId = useRef(null)

    const notify = type => {
        setNotifType(type)

        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
        }

        timeoutId.current = setTimeout(() => {
            setNotifType(NOTIF_TYPES.NONE)
            timeoutId.current = null
        }, 5000)
    }

    return (
        <>
            <GlobalStyle />
            <BodyDiv>
                <Notification notifType={notifType} style={{marginTop: 10, marginBottom: 20}}/>
                <Metronome notify={notify} />
            </BodyDiv>
        </>
    )
}

export default Body