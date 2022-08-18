import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import FilteringDropdown from './FilteringDropdown';
import ProjectCard from './ProjectCard';
import { fetchProjectLists } from '../../redux/slices/projectSlice';

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
  const dispatch = useDispatch();
  const selector = useSelector(state => state.project.projectLists);
  useEffect(() => {
    dispatch(fetchProjectLists());
    return () => dispatch(fetchProjectLists());
  }, []);
  console.log(selector);
  return (
    <ProjectListsSectionContainer>
      <ProjectListsTop>
        <p>
          총 <span>{selector?.length}개</span>의 사이드 프로젝트
        </p>
        <FilteringDropdown />
      </ProjectListsTop>
      <ProjectCardContainer>
        {selector &&
          selector.map(data => (
            <ProjectCard
              id={data.id}
              type={data.type}
              imageUrl={data.image_url}
              title={data.title}
              field={data.field}
              hashtag={data.hashtag}
              createdDate={data.created_date}
            />
          ))}
      </ProjectCardContainer>
    </ProjectListsSectionContainer>
  );
}

export default ProjectListsSection;
