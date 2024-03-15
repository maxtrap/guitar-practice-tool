import {styled} from "styled-components";
import {COLORS, NOTIF_TYPES} from "../constants.js";

const StyledNotification = styled.div`
    color: ${COLORS.FONT_COLOR};
    font-size: 20px;
    
    width: 50%;
    background: ${COLORS.ERROR_PRIMARY};
    
    padding: 10px;
    border: ${COLORS.ERROR_SECONDARY} solid 5px;
    border-radius: 5px;
`

const Notification = ({ notifType }) => {
    if (notifType === NOTIF_TYPES.NONE) {
        return null
    }

    return <StyledNotification>{notifType}</StyledNotification>
}

export default Notification