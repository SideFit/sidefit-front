import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';
import COLOR from '../../constants/color';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 480px;
  height: 40px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
`;

const BtnBox = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  margin: 0px 6px 6px 0px;
  align-items: center;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: -0.5px;
  padding: 12px 19px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  cursor: pointer;
  &.Click {
    background-color: #2962ff;
  }
  &.notClick {
    background-color: ${COLOR.BACKGROUND_NAVY};
  }
`;

function BtnContents() {
  const arr = [
    { id: 1, name: 'B2B' },
    { id: 2, name: '여행' },
    { id: 3, name: '뷰티/패션' },
    { id: 4, name: '모빌리티' },
    { id: 5, name: '금융' },
    { id: 6, name: '음식' },
  ];

  const arr2 = [
    { id: 7, name: '커뮤니티' },
    { id: 8, name: '헬스' },
    { id: 9, name: 'SNS' },
    { id: 10, name: '메타버스' },
    { id: 11, name: '엔터' },
    { id: 12, name: '게임' },
  ];

  const arr3 = [
    { id: 13, name: '뉴스/정보' },
    { id: 14, name: '육아' },
    { id: 15, name: '종교' },
    { id: 16, name: '교육' },
    { id: 17, name: '커머스' },
    { id: 18, name: '주제 X' },
  ];

  const [names, setNames] = useState(arr); // eslint-disable-line no-unused-vars
  const [names2, setNames2] = useState(arr2); // eslint-disable-line no-unused-vars
  const [names3, setNames3] = useState(arr3); // eslint-disable-line no-unused-vars

  const { select, setSelect } = useContext(HiddenStore);

  return (
    <HomeContainer>
      <Line>
        {names.map(item => (
          <BtnBox
            key={item.id}
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
      </Line>
      <Line>
        {names2.map(item => (
          <BtnBox
            key={item.id}
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
      </Line>
      <Line>
        {names3.map(item => (
          <BtnBox
            key={item.id}
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
      </Line>
    </HomeContainer>
  );
}

export default BtnContents;
