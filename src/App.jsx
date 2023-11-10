
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from "styled-components";

import './globalStyles/styles.css';
import Navbar from "./Components/Navbar/Navbar";

const darkTheme = {         //move to a separate file as a styled component
    bg: '#1C1C27',
    bgLight: '#1C1E27',
    primary: '#854CE6',
    text_primary: '#F2F3F4',
    text_secondary: '#b1b2b3',
    card: '#171721',
    card_light: '#191924',
    button: '#854CE6',
    white: '#FFFFFF',
    black: '#000000'
};


function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Navbar />
            </Router>
        </ThemeProvider>
        
    );
};

export default App;
