import React from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import PropTypes from 'prop-types';

const CloseBtn = styled(VscClose)`
  margin-left: 5px;
`;

const SelectedBtn = styled.button`
  background: #2962ff;
  color: white;
  height: 40px;
  border: 1px solid grey;
  margin: 0 10px;
  padding: 0 15px;
`;

function SelectedButton({ name }) {
  return (
    <SelectedBtn>
      {name}
      <CloseBtn size={20} />
    </SelectedBtn>
  );
}

SelectedButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SelectedButton;
