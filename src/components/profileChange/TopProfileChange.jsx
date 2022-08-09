import React from 'react';
import styled from 'styled-components';
import BasicInformationBox from './BasicInformationBox';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 1200px;
  margin-top: 144px;
  font-weight: 700;
  font-size: 36px;
  height: 44px;
  line-height: 42.9px;
`;

function TopProfileChange() {
  return (
    <HomeContainer>
      <Title>내 프로필</Title>
      <BasicInformationBox />
    </HomeContainer>
  );
}

export default TopProfileChange;
