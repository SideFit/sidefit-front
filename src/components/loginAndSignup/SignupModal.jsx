import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose, MdErrorOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { loginUserByEmail, setErrorEmpty } from '../../redux/slices/usersSlice';
import COLOR from '../../constants/color';

const SignupModalBox = styled.div`
  width: 512px;
  height: ${props => {
    if (props.errortype === 2) {
      return '528px';
    }
    if (props.errortype === 1 || props.errorMsg) {
      return '500px';
    }
    return '472px';
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

const SignupModalWrapper = styled.div`
  width: 400px;
  height: ${props => {
    if (props.errortype === 2) {
      return '432px';
    }
    if (props.errortype === 1 || props.errorMsg) {
      return '404px';
    }
    return '376px';
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid blue; */
`;

const FormCustom = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid orange; */
  height: ${props => {
    if (props.errortype === 2) {
      return '368px';
    }
    if (props.errortype === 1 || props.errorMsg) {
      return '340px';
    }
    return '312px';
  }};
  h3 {
    width: 400px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }
`;
const InputWrapper = styled.div`
  width: 100%;
  height: ${props => {
    if (props.errortype === 2) {
      return '280px';
    }
    if (props.errortype === 1 || props.errorMsg) {
      return '252px';
    }
    return '224px';
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CustomInput = styled.div`
  width: 400px;
  height: ${props => {
    if (props.errortype || props.errorMsg) {
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
      if (props.errortype || props.errorMsg) {
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

const NextButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_BLUE};
  opacity: ${props => (props.disabled ? '0.6' : '1.0')};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.7px;
  color: ${props =>
    props.disabled ? `${COLOR.TEXT_DISABLED}` : `${COLOR.WHITE}`};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ErrorMessage = styled.p`
  height: 20px;
  color: ${COLOR.ERROR_PINK};
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ExclamationMark = styled(MdErrorOutline)`
  margin-right: 4px;
  width: 15px;
  height: 15px;
`;

const BottomOptionsBox = styled.div`
  width: 400px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MaintainLoginBox = styled.div`
  width: 200px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.25px;
    color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  }
  input {
    display: none;
  }
  label::before {
    width: 15px;
    height: 15px;
    border: 2px solid ${COLOR.TEXT_MEDIUM_EMPHASIS};
  }
  input:checked + label::after {
    content: '✔';
    font-size: 15px;
    width: 15px;
    height: 15px;
  }
`;

const OptionsBox = styled.div`
  span {
    color: ${COLOR.TEXT_HIGHLIGHT};
    cursor: pointer;
    &:first-child {
      margin-right: 8px;
    }
    /* &:last-child {
      margin-left: 8px;
    } */
    &:last-child::before {
      content: '';
      width: 0px;
      height: 14px;
      border: 2px solid rgba(255, 255, 255, 0.38);
      margin-right: 8px;
    }
  }
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
    .max(15, '비밀번호는 8자 이상 15자 이하의 문자와 숫자로 적으셔야 합니다.'),
});

function SignupModal({ close, setModalIndex }) {
  const [showPassword, setShowPassword] = useState(false);

  const ToggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const errorMsg = useSelector(state => state.user.error);

  const onSubmit = data => {
    dispatch(loginUserByEmail(data));
    console.log(errorMsg);
    console.log(token);
  };

  const onError = error => {
    console.log(error);
  };

  useEffect(() => {
    dispatch(setErrorEmpty());
    if (token) close();
  }, [token]);

  return (
    <SignupModalBox errortype={Object.keys(errors).length} errorMsg={errorMsg}>
      <CloseIcon onClick={close} />
      <SignupModalWrapper
        errortype={Object.keys(errors).length}
        errorMsg={errorMsg}
      >
        <FormCustom
          onSubmit={handleSubmit(onSubmit, onError)}
          errortype={Object.keys(errors).length}
          errorMsg={errorMsg}
        >
          <InputWrapper
            errortype={Object.keys(errors).length}
            errorMsg={errorMsg}
          >
            <h3>이메일로 로그인</h3>
            <CustomInput
              errortype={errors.email}
              errorMsg={errorMsg === 'Cannot find user'}
            >
              <label htmlFor='email'>이메일</label>
              <input
                id='email'
                type='email'
                name='email'
                onFocus={() => {
                  dispatch(setErrorEmpty());
                }}
                placeholder='이메일 주소를 입력해 주세요.'
                emailerror={errors.email}
                {...register('email', { required: true })}
              />
              {errors.email && (
                <ErrorMessage>
                  <ExclamationMark />
                  {errors.email?.message}
                </ErrorMessage>
              )}
              {errorMsg === 'Cannot find user' && (
                <ErrorMessage>
                  <ExclamationMark />
                  이메일을 찾을 수 없습니다.
                </ErrorMessage>
              )}
            </CustomInput>
            <CustomInput
              errortype={errors.password}
              errorMsg={errorMsg === 'Incorrect password'}
            >
              <label htmlFor='password'>비밀번호</label>
              <input
                id='password'
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='비밀번호를 입력해 주세요.'
                onFocus={() => {
                  dispatch(setErrorEmpty());
                }}
                passworderror={errors.password}
                {...register('password', { required: true })}
              />
              {showPassword ? (
                <EyeIcon onClick={ToggleShowPassword} />
              ) : (
                <EyeBlockedIcon onClick={ToggleShowPassword} />
              )}
              {errors.password && (
                <ErrorMessage>
                  <ExclamationMark />
                  {errors.password?.message}
                </ErrorMessage>
              )}
              {errorMsg === 'Incorrect password' && (
                <ErrorMessage>
                  <ExclamationMark />
                  비밀번호가 틀렸습니다.
                </ErrorMessage>
              )}
            </CustomInput>
          </InputWrapper>
          <NextButton disabled={!isValid}>로그인</NextButton>
        </FormCustom>
        <BottomOptionsBox>
          <MaintainLoginBox>
            <input type='checkbox' id='maintainLogin' name='maintainLogin' />
            <label htmlFor='maintainLogin'>로그인 상태 유지 </label>
          </MaintainLoginBox>
          <OptionsBox>
            <span>비밀번호 찾기</span>
            <span role='presentation' onClick={() => setModalIndex(2)}>
              가입하기
            </span>
          </OptionsBox>
        </BottomOptionsBox>
      </SignupModalWrapper>
    </SignupModalBox>
  );
}

SignupModal.propTypes = {
  close: PropTypes.func.isRequired,
  setModalIndex: PropTypes.func.isRequired,
};

export default SignupModal;
