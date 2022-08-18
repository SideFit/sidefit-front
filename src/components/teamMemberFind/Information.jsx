import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import COLOR from '../../constants/color';
import ImageDrag from '../../images/imageDrag.png';
import BtnContainer from '../../elements/teamMemberFind/BtnContainer';
import BottomBtn from '../../elements/teamMemberFind/BottomBtn';
import {
  WarringTextTitle,
  WarringTextType,
  WarringTextSelect,
  WarringTextIntroduce,
} from '../../elements/teamMemberFind/WarringText';
import HiddenStore from './HiddenStore';

const HomeContainer = styled.div`
  width: 1200px;
  height: 1090.13px;
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 24px;
  margin: 0px 0px 64px 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1066px;
  height: 1030px;
  h2 {
    margin-top: 15px;
    width: 170px;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    letter-spacing: -2px;
  }
`;

const Line = styled.div`
  margin: 13px 0px 69px 0px;
  background: rgba(255, 255, 255, 0.12);
  opacity: 0.6;
  width: 1066px;
  height: 1px;
`;

const SubTitle = styled.div`
  width: 130px;
  height: 28px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-right: 133px;
  letter-spacing: -2px;
`;

const TitleContainer = styled.div`
  width: 1066px;
  height: 30px;
  display: flex;
  flex-direction: row;
  margin-bottom: 66px;
`;

const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line2 = styled.div`
  width: 480px;
  height: 1px;
  border: 1px;
  &.LineContents {
    background: rgba(255, 255, 255, 0.38);
  }
  &.LineNoContents {
    background: #ff5252;
  }
`;

const TitleInput = styled.textarea`
  width: 480px;
  height: 24px;
  margin: 0px 0px 7px -2px;
  font-size: 16px;
  outline: none;
  resize: none;
  overflow: hidden;
  line-height: 24px;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
`;

const TypeContainer = styled.div`
  width: 1066px;
  height: 30px;
  display: flex;
  flex-direction: row;
  margin-bottom: 72px;
  span {
    margin: -5px 55px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    font-size: 16.5px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const TypeInput = styled.input`
  width: 16px;
  height: 16px;
  margin: 1px 12px 0px 0px;
  accent-color: #2962ff;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  width: 480px;
  height: 135px;
  margin: -19px 0px 0px 0px;
`;

const FieldContainer = styled.div`
  width: 1066px;
  height: 135px;
  display: flex;
  margin-bottom: 54px;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  width: 1066px;
  height: 120px;
  display: flex;
  flex-direction: row;
  margin-bottom: 51px;
`;
const BasicSize = styled.div`
  width: auto;
  height: 20px;
  margin: 41px 0px 0px 37px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: rgba(255, 255, 255, 0.6);
`;

const Imagetypes = styled.div`
  width: auto;
  height: 18px;
  margin: 62px 0px 0px -139px;
  color: #3ea6ff;
  letter-spacing: 0.2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

const ImageDrags = styled.img.attrs({
  src: `${ImageDrag}`,
  alt: 'ImageDrag',
})`
  width: 272px;
  height: 120px;
  cursor: pointer;
`;

const ProjectIntroduce = styled.div`
  width: 1066px;
  height: 240px;
  display: flex;
  flex-direction: row;
`;

const IntroduceText = styled.textarea`
  width: 480px;
  height: 240px;
  background: ${COLOR.BACKGROUND_NAVY};
  padding: 12px 16px;
  resize: none;
  outline: none;
  border-radius: 8px;
  color: #ffffff;
  &.HiddenIntroduce {
    border: 1px solid #ff5252;
  }
  &.Introduce {
    opacity: 0.5;
    border: 1px solid rgba(255, 255, 255, 0.38);
  }
`;

// eslint-disable-next-line react/prop-types
function Information() {
  const {
    titleHidden,
    introduceContentHidden,
    type,
    handleClickRadioButton,
    onChangeTitleContent,
    onIntroduceContentChange,
  } = useContext(HiddenStore);

  const imageInput = useRef();

  const onClickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <HomeContainer>
      <Wrapper>
        <h2>프로젝트 정보</h2>
        <Line />
        <TitleContainer>
          <SubTitle>프로젝트 제목 </SubTitle>
          <ProjectTitle>
            <TitleInput
              onChange={onChangeTitleContent}
              type='text'
              name='title'
              placeholder='Ex)여행 소셜 미디어 플랫폼'
            />
            <Line2
              className={titleHidden ? 'LineNoContents' : 'LineContents'}
            />
          </ProjectTitle>
          <WarringTextTitle warringName='올바른 형식의 제목을 입력해주세요' />
        </TitleContainer>
        <TypeContainer>
          <SubTitle>프로젝트 유형</SubTitle>
          <span>
            <TypeInput
              type='radio'
              value='1'
              checked={type === '1'}
              onChange={handleClickRadioButton}
            />
            출시목적
          </span>
          <span>
            <TypeInput
              type='radio'
              value='2'
              checked={type === '2'}
              onChange={handleClickRadioButton}
            />
            포트폴리오
          </span>
          <span>
            <TypeInput
              type='radio'
              value='3'
              checked={type === '3'}
              onChange={handleClickRadioButton}
            />
            토이프로젝트
          </span>
          <WarringTextType
            left={-16}
            top={-8}
            warringName='프로젝트 유형을 선택해주세요!'
          />
        </TypeContainer>
        <FieldContainer>
          <SubTitle>프로젝트 분야</SubTitle>
          <ButtonBox>
            <BtnContainer />
          </ButtonBox>
          <WarringTextSelect
            top={82}
            warringName='프로젝트 분야를 선택해주세요!'
          />
        </FieldContainer>
        <ImageContainer>
          <SubTitle>대표 이미지</SubTitle>
          <input
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            ref={imageInput}
          />
          <ImageDrags onClick={onClickImageUpload} />
          <BasicSize>권장 사이즈 273 * 120</BasicSize>
          <Imagetypes>분야별 기본이미지</Imagetypes>
        </ImageContainer>
        <ProjectIntroduce>
          <SubTitle>프로젝트 소개</SubTitle>
          <IntroduceText
            onChange={onIntroduceContentChange}
            placeholder='프로젝트에 대해 소개해주세요! (최대 120자) &#10;어떤 서비스를 만들고 싶으며, 타깃 고객은 누구일까요?'
            maxLength={120}
            className={introduceContentHidden ? 'HiddenIntroduce' : 'Introduce'}
          />
          <WarringTextIntroduce
            top={208}
            warringName='프로젝트 관련 설명을 입력해주세요!'
          />
        </ProjectIntroduce>
        <BottomBtn />
      </Wrapper>
    </HomeContainer>
  );
}

export default Information;
