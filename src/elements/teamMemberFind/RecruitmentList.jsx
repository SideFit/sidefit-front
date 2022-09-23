/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Div = styled.div`
  width: 500px;
`;

const MeetingplanBox = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Item = styled.div`
  width: 120px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  line-height: 24px;
  margin: 0px 30px 0px 0px;
`;

const Count = styled.div`
  font-size: 18px;
  line-height: 24px;
  margin: 0px 26px 0px 26px;
`;

function RecruitmentList({ items, onRemove }) {
  const [test, setTest] = useState(true);
  const [count, setCount] = useState(1);

  const upHandler = () => {
    setCount(count + 1);
  };
  const downHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      onRemove(items.id);
      setTest(false);
    }
  };

  return (
    <Div>
      {test && (
        <MeetingplanBox>
          <Box>
            <Item>{items.item}</Item>
            <AiOutlineMinus onClick={downHandler} />
            <Count>{count}</Count>
            <AiOutlinePlus onClick={upHandler} />
          </Box>
        </MeetingplanBox>
      )}
    </Div>
  );
}

export default RecruitmentList;
