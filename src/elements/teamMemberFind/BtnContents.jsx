/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';
import COLOR from '../../constants/color';

function BtnContents() {
  const arr = [
    { id: 1, name: 'B2B' },
    { id: 2, name: '여행' },
    { id: 3, name: '뷰티/패션' },
    { id: 4, name: '모빌리티' },
    { id: 5, name: '금융' },
    { id: 6, name: '음식' },
    { id: 7, name: '커뮤니티' },
    { id: 8, name: '헬스' },
    { id: 9, name: 'SNS' },
    { id: 10, name: '메타버스' },
    { id: 11, name: '엔터' },
    { id: 12, name: '게임' },
    { id: 13, name: '뉴스/정보' },
    { id: 14, name: '육아' },
    { id: 15, name: '종교' },
    { id: 16, name: '교육' },
    { id: 17, name: '커머스' },
    { id: 18, name: '주제 X' },
  ];

  const [names, setNames] = useState(arr);
  const { select, setSelect, onSelectChangeHandler } = useContext(HiddenStore);

  return (
    <Container>
      {names.map(item => (
        <BtnBox
          key={item.id}
          type='button'
          onChange={onSelectChangeHandler}
          onClick={() => {
            return !select.includes(item)
              ? setSelect([...select, item])
              : setSelect(select.filter(button => button !== item));
          }}
          className={select.includes(item) ? 'Click' : 'notClick'}
        >
          {item.name}
        </BtnBox>
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -19px 0px 0px 0px;
`;

const BtnBox = styled.div`
  width: auto;
  height: 40px;
  margin: 0px 3px 3px 0px;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 13px;
  letter-spacing: -0.5px;
  padding: 12px 19px;
  cursor: pointer;
  &.Click {
    background-color: #2962ff;
  }
  &.notClick {
    background-color: ${COLOR.BACKGROUND_NAVY};
  }
`;
export default BtnContents;
