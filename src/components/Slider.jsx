import { useState } from 'react';
import { COLORS } from '../constants'
import styled from 'styled-components'


const SLIDER_WIDTH = 200;
const SLIDER_HEIGHT = 30;


const SliderOutline = styled.div`
    width: ${SLIDER_WIDTH}px;
    height: ${SLIDER_HEIGHT}px;
    border: white solid 5px;
`

const SliderBox = styled.div`
    width: ${SLIDER_HEIGHT}px;
    height: ${SLIDER_HEIGHT}px;
    background: ${COLORS.SECONDARY};
    position: relative;
`


const Slider = ({ onChange }) => {
    const [sliderX, setSliderX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)


    onChange(sliderX)

    const handleMouseDown = () => {
        setIsDragging(true)
    }

    const handleMouseMove = (event) => {
        // event.stopPropagation()
        // event.preventDefault()
        if (!isDragging || event.target.id !== 'sliderDiv') {
            return
        }
        // console.log(`x: ${event.nativeEvent.offsetX} y: ${event.nativeEvent.offsetY}`)

        //Slider height is part of the calculation because the slider is a square, so the edges need to be accounted for
        //The slider height is used to determine the size of the square
        const newValue = event.nativeEvent.offsetX - SLIDER_HEIGHT / 2
        // console.log(event.target.id)
        setSliderX(newValue)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }


    return (<div onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <SliderOutline id='sliderDiv'>
            {/*<SliderBox style={{ left: 10 + sliderX }}>*/}

            {/*</SliderBox>*/}

            <div style={{width: 60, height:30, background: 'blue', position: 'relative', left: sliderX}} />
        </SliderOutline>
    </div>)
}


// const Slider = ({ min, max, defaultValue, onChange }) => {
//     const [value, setValue] = useState(defaultValue || min);
//     const [isDragging, setIsDragging] = useState(false);
//
//     const handleMouseDown = (event) => {
//         setIsDragging(true);
//     };
//
//     const handleMouseMove = (event) => {
//         if (!isDragging) return;
//         const trackWidth = event.currentTarget.clientWidth;
//         const offset = event.nativeEvent.offsetX;
//         const newValue = Math.min(max, min + (offset / trackWidth) * (max - min));
//         setValue(newValue);
//         if (onChange) onChange(newValue);
//     };
//
//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };
//
//     console.log(min, max, defaultValue)
//
//     return (
//         <div onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
//             <h1>Header</h1>
//             <div style={{ width: `${(value - min) / (max - min) * 100}%`, height: '20px', backgroundColor: 'blue' }} />
//         </div>
//     );
// };




export default Slider;
