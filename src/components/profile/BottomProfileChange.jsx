import React from 'react';
import styled from 'styled-components';
import AdditionalInformation from './AdditionalInformation';

const HomgContainer = styled.div`
  width: 1200px;
  height: 843px;
  margin-top: 146.81px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.16)
    ),
    #121212;
  border-radius: 24px;
`;

function BottomProfileChange() {
  return (
    <HomgContainer>
      <AdditionalInformation />
    </HomgContainer>
  );
}

export default BottomProfileChange;
