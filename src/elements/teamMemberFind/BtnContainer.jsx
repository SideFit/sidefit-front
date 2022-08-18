import React from 'react';
import styled from 'styled-components';
import BtnContents from './BtnContents';

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function BtnContainer() {
  return (
    <HomeContainer>
      <BtnContents />
    </HomeContainer>
  );
}

export default BtnContainer;
