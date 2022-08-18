/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';

const HomeContainer = styled.div`
  width: auto;
  height: 48px;
  display: flex;
  flex-direction: row;
  margin: 180px 0px 0px 452px;
  &.SecondHomeContainer {
    margin: -12px 0px 0px 68px;
  }
  &.CompleteContainer {
    margin: 64px 0px 0px 40px;
  }
`;

const BackBtn = styled.button`
  width: 92px;
  height: 48px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: white;
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  margin-right: 16px;
  cursor: pointer;
`;

const NextBtn = styled.button`
  width: 92px;
  height: 48px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: white;
  outline: none;
  border: none;
  background: #d12771;
  border-radius: 4px;
  cursor: pointer;
  &.SecondBtn {
    width: 156px;
  }
  &.CompleteBtn {
    width: 124px;
  }
`;

function BottomBtn() {
  const { NextPage, check, titleContent, type, select, introduceContent } =
    useContext(HiddenStore);

  return (
    <HomeContainer>
      <BackBtn>이전</BackBtn>
      <NextBtn
        onClick={() => {
          return titleContent.length !== 0 &&
            type !== undefined &&
            select.length !== 0 &&
            introduceContent.length !== 0
            ? NextPage()
            : check();
        }}
      >
        다음
      </NextBtn>
    </HomeContainer>
  );
}

export function SecondBottomBtn() {
  const {
    BackPage,
    SecondPage,
    RecruitmentsHidden,
    RecruitmentsCheck,
    Recruitments,
  } = useContext(HiddenStore);
  return (
    <HomeContainer className='SecondHomeContainer'>
      <BackBtn onClick={BackPage}>이전</BackBtn>
      <NextBtn
        className='SecondBtn'
        onClick={() => {
          return Recruitments.length === 0 ? RecruitmentsCheck() : SecondPage();
        }}
      >
        모집 글 올리기
      </NextBtn>
    </HomeContainer>
  );
}

export function CompleteBottonBtn() {
  const { SecondBackPage, FindTeamMemberPage } = useContext(HiddenStore);
  return (
    <HomeContainer className='CompleteContainer'>
      <BackBtn onClick={SecondBackPage}>이전</BackBtn>
      <NextBtn className='CompleteBtn' onClick={FindTeamMemberPage}>
        팀원 찾기
      </NextBtn>
    </HomeContainer>
  );
}

export default BottomBtn;
