import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MdClose, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import PropTypes from 'prop-types';
import COLOR from '../../constants/color';
import useOutsideClick from '../../hooks/useOutsideClick';

const ApplyModalform = styled.form`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  width: 512px;
  height: 516px;
  border-radius: 16px;
  margin-right: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
`;

const ApplyModalWrapper = styled.div`
  width: 400px;
  height: 412px;
  display: flex;
`;

const CloseIcon = styled(MdClose).attrs({
  size: '24',
})`
  position: absolute;
  cursor: pointer;
  top: 21px;
  right: 21px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
`;

const TitleBox = styled.div`
  width: 400px;
  height: 412px;
  flex-direction: column;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.87);
    justify-content: center;
  }
`;

const SubTitle = styled.div`
  width: auto;
  height: 25px;
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
  p {
    color: gray;
    margin-left: 3px;
  }
  h1 {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DropdownContainer = styled.div`
  width: 400px;
  height: 48px;
  background: #121a26;
  border-radius: 8px;
  margin-top: 6px;
  margin-bottom: 14px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
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
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.4px;
  cursor: pointer;
  position: absolute;
  z-index: 30;
  border: none;
`;

const DropdownItem = styled.div`
  padding: 0 10px;
  color: white;
  width: 95%;
  margin: 3px 0;
  height: 40px;
  display: flex;
  align-items: center;
  &:hover {
    background: gray;
    border-radius: 8px;
  }
`;

const CustomArrowDown = styled(MdOutlineKeyboardArrowDown).attrs({
  size: '20',
})``;

const TeamWordBox = styled.textarea`
  width: 400px;
  height: 48px;
  margin-top: 8px;
  margin-bottom: 16px;
  border: none;
  outline: none;
  resize: none;
  background: #121a26;
  color: white;
  border-radius: 8px;
  padding: 10px 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.4px;
  display: flex;
  align-items: center;
`;

const ProfileBtn = styled.div`
  width: 400px;
  height: 50px;
  border: 1px solid #3ea6ff;
  background-color: transparent;
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 10px 140px;
  cursor: pointer;
  p {
    color: #3ea6ff;
    letter-spacing: 0.25px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
  }
`;

const ButtonBox = styled.div`
  width: 400px;
  height: 52px;
  margin-top: 46px;
  background: #d12771;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 104px;
  border: none;
  cursor: pointer;
  p {
    color: white;
    letter-spacing: 0.25px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
  }
`;

function ApplyModal({ close, setModalIndex }) {
  const [toggle, setToggle] = useState();
  const [dropDownText, setDropdownText] = useState('프론트 엔드');
  const outsideRef3 = useRef();

  const handleDropdown = e => {
    setDropdownText(e.currentTarget.textContent);
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useOutsideClick(outsideRef3, () => setToggle(false));

  return (
    <ApplyModalform>
      <CloseIcon onClick={close} />
      <ApplyModalWrapper>
        <TitleBox>
          <h2>지원하기</h2>
          <SubTitle>지원분야</SubTitle>
          <DropdownContainer
            id='Applyaction'
            name='userApplyation'
            onClick={handleToggle}
          >
            <p>{dropDownText}</p>
            <CustomArrowDown />
          </DropdownContainer>
          {toggle && (
            <DropdownBox ref={outsideRef3}>
              <DropdownItem onClick={handleDropdown}>프론트엔드</DropdownItem>
              <DropdownItem onClick={handleDropdown}>
                UI/UX 디자이너
              </DropdownItem>
              <DropdownItem onClick={handleDropdown}>마케터</DropdownItem>
              <DropdownItem onClick={handleDropdown}>기획자</DropdownItem>
              <DropdownItem onClick={handleDropdown}>
                백엔드 개발자
              </DropdownItem>
            </DropdownBox>
          )}
          <SubTitle>
            팀원에게 한마디<p>(선택)</p>
          </SubTitle>
          <TeamWordBox placeholder='하고싶은 한마디 적어주세요' />
          <ProfileBtn>
            <p>프로필 작성하기</p>
          </ProfileBtn>
          <SubTitle>
            <h1>프로필을 작성하면 매칭 확률이 올라가요!</h1>
          </SubTitle>
          <ButtonBox
            onClick={() => {
              setModalIndex(1);
            }}
          >
            <p>지원하기</p>
          </ButtonBox>
        </TitleBox>
      </ApplyModalWrapper>
    </ApplyModalform>
  );
}

ApplyModal.propTypes = {
  close: PropTypes.func.isRequired,
  setModalIndex: PropTypes.func.isRequired,
};

export default ApplyModal;
