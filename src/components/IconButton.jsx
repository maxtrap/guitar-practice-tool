import PlusSign from '../assets/plus.svg?react'
import MinusSign from '../assets/minus.svg?react'
import {BUTTON_TYPES, COLORS} from "../constants.js";
import {styled} from "styled-components";

const ICON_SIZE = '22px';


const IconWrapper = styled.div`
    width: ${ICON_SIZE};
    height: ${ICON_SIZE};
    margin: 0 15px;
    padding: 5px;
    
    border: ${COLORS.PRIMARY} solid 4px;
    border-radius: 10px;
`

const Icon = (props) => {
    const {type, ...svgProps} = props

    if (type === BUTTON_TYPES.PLUS) {
        return <PlusSign {...svgProps} />
    } else if (type === BUTTON_TYPES.MINUS) {
        return <MinusSign {...svgProps} />
    }
    return null
}

const IconButton = ({ buttonType, onClick }) => {
    return <IconWrapper onClick={onClick} >
        <Icon type={buttonType} width={ICON_SIZE} height={ICON_SIZE} fill={COLORS.PRIMARY} />
    </IconWrapper>
}

export default IconButton