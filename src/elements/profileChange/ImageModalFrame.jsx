import React, { useContext } from 'react';
import styled from 'styled-components';
import ButtonStore from '../../components/profileChange/ButtonStore';

const ModaContainer = styled.div`
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 0.3s;
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
  width: 683px;
  height: 284px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 16px;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.87);
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-top: 64px;
`;

const SubTitle = styled.div`
  color: #878d96;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  margin: 16px 0px 48px 0px;
`;

const ButtonContainer = styled.div`
  width: 204px;
  height: 48px;
  margin: 0px 8px 0px 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.yes {
    background: #2962ff;
  }
  &.no {
    background: #323e51;
  }
`;

function ImageModalFrame() {
  const { ModalChange, deleteImage } = useContext(ButtonStore);
  return (
    <ModaContainer>
      <Background onClick={ModalChange} />
      <ModalBlock>
        <Title>사진삭제</Title>
        <SubTitle>사진을 정말 제거할까요?</SubTitle>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ButtonContainer onClick={deleteImage} className='yes'>
            확인
          </ButtonContainer>
          <ButtonContainer onClick={ModalChange} className='no'>
            취소
          </ButtonContainer>
        </div>
      </ModalBlock>
    </ModaContainer>
  );
}

export default ImageModalFrame;
