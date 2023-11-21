import React from 'react';


import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';


import {FooterContainer, FooterWrapper, Logo, Nav, NavLink, 
  SocialMediaIcons, SocialMediaIcon, Copyright} from './StyledComponents';

import {personalInfo} from '../../assets/content/info';



export default function Footer() {
  const phonePrompt = 'phone';
  const emailPrompt = 'email';

  const handlePopUp = async (media)=> {
    const contact = media === phonePrompt? personalInfo.phone : personalInfo.email;
    const message = `${contact} has been copied to the clipboard`;
    try {
      await navigator.clipboard.writeText(contact);
      alert(message);
    }catch(error) {
      console.error(error);
    };
  };

  return (
    <FooterContainer id='footer'>
      <FooterWrapper>
        <Logo>Adam Razmus</Logo>
        <Nav>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact Me</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={personalInfo.linkedIn} target='display'><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={personalInfo.github} target='display'><GitHubIcon /></SocialMediaIcon>
          <SocialMediaIcon onClick={()=> handlePopUp(emailPrompt)} target='display'><EmailIcon /></SocialMediaIcon>
          <SocialMediaIcon onClick={()=> handlePopUp(phonePrompt)} target='display'><PhoneIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Adam Razmus. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

