import React from 'react';
import styled from 'styled-components';

const PortfolioIconBox = styled.div`
  width: 78px;
  height: 24px;
  background: #121a26;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  opacity: 0.8;
`;

function PortfolioIcon() {
  return <PortfolioIconBox>포트폴리오</PortfolioIconBox>;
}

export default PortfolioIcon;
