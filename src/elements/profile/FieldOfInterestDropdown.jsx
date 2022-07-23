import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

const FieldOfInterestDropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  &:hover {
    cursor: pointer;
  }
  z-index: 5;
  position: absolute;
  top: 1606px;
  left: 661px;
  margin-bottom: 53px;
`;

const SelectedBox = styled.div`
  width: 378px;
  height: 36px;
  display: flex;
  align-items: center;
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
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.16)
    ),
    #121212;
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
    background: #384860;
  }
`;

function FieldOfInterestDropdown() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('금융');

  const FilterItems = ['금융', 'Java', 'Spring', 'Reaact', 'Vue'];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <FieldOfInterestDropdownBox>
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
    </FieldOfInterestDropdownBox>
  );
}

export default FieldOfInterestDropdown;
