import React from 'react';
import styled from 'styled-components';
import { CompleteBottonBtn } from '../../elements/teamMemberFind/BottomBtn';
import check1 from '../../images/check1.png';
import { HiddenStoreProvider } from './HiddenStore';

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
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -3px;
    width: auto;
    height: 35px;
    display: flex;
    justify-content: center;
  }
  p {
    width: auto;
    height: 28px;
    margin: 0px 0px 80px 83px;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -1px;
    text-align: center;
  }
`;

const Line = styled.div`
  margin: 30px 0px 80px 42px;
  background: #c1c7cd;
  width: 582px;
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
  src: `${check1}`,
  alt: 'Check1',
})`
  width: 61.5px;
  height: 61.5px;
  margin: -61.5px 0px 44px 600px;
  cursor: pointer;
`;

const Check4 = styled.img.attrs({
  src: `${check1}`,
  alt: 'Check1',
})`
  width: 158.43px;
  height: 158.43px;
  margin-top: 83px;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompleteBox = styled.div`
  width: 1200px;
  height: 448px;
  margin: 10px 0px 0px 70px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function CompleteConatainer() {
  return (
    <Home>
      <HomeContainer>
        <h1>팀원 모집하기</h1>
        <p>프로젝트 정보를 입력하고 원하는 팀원을 구해보세요!</p>
        <Line />
        <Check />
        <Check2 />
        <Check3 />
        <Contents>
          <CompleteBox>
            <Check4 />
            <div style={{ marginTop: -100, marginLeft: -53 }}>
              <h1>등록이 완료되었습니다.</h1>
              <p>등록하신 프로젝트에 잘 맞는 팀원을 찾으러 떠나볼까요?</p>
            </div>
          </CompleteBox>
        </Contents>
        <HiddenStoreProvider>
          <CompleteBottonBtn />
        </HiddenStoreProvider>
      </HomeContainer>
    </Home>
  );
}

export default CompleteConatainer;
