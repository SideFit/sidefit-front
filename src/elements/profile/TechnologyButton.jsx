import React from 'react';
import styled from 'styled-components';
import { GiCancel } from 'react-icons/gi';

const HomeContainer = styled.div`
  display: flex;
  margin: 12px 0px 78px 310px;
`;

const Title = styled.div`
  width: auto;
  min-width: 82px;
  height: 36px;
  background: #00c4b4;
  margin-right: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.25px;
  font-weight: 600;
  font-size: 15px;
`;

function TechnologyButton() {
  return (
    <HomeContainer>
      <Title>
        Java
        <GiCancel />
      </Title>
      <Title>
        Spring
        <GiCancel />
      </Title>
      <Title>
        React
        <GiCancel />
      </Title>
    </HomeContainer>
  );
}

export default TechnologyButton;
