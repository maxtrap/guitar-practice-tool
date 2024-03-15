import MetronomePulse from "./MetronomePulse.jsx";
import Slider from "./Slider.jsx";
import {useState} from "react";
import SetTempoButton from "./SetTempoButton.jsx";
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


    const handleInputChange = event => {
        const newValue = event.target.value

        if (newValue.length <= 5 && /^[0-9]+$/.test(newValue)) {
            setInputValue(newValue)
        }
    }

    const handleSliderChange = value => {
        setSliderValue(value)
        setInputValue(value)
        setTempo(value)
    }

    const handleTempoInput = (event) => {
        event.preventDefault()

        const newTempo = Number.parseInt(inputValue)

        if (newTempo < TEMPO_RANGE.MIN_TEMPO || newTempo > TEMPO_RANGE.MAX_TEMPO) {
            notify(NOTIF_TYPES.OUT_OF_RANGE)
            return
        }

        setTempo(newTempo)
        setSliderValue(newTempo)
        notify(NOTIF_TYPES.NONE)
    }

    return (
        <StyledMetronome>
            <StyledForm onSubmit={handleTempoInput}>
                <MetronomePulse inputValue={inputValue} onChange={handleInputChange} />
                <SetTempoButton enabled={tempo.toString() !== inputValue}/>
            </StyledForm>
            <Slider initialValue={INITIAL_VALUE} value={sliderValue} onChange={handleSliderChange} />
        </StyledMetronome>
    )
}

export default Metronome