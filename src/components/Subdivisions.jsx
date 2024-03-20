import {styled} from "styled-components";
import {COLORS, SUBDIVISION_TYPES} from '../constants'
import SubdivisionButton from "./SubdivisionButton.jsx";

const BORDER_WIDTH = 6

const SubdivisionsWrapper = styled.div`
    display: flex;
    height: 100px;
    width: 50%;
    margin-top: 20px;

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

const Subdivisions = ({ currentSubdivision, setSubdivision }) => {

    const handleClick = (subdivision) => () => setSubdivision(subdivision)

    return <SubdivisionsWrapper>
        <SubdivisionButton
            noteType={SUBDIVISION_TYPES.QUARTER}
            onClick={handleClick(SUBDIVISION_TYPES.QUARTER)}
            isSelected={currentSubdivision === SUBDIVISION_TYPES.QUARTER}
        />
        <SubdivisionButton
            noteType={SUBDIVISION_TYPES.EIGHTH}
            onClick={handleClick(SUBDIVISION_TYPES.EIGHTH)}
            isSelected={currentSubdivision === SUBDIVISION_TYPES.EIGHTH}
        />
        <SubdivisionButton
            noteType={SUBDIVISION_TYPES.TRIPLET}
            onClick={handleClick(SUBDIVISION_TYPES.TRIPLET)}
            isSelected={currentSubdivision === SUBDIVISION_TYPES.TRIPLET}
        />
        <SubdivisionButton
            noteType={SUBDIVISION_TYPES.SIXTEENTH}
            onClick={handleClick(SUBDIVISION_TYPES.SIXTEENTH)}
            isSelected={currentSubdivision === SUBDIVISION_TYPES.SIXTEENTH}
        />
        <SubdivisionButton
            noteType={SUBDIVISION_TYPES.SWUNG}
            onClick={handleClick(SUBDIVISION_TYPES.SWUNG)}
            isSelected={currentSubdivision === SUBDIVISION_TYPES.SWUNG}
        />
    </SubdivisionsWrapper>
}

export default Subdivisions