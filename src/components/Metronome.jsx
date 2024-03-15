import MetronomePulse from "./MetronomePulse.jsx";
import Slider from "./Slider.jsx";
import {useEffect, useState} from "react";
import SetTempoButton from "./SetTempoButton.jsx";
import {styled} from "styled-components";

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

const Metronome = () => {
    const [tempo, setTempo] = useState(INITIAL_VALUE)
    const [inputValue, setInputValue] = useState(INITIAL_VALUE.toString())
    const [sliderValue, setSliderValue] = useState(INITIAL_VALUE)

    useEffect(() => {
        console.log(tempo)
    }, [tempo])

    const handleInputChange = event => {
        setInputValue(event.target.value)
    }

    const handleSliderChange = value => {
        setSliderValue(value)
        setInputValue(value)
        setTempo(value)
    }

    const handleTempoChange = (event) => {
        event.preventDefault()

        if (/^[0-9]+$/.test(inputValue)) {
            setTempo(Number.parseInt(inputValue))
        }
    }

    return (
        <StyledMetronome>
            <StyledForm onSubmit={handleTempoChange}>
                <MetronomePulse inputValue={inputValue} onChange={handleInputChange} />
                <SetTempoButton />
            </StyledForm>
            <Slider initialValue={INITIAL_VALUE} value={sliderValue} onChange={handleSliderChange} />
        </StyledMetronome>
    )
}

export default Metronome