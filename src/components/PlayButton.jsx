import {styled} from "styled-components";
import {COLORS} from "../constants.js";
import PlayIcon from '../assets/play.svg?react'
import PauseIcon from '../assets/pause.svg?react'

const BUTTON_SIZE = 75;

const StyledButton = styled.button`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    margin-top: 15px;
    background: ${COLORS.PRIMARY};
    
    border: ${COLORS.SECONDARY} solid 6px;
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s;
    &:hover {
        box-shadow: 0 0 15px ${COLORS.PRIMARY};
    }
`

const ButtonIcon = (props) => {
    const {isPlay, ...svgProps} = props

    if (isPlay) {
        return <PauseIcon width={BUTTON_SIZE * 0.5} height={BUTTON_SIZE * 0.5} {...svgProps} />
    }

    return <PlayIcon width={BUTTON_SIZE * 0.4} height={BUTTON_SIZE * 0.4} {...svgProps} />
}


const PlayButton = ({ isPlay, onClick }) => {
    return <StyledButton onClick={onClick}>
        <ButtonIcon isPlay={isPlay} fill={COLORS.SECONDARY}/>
    </StyledButton>
}

export default PlayButton