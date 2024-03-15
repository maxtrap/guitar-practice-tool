import MetronomePulse from "./MetronomePulse.jsx";
import Slider from "./Slider.jsx";
import {useState} from "react";

const INITIAL_VALUE = 120;

const Metronome = () => {
    const [tempo, setTempo] = useState(INITIAL_VALUE)
    const [inputValue, setInputValue] = useState(INITIAL_VALUE)
    const [sliderValue, setSliderValue] = useState(INITIAL_VALUE)

    const handleInputChange = event => {
        setInputValue(event.target.value)
    }

    const handleSliderChange = value => {
        setSliderValue(value)
        setTempo(value)
    }




    return (
        <>
            <form onSubmit={() => setTempo(inputValue)}>
                <MetronomePulse inputValue={inputValue} onChange={handleInputChange} />
            </form>
            <Slider initialValue={INITIAL_VALUE} value={sliderValue} onChange={handleSliderChange} />
        </>
    )
}

export default Metronome