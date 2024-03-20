import MetronomeRing from "./MetronomeRing.jsx";
import {useRef, useState} from "react";
import { styled } from "styled-components";
import {TEMPO_RANGE, NOTIF_TYPES, BUTTON_TYPES, SUBDIVISION_TYPES} from "../constants.js";
import SliderContainer from "./SliderContainer.jsx";
import PlayButton from "./PlayButton.jsx";
import {MetronomePlayer} from "./MetronomePlayer.js";
import PulseTempoWrapper from "./PulseTempoWrapper.jsx";
import TempoDisplay from "./TempoDisplay.jsx";
import IconButton from "./IconButton.jsx";
import Slider from "./Slider.jsx";
import Notification from "./Notification.jsx";
import Subdivisions from "./Subdivisions.jsx";

const INITIAL_VALUE = 120;

const StyledMetronome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    margin-bottom: 20px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Metronome = () => {
    const [tempo, setTempo] = useState(INITIAL_VALUE)
    const [inputValue, setInputValue] = useState(INITIAL_VALUE.toString())
    const [isPlay, setIsPlay] = useState(false)
    const [animationKey, setAnimationKey] = useState(0)
    const [subdivision, setSubdivision] = useState(SUBDIVISION_TYPES.EIGHTH)

    const inputRef = useRef(null)
    const player = useRef(null)

    const [notifType, setNotifType] = useState(NOTIF_TYPES.NONE)
    const notifTimeoutId = useRef(null)

    const notify = type => {
        setNotifType(type)

        if (notifTimeoutId.current) {
            clearTimeout(notifTimeoutId.current)
        }

        notifTimeoutId.current = setTimeout(() => {
            setNotifType(NOTIF_TYPES.NONE)
            notifTimeoutId.current = null
        }, 5000)
    }

    const updateTempo = newTempo => {
        setTempo(newTempo)
        setInputValue(newTempo.toString())
        if (player.current) {
            player.current.setTempo(newTempo)
        } else {
            player.current = new MetronomePlayer(newTempo, playPulseAnimation)
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
        inputRef.current.blur() //This triggers an onBlur/onFocusOut event which is defined below
    }


    const handleFocusOut = () => {
        if (inputValue === '') {
            notify(NOTIF_TYPES.NOT_A_NUMBER)
            setInputValue(tempo.toString())
            return
        }

        const newTempo = Number.parseInt(inputValue)

        if (newTempo < TEMPO_RANGE.MIN_TEMPO || newTempo > TEMPO_RANGE.MAX_TEMPO) {
            notify(NOTIF_TYPES.OUT_OF_RANGE)
            setInputValue(tempo.toString())
            return
        }

        notify(NOTIF_TYPES.NONE)
        updateTempo(newTempo)
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
            player.current = new MetronomePlayer(tempo, playPulseAnimation)
        }

        player.current.toggleMetronome()
    }

    const playPulseAnimation = () => {
        setAnimationKey(prevKey => prevKey + 1)
    }

    return (
        <StyledMetronome>
            <Notification notifType={notifType} style={{marginTop: 10, marginBottom: 20}} />
            <StyledForm onSubmit={handleTempoInput}>
                <PulseTempoWrapper>
                    <MetronomeRing
                        key={animationKey}
                        $isPulsing={isPlay}
                    />
                    <TempoDisplay
                        inputValue={inputValue}
                        onChange={handleInputChange}
                        inputRef={inputRef}
                        onFocusOut={handleFocusOut}
                    />
                </PulseTempoWrapper>
            </StyledForm>
            <SliderContainer>
                <IconButton buttonType={BUTTON_TYPES.MINUS} onClick={handleTempoButtonPress(BUTTON_TYPES.MINUS)}/>
                <Slider initialValue={INITIAL_VALUE} value={tempo} onChange={updateTempo} />
                <IconButton buttonType={BUTTON_TYPES.PLUS} onClick={handleTempoButtonPress(BUTTON_TYPES.PLUS)}/>
            </SliderContainer>
            <PlayButton isPlay={isPlay} onClick={handlePlay} />
            <Subdivisions currentSubdivision={subdivision} setSubdivision={setSubdivision}/>
        </StyledMetronome>
    )
}

export default Metronome