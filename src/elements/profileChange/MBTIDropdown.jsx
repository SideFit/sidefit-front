import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

const MBTIDropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -8px;
  margin-bottom: 68px;
  align-items: end;
  &:hover {
    cursor: pointer;
  }
  z-index: 6;
  position: relative;
`;

const SelectedBox = styled.div`
  width: 378px;
  height: 36px;
  display: flex;
  align-items: center;
  color: white;
`;

const ArrowIcon = styled(RiArrowDownSLine)`
  margin-left: 350px;
  position: absolute;
  color: white;
  width: 24px;
  height: 24px;
`;

const Line = styled.div`
  width: 378px;
  height: 1px;
  background: rgba(255, 255, 255, 0.38);
`;

const DropdownItemBox = styled.ul`
  background: #121a26;
  width: 378px;
  border-radius: 5px;
  border: 1px solid grey;
  margin-top: 5px;
  position: absolute;
  top: 35px;
`;

const DropdownItem = styled.li`
  display: flex;
  color: rgba(255, 255, 255, 0.6);
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  padding-left: 15px;
  &:hover {
    background: #448aff;
    color: white;
  }
`;

function MBTIDropdown() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('');

  const FilterItems = [
    'ISTJ',
    'ISFJ',
    'INFJ',
    'INTJ',
    'ISTP',
    'ISFP',
    'ISFP',
    'INFP',
    'INTP',
    'ESTP',
    'ESFP',
    'ENFP',
    'ENTP',
    'ESTJ',
    'ESFJ',
    'ENFJ',
    'ENTJ',
  ];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <MBTIDropdownBox>
      <SelectedBox onClick={handleToggle}>
        {selected} <ArrowIcon />
      </SelectedBox>
      <Line />
      {toggle && (
        <DropdownItemBox>
          {FilterItems.map(item => (
            <DropdownItem
              onClick={() => {
                setSelected(item);
                handleToggle();
              }}
              key={item}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownItemBox>
      )}
    </MBTIDropdownBox>
  );
}

export default MBTIDropdown;
