import React from 'react';
import styled from 'styled-components';
import ChatAsideItem from '../../elements/chat/ChatAsideItem';

const ChatAsideContainer = styled.aside`
  width: 376px;
  height: 1000px;
  background: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatAsideWrapper = styled.div`
  width: 360px;
  height: 950px;
`;

function ChatAside() {
  return (
    <ChatAsideContainer>
      <ChatAsideWrapper>
        <ChatAsideItem />
        <ChatAsideItem />
        <ChatAsideItem />
        <ChatAsideItem />
        <ChatAsideItem />
        <ChatAsideItem />
        <ChatAsideItem />
        <ChatAsideItem />
      </ChatAsideWrapper>
    </ChatAsideContainer>
  );
}

export default ChatAside;
