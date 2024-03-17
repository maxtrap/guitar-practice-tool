import {styled} from "styled-components";
import {COLORS, NOTIF_TYPES} from "../constants.js";

const NotifWrapper = styled.div`
    width: 70%;
    min-height: 60px;
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

const Notification = ({ notifType, style }) => {

    const visibilityStyle = {
        visibility: notifType === NOTIF_TYPES.NONE ? "hidden" : "visible"
    }

    return <NotifWrapper style={{...style, ...visibilityStyle}}>
        <StyledNotification>{notifType}</StyledNotification>
    </NotifWrapper>
}

export default Notification