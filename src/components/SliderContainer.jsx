import Slider from "./Slider.jsx";
import {styled} from "styled-components";
import {BUTTON_TYPES} from "../constants.js";
import IconButton from "./IconButton.jsx";

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const SliderContainer = ({ initialValue, value, onChange, onPlus, onMinus }) => {
    return <StyledContainer>
        <IconButton buttonType={BUTTON_TYPES.MINUS} onClick={onMinus}/>
        <Slider initialValue={initialValue} value={value} onChange={onChange} />
        <IconButton buttonType={BUTTON_TYPES.PLUS} onClick={onPlus}/>
    </StyledContainer>
}

export default SliderContainer