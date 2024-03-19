import {styled} from "styled-components";
import {COLORS, SUBDIVISION_TYPES} from '../constants'
import SubdivisionButton from "./SubdivisionButton.jsx";

const BORDER_WIDTH = 6

const SubdivisionsWrapper = styled.div`
    width: 500px;
    aspect-ratio: 5;
    margin-top: 20px;

    display: flex;

    >* {
        border-color: ${COLORS.PRIMARY};
        border-style: solid;
        border-width: ${BORDER_WIDTH}px ${BORDER_WIDTH / 2}px;
        
        &:first-child {
            border-left-width: ${BORDER_WIDTH}px;
            border-radius: 10px 0 0 10px;
        } 
        
        &:last-child {
            border-right-width: ${BORDER_WIDTH}px;
            border-radius: 0 10px 10px 0;
        }
    }
    
`

const Subdivisions = () => {
    return <SubdivisionsWrapper>
        <SubdivisionButton noteType={SUBDIVISION_TYPES.QUARTER} />
        <SubdivisionButton noteType={SUBDIVISION_TYPES.EIGHTH} />
        <SubdivisionButton noteType={SUBDIVISION_TYPES.TRIPLET} />
        <SubdivisionButton noteType={SUBDIVISION_TYPES.SIXTEENTH} />
    </SubdivisionsWrapper>
}

export default Subdivisions