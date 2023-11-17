import React from 'react';

import {Container, Wrapper, Title, Desc, CardContainer} from './StyledComponents';
import ProjectCard from '../../Components/Cards/ProjectCard';
import {personalInfo} from '../../assets/content/info';

export default function Projects({ openModal, setOpenModal }) {
  const {projects} = personalInfo;

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Placeholder text. But here are my awesome projects.</Desc>
        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};
