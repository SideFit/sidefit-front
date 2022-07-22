import React from 'react';
import styled from 'styled-components';

const MeetingInviteBox = styled.button`
  width: 273px;
  height: 51px;
  font-size: 13px;
  font-family: sans-serif;
  background-color: #1f2b3c;
  border-radius: 4px;
  border: 1px solid #596374;
  margin-left: 35px;
  color: white;
  display: flex;
  cursor: pointer;
`;

function ChatButton() {
  return <MeetingInviteBox> 모임 초대하기</MeetingInviteBox>;
}

export default ChatButton;
