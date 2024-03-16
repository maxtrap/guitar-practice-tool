import MetronomePulse from "./MetronomePulse.jsx";
import Slider from "./Slider.jsx";
import {useRef, useState} from "react";
import { styled } from "styled-components";
import { TEMPO_RANGE, NOTIF_TYPES } from "../constants.js";

const INITIAL_VALUE = 120;

const StyledMetronome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Metronome = ({ notify }) => {
    const [tempo, setTempo] = useState(INITIAL_VALUE)
    const [inputValue, setInputValue] = useState(INITIAL_VALUE.toString())
    const [sliderValue, setSliderValue] = useState(INITIAL_VALUE)

    const inputRef = useRef(null)

    const handleInputChange = event => {
        const newValue = event.target.value

        if (newValue.length <= 5 && (/^[0-9]+$/.test(newValue) || newValue === '')) {
            setInputValue(newValue)
        }
    }

    const handleSliderChange = value => {
        setSliderValue(value)
        setInputValue(value.toString())
        setTempo(value)
    }

    const handleTempoInput = (event) => {
        event.preventDefault()

        inputRef.current.blur()

        if (inputValue === '') {
            notify(NOTIF_TYPES.NOT_A_NUMBER)
            return
        }

        const newTempo = Number.parseInt(inputValue)

        if (newTempo < TEMPO_RANGE.MIN_TEMPO || newTempo > TEMPO_RANGE.MAX_TEMPO) {
            notify(NOTIF_TYPES.OUT_OF_RANGE)
            return
        }

        setTempo(newTempo)
        setInputValue(newTempo.toString())
        setSliderValue(newTempo)
        notify(NOTIF_TYPES.NONE)
    }


    const handleFocusOut = () => {
        setInputValue(tempo.toString())
    }

    return (
        <StyledMetronome>
            <StyledForm onSubmit={handleTempoInput}>
                <MetronomePulse inputValue={inputValue} onChange={handleInputChange} inputRef={inputRef} onFocusOut={handleFocusOut} />
            </StyledForm>
            <Slider initialValue={INITIAL_VALUE} value={sliderValue} onChange={handleSliderChange} />
        </StyledMetronome>
    )
}

export default Metronome