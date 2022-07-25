import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import COLOR from '../../constants/color';

const SignupCompleteModalBox = styled.div`
  width: 496px;
  height: 296px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: none;
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
  height: 32px;
  margin-top: 72px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;

const SubTitleBox = styled.div`
  width: 400px;
  height: 28px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.25px;
`;

const CompleteBtn = styled.button`
  width: 400px;
  height: 52px;
  background: #2962ff;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.25px;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function ApplyCompleteModal({ close }) {
  return (
    <SignupCompleteModalBox>
      <CloseIcon onClick={close} />
      <TitleBox>지원이 성공적으로 완료되었서요!</TitleBox>
      <SubTitleBox>신청을 확일할 때까지 조금만 기다려주세요!</SubTitleBox>
      <CompleteBtn
        onClick={() => {
          close(close);
        }}
      >
        완료
      </CompleteBtn>
    </SignupCompleteModalBox>
  );
}

ApplyCompleteModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ApplyCompleteModal;
