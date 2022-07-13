import React from 'react';
import styled from 'styled-components';

const MyBottomProfile = styled.div`
  width: 100%;
  height: 1465px;
  background: #121a26;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function BottomProfile() {
  return <MyBottomProfile />;
}

export default BottomProfile;
