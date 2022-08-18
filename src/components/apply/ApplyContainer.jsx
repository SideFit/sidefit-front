import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ApplyModal from './ApplyModal';
import ApplyCompleteModal from './ApplyCompleteModal';

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
  width: 530px;
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
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  transform: translateX(${props => props.modalIndex * -550}px);
  transition: all linear 0.1s;
`;

function ApplyContainer({ close, setModalOpen }) {
  const [modalIndex, setModalIndex] = useState(0);

  return (
    <Container>
      <Background onClick={close} />
      <ModalBlock>
        <Contents modalIndex={modalIndex}>
          <ApplyModal setModalIndex={setModalIndex} close={close} />
          <ApplyCompleteModal setModalOpen={setModalOpen} close={close} />
        </Contents>
      </ModalBlock>
    </Container>
  );
}

ApplyContainer.propTypes = {
  close: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default ApplyContainer;
