import React from 'react';
import styled from 'styled-components';

const SelectedBtn = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  background: #384860;
  color: #fff;
  font-size: 14px;
  line-height: 44px;
  border-radius: 4px;
  &:hover {
    background: #d12771;
  }
`;
function ConversationButton() {
  return <SelectedBtn>1:1 대화하기</SelectedBtn>;
}

export default ConversationButton;
