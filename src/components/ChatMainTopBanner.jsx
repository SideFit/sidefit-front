import React from 'react';
import styled from 'styled-components';

const ChatMainTopBannerContainer = styled.nav`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.16)
    ),
    #121212;
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 60px;
`;
const ChatMainTopBannerWrapper = styled.div`
  width: 95%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectImage = styled.div`
  width: 45px;
  height: 45px;
  background: #d9d9d9;
  border-radius: 8px;
`;

const ProjectTextBox = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: grey;
  p:first-child {
    font-weight: 600;
    color: white;
  }
`;

const ApplyButton = styled.button`
  width: 120px;
  height: 36px;
  background: #3d5afe;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

function ChatMainTopBanner() {
  return (
    <ChatMainTopBannerContainer>
      <ChatMainTopBannerWrapper>
        <ProjectImage />
        <ProjectTextBox>
          <p>여행 소셜 미디어 플랫폼</p>
          <p>UI UX 디자이너 지원</p>
        </ProjectTextBox>
        <ApplyButton>지원 수락하기</ApplyButton>
      </ChatMainTopBannerWrapper>
    </ChatMainTopBannerContainer>
  );
}

export default ChatMainTopBanner;
