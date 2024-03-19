import styled from 'styled-components'
import { COLORS } from '../constants'

const TempoDisplayWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

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

const BPMText = styled.p`
    color: ${COLORS.FONT_COLOR};
    font-size: 17px;
    font-weight: bold;
    margin: 1px 0 0;
`

const TempoDisplay = ({ inputValue, onChange, inputRef, onFocusOut }) => {
    return <TempoDisplayWrapper>
        <StyledTempoInput name='tempo' ref={inputRef} onBlur={onFocusOut} value={inputValue} onChange={onChange} width={inputValue.toString().length} />
        <BPMText>BPM</BPMText>
    </TempoDisplayWrapper>
}

export default TempoDisplay;