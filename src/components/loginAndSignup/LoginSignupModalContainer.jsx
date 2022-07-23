import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import SignupSecondModal from './SignupSecondModal';
import SignupCompleteModal from './SignupCompleteModal';

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
  position: absolute;
  width: 550px;
  height: fit-content;
  overflow-x: hidden;
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
  transition: all linear 0.1s;
`;

function ModalContainer({ close, setLogin, setModalOpen }) {
  const [modalIndex, setModalIndex] = useState(0);
  return (
    <Container>
      <Background onClick={close} />
      <ModalBlock>
        <Contents modalIndex={modalIndex}>
          <LoginModal setModalIndex={setModalIndex} close={close} />
          <SignupModal setModalIndex={setModalIndex} close={close} />
          <SignupSecondModal setModalIndex={setModalIndex} close={close} />
          <SignupCompleteModal
            close={close}
            setLogin={setLogin}
            setModalOpen={setModalOpen}
          />
        </Contents>
      </ModalBlock>
    </Container>
  );
}

ModalContainer.propTypes = {
  close: PropTypes.func.isRequired,
  setLogin: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default ModalContainer;
