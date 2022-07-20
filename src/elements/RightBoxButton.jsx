import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookmarkButton = styled.div`
  width: 342px;
  height: 54px;
  margin-top: 20px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  background-color: #1f2b3c;
  border-radius: 4px;
  border: 1px solid #596374;
  color: white;
  display: flex;
  cursor: pointer;
  letter-spacing: 0.15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 56px;
  cursor: pointer;
  background: #d12771;
  border-radius: 4px;
  flex: none;
  letter-spacing: 0.15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

function RightBoxButton() {
  return (
    <HomeContainer>
      <BookmarkButton>북마크하기</BookmarkButton>
      <ButtonBox>지원하기</ButtonBox>
    </HomeContainer>
  );
}

export default RightBoxButton;
