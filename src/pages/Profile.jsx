import React from 'react';
import styled from 'styled-components';
import BottomProfile from '../components/profile/BottomProfile';
import TopProfile from '../components/profile/TopProfile';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #192230;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Profile() {
  return (
    <Wrapper>
      <TopProfile />
      <BottomProfile />
    </Wrapper>
  );
}

export default Profile;
