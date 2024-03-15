import { styled } from 'styled-components'
import { COLORS } from '../constants'
import TempoDisplay from "./TempoDisplay.jsx";

const MetronomeRing = styled.div`
    width: 150px;
    height: 150px;
    border: 10px solid ${COLORS.SECONDARY};
    border-radius: 50%;
    background: ${COLORS.QUATERNARY};
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`



const MetronomePulse = ({ tempo, setTempo }) => {
    return (
        <div>
            <MetronomeRing>
                <TempoDisplay tempo={tempo} setTempo={setTempo} />
            </MetronomeRing>
        </div>
    )
}

export default MetronomePulse