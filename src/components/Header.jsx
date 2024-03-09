const Header = () => {
    const headerStyle = {
        width: '100%',
        backgroundColor: 'purple',
    }

    const textStyle = {
        marginTop: 0
    }

    return <header style={headerStyle}>
        <h1 style={textStyle}>Guitar Practice Tool</h1>
        <h1>I am really good at this web dev stuff</h1>
    </header>
}

export default Header