import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import COLOR from '../../constants/color';

const PasswordResetMailSendModalBox = styled.div`
  width: 512px;
  height: 332px;
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 38px;
`;

const CloseIcon = styled(MdClose).attrs({
  size: '24',
})`
  position: absolute;
  top: 21px;
  right: 21px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
`;

const PasswordResetMailSendModalWrapper = styled.div`
  width: 400px;
  height: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const TitleAndTextWrapper = styled.div`
  width: 396px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  }
`;

const CompleteButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_BLUE};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  color: ${COLOR.WHITE};
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  &:hover,
  &:active {
    background: #448aff;
  }
  &:active {
    position: relative;
    top: 2px;
  }
`;

const ResendButton = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.25px;
  color: ${COLOR.TEXT_HIGHLIGHT};
`;

function PasswordResetMailSendModal() {
  return (
    <PasswordResetMailSendModalBox>
      <CloseIcon />
      <PasswordResetMailSendModalWrapper>
        <TitleAndTextWrapper>
          <h3>비밀번호 변경 메일 전송 완료!</h3>
          <p>
            계정 비밀번호 변경 방법을 sidefit@naver.com(으)로 보냈어요. <br />
            받은 편지함 또는 스팸함을 확인해 주세요.
          </p>
        </TitleAndTextWrapper>
        <CompleteButton>완료</CompleteButton>
        <ResendButton>이메일 재전송</ResendButton>
      </PasswordResetMailSendModalWrapper>
    </PasswordResetMailSendModalBox>
  );
}

export default PasswordResetMailSendModal;
