import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ChatAsideItemBox = styled.div`
  width: 355px;
  height: 74px;
  border-radius: 8px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.16)
    ),
    #121212;
  cursor: pointer;
`;

const ChatAsideItemWrapper = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserAvatar = styled(FaUserCircle)`
  font-size: 40px;
`;

const TextBox = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 14px;
  p:first-child {
    font-weight: 600;
  }
  span {
    color: grey;
    margin-left: 10px;
  }
`;

const ThreeDots = styled(BsThreeDotsVertical)`
  font-size: 30px;
`;
function ChatAsideItem() {
  return (
    <ChatAsideItemBox>
      <ChatAsideItemWrapper>
        <UserAvatar />
        <TextBox>
          <p>
            토끼토끼<span>3일 전</span>
          </p>
          <p>안녕하세요~</p>
        </TextBox>
        <ThreeDots />
      </ChatAsideItemWrapper>
    </ChatAsideItemBox>
  );
}

export default ChatAsideItem;
