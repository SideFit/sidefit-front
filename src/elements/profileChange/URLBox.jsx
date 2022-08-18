import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const HomeContainer = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
`;

const LinkAddBox = styled.div`
  width: 152px;
  height: 40px;
  background: #2962ff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.15px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`;

const LinkURL = styled.input`
  width: 810px;
  height: 50px;
  margin: 24px 0px 0px -10px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 18px;
  line-height: 24px;
  color: white;
  ::placeholder {
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Line = styled.div`
  width: 810px;
  height: 1px;
  background: rgba(255, 255, 255, 0.38);
`;

function URLBox() {
  const test = e => {
    console.log(e.target.value);
  };

  return (
    <HomeContainer>
      <LinkAddBox>
        <AiOutlinePlus style={{ marginLeft: -2, marginRight: 2 }} />
        링크 추가하기
      </LinkAddBox>
      <div>
        <LinkURL type='text' placeholder='http://' onChange={test} />
        <Line />
      </div>
    </HomeContainer>
  );
}

export default URLBox;
