import {styled} from "styled-components";
import Quarter from '../assets/quarter.svg?react'
import Eighth from '../assets/eighth.svg?react'
import Triplet from '../assets/triplet.svg?react'
import Sixteenth from '../assets/sixteenth.svg?react'
import {COLORS, SUBDIVISION_TYPES} from "../constants.js";

const StyledButton = styled.div`
    background: none;

    height: 100%;

    box-sizing: border-box;

    display: flex;
    flex: 1 1 0;
    
    justify-content: center;
    align-items: center;
    
    transition-duration: 0.3s;
    &:hover {
        
        background: ${COLORS.SECONDARY};
    }
`

const ICON_SIZE = 40
const ICON_COLOR = COLORS.PRIMARY

const NoteIcon = (props) => {
    const {noteType, ...svgProps} = props

    switch (noteType) {
        case SUBDIVISION_TYPES.QUARTER:
            return <Quarter width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR}/>
        case SUBDIVISION_TYPES.EIGHTH:
            return <Eighth {...svgProps} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR}/>
        case SUBDIVISION_TYPES.TRIPLET:
            return <Triplet {...svgProps} width={ICON_SIZE * 2} height={ICON_SIZE} fill={ICON_COLOR}/>
        case SUBDIVISION_TYPES.SIXTEENTH:
            return <Sixteenth {...svgProps} width={ICON_SIZE * 3} height={ICON_SIZE} fill={ICON_COLOR} stroke={ICON_COLOR}/>
        default:
            return null
    }
}

const SubdivisionButton = ({ noteType }) => {
    return <StyledButton>
        <NoteIcon noteType={noteType} />
    </StyledButton>
}

export default SubdivisionButton