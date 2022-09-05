import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import COLOR from '../../constants/color';

const SignupCompleteModalBox = styled.div`
  width: 512px;
  height: 360px;
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

const SignupCompleteModalWrapper = styled.div`
  width: 400px;
  height: 264px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleAndTextBox = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 16px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
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

const CreateProfileButton = styled.button`
  width: 400px;
  height: 48px;
  background: #2962ff;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${COLOR.WHITE};
`;

const LaterButton = styled.button`
  width: 400px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${COLOR.TEXT_HIGHLIGHT};
  background: transparent;
`;

function SignupCompleteModal({ close }) {
  return (
    <SignupCompleteModalBox>
      <CloseIcon onClick={close} />
      <SignupCompleteModalWrapper>
        <TitleAndTextBox>
          <h3>가입이 완료되었어요!</h3>
          <p>
            내 프로필 정보를 추가하고 <br />
            나에게 맞는 사이드 프로젝트를 찾아보세요!
          </p>
        </TitleAndTextBox>
        <CreateProfileButton>내 프로필 만들기</CreateProfileButton>
        <LaterButton>나중에 할게요</LaterButton>
      </SignupCompleteModalWrapper>
    </SignupCompleteModalBox>
  );
}

SignupCompleteModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default SignupCompleteModal;
