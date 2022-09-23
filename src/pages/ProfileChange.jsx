import React from 'react';
import styled from 'styled-components';
import BottomProfileChange from '../components/profileChange/BottomProfileChange';
import { ButtonStoreProvider } from '../components/profileChange/ButtonStore';
import TopProfileChange from '../components/profileChange/TopProfileChange';

const HomeContainer = styled.div`
  width: 100%;
  height: 2396px;
  background-color: #121a26;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SaveBtn = styled.div`
  width: 344px;
  height: 53px;
  margin-top: 64px;
  background: #d12771;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function ProfileChange() {
  const savePage = () => {
    window.location.replace('/profile');
  };
  return (
    <ButtonStoreProvider>
      <HomeContainer>
        <TopProfileChange />
        <BottomProfileChange />
        <SaveBtn onClick={savePage}>저장하기</SaveBtn>
      </HomeContainer>
    </ButtonStoreProvider>
  );
}

export default ProfileChange;
