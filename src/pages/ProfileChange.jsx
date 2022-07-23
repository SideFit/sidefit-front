import React from 'react';
import styled from 'styled-components';
import BottomProfileChange from '../components/BottomProfileChange';
import TopProfileChange from '../components/TopProfileChange';

const HomeContainer = styled.div`
  width: 100%;
  height: 2396px;
  background-color: #121a26;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function ProfileChange() {
  return (
    <HomeContainer>
      <TopProfileChange />
      <BottomProfileChange />
    </HomeContainer>
  );
}

export default ProfileChange;
