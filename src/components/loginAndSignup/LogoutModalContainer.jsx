import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogoutConfirmModal from './LogoutConfirmModal';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: fixed;
  width: 550px;
  height: fit-content;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: fit-content;
  transform: translateX(${props => props.modalIndex * -550}px);
  transition: all linear 0.2s;
`;

function LogoutModalContainer({ isLogout, closeLogoutModal }) {
  return (
    <Container>
      <Background onClick={closeLogoutModal} />
      <ModalBlock>
        <Contents>
          <LogoutConfirmModal
            isLogout={isLogout}
            closeLogoutModal={closeLogoutModal}
          />
        </Contents>
      </ModalBlock>
    </Container>
  );
}

LogoutModalContainer.propTypes = {
  isLogout: PropTypes.func.isRequired,
  closeLogoutModal: PropTypes.func.isRequired,
};

export default LogoutModalContainer;
