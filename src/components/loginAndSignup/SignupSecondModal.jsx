import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BiCheckCircle } from 'react-icons/bi';
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
  padding: 0 10px;
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
  top: 345px;
  z-index: 30;
  border: 1px solid grey;
`;

const DropdownItem = styled.div`
  padding: 0 10px;
  width: 95%;
  margin: 3px 0;
  height: 40px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  display: flex;
  align-items: center;
  &:hover {
    background: #3ea6ff;
    border-radius: 8px;
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

const CustomArrowDown = styled(MdOutlineKeyboardArrowDown).attrs({
  size: '20',
  color: `${COLOR.WHITE}`,
})``;

function SignupSecondModal({ close, setModalIndex }) {
  const outsideRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [dropdownText, setDropdownText] = useState('직군을 선택하세요.');

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
        <FormCustom>
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
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor='userOccupation'>직군</label>
              <DropdownCustom
                id='userOccupation'
                name='userOccupation'
                onClick={handleToggle}
              >
                <p>{dropdownText}</p>
                <CustomArrowDown />
              </DropdownCustom>
            </InputWrapper>
            {toggle && (
              <DropdownBox ref={outsideRef}>
                <DropdownItem onClick={handleDropdownText}>기획자</DropdownItem>
                <DropdownItem onClick={handleDropdownText}>
                  UI/UX 디자이너
                </DropdownItem>
                <DropdownItem onClick={handleDropdownText}>마케터</DropdownItem>
                <DropdownItem onClick={handleDropdownText}>
                  프론트엔드 개발자
                </DropdownItem>
                <DropdownItem onClick={handleDropdownText}>
                  백엔드 개발자
                </DropdownItem>
              </DropdownBox>
            )}
          </FormWrapper>
          <NextButton onClick={() => setModalIndex(3)}>가입완료</NextButton>
        </FormCustom>
      </SignupSecondModalWrapper>
    </SignupSecondModalBox>
  );
}

SignupSecondModal.propTypes = {
  close: PropTypes.func.isRequired,
  setModalIndex: PropTypes.func.isRequired,
};

export default SignupSecondModal;
