import React from 'react';
import styled from 'styled-components';
import FieldOfInterestDropdown from '../elements/FieldOfInterestDropdown';
import MBTIDropdown from '../elements/MBTIDropdown';
import TechnologyStack from '../elements/TechnologyStack';
import TechnologyButton from '../elements/TechnologyButton';

const HomeContainer = styled.div`
  width: 1200px;
  height: 843px;
`;
const Title = styled.div`
  width: 1109px;
  font-weight: 700;
  font-size: 24.1px;
  line-height: 36px;
  margin: 38px 0px 0px 44px;
`;

const Line = styled.div`
  margin: 13px 0px 62px 42px;
  width: 1109px;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
`;

const Subheading = styled.div`
  margin: 0px 0px 0px 45px;
  width: 148px;
  font-weight: 600;
  font-size: 17.5px;
  line-height: 28px;
  letter-spacing: -0.5px;
  p {
    margin-bottom: 58px;
  }
`;

const TimeBox = styled.div`
  left: 652px;
  top: 1454px;
  position: absolute;
  input {
    width: 378px;
    background-color: transparent;
    font-weight: 400;
    font-size: 17px;
    color: rgba(255, 255, 255, 0.6);
    height: 24px;
    outline: none;
    resize: none;
    border: none;
  }
`;

const Line2 = styled.div`
  width: 378px;
  height: 1px;
  background: rgba(255, 255, 255, 0.38);
  margin-left: 310px;
  margin-bottom: 43px;
`;

function AdditionalInformation() {
  return (
    <HomeContainer>
      <Title>추가정보</Title>
      <Line />
      <Subheading>조율 가능한 시간대</Subheading>
      <TimeBox>
        <input placeholder='ex) 매일 16:00~19:00' />
      </TimeBox>
      <Line2 />
      <Subheading>
        <p>MBTI</p>
      </Subheading>
      <MBTIDropdown />
      <Subheading>
        <p1>관심분야</p1>
      </Subheading>
      <FieldOfInterestDropdown />
      <TechnologyButton />
      <Subheading>기술 스택</Subheading>
      <TechnologyStack />
      <TechnologyButton />
      <Subheading>URL</Subheading>
    </HomeContainer>
  );
}

export default AdditionalInformation;
