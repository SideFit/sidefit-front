/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const HashtagBox = styled.div`
  width: auto;
  height: 40px;
  margin-top: 15px;
  margin-right: 4px;
  background: #2962ff;
  padding-left: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -1.5px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

function Item({ item, onRemove }) {
  return (
    <HashtagBox>
      #{item.stack}
      <FaTimes
        style={{ marginLeft: 9, marginRight: 17 }}
        onClick={() => {
          onRemove(item.id);
        }}
      >
        삭제
      </FaTimes>
    </HashtagBox>
  );
}
function HashtagList({ items, onRemove }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {items.map(item => (
        <Item item={item} key={item.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default HashtagList;
