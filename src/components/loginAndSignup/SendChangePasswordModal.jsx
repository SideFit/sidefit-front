import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdClose, MdErrorOutline } from 'react-icons/md';
import COLOR from '../../constants/color';

const SendChangePasswordModalBox = styled.div`
  width: 512px;
  height: ${props => {
    if (props.errorType === 1) {
      return '400px';
    }
    return '372px';
  }};
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 38px;
`;

const SendChangePasswordModalWrapper = styled.form`
  width: 400px;
  height: ${props => {
    if (props.errorType === 1) {
      return '304px';
    }
    return '276px';
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseIcon = styled(MdClose).attrs({
  size: '24',
})`
  position: absolute;
  top: 21px;
  right: 21px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
`;

const SendAuthEmailButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_BLUE};
  opacity: ${props => (props.disabled ? '0.6' : '1.0')};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  color: ${props =>
    props.disabled ? `${COLOR.TEXT_DISABLED}` : `${COLOR.WHITE}`};
  letter-spacing: 0.5px;
  border: none;
  cursor: ${props => (props.disabled ? 'no-drop' : 'pointer')};
  &:hover,
  &:active {
    &:not([disabled]) {
      background: #448aff;
    }
  }
  &:active {
    &:not([disabled]) {
      position: relative;
      top: 2px;
    }
  }
`;

const FormWrapper = styled.div`
  width: 400px;
  height: 244px;
  height: ${props => {
    if (props.errorType === 1) {
      return '216px';
    }
    return '188px';
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-align: center;
    color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  }
`;

const CustomInput = styled.div`
  width: 400px;
  height: ${props => {
    if (props.errorType) {
      return '104px';
    }
    return '76px';
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  label {
    height: 20px;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.4px;
  }

  input {
    width: 400px;
    height: 48px;
    background: ${COLOR.BACKGROUND_BLACK};
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
    border-radius: 8px;
    border: none;
    padding: 0px 16px;
    caret-color: ${COLOR.TEXT_HIGHLIGHT};
    &:hover {
      border: 1px solid ${COLOR.TEXT_MEDIUM_EMPHASIS};
    }
    &:focus {
      border: 1px solid ${COLOR.TEXT_HIGHLIGHT};
    }
    ${props => {
      if (props.errorType) {
        return `border: 1px solid ${COLOR.ERROR_PINK};`;
      }
      return 'border: none';
    }}
    &:autofill {
      box-shadow: 0 0 0px 1000px ${COLOR.BACKGROUND_BLACK} inset !important;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-transition: background-color 9999s ease-out;
      -webkit-box-shadow: 0 0 0px 1000px ${COLOR.BACKGROUND_BLACK} inset !important;
      box-shadow: 0 0 0px 1000px ${COLOR.BACKGROUND_BLACK} inset !important;
      -webkit-text-fill-color: ${COLOR.TEXT_HIGH_EMPHASIS} !important;
    }
  }
`;

const ErrorMessage = styled.div`
  height: 20px;
  color: #ff5252;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    height: 20px;
    line-height: 22px;
    color: #ff5252;
  }
`;

const ExclamationMark = styled(MdErrorOutline)`
  margin-right: 4px;
  width: 15px;
  height: 15px;
`;

const schema = yup.object().shape({
  sendPasswordEmail: yup
    .string()
    .required('이메일을 필수로 입력해주세요.')
    .email('올바른 이메일 형식으로 입력해주세요.'),
});
function SendChangePasswordModal() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  const onError = error => {
    console.log(error);
  };

  return (
    <SendChangePasswordModalBox errorType={Object.keys(errors).length}>
      <CloseIcon />
      <SendChangePasswordModalWrapper
        onSubmit={handleSubmit(onSubmit, onError)}
        errorType={Object.keys(errors).length}
      >
        <FormWrapper errorType={Object.keys(errors).length}>
          <h3>비밀번호 변경 메일 보내기</h3>
          <p>
            아래의 메일로 인증 링크를 전송할게요. <br /> 전송된 메일에서 링크를
            클릭하면 비밀번호를 변경 할 수 있어요.
          </p>
          <CustomInput errorType={errors.sendPasswordEmail}>
            <label htmlFor='sendPasswordEmail'>이메일</label>
            <input
              id='sendPasswordEmail'
              type='email'
              name='sendPasswordEmail'
              placeholder='이메일 주소를 입력해 주세요.'
              //   emailError={errors.sendPasswordEmail}
              {...register('sendPasswordEmail', { required: true })}
            />
            {errors.sendPasswordEmail && (
              <ErrorMessage>
                <ExclamationMark />
                <p>{errors.sendPasswordEmail?.message}</p>
              </ErrorMessage>
            )}
          </CustomInput>
        </FormWrapper>
        <SendAuthEmailButton disabled={!isValid}>
          인증링크 보내기
        </SendAuthEmailButton>
      </SendChangePasswordModalWrapper>
    </SendChangePasswordModalBox>
  );
}

export default SendChangePasswordModal;
