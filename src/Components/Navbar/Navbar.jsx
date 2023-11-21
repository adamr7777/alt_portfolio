import React, {useState} from 'react'
import {useTheme} from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {Storm} from '@mui/icons-material';


import {Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, 
    LinkedInButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink} from './StyledComponents'

import {personalInfo} from '../../assets/content/info';

export default function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    
    const stormLogoStyles = {
        'color': theme.primary
    };
    const navLogoStyles = {
        display: 'flex', 
        fontSize: '20', 
        alignItems: 'center', 
        color: 'white', 
        marginBottom: '20,', 
        cursor: 'pointer'
    };
    
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' style={navLogoStyles}>
                    <Storm style={stormLogoStyles}/><Span>MyWorks</Span>       
                </NavLogo>
                <MobileIcon>
                <FaBars onClick={() => {
                    setIsOpen(!isOpen)
                }} />
                </MobileIcon>
                <NavItems>
                    <NavLink href='#about'>About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#contact'>Contact Me!</NavLink>
                    <NavLink href='#footer'>Social</NavLink>
                </NavItems>
                <ButtonContainer>
                    <LinkedInButton href={personalInfo.linkedIn} target='_blank'>LinkedIn Profile</LinkedInButton>
                </ButtonContainer>
                {
                isOpen &&
                <MobileMenu isOpen={isOpen}>
                    <MobileLink href='#about' onClick={() => {
                    setIsOpen(!isOpen)
                    }}>About</MobileLink>
                    <MobileLink href='#skills' onClick={() => {
                    setIsOpen(!isOpen)
                    }}>Skills</MobileLink>
                    <MobileLink href='#projects' onClick={() => {
                    setIsOpen(!isOpen)
                    }}>Projects</MobileLink>
                    <MobileLink href='#contact' onClick={() => {
                    setIsOpen(!isOpen)
                    }}>Contact Me!</MobileLink>
                    <MobileLink href='#footer' onClick={() => {
                    setIsOpen(!isOpen)
                    }}>Social</MobileLink>
    '       '       <LinkedInButton style={{padding: '10px 16px',background: `${theme.primary}`, 
                        color: 'white',width: 'max-content'}} href={personalInfo.linkedIn} 
                        target='_blank'>LinkedIn Profile
                    </LinkedInButton>
                </MobileMenu>
                }
            </NavbarContainer>
        </Nav>
    );
};

