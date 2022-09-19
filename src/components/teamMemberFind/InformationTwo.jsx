import React, { useContext } from 'react';
import styled from 'styled-components';
import COLOR from '../../constants/color';
import { SecondBottomBtn } from '../../elements/teamMemberFind/BottomBtn';
import EssentialStack from '../../elements/teamMemberFind/EssentialStack';
import Hashtag from '../../elements/teamMemberFind/Hashtag';
import MeetingPlan from '../../elements/teamMemberFind/MeetingPlan';
import PeriodDropdown from '../../elements/teamMemberFind/PeriodDropdown';
import Recruitment from '../../elements/teamMemberFind/Recruitment';
import HiddenStore from './HiddenStore';

const Form = styled.form`
  width: 1900px;
  height: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Div = styled.div`
  width: 854;
  height: auto;
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 24px;
  h2 {
    margin: 56px 0px 0px 68px;
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
  margin: 0px 0px 0px 68px;
`;

const Line = styled.div`
  margin: 13px 68px 69px 68px;
  background: rgba(255, 255, 255, 0.12);
  opacity: 0.6;
  width: 712px;
  height: 1px;
`;

const SubTitle = styled.div`
  width: 155px;
  height: 28px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-right: 60px;
  letter-spacing: -2px;
`;

const BtnBox = styled.div`
  display: flex;
  margin: 0px 0px 0px 0px;
`;

function InformationTwo() {
  const { stackItem, titleContent, type, introduceContent, select, period } =
    useContext(HiddenStore);
  const submitHandler = e => {
    console.log(
      '제목:',
      titleContent,
      '유형:',
      type,
      '분야:',
      select,
      '소개:',
      introduceContent,
      '기간:',
      period,
      '스택:',
      stackItem,
    );
    e.preventDefault();
  };

  return (
    <Form onSubmit={submitHandler}>
      <Div>
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
          <div style={{ marginBottom: 80 }} />
        </Container>
      </Div>
      <BtnBox>
        <SecondBottomBtn />
      </BtnBox>
    </Form>
  );
}

export default InformationTwo;
