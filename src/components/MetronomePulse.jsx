import { styled } from 'styled-components'
import { COLORS } from '../constants'

const MetronomeRing = styled.div`
    width: 150px;
    height: 150px;
    border: 10px solid ${COLORS.SECONDARY};
    border-radius: 50%;
    background: ${COLORS.QUATERNARY};
`

const MetronomePulse = () => {
    return (
        <div>
            <MetronomeRing>

            </MetronomeRing>
        </div>
    )
}

export default MetronomePulse