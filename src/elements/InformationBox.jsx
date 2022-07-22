import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InformationsBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  margin-right: 16px;
  width: auto;
  height: 36px;
  font-size: 12px;
  display: flex;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
`;

function InformationBox({ name }) {
  return <InformationsBox>{name}</InformationsBox>;
}

InformationBox.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InformationBox;
