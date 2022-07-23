import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import COLOR from '../../constants/color';

const LogoutConfirmModalBox = styled.div`
  width: 512px;
  height: 208px;
  background: ${COLOR.MODAL_BACKGROUND};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid grey;
`;

const CloseIcon = styled(MdClose).attrs({
  size: '24',
})`
  position: absolute;
  top: 21px;
  right: 21px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  cursor: pointer;
`;

const LogoutConfirmModalWrapper = styled.div`
  width: 400px;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 400px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
  font-style: normal;
`;

const ButtonBox = styled.div`
  width: 400px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CancelButton = styled.div`
  width: 192px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.38);
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.7px;
  cursor: pointer;
`;

const LogoutButton = styled(CancelButton)`
  background: ${COLOR.POINT_ORANGE};
`;

function LogoutConfirmModal({ isLogout, closeLogoutModal }) {
  return (
    <LogoutConfirmModalBox>
      <CloseIcon onClick={closeLogoutModal} />
      <LogoutConfirmModalWrapper>
        <TitleBox>
          <h3>정말로 로그아웃하시겠습니까?</h3>
        </TitleBox>
        <ButtonBox>
          <CancelButton onClick={closeLogoutModal}>취소</CancelButton>
          <LogoutButton
            onClick={() => {
              isLogout();
              closeLogoutModal();
            }}
          >
            로그아웃
          </LogoutButton>
        </ButtonBox>
      </LogoutConfirmModalWrapper>
    </LogoutConfirmModalBox>
  );
}

LogoutConfirmModal.propTypes = {
  isLogout: PropTypes.func.isRequired,
  closeLogoutModal: PropTypes.func.isRequired,
};

export default LogoutConfirmModal;
