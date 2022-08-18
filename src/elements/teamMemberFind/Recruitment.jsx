import React, { useContext, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';
import { WarringTextRecruitment } from './WarringText';

const RecruitmentPlanDropdownBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
  z-index: 60;
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
  &.WarringHidden {
    background: rgba(255, 255, 255, 0.38);
  }
  &.WarringOn {
    display: flex;
    background: #ff5252;
  }
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

const MeetingplanBox = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 20px;
  margin-top: 13px;
  background: transparent;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -1.5px;
`;

function Recruitment() {
  const {
    selected,
    setSelected,
    Recruitments,
    setRecruitment,
    RecruitmentsHidden,
  } = useContext(HiddenStore);
  const [toggle, setToggle] = useState(false);

  const FilterItems = ['기획', '프론트엔드', '백엔드', '디자이너'];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // eslint-disable-next-line no-unused-vars

  const [counter, setCount] = useState(1);
  const upCount = () => {
    setCount(counter + 1);
  };
  const minusCount = () => {
    setCount(counter - 1);
  };

  return (
    <div>
      <RecruitmentPlanDropdownBox>
        <SelectedBox onClick={handleToggle}>
          {selected} <ArrowIcon />
        </SelectedBox>
        <Line className={RecruitmentsHidden ? 'WarringOn' : 'WarringHidden'} />
        {toggle && (
          <DropdownItemBox>
            {FilterItems.map(item => (
              <DropdownItem
                onClick={() => {
                  setSelected(item);
                  setRecruitment([...Recruitments, item]);
                  handleToggle();
                }}
                key={item}
              >
                {item}
              </DropdownItem>
            ))}
          </DropdownItemBox>
        )}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {Recruitments.map(items => (
            <MeetingplanBox>
              {items}
              <AiOutlineMinus
                style={{ marginLeft: 28, marginRight: 24 }}
                onClick={minusCount}
              />
              {counter}
              <AiOutlinePlus
                style={{ marginLeft: 24, marginRight: 20 }}
                onClick={upCount}
              />
            </MeetingplanBox>
          ))}
        </div>
        <WarringTextRecruitment warringName='모집 직군과 인원을 추가해주세요' />
      </RecruitmentPlanDropdownBox>
    </div>
  );
}
export default Recruitment;
