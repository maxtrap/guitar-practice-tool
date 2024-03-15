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

    &:focus {
        outline: ${COLORS.FONT_COLOR} solid 2px;
        border-radius: 4px;
        box-shadow: 0 0 20px ${COLORS.FONT_COLOR};
    }
`

const TempoDisplay = ({ inputValue, onChange }) => {
    return <StyledTempoInput value={inputValue} onChange={onChange} width={inputValue.toString().length} />
}

export default TempoDisplay;