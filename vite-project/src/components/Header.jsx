import React from 'react';
import Navbar from './Nav';

const styles = {
    headerStyle: {
        backgroundImage: 'url("/img/bird-4849434_1280.png")',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100px',
    },
    headingStyle: {
        margin: '4rem',
        color: 'blue',
        fontSize: '70px',
        fontFamily: 'Arial',
        fontWeight: '100',
        textAlign: 'center',
    },
    navWrapperStyle: {
        alignSelf: 'flex-end',
        width: '100%',
    },
};

function Header() {
    return (
        <header style={styles.headerStyle}>
            <h1 style={styles.headingStyle}>Michaela Montague</h1>
            <div style={styles.navWrapperStyle}>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;