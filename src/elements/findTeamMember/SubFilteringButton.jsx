import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import COLOR from '../../constants/color';

const SubFilteringBtn = styled.button`
  padding: 6px 16px;
  height: 36px;
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-sizing: border-box;
  background: ${COLOR.BACKGROUND_NAVY};
  border-radius: 4px;
  color: ${COLOR.TEXT_HIGH_EMPHASIS};
  &:hover {
    background: #2962ff;
  }
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: ${COLOR.TEXT_HIGH_EMPHASIS};
`;

function SubFilteringButton({ name }) {
  return <SubFilteringBtn>{name}</SubFilteringBtn>;
}

SubFilteringButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SubFilteringButton;
