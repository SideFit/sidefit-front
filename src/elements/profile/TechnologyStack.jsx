import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const TechnologyStackBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectedBox = styled.div`
  top: 1756px;
  left: 661px;
  align-items: end;
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  input {
    width: 378px;
    height: 36px;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
    background-color: transparent;

    resize: none;
    border: none;
  }
`;

const Line = styled.div`
  width: 378px;
  background: rgba(255, 255, 255, 0.38);
  height: 1px;
  left: 669px;
  top: 1796px;
  position: absolute;
`;

function TechnologyStack() {
  const [text, setText] = useState('');

  const onChangeInput = useCallback(e => {
    setText(e.target.value);
  }, []);

  const onClick = () => {
    setText('');
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <TechnologyStackBox>
      <SelectedBox>
        <input
          type='text'
          name='textItem'
          value={text}
          placeholder='ex) Java'
          onKeyPress={onKeyPress}
          onChange={onChangeInput}
        />
      </SelectedBox>
      <Line />
    </TechnologyStackBox>
  );
}

export default TechnologyStack;
