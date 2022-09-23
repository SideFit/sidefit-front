import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import COLOR from '../../constants/color';
import ImageDrag from '../../images/imageDrag.png';
import BtnContents from '../../elements/teamMemberFind/BtnContents';
import BottomBtn from '../../elements/teamMemberFind/BottomBtn';
import {
  WarringType,
  WarringIntroduce,
  WarringSelect,
} from '../../elements/teamMemberFind/WarringText';
import HiddenStore from './HiddenStore';
import Title from './Title';

const Form = styled.form`
  width: 1900px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 848px;
  height: auto;
  border-radius: 24px;
  background: ${COLOR.BACKGROUND_NAVY};
  margin: 0px 0px 64px 0px;
  & h2 {
    margin: 55px 0px 33px 68px;
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
  margin: 13px 0px 40px 68px;
  background: rgba(255, 255, 255, 0.12);
  opacity: 0.6;
  width: 712px;
  height: 1px;
`;

const SubTitle = styled.div`
  width: 130px;
  height: 28px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin: 0px 60px 0px 68px;
  letter-spacing: -2px;
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
  margin-bottom: 68px;
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

const BtnBox = styled.div`
  display: flex;
  margin: 0px 0px 0px 850px;
`;

function Information() {
  const {
    introduceContentHidden,
    type,
    handleClickRadioButton,
    onIntroduceContentChange,
    introduceContent,
  } = useContext(HiddenStore);

  const imageInput = useRef();

  const onClickImageUpload = () => {
    imageInput.current.click();
  };

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={submitHandler}>
      <Wrapper>
        <h2>프로젝트 정보</h2>
        <Line />
        <Title />
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
          <WarringType
            left={-16}
            top={-8}
            text='프로젝트 유형을 선택해주세요!'
          />
        </TypeContainer>
        <FieldContainer>
          <SubTitle>프로젝트 분야</SubTitle>
          <BtnContents />
          <WarringSelect
            left={-19}
            top={82}
            text='프로젝트 분야를 선택해주세요!'
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
            value={introduceContent}
            placeholder='프로젝트에 대해 소개해주세요! (최대 120자) &#10;어떤 서비스를 만들고 싶으며, 타깃 고객은 누구일까요?'
            maxLength={120}
            className={introduceContentHidden ? 'HiddenIntroduce' : 'Introduce'}
          />
          <WarringIntroduce
            top={208}
            text='프로젝트 관련 설명을 입력해주세요!'
          />
        </ProjectIntroduce>
      </Wrapper>
      <BtnBox>
        <BottomBtn />
      </BtnBox>
    </Form>
  );
}

export default Information;
