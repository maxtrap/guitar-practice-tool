import {styled} from "styled-components";
import { COLORS } from '../constants.js'


const StyledButton = styled.input`
    background: ${({ enabled }) => (enabled ? COLORS.PRIMARY : COLORS.PRIMARY_DARK)};
    margin: 15px 0 20px 0;
    padding: 8px;
    
    
    border-color: ${({ enabled }) => (enabled ? COLORS.SECONDARY : COLORS.SECONDARY_DARK)};
    border-style: solid;
    border-width: 4px;
    border-radius: 10px;
    
    color: ${({ enabled }) => (enabled ? COLORS.FONT_COLOR : COLORS.FONT_COLOR_DARK)};
    font-size: 20px;
    font-weight: bold;
`

const SetTempoButton = ({ enabled }) => {
    return <StyledButton enabled={enabled} type='submit' value='Set Tempo'/>
}

export default SetTempoButton