import React, { useContext, useState, useRef } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styled from 'styled-components';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';
import RecruitmentList from './RecruitmentList';
import { WarringRecruitment } from './WarringText';

const RecruitmentPlanDropdownBox = styled.div`
  width: 100%;
  height: auto;
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
  width: 484px;
  height: 36px;
  display: flex;
  align-items: center;
  margin-top: -2px;
  border-radius: 5px;
  letter-spacing: -1.5px;
  font-size: 18px;
  line-height: 24px;
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
  width: 484px;
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

function Recruitment() {
  const {
    selected,
    setSelected,
    Recruitments,
    setRecruitment,
    RecruitmentsHidden,
  } = useContext(HiddenStore);
  const [toggle, setToggle] = useState(false);
  const nextId = useRef(1);

  // const FilterItems = [
  //   { text: '기획' },
  //   { text: '프론트엔드' },
  //   { text: '백엔드' },
  //   { text: '디자이너' },
  //   { text: 'UI/UX' },
  // ];

  const FilterItems = ['기획', '프론트엔드', '백엔드', '디자이너', 'UI/UX'];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const onRemove = id => {
    setRecruitment(Recruitments.filter(item => item.id !== id));
  };

  return (
    <div style={{ marginBottom: 50 }}>
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
                  handleToggle();
                  setSelected(item);
                  const user = {
                    id: nextId.current,
                    item,
                  };
                  setRecruitment([...Recruitments, user]);
                  nextId.current += 1;
                }}
                key={item}
              >
                {item}
              </DropdownItem>
            ))}
          </DropdownItemBox>
        )}
        {RecruitmentsHidden ? (
          <WarringRecruitment text='모집 직군과 인원을 추가해주세요' />
        ) : null}
        {Recruitments.map(items => (
          <RecruitmentList key={items.id} items={items} onRemove={onRemove} />
        ))}
      </RecruitmentPlanDropdownBox>
    </div>
  );
}
export default Recruitment;
