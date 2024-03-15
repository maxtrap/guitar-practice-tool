import { styled } from 'styled-components'
import { COLORS } from '../constants'
import TempoDisplay from "./TempoDisplay.jsx";

const MetronomeRing = styled.div`
    width: 150px;
    height: 150px;
    border: 10px solid ${COLORS.PRIMARY};
    border-radius: 50%;
    background: ${COLORS.TERTIARY};
    display: flex;
    align-items: center;
    justify-content: center;
`



const MetronomePulse = ({ inputValue, onChange }) => {
    return (
        <div>
            <MetronomeRing>
                <TempoDisplay inputValue={inputValue} onChange={onChange} />
            </MetronomeRing>
        </div>
    )
}

export default MetronomePulse