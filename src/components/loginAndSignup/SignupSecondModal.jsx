import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  MdClose,
  MdOutlineKeyboardArrowDown,
  MdErrorOutline,
} from 'react-icons/md';
import { BiCheckCircle } from 'react-icons/bi';
import { FiCheck } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import COLOR from '../../constants/color';
import useOutsideClick from '../../hooks/useOutsideClick';

const SignupSecondModalBox = styled.div`
  width: 512px;
  height: 520px;
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

const SignupSecondModalWrapper = styled.div`
  width: 400px;
  height: 424px;
`;

const NextButton = styled.div`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_BLUE};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${COLOR.WHITE};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FormCustom = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 424px;
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

const FormWrapper = styled.div`
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  width: 400px;
  height: ${props => (props.AuthComplete ? '104px' : '76px')};
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
    background: #121a26;
    border-radius: 8px;
    border: none;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.25px;
    color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
    padding: 0 16px;
    &[disabled] {
      background: #384860;
    }
  }
`;

const DropdownCustom = styled.div`
  width: 400px;
  height: 48px;
  background: #121a26;
  border-radius: 8px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
  cursor: pointer;
`;

const DropdownBox = styled.div`
  width: 400px;
  height: fit-content;
  background: #121a26;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
  cursor: pointer;
  position: absolute;
  top: 390px;
  z-index: 30;
  border: 1px solid ${COLOR.TEXT_MEDIUM_EMPHASIS};
`;

const DropdownItem = styled.div`
  padding: 0 16px;
  width: 100%;
  height: 40px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  display: flex;
  align-items: center;
  &:hover {
    background: #3ea6ff;
    color: ${COLOR.WHITE};
    &:first-child {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
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
`;

const CustomArrowDown = styled(MdOutlineKeyboardArrowDown).attrs({
  size: '20',
  color: `${COLOR.WHITE}`,
})``;

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

const schema = yup.object().shape({
  userNickname: yup
    .string()
    .required('반드시 입력해야하는 필수 사항입니다.')
    .min(3, '닉네임은 세글자 이상 열글자 이하로 적어주세요.')
    .max(10, '닉네임은 세글자 이상 열글자 이하로 적어주세요.')
    .matches(
      /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
      '닉네임은 띄어쓰기 없이 한글, 영문만 가능해요',
    ),
  userOccupation: yup.string().required('반드시 입력해야하는 필수 사항입니다.'),
});

function SignupSecondModal({ close }) {
  const outsideRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [dropdownText, setDropdownText] = useState('직군을 선택하세요.');

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
    console.log(getValues);
  };

  const onError = error => {
    console.log(error);
  };

  const handleDropdownText = e => {
    setDropdownText(e.currentTarget.textContent);
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useOutsideClick(outsideRef, () => setToggle(false));
  return (
    <SignupSecondModalBox>
      <CloseIcon onClick={close} />
      <SignupSecondModalWrapper>
        <FormCustom onSubmit={handleSubmit(onSubmit, onError)}>
          <FormWrapper>
            <h3>회원 가입</h3>
            <InputWrapper AuthComplete>
              <label htmlFor='userName'>이메일</label>
              <input
                id='userName'
                type='text'
                name='userName'
                value='sidefit@naver.com'
                disabled
              />
              <BigCheckMark />
              <AuthCompleteMessageBox>
                <CheckMark />
                <p>인증완료된 이메일입니다.</p>
              </AuthCompleteMessageBox>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor='userNickname'>닉네임</label>
              <input
                id='userNickname'
                type='text'
                name='userNickname'
                placeholder='프로필에 표시될 닉네임을 입력하세요.'
                {...register('userNickname', { required: true })}
              />
              {errors.userNickname && (
                <ErrorMessage>
                  <ExclamationMark />
                  {errors.userNickname?.message}
                </ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor='userOccupation'>직군</label>
              <DropdownCustom
                id='userOccupation'
                name='userOccupation'
                onClick={handleToggle}
                {...register('userOccupation', { required: true })}
              >
                <p>{dropdownText}</p>
                <CustomArrowDown />
              </DropdownCustom>
              {errors.userOccupation && (
                <ErrorMessage>
                  <ExclamationMark />
                  {errors.userOccupation?.message}
                </ErrorMessage>
              )}
            </InputWrapper>
            {toggle && (
              <DropdownBox ref={outsideRef}>
                <DropdownItem onClick={handleDropdownText}>기획자</DropdownItem>
                <DropdownItem
                  onClick={handleDropdownText}
                  value='ui/ux 디자이너'
                >
                  UI/UX 디자이너
                </DropdownItem>
                <DropdownItem onClick={handleDropdownText} value='마케터'>
                  마케터
                </DropdownItem>
                <DropdownItem
                  onClick={handleDropdownText}
                  value='프론트엔드 개발자'
                >
                  프론트엔드 개발자
                </DropdownItem>
                <DropdownItem
                  onClick={handleDropdownText}
                  value='백엔드 개발자'
                >
                  백엔드 개발자
                </DropdownItem>
              </DropdownBox>
            )}
          </FormWrapper>
          <NextButton>가입완료</NextButton>
        </FormCustom>
      </SignupSecondModalWrapper>
    </SignupSecondModalBox>
  );
}

SignupSecondModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default SignupSecondModal;
