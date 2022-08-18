import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import COLOR from '../../constants/color';
import useOutsideClick from '../../hooks/useOutsideClick';

const ChatDropdownOptionBox = styled.div`
  width: 240px;
  height: 213px;
  background: ${COLOR.WHITE};
  border: 1px solid #ededed;
  border-radius: 10px;
  position: absolute;
  transform: translate(270px, 143px);
  color: #323232;
`;

const ChatDropdownOptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionsWrapper = styled.div`
  width: 90%;
  height: 150px;
`;

const OptionItem = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  &:nth-child(2) {
    border-top: 1px solid #ededed;
  }
  &:nth-child(3) {
    border-top: 1px solid #ededed;
  }
`;

const CloseWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid #ededed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.02em;
  }
`;

const CloseButton = styled(MdClose).attrs({
  size: '22',
})``;

function ChatDropdownOption({ handleToggle }) {
  const outsideRef = useRef();
  useOutsideClick(outsideRef, handleToggle);
  return (
    <ChatDropdownOptionBox ref={outsideRef}>
      <ChatDropdownOptionWrapper>
        <OptionsWrapper>
          <OptionItem>알림음 끄기</OptionItem>
          <OptionItem>대화상대 차단하기</OptionItem>
          <OptionItem>채팅방 나가기</OptionItem>
        </OptionsWrapper>
        <CloseWrapper>
          <p role='presentation' onClick={handleToggle}>
            닫기
            <CloseButton />
          </p>
        </CloseWrapper>
      </ChatDropdownOptionWrapper>
    </ChatDropdownOptionBox>
  );
}

ChatDropdownOption.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ChatDropdownOption;
