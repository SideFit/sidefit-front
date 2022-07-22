import React from 'react';
import styled from 'styled-components';

const ChatButtonBox = styled.button`
  width: 273px;
  height: 51px;
  font-family: sans-serif;
  background-color: #d12771;
  border-radius: 4px;
  border: 1px solid #d12771;
  color: white;
  display: flex;
  cursor: pointer;
`;

function ChatButton() {
  return <ChatButtonBox>1:1 대화하기</ChatButtonBox>;
}

export default ChatButton;
