import React, { useState } from 'react';
import styled from 'styled-components';
import ApplyContainer from '../../components/Apply.jsx/ApplyContainer';
import ModalPortal from '../../components/loginAndSignup/ModalPortals';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookmarkButton = styled.div`
  width: 344px;
  height: 54px;
  margin-top: 20px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  background-color: #1f2b3c;
  border-radius: 4px;
  border: 1px solid #596374;
  color: white;
  display: flex;
  cursor: pointer;
  letter-spacing: 0.15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 56px;
  cursor: pointer;
  background: #d12771;
  color: white;
  border-radius: 4px;
  letter-spacing: 0.15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

function RightBoxButton() {
  const [modal, setModal] = useState(false);

  const onClickButton = () => {
    setModal(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <HomeContainer>
      <BookmarkButton>북마크하기</BookmarkButton>
      <ButtonBox onClick={onClickButton}>지원하기</ButtonBox>
      {modal && (
        <ModalPortal>
          <ApplyContainer
            open={modal}
            close={() => {
              setModal(false);
              document.body.style.overflow = 'unset';
            }}
          />
        </ModalPortal>
      )}
    </HomeContainer>
  );
}

export default RightBoxButton;
