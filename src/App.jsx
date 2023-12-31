
import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

import './globalStyles/styles.css';
import Navbar from './Components/Navbar/Navbar';
import About from './PageElements/About/About';
import Skills from './PageElements/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './PageElements/Projects/Projects';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Footer from './Components/Footer/Footer'; 

const darkTheme = {         
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


const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
overflow-x: hidden;
`;


const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;


function App() {
    const [openModal, setOpenModal] = useState({state: false, project: null});
    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Navbar />
                <Body>
                    <About />
                    <Wrapper>
                        <Skills />
                    </Wrapper>
                    <Projects openModal={openModal} setOpenModal={setOpenModal} />
                    <Wrapper>
                        <Contact />
                    </Wrapper>
                    <Footer />
                    {openModal.state &&
                        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                    }
                </Body>
            </Router>
        </ThemeProvider>
        
    );
};

export default App;
