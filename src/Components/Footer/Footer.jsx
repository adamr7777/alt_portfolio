import React from 'react';


import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

import {FooterContainer, FooterWrapper, Logo, Nav, NavLink, 
  SocialMediaIcons, SocialMediaIcon, Copyright} from './StyledComponents';

import {personalInfo} from '../../assets/content/info';



export default function Footer() {
  return (
    <FooterContainer id='footer'>
      <FooterWrapper>
        <Logo>Adam Razmus</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href='#contact'>Contact Me</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={personalInfo.linkedIn} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={personalInfo.github} target="display"><GitHubIcon /></SocialMediaIcon>
          <SocialMediaIcon href={personalInfo.email} target="display"><EmailIcon /></SocialMediaIcon>
          <SocialMediaIcon href={personalInfo.phone} target="display"><PhoneIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Adam Razmus. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

