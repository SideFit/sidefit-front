import React from 'react';
import styled from 'styled-components';

const NewIconBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #d12771;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;

function NewIcon() {
  return <NewIconBox>N</NewIconBox>;
}

export default NewIcon;
