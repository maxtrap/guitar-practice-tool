import { COLORS } from '../constants'

const Header = () => {
    const headerStyle = {
        width: '100%',
        // backgroundColor: COLORS.PRIMARY, //or #3d4147,
        padding: 10,
        boxSizing: 'border-box'
        // overflow: 'hidden'
    }

    const insideHeaderStyle = {
        // margin: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: `linear-gradient(to right, ${COLORS.SECONDARY}, ${COLORS.TERTIARY})`,

        borderWidth: '5px',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '10px'
    }

    const textStyle = {
        marginTop: 20,
        color: COLORS.FONT_COLOR
    }

    return <header style={headerStyle}>
        <div style={insideHeaderStyle}>
            <h1 style={ {...textStyle, marginLeft: '20px'} }>Guitar Practice Tool</h1>
            <h1 style={ {...textStyle, marginRight: '20px'} }>I am really good at this web dev stuff</h1>
        </div>
    </header>
}

export default Header