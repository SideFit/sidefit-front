import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdClose, MdErrorOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { BiCheckCircle } from 'react-icons/bi';
import { FiCheck } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import COLOR from '../../constants/color';
import {
  emailDuplicationCheck,
  setDuplicationEmpty,
  saveEmailAndPassword,
  sendAuthLinkByEmail,
} from '../../redux/slices/usersSlice';

const FindPasswordModalBox = styled.div`
  width: 512px;
  height: ${props => {
    if (props.errorType === 3) {
      return '680px';
    }
    if (props.errorType === 2) {
      return '652px';
    }
    if (
      props.errorType === 1 ||
      props.emailAvailable ||
      props.emailUnavailable
    ) {
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
    if (
      props.errorType === 1 ||
      props.emailAvailable ||
      props.emailUnavailable
    ) {
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
    if (props.errorType || props.emailAvailable || props.emailUnavailable) {
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
    position: relative;
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
    &:hover {
      border: 1px solid ${COLOR.TEXT_MEDIUM_EMPHASIS};
    }
    ${props => {
      if (props.errorType || props.emailUnavailable) {
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
    if (
      props.errorType === 1 ||
      props.emailAvailable ||
      props.emailUnavailable
    ) {
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
  opacity: ${props => (props.disabled ? '0.6' : '1.0')};
  border-radius: 6px;
  border: none;
  color: ${props =>
    props.disabled ? `${COLOR.TEXT_HIGH_EMPHASIS}` : `${COLOR.WHITE}`};
  cursor: ${props => (props.disabled ? 'no-drop' : 'pointer')};
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-top: 20px;
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
      cursor: pointer;
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

const AuthCompleteMessageBox = styled.div`
  height: fit-content;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.4px;
  color: ${COLOR.TEXT_HIGHLIGHT};
  display: flex;
  align-items: center;
  p {
    height: 20px;
    line-height: 22px;
  }
`;

const CheckMark = styled(BiCheckCircle)`
  margin-right: 4px;
  width: 20px;
  height: 20px;
`;

const BigCheckMark = styled(FiCheck)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 42px;
  right: 19px;
  color: ${COLOR.TEXT_HIGHLIGHT};
  display: ${props => (props.emailavailable ? 'block' : 'none')};
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
  passwordCheck: yup
    .string()
    .required('반드시 입력해야하는 필수 사항입니다.')
    .oneOf([yup.ref('password'), null], '위의 비밀번호와 일치하지 않아요.'),
});

function findPasswordModal({ close, setModalIndex }) {
  const [userData, setUserData] = useState({ email: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.user.emailPossible);
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
    dispatch(saveEmailAndPassword(dataInput));
    dispatch(sendAuthLinkByEmail(userData));
  };

  const onError = err => {
    console.log(err);
  };

  const emailDuplicationChecking = e => {
    if (typeof errors.email === 'undefined') {
      setUserData(prevFormData => {
        return {
          ...prevFormData,
          [e.target.name]: e.target.value,
        };
      });
      // const result = JSON.stringify(userData);
      // console.log(result);
      // return result;
      dispatch(emailDuplicationCheck(userData));
    }
  };

  useEffect(() => {
    dispatch(setDuplicationEmpty());
  }, []);

  return (
    <FindPasswordModalBox
      errorType={Object.keys(errors).length}
      emailUnavailable={userEmail === false}
      emailAvailable={userEmail}
    >
      <CloseIcon onClick={close} />
      <FindPasswordModalWrapper
        errorType={Object.keys(errors).length}
        emailUnavailable={userEmail === false}
        emailAvailable={userEmail}
      >
        <ModalForm
          onSubmit={handleSubmit(onSubmit, onError)}
          errorType={Object.keys(errors).length}
          emailUnavailable={userEmail === false}
          emailAvailable={userEmail}
        >
          <h3>회원가입</h3>
          <InputWrapper
            errorType={errors.email}
            emailUnavailable={userEmail === false}
            emailAvailable={userEmail}
          >
            <label htmlFor='signupEmail'>이메일</label>
            <input
              type='email'
              id='signupEmail'
              placeholder='ex) sidefit@email.com'
              name='signupEmail'
              {...register('email', {
                required: true,
                onChange: e => {
                  emailDuplicationChecking(e);
                },
              })}
            />
            <BigCheckMark
              emailavailable={typeof errors.email === 'undefined' && userEmail}
            />
            {(errors.email || userEmail === false) && (
              <ErrorMessageBox>
                <ExclamationMark />
                <p>
                  {errors.email?.message}
                  {userEmail === false && '이미 사용중인 이메일입니다.'}
                </p>
              </ErrorMessageBox>
            )}
            {typeof errors.email === 'undefined' && userEmail && (
              <AuthCompleteMessageBox>
                <CheckMark />
                <p>사용 가능한 이메일입니다.</p>
              </AuthCompleteMessageBox>
            )}
          </InputWrapper>
          <InputWrapper errorType={errors.password}>
            <label htmlFor='signUpPassword'>비밀번호</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='signUpPassword'
              placeholder='숫자, 영어 혹은 특수문자 8자리 이상'
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
            <label htmlFor='signUpPasswordConfirm'>비밀번호 확인</label>
            <input
              type={showPasswordConfirm ? 'text' : 'password'}
              id='signUpPasswordConfirm'
              placeholder='한 번 더 똑같이 적어주세요'
              {...register('passwordCheck', { required: true })}
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
          <NextButton
            disabled={!isValid || userEmail === false}
            onClick={() => setModalIndex(3)}
          >
            다음
          </NextButton>
        </ModalForm>
        <FindPasswordModalBottomBox>
          <p>
            이미 가입했다면?
            <span role='presentation' onClick={() => setModalIndex(0)}>
              로그인
            </span>
          </p>
          <p>
            등록하는 순간 <span>SIDEFIT</span>의 <span>서비스 이용약관</span>과
            <span>개인정보 처리방침</span>에 동의하게 됩니다.
          </p>
        </FindPasswordModalBottomBox>
      </FindPasswordModalWrapper>
    </FindPasswordModalBox>
  );
}

export default findPasswordModal;
