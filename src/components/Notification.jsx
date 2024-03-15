import {styled} from "styled-components";
import {COLORS, NOTIF_TYPES} from "../constants.js";

const StyledNotification = styled.div`
    color: ${COLORS.FONT_COLOR};
    font-size: 20px;
    
    width: 50%;
    min-height:50px;
    background: ${COLORS.ERROR_PRIMARY};
    
    padding: 10px;
    border: ${COLORS.ERROR_SECONDARY} solid 5px;
    border-radius: 5px;
`

const Notification = ({ notifType, style }) => {

    const visibilityStyle = {
        visibility: notifType === NOTIF_TYPES.NONE ? "hidden" : "visible"
    }

    return <StyledNotification style={{...style, ...visibilityStyle}}>{notifType}</StyledNotification>
}

export default Notification