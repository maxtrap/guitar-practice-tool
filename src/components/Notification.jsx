import {styled} from "styled-components";
import {COLORS} from "../constants.js";

const StyledNotification = styled.div`
    color: ${COLORS.FONT_COLOR};
    font-size: 30px;

`

const Notification = ({ notifType }) => {
    return <StyledNotification>{notifType}</StyledNotification>
}

export default Notification