import {keyframes, styled} from 'styled-components'
import { COLORS } from '../constants'
import TempoDisplay from "./TempoDisplay.jsx";

const pulse = keyframes`
    0% {transform: scale(1.15)}
    100% {transform: scale(1)}
`

const MetronomeRing = styled.div`
    width: 150px;
    height: 150px;
    margin: 20px 0;
    border: 10px solid ${COLORS.PRIMARY};
    border-radius: 50%;
    background: ${COLORS.TERTIARY};
    display: flex;
    align-items: center;
    justify-content: center;
    
    animation-name: ${({$isPulsing}) => ($isPulsing ? pulse : 'none')};
    animation-duration: 1s;
`



const MetronomePulse = ({ isPulsing, inputValue, onChange, inputRef, onFocusOut }) => {
    return (
        <div>
            <MetronomeRing $isPulsing={isPulsing}>
                <TempoDisplay inputValue={inputValue} onChange={onChange} inputRef={inputRef} onFocusOut={onFocusOut} />
            </MetronomeRing>
        </div>
    )
}

export default MetronomePulse