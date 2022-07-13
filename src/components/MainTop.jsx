import React from 'react';
import styled from 'styled-components';

const MainTopContainer = styled.article`
  width: 100%;
  height: 268px;
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

const MainTopWrapper = styled.div`
  width: 430px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MainTopText = styled.span`
  width: 320px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: 500;
`;

const MainTopButton = styled.button`
  width: 270px;
  height: 40px;
  border: 1px solid white;
  background: transparent;
  color: white;
`;

function MainTop() {
  return (
    <MainTopContainer>
      <MainTopWrapper>
        <MainTopText>
          생각한 주제가 없어도 괜찮아요 <br />
          기획부터 함께 프로젝트를 시작해보세요
        </MainTopText>
        <MainTopButton>팀원모집 바로가기</MainTopButton>
      </MainTopWrapper>
    </MainTopContainer>
  );
}

export default MainTop;
