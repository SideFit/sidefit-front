import React from 'react';
import styled from 'styled-components';
import project from '../images/project.png';
import LeftContents from './LeftContents';

const HomeContainer = styled.div`
  width: 1200px;
  height: 2077px;
  margin-top: 124px;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 788px;
  height: 330px;
  margin-right: 36px;
  display: flex;
`;

const ProjectLogo = styled.img.attrs({
  src: `${project}`,
  alt: 'headerLogo',
})`
  width: 788px;
  height: 330px;
  border-radius: 8px;
`;

const TitleBox = styled.div`
  width: 788px;
  height: 44px;
  font-weight: 700;
  font-size: 34.9px;
  line-height: 44px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
`;

const ContentsBox = styled.div`
  width: 1200px;
  height: 1579px;
  display: flex;
  flex-direction: column;
`;

function LeftProject() {
  return (
    <HomeContainer>
      <ImageContainer>
        <ProjectLogo />
      </ImageContainer>
      <TitleBox>여행 소셜 미디어 플랫폼</TitleBox>
      <ContentsBox>
        <LeftContents />
      </ContentsBox>
    </HomeContainer>
  );
}

export default LeftProject;
