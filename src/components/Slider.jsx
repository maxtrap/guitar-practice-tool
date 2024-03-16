import { COLORS, TEMPO_RANGE } from '../constants'
import styled from 'styled-components'
import ReactSlider from 'react-slider'
import sliderStyle from './slider.module.css'


const SLIDER_WIDTH = '40%';
const SLIDER_HEIGHT = 30;

const THUMB_SIZE = SLIDER_HEIGHT;


const StyledSlider = styled(ReactSlider)`
    width: ${SLIDER_WIDTH};
    height: ${SLIDER_HEIGHT}px;
    display: flex;
    align-items: center;
`


const StyledThumb = styled.div`
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    background: ${COLORS.PRIMARY};
    border-radius: 25%;
`

const StyledTrack = styled.div`
    height: 10px;
    background: ${COLORS.SECONDARY};
    
    margin-right: ${({ $index }) => ($index === 0 ? THUMB_SIZE + 4 : 0)}px;
    margin-left: ${({ $index }) => ($index === 1 ? THUMB_SIZE + 4 : 0)}px;
`

const Thumb = (props) => <StyledThumb {...props}></StyledThumb>
const Track = (props, state) => <StyledTrack {...props} $index={state.index} />;

const Slider = ({ initialValue, value, onChange }) => {
    return (<StyledSlider
        min={TEMPO_RANGE.MIN_TEMPO}
        max={TEMPO_RANGE.MAX_TEMPO}
        step={5}
        thumbActiveClassName={sliderStyle.activeThumb}
        renderTrack={Track}
        renderThumb={Thumb}
        defaultValue={initialValue}
        value={value}
        onChange={onChange}

    />)
}


export default Slider;
