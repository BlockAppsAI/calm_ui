import React from "react";

import styled from "styled-components";

//components
import Button from "../Button";
import Project from "../Project";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const ProjectsContainer = styled.div`
    display: flex;
`

export default function Projects({title}) {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Button color="blue" text="New Project"></Button>
      </TitleContainer>
      <ProjectsContainer>
            <Project 
                title="Centralized Aim Log Management"
                workingBranch="Projects Page"
                comments="Anupam"
            />
             <Project 
                title="Face Detection with TFJS"
                workingBranch="Memory Leak"
                comments=""
            />
           
      </ProjectsContainer>
    </MainContainer>
  );
}
