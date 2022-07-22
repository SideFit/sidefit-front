import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

const FilteringDropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  &:hover {
    cursor: pointer;
  }
  z-index: 3;
  position: relative;
`;

const SelectedBox = styled.div`
  background: #1f2b3c;
  width: 150px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ArrowIcon = styled(RiArrowDownSLine)`
  margin-left: 5px;
`;

const DropdownItemBox = styled.ul`
  background: #1f2b3c;
  width: 150px;
  border-radius: 5px;
  border: 1px solid grey;
  margin-top: 5px;
  position: absolute;
  top: 35px;
`;

const DropdownItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  padding-left: 15px;
  &:hover {
    background: #384860;
  }
`;

function FilteringDropdown() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('최신 순');

  const FilterItems = ['최신 순', '인기 순', '매너지수 높은 순'];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <FilteringDropdownBox>
      <SelectedBox onClick={handleToggle}>
        {selected} <ArrowIcon />
      </SelectedBox>
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
    </FilteringDropdownBox>
  );
}

export default FilteringDropdown;
