import PlusSign from '../assets/plus.svg?react'
import MinusSign from '../assets/minus.svg?react'
import {BUTTON_TYPES, COLORS} from "../constants.js";


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
    return <div onClick={onClick}>
        <Icon type={buttonType} width='30px' height='30px' fill={COLORS.PRIMARY} />
    </div>
}

export default IconButton