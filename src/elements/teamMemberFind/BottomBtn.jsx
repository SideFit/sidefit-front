/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';

const HomeContainer = styled.div`
  width: auto;
  height: 48px;
  display: flex;
  flex-direction: row;
  margin: 161px 0px 100px 0px;
  &.SecondHomeContainer {
    margin: 168px 0px 0px 900px;
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
  const { nextHandler, check, titleContent, type, select, introduceContent } =
    useContext(HiddenStore);

  return (
    <HomeContainer>
      <BackBtn type='button' onClick={() => window.location.replace('/')}>
        이전
      </BackBtn>
      <NextBtn
        type='button'
        onClick={() => {
          return titleContent.length !== 0 &&
            type !== undefined &&
            select.length !== 0 &&
            introduceContent.length !== 0
            ? nextHandler() || check()
            : check();
        }}
      >
        다음
      </NextBtn>
    </HomeContainer>
  );
}

export function SecondBottomBtn() {
  const { nextHandler, SecondPage, RecruitmentsCheck, Recruitments } =
    useContext(HiddenStore);
  return (
    <HomeContainer className='SecondHomeContainer'>
      <BackBtn type='button' onClick={nextHandler}>
        이전
      </BackBtn>
      <NextBtn
        type='submit'
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
      <BackBtn type='button' onClick={SecondBackPage}>
        이전
      </BackBtn>
      <NextBtn
        type='button'
        className='CompleteBtn'
        onClick={FindTeamMemberPage}
      >
        팀원 찾기
      </NextBtn>
    </HomeContainer>
  );
}

export default BottomBtn;
