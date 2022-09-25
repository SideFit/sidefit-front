import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PortfolioIconBox = styled.div`
  width: fit-content;
  height: 24px;
  background: #121a26;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  opacity: 0.8;
  padding: 0 10px;
  line-height: 50%;
`;

function PortfolioIcon({ type }) {
  return (
    <PortfolioIconBox>
      {type === 0 && '출시 목적'}
      {type === 1 && '포트폴리오'}
      {type === 2 && '토이프로젝트'}
    </PortfolioIconBox>
  );
}

PortfolioIcon.propTypes = {
  type: PropTypes.number.isRequired,
};

export default PortfolioIcon;
