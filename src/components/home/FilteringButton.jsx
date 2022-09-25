import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import COLOR from '../../constants/color';

const FilteringBtn = styled.div`
  input {
    /* display: none; */
  }
  label {
    width: fit-content;
    height: 40px;
    background: ${COLOR.BACKGROUND_NAVY};
    padding: 6px 16px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: ${COLOR.POINT_BLUE};
    }
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.25px;
    color: rgba(255, 255, 255, 0.87);
    &:active {
      background: #448aff;
    }
  }
  input:checked + label {
    background: ${COLOR.POINT_BLUE};
  }
`;

function FilteringButton({ key, name }) {
  console.log(key, name);
  return (
    <FilteringBtn>
      <input id={`${key}${name}`} type='checkbox' name={`${key}${name}`} />
      <label htmlFor={`${key}${name}`}>{name}</label>
    </FilteringBtn>
  );
}

FilteringButton.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilteringButton;
