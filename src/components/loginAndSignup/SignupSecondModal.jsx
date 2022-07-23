import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import COLOR from '../../constants/color';
import useOutsideClick from '../../hooks/useOutsideClick';

const SignupSecondModalBox = styled.div`
  width: 512px;
  height: 696px;
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

const SignupSecondModalWrapper = styled.div`
  width: 400px;
  height: 600px;
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

const FormCustom = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid orange; */
  height: 570px;
`;

const FormWrapper = styled.div`
  height: 504px;
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

const DropdownCustom = styled.div`
  width: 400px;
  height: 40px;
  background: ${COLOR.WHITE};
  border-radius: 8px;
  margin-bottom: 16px;
  color: #767171;
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
  background: ${COLOR.WHITE};
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
  color: grey;
  display: flex;
  align-items: center;
  &:hover {
    background: #3ea6ff;
    border-radius: 8px;
  }
`;

const InterestBox = styled.div`
  width: 400px;
  height: fit-content;
  background: ${COLOR.WHITE};
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
  top: 435px;
  z-index: 30;
  border: 1px solid grey;
`;

const InterestItem = styled.div`
  padding: 0 10px;
  width: 95%;
  margin: 3px 0;
  height: 40px;
  color: grey;
  display: flex;
  align-items: center;
  &:hover {
    background: #3ea6ff;
    border-radius: 8px;
  }
`;

const SkillsBox = styled.div`
  width: fit-content;
  height: 36px;
  display: flex;
`;

const SkillTag = styled.div`
  position: relative;
  width: fit-content;
  height: 36px;
  background: ${COLOR.POINT_ORANGE};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.25px;
  padding: 0 16px;
  margin-right: 8px;
`;

const CustomArrowDown = styled(MdOutlineKeyboardArrowDown).attrs({
  size: '20',
})``;

const TagCloseIcon = styled(MdClose).attrs({
  size: '14',
})`
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  margin-left: 9px;
  cursor: pointer;
`;

function SignupSecondModal({ close, setModalIndex }) {
  const outsideRef = useRef();
  const outsideRef2 = useRef();
  const [toggle, setToggle] = useState(false);
  const [toggleInterest, setToggleInterest] = useState(false);
  const [dropdownText, setDropdownText] = useState(
    '기획 / 디자이너 / 개발자 / 마케터',
  );

  const [interestText, setInterestText] = useState('관심분야를 선택해 주세요');

  const handleDropdownText = e => {
    setDropdownText(e.currentTarget.textContent);
    setToggle(false);
  };

  const handleInterestText = e => {
    setInterestText(e.currentTarget.textContent);
    setToggleInterest(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleInterest = () => {
    setToggleInterest(!toggleInterest);
  };

  useOutsideClick(outsideRef, () => setToggle(false));
  useOutsideClick(outsideRef2, () => setToggleInterest(false));
  return (
    <SignupSecondModalBox>
      <SignupSecondModalWrapper>
        <CloseIcon onClick={close} />
        <ModalTitleBox>
          <h3>가입을 환영합니다!</h3>
        </ModalTitleBox>
        <FormCustom>
          <FormWrapper>
            <LabelCustom htmlFor='userName'>이름</LabelCustom>
            <InputCustom id='userName' type='text' name='userName' />
            <LabelCustom htmlFor='userNickname'>사용자명</LabelCustom>
            <InputCustom id='userNickname' type='text' name='userNickname' />
            <LabelCustom htmlFor='userOccupation'>직군</LabelCustom>
            <DropdownCustom
              id='userOccupation'
              name='userOccupation'
              onClick={handleToggle}
            >
              <p>{dropdownText}</p>
              <CustomArrowDown />
            </DropdownCustom>
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

            <LabelCustom htmlFor='userInterest'>관심분야</LabelCustom>
            <DropdownCustom
              id='userInterest'
              name='userInterest'
              onClick={handleToggleInterest}
            >
              <p>{interestText}</p>
              <CustomArrowDown />
            </DropdownCustom>
            {toggleInterest && (
              <InterestBox ref={outsideRef2}>
                <InterestItem onClick={handleInterestText}>
                  공유서비스
                </InterestItem>
                <InterestItem onClick={handleInterestText}>
                  데이팅서비스
                </InterestItem>
                <InterestItem onClick={handleInterestText}>여행</InterestItem>
                <InterestItem onClick={handleInterestText}>
                  엔터테인먼트
                </InterestItem>
                <InterestItem onClick={handleInterestText}>
                  패션/뷰티
                </InterestItem>
              </InterestBox>
            )}
            <LabelCustom htmlFor='userSkills'>기술 스택</LabelCustom>
            <InputCustom
              id='userSkills'
              type='text'
              name='userSkills'
              placeholder='예) Java, React, Figma, PhotoShop'
            />
            <SkillsBox>
              <SkillTag>
                Java
                <TagCloseIcon />
              </SkillTag>
              <SkillTag>
                Spring
                <TagCloseIcon />
              </SkillTag>
              <SkillTag>
                React
                <TagCloseIcon />
              </SkillTag>
            </SkillsBox>
          </FormWrapper>
          <NextButton onClick={() => setModalIndex(3)}>완료</NextButton>
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
