import styled from 'styled-components'
import { COLORS } from '../constants'


const StyledTempoInput = styled.input`
    color: ${COLORS.FONT_COLOR};
    font-size: 45px;
    font-weight: bold;
    background: none;
    border: none;
    height: 45px;
    
    width: ${ ({ width }) => (width) }ch;
`

const TempoDisplay = ({ tempo, setTempo }) => {
    const handleTempoChange = (event) => {
        setTempo(event.target.value)
    }

    return <StyledTempoInput value={tempo} onChange={handleTempoChange} width={tempo.toString().length} />
}

export default TempoDisplay;