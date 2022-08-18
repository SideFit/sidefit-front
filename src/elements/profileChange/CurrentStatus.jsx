import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ButtonStore from '../../components/profileChange/ButtonStore';
import COLOR from '../../constants/color';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 180px;
`;

const Line = styled.div`
  width: 850px;
  height: 40px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

function CurrentStatus() {
  const arr = [
    { id: 1, name: '사이드프로젝트 팀 찾는 중' },
    { id: 2, name: '스터디 멤버 모집 중' },
    { id: 3, name: '취업준비 중' },
    { id: 4, name: '직장인' },
    { id: 5, name: '사이드프로젝트 팀원 찾는중' },
    { id: 7, name: '유저리서치중' },
    { id: 8, name: 'MVP개발중' },
    { id: 9, name: '런칭 준비 중' },
    { id: 10, name: '아이디어 구상 중' },
    { id: 11, name: '협업 파트너 찾는 중' },
    { id: 12, name: '구직 중' },
    { id: 13, name: '포트폴리오 제작 중' },
    { id: 14, name: '경력 1~3 년차' },
    { id: 15, name: '경력 4~6 년차' },
    { id: 16, name: '경력 7~9 년차' },
    { id: 17, name: '경력 10 년차 이상' },
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

export default CurrentStatus;
