import React from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import COLOR from '../../constants/color';

const CloseBtn = styled(VscClose)`
  margin-left: 9px;
`;

const SelectedBtn = styled.button`
  background: #2962ff;
  color: white;
  width: fit-content;
  height: 40px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${COLOR.TEXT_HIGH_EMPHASIS};
  border-radius: 4px;
  padding: 6px 16px;
`;

function SelectedButton({ name }) {
  return (
    <SelectedBtn>
      <p>{name}</p>
      <CloseBtn size={16} />
    </SelectedBtn>
  );
}

SelectedButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SelectedButton;
