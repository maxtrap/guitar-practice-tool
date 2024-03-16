import {styled} from "styled-components";
import {COLORS, NOTIF_TYPES} from "../constants.js";

const NotifWrapper = styled.div`
    width: 50%;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledNotification = styled.div`
    color: ${COLORS.FONT_COLOR};
    font-size: 20px;
    text-align: center;
    
    background: ${COLORS.ERROR_PRIMARY};
    
    padding: 10px;
    border: ${COLORS.ERROR_SECONDARY} solid 5px;
    border-radius: 5px;
`

let timeoutId = null

const Notification = ({ clearNotif, notifType, style }) => {

    const visibilityStyle = {
        visibility: notifType === NOTIF_TYPES.NONE ? "hidden" : "visible"
    }

    if (timeoutId) {
        clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
        clearNotif()
        timeoutId = null
    }, 5000)

    return <NotifWrapper style={{...style, ...visibilityStyle}}>
        <StyledNotification>{notifType}</StyledNotification>
    </NotifWrapper>
}

export default Notification