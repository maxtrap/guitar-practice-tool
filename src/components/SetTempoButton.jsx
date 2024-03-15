import {styled} from "styled-components";
import { COLORS } from '../constants.js'


const StyledButton = styled.input`
    background: ${COLORS.PRIMARY};
    margin: 15px 0 20px 0;
    padding: 8px;
    
    color: ${COLORS.FONT_COLOR};
    font-size: 20px;
    font-weight: bold;
    
    border: ${COLORS.SECONDARY} solid 3px;
    border-radius: 10px;
`

const SetTempoButton = () => {
    return <StyledButton type='submit' value='Set Tempo'/>
}

export default SetTempoButton