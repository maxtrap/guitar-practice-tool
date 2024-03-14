import { styled } from 'styled-components'
import { COLORS } from '../constants'

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

const TempoDisplay = styled.p`
    font-size: 45px;
    font-weight: bold;
`

const MetronomePulse = ({ tempo }) => {
    return (
        <div>
            <MetronomeRing>
                <TempoDisplay>{tempo}</TempoDisplay>
            </MetronomeRing>
        </div>
    )
}

export default MetronomePulse