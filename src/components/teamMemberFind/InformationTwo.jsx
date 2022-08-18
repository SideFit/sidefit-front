import React from 'react';
import styled from 'styled-components';
import COLOR from '../../constants/color';
import EssentialStack from '../../elements/teamMemberFind/EssentialStack';
import Hashtag from '../../elements/teamMemberFind/Hashtag';
import MeetingPlan from '../../elements/teamMemberFind/MeetingPlan';
import PeriodDropdown from '../../elements/teamMemberFind/PeriodDropdown';
import Recruitment from '../../elements/teamMemberFind/Recruitment';

const HomeContainer = styled.div`
  width: 1200px;
  height: 1090.13px;
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 24px;
  margin: 0px 0px 64px 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1066px;
  height: 1030px;
  h2 {
    margin-top: 15px;
    width: 170px;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    letter-spacing: -2px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Line = styled.div`
  margin: 13px 0px 69px 0px;
  background: rgba(255, 255, 255, 0.12);
  opacity: 0.6;
  width: 1066px;
  height: 1px;
`;

const SubTitle = styled.div`
  width: 155px;
  height: 28px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-right: 107px;
  letter-spacing: -2px;
`;

function InformationTwo() {
  return (
    <HomeContainer>
      <Wrapper>
        <h2>프로젝트 정보</h2>
        <Line />
        <Container>
          <SubTitle>모집</SubTitle>
          <Recruitment />
        </Container>
        <Container>
          <SubTitle>예상 프로젝트 기간</SubTitle>
          <PeriodDropdown />
        </Container>
        <Container>
          <SubTitle>필요 스택</SubTitle>
          <EssentialStack />
        </Container>
        <Container>
          <SubTitle>모임 계획</SubTitle>
          <MeetingPlan />
        </Container>
        <Container>
          <SubTitle>해시태그</SubTitle>
          <Hashtag />
        </Container>
        <Container>
          <SubTitle>현재 팀원</SubTitle>
        </Container>
      </Wrapper>
    </HomeContainer>
  );
}

export default InformationTwo;
