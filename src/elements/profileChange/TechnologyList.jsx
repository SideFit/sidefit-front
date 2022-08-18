/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const HomeConatiner = styled.div`
  width: 850px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const EssentialplanBox = styled.div`
  height: 40px;
  width: auto;
  padding-left: 20px;
  margin: 20px 12px 0px 0px;
  background: rgba(255, 255, 255, 0.12);
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
    <EssentialplanBox>
      {item.stack}
      <FaTimes
        style={{ marginLeft: 9, marginRight: 17 }}
        onClick={() => {
          onRemove(item.id);
        }}
      >
        삭제
      </FaTimes>
    </EssentialplanBox>
  );
}
function TechnologyList({ items, onRemove }) {
  return (
    <HomeConatiner>
      {items.map(item => (
        <Item item={item} key={item.id} onRemove={onRemove} />
      ))}
    </HomeConatiner>
  );
}

export default TechnologyList;
