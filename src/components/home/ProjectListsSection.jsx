import React from 'react';
import styled from 'styled-components';
import FilteringDropdown from './FilteringDropdown';
import ProjectCard from './ProjectCard';

const ProjectListsSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectListsTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: grey;
    font-size: 16px;
    span {
      color: white;
    }
  }
`;

const ProjectCardContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 35px;
  padding-bottom: 100px;
`;

function ProjectListsSection() {
  return (
    <ProjectListsSectionContainer>
      <ProjectListsTop>
        <p>
          총 <span>9개</span>의 사이드 프로젝트
        </p>
        <FilteringDropdown />
      </ProjectListsTop>
      <ProjectCardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardContainer>
    </ProjectListsSectionContainer>
  );
}

export default ProjectListsSection;
