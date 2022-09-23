/* eslint-disable react/prop-types */
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Box = styled.div`
  height: 40px;
  width: auto;
  margin: 15px 4px 0px 0px;
  padding-left: 20px;
  background: #2962ff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -1.5px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

function MeetingList({ MeetingValue, onRemove }) {
  return (
    <div>
      {MeetingValue.map(value => (
        <Box key={value.id}>
          {value.item.text}
          <FaTimes
            style={{ marginLeft: 9, marginRight: 17 }}
            onClick={() => {
              onRemove(value.id);
            }}
          />
        </Box>
      ))}
    </div>
  );
}

export default MeetingList;
