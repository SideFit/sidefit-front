import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubFilteringBtn = styled.button`
  display: inline-block;
  margin: 0 4px;
  padding: 0 16px;
  height: 36px;
  line-height: 36px;
  border: 1px solid gray;
  box-sizing: border-box;
  background: #1f2b3c;
  font-size: 14px;
  color: white;
  &:hover {
    background: #2962ff;
  }
`;

function SubFilteringButton({ name }) {
  return <SubFilteringBtn>{name}</SubFilteringBtn>;
}

SubFilteringButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SubFilteringButton;
