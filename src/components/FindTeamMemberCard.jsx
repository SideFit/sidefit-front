import React, { useState } from 'react';
import styled from 'styled-components';
import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import ConversationButton from '../elements/ConversationButton';

const TeamMemberInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 19px 12px;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  box-sizing: border-box;
  background: #1f2b3c;
  line-height: 24px;
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 13px;
  }
  p:first-child {
    position: relative;
    margin-right: 16px;
    &::after {
      position: absolute;
      top: 44px;
      left: 44px;
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      background-color: #00c4b4;
    }
  }
  p:nth-child(2) {
    padding-top: 4px;
    color: rgba(255, 255, 255, 0.6);
  }
  p:nth-child(3) {
    padding-top: 7px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.38);
  }
  span {
    padding-top: 15px;
    font-size: 13px;
    color: #f2f4f8;
  }
  span:nth-child(4) {
    padding-top: 0;
    margin: 16px 0;
    color: rgba(255, 255, 255, 0.6);
  }
`;
const Arrangement = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const BookmarkButton = styled(RiBookmarkLine)`
  &:hover {
    cursor: pointer;
  }
`;
const TeamMemberIcon = styled(BsFillPersonFill)`
  width: 56px;
  height: 56px;
  border-radius: 26px;
  background-color: #384860;
  color: #121a26;
`;
const BookmarkedButton = styled(RiBookmarkFill)`
  &:hover {
    cursor: pointer;
  }
`;

function FindTeamMemberCard() {
  const [iconClicked, setIconClicked] = useState('false');

  const toggleIconClicked = () => {
    setIconClicked(!iconClicked);
  };
  return (
    <TeamMemberInformation>
      <Arrangement>
        <div>
          <Arrangement>
            <p>
              <TeamMemberIcon />
            </p>
            <div>
              <h2>사이드핏핏</h2>
              <p>현재 접속 중</p>
            </div>
          </Arrangement>
        </div>
        <div>
          {iconClicked ? (
            <BookmarkButton onClick={toggleIconClicked} />
          ) : (
            <BookmarkedButton onClick={toggleIconClicked} />
          )}
        </div>
      </Arrangement>
      <span>UX/UI 디자이너</span>
      <p>
        새롭고 다양한 시도를 좋아합니다. 되도록 고양이와 사용자를 이롭게 하는
        디자인이 옳다고 믿습니다. Figma Lover 🖖
      </p>
      <span>#포트폴리오용 #FIGMA #직장인</span>
      <ConversationButton />
    </TeamMemberInformation>
  );
}

export default FindTeamMemberCard;
