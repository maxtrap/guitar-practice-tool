import { COLORS } from '../constants'
import { styled } from 'styled-components'


const ParentHeader = styled.header`
    width: 100%;
    // backgroundColor: COLORS.PRIMARY, //or #3d4147,
    padding: 10px;
    box-sizing: border-box;
    flex: 0 0 auto;
    // overflow: 'hidden'
`

const InsideHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: linear-gradient(to right, ${COLORS.SECONDARY}, ${COLORS.TERTIARY});

    border-width: 5px;
    border-color: black;
    border-style: solid;
    border-radius: 10px;
`

const Header = () => {

    const textStyle = {
        marginTop: 20,
        color: COLORS.FONT_COLOR
    }

    return (
    <ParentHeader>
        <InsideHeader>
            <h1 style={ {...textStyle, marginLeft: '20px'} }>Guitar Practice Tool</h1>
            <h1 style={ {...textStyle, marginRight: '20px'} }>I am really good at this web dev stuff</h1>
        </InsideHeader>
    </ParentHeader>)
}

export default Header