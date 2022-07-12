import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilteringBtn = styled.button`
  background: #1f2b3c;
  color: white;
  height: 40px;
  display: inline;
  border: 1px solid grey;
  margin: 0 10px;
  padding: 0 15px;
  &:hover {
    background: grey;
  }
`;

function FilteringButton({ name }) {
  return <FilteringBtn>{name}</FilteringBtn>;
}

FilteringButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilteringButton;
