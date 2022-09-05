import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NewIconBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #d12771;
  display: ${props => (props.result === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 50%;
`;

function NewIcon({ createdDate }) {
  const today = new Date();
  const computeDate = new Date(createdDate);

  const betweenTime = Math.floor(
    (today.getTime() - computeDate.getTime()) / 1000 / 60 / 60 / 24,
  );

  const checkPassedWeek = () => {
    if (betweenTime < 8) return 'true';
    return 'false';
  };

  return <NewIconBox result={checkPassedWeek()}>N</NewIconBox>;
}

NewIcon.propTypes = {
  createdDate: PropTypes.string.isRequired,
};

export default NewIcon;
