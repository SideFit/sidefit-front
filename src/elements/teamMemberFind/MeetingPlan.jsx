/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import MeetingList from './MeetingList';

const MeetingPlanDropdownBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
  z-index: 30;
  position: relative;
`;

const SelectedBox = styled.div`
  width: 378px;
  height: 36px;
  display: flex;
  align-items: center;
  margin-top: -2px;
  margin-left: 0px;
  border-radius: 5px;
  letter-spacing: -1.5px;
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
  letter-spacing: -1.5px;
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

function MeetingPlan() {
  const [toggle, setToggle] = useState(false);
  const [MeetingDatas, setMeetingDatas] = useState('주 1회');

  const MeetingData = [
    '주 1회',
    '주 2회',
    '주 3회',
    '주말 선호',
    '평일 선호',
    '온라인 선호',
    '오프라인 선호',
    '유동적인 회의',
  ];

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [MeetingValue, setMeetingValue] = useState([]);
  const nextId = useRef(1);

  const onChange = () => {
    const user = {
      id: nextId.current,
      MeetingDatas,
    };
    setMeetingValue([...MeetingValue, user]);
    nextId.current += 1;
  };

  const onRemove = id => {
    setMeetingValue(MeetingValue.filter(item => item.id !== id));
  };

  return (
    <div>
      <MeetingPlanDropdownBox>
        <SelectedBox onClick={handleToggle}>
          {MeetingDatas}
          <ArrowIcon />
        </SelectedBox>
        <Line />
        {toggle && (
          <DropdownItemBox>
            {MeetingData.map(item => (
              <DropdownItem
                onClick={() => {
                  handleToggle();
                  setMeetingDatas(item);
                  const user = {
                    id: nextId.current,
                    item,
                  };
                  setMeetingValue([...MeetingValue, user]);
                  nextId.current += 1;
                }}
              >
                {item}
              </DropdownItem>
            ))}
          </DropdownItemBox>
        )}
        <MeetingList onRemove={onRemove} MeetingValue={MeetingValue} />
      </MeetingPlanDropdownBox>
    </div>
  );
}

export default MeetingPlan;
