import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';

const PeriodDropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 85px;
  &:hover {
    cursor: pointer;
  }
  z-index: 30;
  position: relative;
`;

const SelectedBox = styled.div`
  width: 484px;
  height: 36px;
  display: flex;
  align-items: center;
  margin-top: -2px;
  border-radius: 5px;
  color: white;
`;

const ArrowIcon = styled(RiArrowDownSLine)`
  margin-left: 450px;
  position: absolute;
  color: white;
  width: 24px;
  height: 24px;
`;

const Line = styled.div`
  width: 484px;
  height: 1px;
  background: rgba(255, 255, 255, 0.38);
`;

const DropdownItemBox = styled.ul`
  background: #121a26;
  width: 484px;
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
  const { period, setPeriod } = useContext(HiddenStore);

  const [toggle, setToggle] = useState(false);
  const FilterItems = [
    { id: 1, value: '2주' },
    { id: 2, value: '1달' },
    { id: 3, value: '2달' },
    { id: 4, value: '3달' },
    { id: 5, value: '미정' },
    { id: 6, value: '협의' },
  ];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <PeriodDropdownBox>
      <SelectedBox onClick={handleToggle}>
        {period} <ArrowIcon />
      </SelectedBox>
      <Line />
      {toggle && (
        <DropdownItemBox>
          {FilterItems.map(item => (
            <DropdownItem
              onClick={() => {
                setPeriod(item.value);
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
