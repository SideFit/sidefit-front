import React from 'react';
import styled from 'styled-components';
import DutyDropdown from '../elements/DutyDropdown';

const HomeContainer = styled.div`
  width: 1200px;
  height: 931.19px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.16)
    ),
    #121212;
  border-radius: 24px;
  margin-top: 77px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 1109px;
  font-weight: 700;
  font-size: 24.1px;
  line-height: 36px;
  margin: 42px 0px 0px 42px;
`;

const Line = styled.div`
  margin: 13px 0px 48px 42px;
  width: 1109px;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
`;

const Subheading = styled.div`
  margin: 0px 0px 0px 45px;
  width: 114px;
  font-weight: 600;
  font-size: 17.5px;
  line-height: 28px;
  letter-spacing: -0.5px;
  p {
    margin-top: 293px;
  }
`;

const Image = styled.div`
  position: absolute;
  width: 123px;
  height: 123px;
  left: 1390px;
  top: 352.94px;
  background: #d9d9d9;
  border-radius: 32px;
`;

const DutyBox = styled.div`
  width: 1200px;
  display: flex;
  margin-bottom: 53px;
`;

const TextAreaBox = styled.div`
  width: 1200px;
  height: 88px;
  display: flex;
  margin-bottom: 98px;
  textarea {
    resize: none;
    background: #d9d9d9;
    border-radius: 8px;
    width: 787px;
    height: 82px;
    margin-left: 147px;
    outline: none;
  }
`;

function BasicInformationBox() {
  return (
    <HomeContainer>
      <Title>기본 정보</Title>
      <Line />
      <Subheading>프로필사진</Subheading>
      <Image />
      <DutyBox>
        <Subheading>
          <p>직무</p>
        </Subheading>
        <DutyDropdown />
      </DutyBox>
      <TextAreaBox>
        <Subheading>한 줄 자기소개</Subheading>
        <textarea />
      </TextAreaBox>
      <TextAreaBox>
        <Subheading>한 줄 자기소개</Subheading>
        <textarea />
      </TextAreaBox>
    </HomeContainer>
  );
}

export default BasicInformationBox;
