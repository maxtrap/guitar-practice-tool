import {styled} from "styled-components";
import {COLORS, SUBDIVISION_TYPES} from '../constants'
import SubdivisionButton, {BUTTON_WIDTH} from "./SubdivisionButton.jsx";

const BORDER_WIDTH = 6

const SubdivisionsWrapper = styled.div`
    height: 100px;
    margin-top: 20px;
    position: relative;
`

const SubdivisionsButtonWrapper = styled.div`
    display: flex;
    height: 100%;

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

const SubdivisionHighlight = styled.div`
    width: ${BUTTON_WIDTH}px;
    height: 100%;
    border: ${COLORS.SECONDARY} solid 10px;
    box-sizing: border-box;
    border-radius: 10px;
    
    position: absolute;
    transition-duration: 0.3s;
    transform: translateX(${ ({ $currentSubdivision }) => ($currentSubdivision * BUTTON_WIDTH) }px) scale(1.08) ;
`

const Subdivisions = ({ currentSubdivision, setSubdivision }) => {

    const handleClick = (subdivision) => () => setSubdivision(subdivision)

    return <SubdivisionsWrapper>
        <SubdivisionHighlight $currentSubdivision={currentSubdivision} />
        <SubdivisionsButtonWrapper>
            <SubdivisionButton
                noteType={SUBDIVISION_TYPES.QUARTER}
                onClick={handleClick(SUBDIVISION_TYPES.QUARTER)}
            />
            <SubdivisionButton
                noteType={SUBDIVISION_TYPES.EIGHTH}
                onClick={handleClick(SUBDIVISION_TYPES.EIGHTH)}
            />
            <SubdivisionButton
                noteType={SUBDIVISION_TYPES.TRIPLET}
                onClick={handleClick(SUBDIVISION_TYPES.TRIPLET)}
            />
            <SubdivisionButton
                noteType={SUBDIVISION_TYPES.SIXTEENTH}
                onClick={handleClick(SUBDIVISION_TYPES.SIXTEENTH)}
            />
        </SubdivisionsButtonWrapper>
    </SubdivisionsWrapper>
}

export default Subdivisions