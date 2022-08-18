import React from 'react';
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import COLOR from '../constants/color';
import notFoundImage from '../images/notFoundImage.png';

const NotFoundContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  width: 100%;
  height: 100vh;
`;

const NotFoundWrapper = styled.div`
  width: 529px;
  height: 529px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const NotFoundImg = styled.img.attrs({
  src: `${notFoundImage}`,
  alt: 'notFoundImage',
})`
  width: 399.65px;
  height: 204.99px;
`;

const NotFoundText = styled.div`
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 64.2px;
`;

const NotFoundText1 = styled.p`
  height: 35px;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
`;

const NotFoundText2 = styled.p`
  height: 28px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  display: flex;

  span {
    color: ${COLOR.TEXT_HIGHLIGHT};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    cursor: pointer;
  }
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <NotFoundImg />
        <NotFoundText>
          <NotFoundText1>페이지를 찾을 수 없어요, 미안해요!</NotFoundText1>
          <NotFoundText2>
            요청하신 페이지를 찾을 수가 없어요.
            <Link to='/'>
              <span>
                메인 페이지로 돌아가기
                <MdArrowForwardIos />
              </span>
            </Link>
          </NotFoundText2>
        </NotFoundText>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
}

export default NotFound;
