import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ButtonStore from '../../components/profileChange/ButtonStore';
import COLOR from '../../constants/color';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 134px;
  width: 850px;
`;

const Line = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const BtnBox = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  margin: 0px 12px 22px 0px;
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

function FieldOfIntersetButton() {
  const arr = [
    { id: 1, name: '금융' },
    { id: 2, name: '소설' },
    { id: 3, name: '데이팅' },
    { id: 4, name: '여행' },
    { id: 5, name: '라이프스타일' },
    { id: 6, name: '중개플랫폼' },
    { id: 7, name: '교육' },
    { id: 8, name: '미디어' },
    { id: 9, name: '이커머스' },
    { id: 10, name: '게임' },
    { id: 11, name: '스포츠' },
    { id: 12, name: '모빌리티' },
    { id: 13, name: '의료' },
    { id: 14, name: '헬스' },
    { id: 15, name: '공유서비스' },
    { id: 16, name: '뷰티/패션' },
    { id: 17, name: '기타' },
  ];

  const [names, setNames] = useState(arr); // eslint-disable-line no-unused-vars
  const { select, setSelect } = useContext(ButtonStore);

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
    </HomeContainer>
  );
}

export default FieldOfIntersetButton;
