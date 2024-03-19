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

    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    
    &:focus {
        outline: ${COLORS.FONT_COLOR} solid 2px;
        border-radius: 4px;
        box-shadow: 0 0 20px ${COLORS.FONT_COLOR};
    }
`

const BPMText = styled.p`
    color: ${COLORS.FONT_COLOR};
    font-size: 17px;
    font-weight: bold;
    margin: 0;
    
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
`

const TempoDisplay = ({ inputValue, onChange, inputRef, onFocusOut }) => {
    return <>
        <StyledTempoInput name='tempo' ref={inputRef} onBlur={onFocusOut} value={inputValue} onChange={onChange} width={inputValue.toString().length} />
        <BPMText>BPM</BPMText>
    </>
}

export default TempoDisplay;