import styled from 'styled-components'
import { COLORS } from '../constants'
import {useEffect, useState} from "react";


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

const TempoDisplay = ({ tempo, setTempo }) => {
    const [inputValue, setInputValue] = useState(tempo)

    useEffect(() => {
        setInputValue(tempo)
    }, [tempo])

    const handleTempoChange = (event) => {
        const newTempo = event.target.value;

        if (newTempo === '' || /^[0-9]+$/.test(newTempo)) {
            setTempo(newTempo)
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return <StyledTempoInput value={inputValue} onChange={handleInputChange} width={inputValue.toString().length} />
}

export default TempoDisplay;