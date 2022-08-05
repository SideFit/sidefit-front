import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

const PeriodDropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 85px;
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
  margin-top: -2px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.6);
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
  border: none;
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

function PeriodDropdown() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('1주 프로젝트');

  const FilterItems = [
    { id: 1, value: '1주 프로젝트' },
    { id: 2, value: '2주 프로젝트' },
    { id: 3, value: '3주 프로젝트' },
    { id: 4, value: '한달 프로젝트' },
    { id: 5, value: '두달 프로젝트' },
    { id: 6, value: '협의' },
  ];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <PeriodDropdownBox>
      <SelectedBox onClick={handleToggle}>
        {selected} <ArrowIcon />
      </SelectedBox>
      <Line />
      {toggle && (
        <DropdownItemBox>
          {FilterItems.map(item => (
            <DropdownItem
              onClick={() => {
                setSelected(item.value);
                handleToggle();
              }}
              key={item.id}
            >
              {item.value}
            </DropdownItem>
          ))}
        </DropdownItemBox>
      )}
    </PeriodDropdownBox>
  );
}

export default PeriodDropdown;
