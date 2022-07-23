import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import COLOR from '../../constants/color';

const SignupModalBox = styled.div`
  width: 512px;
  height: 476px;
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

const SignupModalWrapper = styled.div`
  width: 400px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const ModalTitleBox = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
  /* border: 1px solid yellow; */
`;

const FormCustom = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid orange; */
  height: 380px;
`;

const FormWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LabelCustom = styled.label`
  width: 100px;
  height: 25px;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
`;

const InputCustom = styled.input`
  width: 400px;
  height: 40px;
  background: ${COLOR.WHITE};
  border-radius: 8px;
  border: none;
  margin-bottom: 16px;
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

function SignupModal({ close, setModalIndex }) {
  return (
    <SignupModalBox>
      <CloseIcon onClick={close} />
      <SignupModalWrapper>
        <ModalTitleBox>
          <h3>계정 만들기</h3>
        </ModalTitleBox>
        <FormCustom>
          <FormWrapper>
            <LabelCustom htmlFor='email'>이메일</LabelCustom>
            <InputCustom
              id='email'
              type='email'
              name='email'
              placeholder='test@email.com'
            />
            <LabelCustom htmlFor='password'>비밀번호</LabelCustom>
            <InputCustom
              id='password'
              type='password'
              name='password'
              placeholder='****************'
            />
            <LabelCustom htmlFor='passwordConfirm'>비밀번호 확인</LabelCustom>
            <InputCustom
              id='passwordConfirm'
              type='password'
              name='passwordConfirm'
              placeholder='****************'
            />
          </FormWrapper>
          <NextButton onClick={() => setModalIndex(2)}>다음</NextButton>
        </FormCustom>
      </SignupModalWrapper>
    </SignupModalBox>
  );
}

SignupModal.propTypes = {
  close: PropTypes.func.isRequired,
  setModalIndex: PropTypes.func.isRequired,
};

export default SignupModal;
