import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchProjectLists } from '../../redux/slices/projectSlice';
import ProjectCard from '../home/ProjectCard';

function ProjectCardBox() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.project.projectLists);
  useEffect(() => {
    dispatch(fetchProjectLists());
    return () => dispatch(fetchProjectLists());
  }, []);

  return (
    <ProjectBox>
      <ProjectTitle>진행 중인 프로젝트</ProjectTitle>
      <ProjectCards>
        {selector &&
          selector
            .filter(data => data.id < 3)
            .map(data => (
              <ProjectCard
                key={data.id}
                type={data.type}
                imageUrl={data.image_url}
                title={data.title}
                field={data.field}
                hashtag={data.hashtag}
                createdDate={data.created_date}
              />
            ))}
      </ProjectCards>
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  width: 1200px;
  height: 367px;
  display: flex;
  margin-top: 96px;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 24px;
`;

const ProjectCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 35px;
  flex-direction: row;
`;

export default ProjectCardBox;
