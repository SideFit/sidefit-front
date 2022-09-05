import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import SignupSecondModal from './SignupSecondModal';
import SignupCompleteModal from './SignupCompleteModal';
import FindPasswordModal from './FindPasswordModal';
import AuthMailSendModal from './AuthMailSendModal';

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
  background: rgba(0, 0, 0, 0.8);
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
  overflow-x: visible;
  display: flex;
  justify-content: space-between;
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
  padding: 0 15px;
  width: fit-content;
  height: fit-content;
  transform: translateX(${props => props.modalIndex * -550}px);
  transition: all linear 0.2s;
`;

function ModalContainer({ close, isLogin }) {
  const [modalIndex, setModalIndex] = useState(0);
  return (
    <Container>
      <Background onClick={close} />
      <ModalBlock>
        <Contents modalIndex={modalIndex}>
          <LoginModal setModalIndex={setModalIndex} close={close} />
          <SignupModal
            setModalIndex={setModalIndex}
            close={close}
            isLogin={isLogin}
          />
          <SignupSecondModal setModalIndex={setModalIndex} close={close} />
          <SignupCompleteModal close={close} setModalIndex={setModalIndex} />
          <FindPasswordModal />
          <AuthMailSendModal />
        </Contents>
      </ModalBlock>
    </Container>
  );
}

ModalContainer.propTypes = {
  close: PropTypes.func.isRequired,
  isLogin: PropTypes.func.isRequired,
};

export default ModalContainer;
