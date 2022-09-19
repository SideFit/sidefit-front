import React, { useContext } from 'react';
import styled from 'styled-components';
import Information from './Information';
// import { HiddenStoreProvider } from './HiddenStore';
import FindTop from './FindTop';
import HiddenStore from './HiddenStore';
import InformationTwo from './InformationTwo';

const HomeContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  height: auto;
  background: #121a26;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    margin: 180px 0px 15.66px 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -3px;
    width: 337px;
    height: 35px;
    display: flex;
    justify-content: center;
  }
  & p {
    width: 410px;
    height: 28px;
    margin: 0px 0px 80px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.85px;
    line-height: 28px;
    text-align: center;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FindContainer() {
  const { next } = useContext(HiddenStore);
  return (
    <HomeContainer>
      <FindTop />
      <Contents>{next ? <Information /> : <InformationTwo />}</Contents>
    </HomeContainer>
  );
}

export default FindContainer;
