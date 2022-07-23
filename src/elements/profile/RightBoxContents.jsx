import React from 'react';
import styled from 'styled-components';

const BoxContents = styled.div`
  width: 334px;
  display: flex;
  flex-direction: column;
  span {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 8px;
  }
  span2 {
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: rgba(255, 255, 255, 0.38);
    margin-bottom: 24px;
  }
  span3 {
    font-weight: 400;
    height: 28px;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.25px;
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;
  }
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.25px;
    color: #3ea6ff;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const Button = styled.div`
  width: 63px;
  height: 24px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: rgba(255, 255, 255, 0.87);
  background: #384860;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function RightBoxContents() {
  return (
    <BoxContents>
      <span>여행 소셜 미디어 플랫폼</span>
      <span2>엔터테인먼트 · 1시간 전</span2>
      <span3>
        UX / UI 디자이너<p>1/2</p>
      </span3>
      <span3>
        IOS 백앤드<p>2/2</p>
        <Button>모집완료</Button>
      </span3>
    </BoxContents>
  );
}

export default RightBoxContents;
