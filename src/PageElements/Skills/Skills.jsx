import React from 'react';


import {personalInfo} from '../../assets/content/info.json';
const {skills} = personalInfo;

import {Container, Wrapper, Title, Desc, SkillsContainer, 
  Skill, SkillTitle, SkillList, SkillItem, SkillImage} from './StylledComponents';



export default function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>My skills, long description and placeholder text:
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))};
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};








