import {styled} from "styled-components";
import { COLORS } from '../constants.js'


const StyledButton = styled.input`
    background: ${COLORS.PRIMARY};
    width: 140px;
    height: 40px;
    margin: 15px 0 20px 0;
    
    color: ${COLORS.FONT_COLOR};
    font-size: 25px;
    font-weight: bold;
    
    border: ${COLORS.SECONDARY} solid 3px;
    border-radius: 10px;
`

const SetTempoButton = () => {
    return <StyledButton type='submit' value='Set Tempo'/>
}

export default SetTempoButton