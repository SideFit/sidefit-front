import React, { useContext } from 'react';
import styled from 'styled-components';
import check1 from '../../images/check1.png';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import check2 from '../../images/check2.png';
import HiddenStore from './HiddenStore';

function FindTop() {
  const { next } = useContext(HiddenStore);
  return (
    <>
      <h1>팀원 모집하기</h1>
      <p>프로젝트 정보를 입력하고 원하는 팀원을 구해보세요!</p>
      <Wrapper>
        <Line />
        <div style={{ marginLeft: -583 }}>
          {next ? <One src={one} /> : <One src={check1} />}
          {next ? <Two src={two} /> : <Two src={check2} />}
          <Three src={three} />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Line = styled.div`
  margin: 30px 0px 80px 5px;
  background: #c1c7cd;
  width: 582px;
  height: 0px;
  border: 1px solid #c1c7cd;
`;
const One = styled.img`
  width: 61.5px;
  height: 61.5px;
  margin: 0px 199px 0px 0px;
  cursor: pointer;
`;
const Two = styled.img`
  width: 61.5px;
  height: 61.5px;
  margin: 0px 199px 0px 0px;
  cursor: pointer;
`;
const Three = styled.img`
  width: 61.5px;
  height: 61.5px;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
`;
// const Two = styled.img.attrs({
//   src: `${two}`,
//   alt: 'two',
// })`
//   width: 61.5px;
//   height: 61.5px;
//   margin: -61.5px -85px 0px 0px;
//   cursor: pointer;
// `;
// const Check2 = styled.img.attrs({
//   src: `${check2}`,
//   alt: 'Check2',
// })`
//   width: 61.5px;
//   height: 61.5px;
//   margin: -61.5px -85px 0px 0px;
//   cursor: pointer;
// `;
// const Check3 = styled.img.attrs({
//   src: `${three}`,
//   alt: 'Check3',
// })`
//   width: 61.5px;
//   height: 61.5px;
//   margin: -61.5px 0px 44px 600px;
//   cursor: pointer;
// `;

export default FindTop;
