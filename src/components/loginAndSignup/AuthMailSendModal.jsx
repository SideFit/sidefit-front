import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import COLOR from '../../constants/color';

const AuthMailSendModalBox = styled.div`
  width: 512px;
  height: 332px;
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AuthMailSendModalWrapper = styled.div`
  width: 400px;
  height: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled(MdClose).attrs({
  size: '24',
})`
  position: absolute;
  top: 21px;
  right: 21px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
`;

const TitleAndTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 88px;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
  p {
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  }
`;

const CompleteButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_BLUE};
  border-radius: 6px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: ${COLOR.WHITE};
`;

const ResendEmailLink = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${COLOR.TEXT_HIGHLIGHT};
`;

function AuthMailSendModal() {
  return (
    <AuthMailSendModalBox>
      <CloseIcon />
      <AuthMailSendModalWrapper>
        <TitleAndTextBox>
          <h3>인증 메일 전송 완료!</h3>
          <p>
            입력해주신 메일로 인증 메일을 전송했어요. <br /> 전송된 메일에서
            링크를 클릭하면 회원가입이 완료됩니다.
          </p>
        </TitleAndTextBox>
        <CompleteButton>완료</CompleteButton>
        <ResendEmailLink>이메일 재전송</ResendEmailLink>
      </AuthMailSendModalWrapper>
    </AuthMailSendModalBox>
  );
}

export default AuthMailSendModal;
