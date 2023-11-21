import React from 'react';
import Typewriter from 'typewriter-effect';

import AboutBgAnimation from '../../Components/AboutBgAnimation/AboutGbAnimation'; 

import {AboutContainer, AboutBg, AboutLeftContainer, Img, AboutRightContainer, 
    AboutInnerContainer, TextLoop, Title, Span, SubTitle, CvButton} from './StyledComponents';
import mainImg from '/mainImage.jpg';
import {personalInfo} from '../../assets/content/info';

export default function AboutSection() {
    return (
        <div id='about'>
            <AboutContainer>
                <AboutBg>
                    <AboutBgAnimation />
                </AboutBg>
                <AboutInnerContainer >
                    <AboutLeftContainer id='Left'>
                        <Title>Hi, I am <br /> {personalInfo.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: personalInfo.title,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{personalInfo.description}</SubTitle>
                        <CvButton href={personalInfo.cv} target='_blank'>Download CV</CvButton>
                    </AboutLeftContainer>
                    <AboutRightContainer id='Right'>
                        <Img src={mainImg} alt='main-image' />
                    </AboutRightContainer>
                </AboutInnerContainer>
            </AboutContainer>
        </div>
    );
};

