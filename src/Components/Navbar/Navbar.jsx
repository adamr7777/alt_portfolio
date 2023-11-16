import React, {useState} from 'react'
import {useTheme} from 'styled-components';
// import from 'react-icons/di';
import {FaBars} from 'react-icons/fa';
// import { Close, CloseRounded } from '@mui/icons-material';

import {Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, 
    LinkedInButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink} from './StyledComponents'

import {personalInfo} from '../../assets/content/info';

export default function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20;', cursor: 'pointer' }}>
                    <Span>Portfolio</Span>       
                </NavLogo>
                <MobileIcon>
                <FaBars onClick={() => {
                    setIsOpen(!isOpen)
                }} />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#education'>Education</NavLink>  
                    {/* Contact */}
                    <NavLink href="#footer">Social</NavLink>
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
                    <MobileLink href='#experience' onClick={() => {
                    setIsOpen(!isOpen)
                    }}>Experience</MobileLink>
                    <MobileLink href='#projects' onClick={() => {
                    setIsOpen(!isOpen)
                    }}>Projects</MobileLink>
                    <MobileLink href='#education' onClick={() => {
                    setIsOpen(!isOpen)
                    }}>Education</MobileLink>
                    {/* Contact */}
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

