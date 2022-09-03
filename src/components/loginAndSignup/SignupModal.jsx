import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose, MdErrorOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginUserByEmail, setErrorEmpty } from '../../redux/slices/usersSlice';
import COLOR from '../../constants/color';

const SignupModalBox = styled.div`
  width: 512px;
  height: fit-content;
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 38px;
  /* border: 1px solid grey; */
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
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid blue; */
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
  height: fit-content;
`;

const FormWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LabelCustom = styled.label`
  width: 100px;
  height: fit-content;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
`;

const InputCustom = styled.input`
  width: 400px;
  height: 48px;
  background: ${COLOR.BACKGROUND_BLACK};
  color: ${COLOR.TEXT_HIGH_EMPHASIS};
  border-radius: 8px;
  border: none;
  margin-bottom: 16px;
  &:focus {
    border: 1px solid ${COLOR.TEXT_HIGHLIGHT};
  }
  /* border: ${props => props.error && `1px solid ${COLOR.ERROR_PINK}`}; */
  ${props => {
    if (props.emailError || props.passwordError) {
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
`;

const NextButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_BLUE};
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

const ErrorMessage = styled.p`
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
  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    margin-right: 16px;
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
    .email('이메일 형식으로 적으셔야 합니다.')
    .required('반드시 입력해야하는 필수 사항입니다.'),
  password: yup
    .string()
    .min(8, '비밀번호는 8자 이상 15자 이하의 문자와 숫자로 적으셔야 합니다.')
    .max(15, '비밀번호는 8자 이상 15자 이하의 문자와 숫자로 적으셔야 합니다.')
    .required('반드시 입력해야하는 필수 사항입니다.'),
});
function SignupModal({ close, setModalIndex }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <SignupModalBox>
      <CloseIcon onClick={close} />
      <SignupModalWrapper>
        <ModalTitleBox>
          <h3>이메일로 로그인</h3>
        </ModalTitleBox>
        <FormCustom onSubmit={handleSubmit(onSubmit, onError)}>
          <FormWrapper>
            <LabelCustom htmlFor='email'>이메일</LabelCustom>
            <InputCustom
              id='email'
              type='email'
              name='email'
              // value={email}
              // onChange={handleOnChange}
              // onBlur={invalidEmailMessage}
              onFocus={() => {
                dispatch(setErrorEmpty());
              }}
              placeholder='이메일 주소를 입력해 주세요.'
              emailError={errors.email}
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
            <LabelCustom htmlFor='password'>비밀번호</LabelCustom>
            <InputCustom
              id='password'
              type='password'
              name='password'
              // onChange={PasswordRegex}
              // onBlur={invalidPassword}
              // value={password}
              placeholder='비밀번호를 입력해 주세요.'
              onFocus={() => {
                dispatch(setErrorEmpty());
              }}
              passwordError={errors.password}
              {...register('password', { required: true })}
            />
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
          </FormWrapper>
          <NextButton>로그인</NextButton>
        </FormCustom>
        <BottomOptionsBox>
          <MaintainLoginBox>
            <label htmlFor='maintainLogin'>
              <input type='checkbox' id='maintainLogin' name='maintainLogin' />
              로그인 상태 유지
            </label>
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
