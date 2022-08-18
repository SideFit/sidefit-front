import React from 'react';
import styled from 'styled-components';
import { SecondBottomBtn } from '../../elements/teamMemberFind/BottomBtn';
import check1 from '../../images/check1.png';
import three from '../../images/three.png';
import { HiddenStoreProvider } from './HiddenStore';
import InformationTwo from './InformationTwo';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 1828px;
  background: #121a26;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 180px 0px 15.66px 83px;
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
  p {
    width: 410px;
    height: 28px;
    margin: 0px 0px 80px 83px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.85px;
    line-height: 28px;
    text-align: center;
  }
`;

const Line = styled.div`
  margin: 30px 0px 80px 42px;
  background: #c1c7cd;
  width: 582px;
  height: 0px;
  border: 1px solid #c1c7cd;
`;

const Check = styled.img.attrs({
  src: `${check1}`,
  alt: 'Check1',
})`
  width: 61.5px;
  height: 61.5px;
  margin: -110px 0px 0px -479px;
  cursor: pointer;
`;
const Check2 = styled.img.attrs({
  src: `${check1}`,
  alt: 'Check1',
})`
  width: 61.5px;
  height: 61.5px;
  margin: -61.5px -85px 0px 0px;
  cursor: pointer;
`;

const Check3 = styled.img.attrs({
  src: `${three}`,
  alt: 'Check1',
})`
  width: 61.5px;
  height: 61.5px;
  margin: -61.5px 0px 44px 600px;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FindTwoContainer() {
  return (
    <Home>
      <HomeContainer>
        <h1>팀원 모집하기</h1>
        <p>프로젝트 정보를 입력하고 원하는 팀원을 구해보세요!</p>
        <Line />
        <Check />
        <Check2 />
        <Check3 />
        <HiddenStoreProvider>
          <Contents>
            <InformationTwo />
          </Contents>
          <SecondBottomBtn />
        </HiddenStoreProvider>
      </HomeContainer>
    </Home>
  );
}

export default FindTwoContainer;
