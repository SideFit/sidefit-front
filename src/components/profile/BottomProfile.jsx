import React from 'react';
import styled from 'styled-components';
import FeedbackBox from './FeedbackBox';
import MannerBox from './MannersBox';
import MoreInformation from './MoreInformation';
import ProjectCardBox from './ProjectCardBox';

const MyBottomProfile = styled.div`
  width: 100%;
  height: 1465px;
  background: #121a26;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

function BottomProfile() {
  return (
    <MyBottomProfile>
      <MoreInformation />
      <ProjectCardBox />
      <FeedbackBox />
      <MannerBox />
    </MyBottomProfile>
  );
}

export default BottomProfile;
