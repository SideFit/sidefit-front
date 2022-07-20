import React from 'react';
import styled from 'styled-components';
import LeftProject from '../components/LeftProject';
import RightProject from '../components/RightProject';

const HomeCantiner = styled.div`
  width: 100%;
  height: 2286px;
  background-color: #121a26;
  display: flex;
  justify-content: center;
`;

function ProjectPage() {
  return (
    <HomeCantiner>
      <LeftProject />
      <RightProject />
    </HomeCantiner>
  );
}

export default ProjectPage;
