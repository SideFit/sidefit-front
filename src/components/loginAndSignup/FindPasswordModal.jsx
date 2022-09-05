import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose, MdErrorOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import COLOR from '../../constants/color';

const FindPasswordModalBox = styled.div`
  width: 512px;
  height: ${props => {
    if (props.errorType === 3) {
      return '680px';
    }
    if (props.errorType === 2) {
      return '652px';
    }
    if (props.errorType === 1) {
      return '624px';
    }
    return '588px';
  }};
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

const FindPasswordModalWrapper = styled.div`
  width: 400px;
  height: ${props => {
    if (props.errorType === 3) {
      return '584px';
    }
    if (props.errorType === 2) {
      return '556px';
    }
    if (props.errorType === 1) {
      return '528px';
    }
    return '500px';
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
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
      if (props.errorType) {
        return `border: 1px solid ${COLOR.ERROR_PINK};`;
      }
      return 'border: none';
    }}
  }
`;

const ModalForm = styled.form`
  width: 100%;
  height: ${props => {
    if (props.errorType === 3) {
      return '492px';
    }
    if (props.errorType === 2) {
      return '464px';
    }
    if (props.errorType === 1) {
      return '436px';
    }
    return '408px';
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
`;

const NextButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_BLUE};
  border-radius: 6px;
  border: none;
  color: ${COLOR.WHITE};
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-top: 20px;
`;

const FindPasswordModalBottomBox = styled.div`
  width: 400px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p:first-child {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
    span {
      color: ${COLOR.TEXT_HIGHLIGHT};
    }
  }
  p:last-child {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
    span {
      color: ${COLOR.TEXT_HIGHLIGHT};
    }
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
  email: yup
    .string()
    .required('반드시 입력해야하는 필수 사항입니다.')
    .email('이메일 형식으로 적으셔야 합니다.'),
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

function findPasswordModal() {
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
    formState: { errors },
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
    <FindPasswordModalBox errorType={Object.keys(errors).length}>
      <CloseIcon />
      <FindPasswordModalWrapper errorType={Object.keys(errors).length}>
        <ModalForm
          onSubmit={handleSubmit(onSubmit, onError)}
          errorType={Object.keys(errors).length}
        >
          <h3>회원가입</h3>
          <InputWrapper errorType={errors.email}>
            <label htmlFor='signUpemail'>이메일</label>
            <input
              type='email'
              id='signUpemail'
              placeholder='ex) sidefit@email.com'
              errorType={errors.email}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <ErrorMessageBox>
                <ExclamationMark />
                <p>{errors.email?.message}</p>
              </ErrorMessageBox>
            )}
          </InputWrapper>
          <InputWrapper errorType={errors.password}>
            <label htmlFor='signUppassword'>비밀번호</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='signUppassword'
              placeholder='숫자, 영어 혹은 특수문자 8자리 이상'
              errorType={errors.password}
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
          <InputWrapper errorType={errors.passwordConfirm}>
            <label htmlFor='signUppasswordConfirm'>비밀번호 확인</label>
            <input
              type={showPasswordConfirm ? 'text' : 'password'}
              id='signUppasswordConfirm'
              placeholder='한 번 더 똑같이 적어주세요'
              errorType={errors.passwordConfirm}
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
          <NextButton>다음</NextButton>
        </ModalForm>
        <FindPasswordModalBottomBox>
          <p>
            이미 가입했다면? <span>로그인</span>
          </p>
          <p>
            등록하는 순간 <span>SIDEFIT</span>의 <span>서비스 이용약관</span>과{' '}
            <span>개인정보 처리방침</span>에 동의하게 됩니다.
          </p>
        </FindPasswordModalBottomBox>
      </FindPasswordModalWrapper>
    </FindPasswordModalBox>
  );
}

export default findPasswordModal;
