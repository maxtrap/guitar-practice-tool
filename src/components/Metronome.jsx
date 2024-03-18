import MetronomePulse from "./MetronomePulse.jsx";
import {useRef, useState} from "react";
import { styled } from "styled-components";
import {TEMPO_RANGE, NOTIF_TYPES, BUTTON_TYPES} from "../constants.js";
import SliderContainer from "./SliderContainer.jsx";
import PlayButton from "./PlayButton.jsx";
import {MetronomePlayer} from "./MetronomePlayer.js";

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
    const [isPlay, setIsPlay] = useState(false)

    const inputRef = useRef(null)
    const player = useRef(null)

    const updateTempo = newTempo => {
        setTempo(newTempo)
        setInputValue(newTempo.toString())
        if (player.current) {
            player.current.setTempo(newTempo)
        } else {
            player.current = new MetronomePlayer(newTempo)
        }
    }

    const handleInputChange = event => {
        const newValue = event.target.value

        if (newValue.length <= 5 && (/^[0-9]+$/.test(newValue) || newValue === '')) {
            setInputValue(newValue)
        }
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

        updateTempo(newTempo)

        notify(NOTIF_TYPES.NONE)
    }


    const handleFocusOut = () => {
        setInputValue(tempo.toString())
    }

    const handleTempoButtonPress = buttonType => {
        if (buttonType === BUTTON_TYPES.PLUS) {
            if (tempo + 5 >= TEMPO_RANGE.MAX_TEMPO) {
                return () => updateTempo(TEMPO_RANGE.MAX_TEMPO)
            }
            return () => updateTempo(tempo + 5)
        } else if (buttonType === BUTTON_TYPES.MINUS) {
            if (tempo - 5 <= TEMPO_RANGE.MIN_TEMPO) {
                return () => updateTempo(TEMPO_RANGE.MIN_TEMPO)
            }
            return () => updateTempo(tempo - 5)
        } else {
            return null
        }
    }

    const handlePlay = () => {
        setIsPlay(!isPlay)

        if (!player.current) {
            player.current = new MetronomePlayer(tempo)
        }

        player.current.toggleMetronome()
    }

    return (
        <StyledMetronome>
            <StyledForm onSubmit={handleTempoInput}>
                <MetronomePulse
                    inputValue={inputValue}
                    onChange={handleInputChange}
                    inputRef={inputRef}
                    onFocusOut={handleFocusOut}
                />
            </StyledForm>
            <SliderContainer
                initialValue={INITIAL_VALUE}
                value={tempo}
                onChange={updateTempo}
                onPlus={handleTempoButtonPress(BUTTON_TYPES.PLUS)}
                onMinus={handleTempoButtonPress(BUTTON_TYPES.MINUS)}
            />
            <PlayButton isPlay={isPlay} onClick={handlePlay} />
        </StyledMetronome>
    )
}

export default Metronome