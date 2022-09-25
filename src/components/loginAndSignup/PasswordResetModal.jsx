import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdClose, MdErrorOutline } from 'react-icons/md';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import COLOR from '../../constants/color';

const PasswordResetModalBox = styled.div`
  width: 512px;
  height: ${props => {
    if (props.errortype === 2) {
      return '464px';
    }
    if (props.errortype === 1) {
      return '436px';
    }
    return '408px';
  }};
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 38px;
`;

const PasswordResetModalWrapper = styled.div`
  width: 400px;
  height: ${props => {
    if (props.errortype === 2) {
      return '368px';
    }
    if (props.errortype === 1) {
      return '340px';
    }
    return '312px';
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

const CompleteButton = styled.button`
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
  height: ${props => {
    if (props.errortype === 2) {
      return '280px';
    }
    if (props.errortype === 1) {
      return '252px';
    }
    return '224px';
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
`;

const InputWrapper = styled.div`
  width: 400px;
  height: ${props => {
    if (props.errortype) {
      return '104px';
    }
    return '76px';
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  label {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.4px;
  }
  input {
    width: 400px;
    height: 48px;
    background: #121a26;
    border-radius: 8px;
    border: none;
    padding-left: 16px;
    color: ${COLOR.WHITE};
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
      -webkit-text-fill-color: ${COLOR.WHITE} !important;
    }
    &:focus {
      border: 1px solid ${COLOR.TEXT_HIGHLIGHT};
    }
    /* border: ${props => props.error && `1px solid ${COLOR.ERROR_PINK}`}; */
    ${props => {
      if (props.errortype) {
        return `border: 1px solid ${COLOR.ERROR_PINK};`;
      }
      return 'border: none';
    }}
  }
`;

const ErrorMessageBox = styled.div`
  height: fit-content;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.4px;
  color: #ff5252;
  display: flex;
  align-items: center;
  p {
    height: 20px;
    line-height: 22px;
  }
`;

const EyeIcon = styled(ImEye)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  position: absolute;
  top: 42px;
  right: 19px;
`;

const EyeBlockedIcon = styled(ImEyeBlocked)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  position: absolute;
  top: 42px;
  right: 19px;
`;

const ExclamationMark = styled(MdErrorOutline)`
  margin-right: 4px;
  width: 20px;
  height: 20px;
`;

const schema = yup.object().shape({
  password: yup
    .string()
    .required('반드시 입력해야하는 필수 사항입니다.')
    .min(8, '비밀번호는 8자 이상 15자 이하의 문자와 숫자로 적으셔야 합니다.')
    .max(15, '비밀번호는 8자 이상 15자 이하의 문자와 숫자로 적으셔야 합니다.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^\s]*$/,
      '알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!',
    ),
  passwordConfirm: yup
    .string()
    .required('반드시 입력해야하는 필수 사항입니다.')
    .oneOf([yup.ref('password'), null], '위의 비밀번호와 일치하지 않아요.'),
});

function PasswordResetModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const ToggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const ToggleShowPasswordConfirm = () => {
    setShowPasswordConfirm(prev => !prev);
  };
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = dataInput => {
    console.log('submit');
    console.log(dataInput);
  };

  const onError = err => {
    console.log(err);
  };
  return (
    <PasswordResetModalBox errortype={Object.keys(errors).length}>
      <CloseIcon />
      <PasswordResetModalWrapper
        onSubmit={handleSubmit(onSubmit, onError)}
        errortype={Object.keys(errors).length}
      >
        <FormWrapper errortype={Object.keys(errors).length}>
          <h3>비밀번호 재설정</h3>
          <InputWrapper errortype={errors.password}>
            <label htmlFor='signUppassword'>새 비밀번호</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='signUppassword'
              placeholder='숫자, 영어 혹은 특수문자 8자리 이상'
              errortype={errors.password}
              {...register('password', { required: true })}
            />
            {showPassword ? (
              <EyeIcon onClick={ToggleShowPassword} />
            ) : (
              <EyeBlockedIcon onClick={ToggleShowPassword} />
            )}
            {errors.password && (
              <ErrorMessageBox>
                <ExclamationMark />
                <p>{errors.password?.message}</p>
              </ErrorMessageBox>
            )}
          </InputWrapper>
          <InputWrapper errortype={errors.passwordConfirm}>
            <label htmlFor='signUppasswordConfirm'>비밀번호 확인</label>
            <input
              type={showPasswordConfirm ? 'text' : 'password'}
              id='signUppasswordConfirm'
              placeholder='한 번 더 똑같이 적어주세요'
              errortype={errors.passwordConfirm}
              {...register('passwordConfirm', { required: true })}
            />
            {showPasswordConfirm ? (
              <EyeIcon onClick={ToggleShowPasswordConfirm} />
            ) : (
              <EyeBlockedIcon onClick={ToggleShowPasswordConfirm} />
            )}
            {errors.passwordConfirm && (
              <ErrorMessageBox>
                <ExclamationMark />
                <p>{errors.passwordConfirm?.message}</p>
              </ErrorMessageBox>
            )}
          </InputWrapper>
        </FormWrapper>
        <CompleteButton disabled={!isValid}>변경 완료</CompleteButton>
      </PasswordResetModalWrapper>
    </PasswordResetModalBox>
  );
}

export default PasswordResetModal;
