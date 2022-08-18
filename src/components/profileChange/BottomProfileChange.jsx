import React from 'react';
import styled from 'styled-components';
import AdditionalInformation from './AdditionalInformation';

const HomgContainer = styled.div`
  width: 1200px;
  height: 1162px;
  margin-top: 56px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
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
