import React from 'react';
import styled from 'styled-components';
import CurrentStatus from '../../elements/profileChange/CurrentStatus';
import MBTIDropdown from '../../elements/profileChange/MBTIDropdown';
import FieldOfIntersetButton from '../../elements/profileChange/FieldOfIntersetButton';
import TechnologyStack from '../../elements/profileChange/TechnologyStack';
import URLBox from '../../elements/profileChange/URLBox';

const HomeContainer = styled.form`
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
  margin: 0px 166px 0px 67px;
  width: 75px;
  font-weight: 600;
  font-size: 17.5px;
  line-height: 28px;
  letter-spacing: -0.5px;
`;

function AdditionalInformation() {
  return (
    <HomeContainer>
      <Title>추가정보</Title>
      <Line />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Subheading>현재 상태</Subheading>
        <CurrentStatus />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Subheading>MBTI</Subheading>
        <MBTIDropdown />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Subheading>관심 분야</Subheading>
        <FieldOfIntersetButton />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Subheading>기술 스택</Subheading>
        <TechnologyStack />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Subheading>URL</Subheading>
        <URLBox />
      </div>
    </HomeContainer>
  );
}

export default AdditionalInformation;
