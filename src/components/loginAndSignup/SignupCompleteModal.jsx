import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import COLOR from '../../constants/color';

const SignupCompleteModalBox = styled.div`
  width: 512px;
  height: 360px;
  background: ${COLOR.MODAL_BACKGROUND};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 38px;
  border: 1px solid grey;
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

const ModalTitleBox = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
`;

const DescriptionBox = styled.div`
  width: 400px;
  height: 40px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
  }
`;

const EmailBox = styled.div`
  width: 400px;
  height: 44px;
  background: ${COLOR.WHITE};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: #242424;
  }
`;

const EmailResendBox = styled.div`
  width: 400px;
  height: 20px;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
`;

const NextButton = styled.div`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_ORANGE};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.7px;
  color: ${COLOR.BUTTON_TEXT_BLACK};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function SignupCompleteModal({ close, setLogin, setModalOpen }) {
  return (
    <SignupCompleteModalBox>
      <CloseIcon onClick={close} />
      <SignupCompleteModalWrapper>
        <ModalTitleBox>
          <h3>가입을 환영합니다!</h3>
        </ModalTitleBox>
        <DescriptionBox>
          <p>
            아래의 메일로 인증 메일을 전송하였습니다.전송된 메일에서 링크를
            클릭하면 회원가입이 완료됩니다.
          </p>
        </DescriptionBox>
        <EmailBox>
          <p>sidefit2424@naver.com</p>
        </EmailBox>
        <EmailResendBox>
          <p>
            <u>이메일 재전송</u>
          </p>
        </EmailResendBox>
        <NextButton
          onClick={() => {
            setLogin(true);
            setModalOpen(false);
          }}
        >
          완료
        </NextButton>
      </SignupCompleteModalWrapper>
    </SignupCompleteModalBox>
  );
}

SignupCompleteModal.propTypes = {
  close: PropTypes.func.isRequired,
  setLogin: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default SignupCompleteModal;
