import { useState } from 'react';
import { COLORS } from '../constants'
import styled from 'styled-components'
import ReactSlider from 'react-slider'


const SLIDER_WIDTH = 200;
const SLIDER_HEIGHT = 30;

const THUMB_SIZE = SLIDER_HEIGHT;

const StyledSlider = styled(ReactSlider)`
    border: white solid 5px;
    width: ${SLIDER_WIDTH}px;
    height: ${SLIDER_HEIGHT}px;
`


const StyledThumb = styled.div`
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    background: blue;
    border-radius: ;
`

const StyledTrack = styled.div`
`

const Thumb = (props) => <StyledThumb {...props}></StyledThumb>
const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const Slider = () => {
    return (<StyledSlider
        min={30}
        max={200}
        renderTrack={Track}
        renderThumb={Thumb}
    />)
}


export default Slider;
