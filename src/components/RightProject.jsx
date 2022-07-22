import React from 'react';
import styled from 'styled-components';
import RightBoxButton from '../elements/RightBoxButton';
import RightBoxContents from '../elements/RightBoxContents';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 376px;
  margin-top: 124px;
  height: 356px;
  left: 1176px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function RightProject() {
  return (
    <HomeContainer>
      <RightBoxContents />
      <RightBoxButton />
    </HomeContainer>
  );
}

export default RightProject;
