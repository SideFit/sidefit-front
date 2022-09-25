/* eslint-disable consistent-return */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { RiInformationLine } from 'react-icons/ri';
import FilteringButton from './FilteringButton';
import SelectedButton from '../../elements/home/SelectedButton';
import COLOR from '../../constants/color';
// import {
//   OCCUPATION,
//   TOPIC,
//   PROJECT_PERIOD,
//   PROJECT_PERPOSE,
// } from '../../constants/specification';

const MainFilteringSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  h1 {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
    span {
      font-weight: 700;
    }
  }
  margin-top: 60px;
  margin-bottom: 32px;
`;

const MainFilteringSectionWrapper = styled.div`
  width: 1199px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid yellow; */
`;

const FilteringBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid blue; */
`;

const FilteringTab = styled.div`
  width: 1199px;
  height: 56px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const TabWrapper = styled.ul`
  width: 620px;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TabItem = styled.li`
  width: fit-content;
  height: 56px;
  padding: 6px 16px;
  font-weight: ${({ currentTab }) => (currentTab ? '600' : '400')};
  font-size: 18px;
  line-height: 24px;
  color: ${COLOR.TEXT_HIGH_EMPHASIS};
  color: ${props =>
    props.currentTab ? `${COLOR.POINT_BLUE}` : `${COLOR.TEXT_HIGH_EMPHASIS};`};
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FilteringButtonBox = styled.div`
  width: 715px;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-between;
  border: 1px solid red;
  gap: 16px 6px;
  margin: 16px 0px;
`;

const SelectedBox = styled.div`
  width: 1120px;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 24px 16px;
  /* border: 1px solid blue; */
`;

const InformationIcon = styled(RiInformationLine)`
  color: ${COLOR.POINT_BLUE};
  margin-left: 6.5px;
  width: 22px;
  height: 22px;
  margin-bottom: 2px;
`;

const Glider = styled.span`
  position: absolute;
  left: 0;
  top: 54px;
  width: ${({ gliderWidth }) => gliderWidth}px;
  transition: 0.25s ease-out;
  border-bottom: 2px solid #2962ff;
  transform: translate3D(
    ${({ currentIndex }) => {
      if (currentIndex === 1) {
        return '92px';
      }
      if (currentIndex === 2) {
        return '155px';
      }
      if (currentIndex === 3) {
        return '218px';
      }
      if (currentIndex === 4) {
        return '281px';
      }
      if (currentIndex === 5) {
        return '411px';
      }
      return '0px';
    }},
    0,
    0
  );
`;

const tabContent = [
  {
    id: 0,
    title: { recommendation: '추천' },
    contents: [],
  },
  {
    id: 1,
    title: { entire: '전체' },
    contents: {
      planner: '기획',
      design: '디자인',
      frontend: '프론트엔드',
      backend: '백엔드',
      community: '커뮤니티',
      beautyFashion: '뷰티/패션',
      finance: '금융',
      entertainment: '엔터',
      game: '게임',
      travel: '여행',
      sns: 'SNS',
      mobility: '모빌리티',
      education: '교육',
      b2b: 'B2B',
      commerce: '커머스',
      metaverse: '메타버스',
      health: '헬스',
      food: '음식',
      newsInformation: '뉴스/정보',
      parenting: '육아',
      religion: '종교',
      topicUndecided: '주제 X',
      oneMonth: '한달 이하',
      twoMonth: '두달',
      threeMonth: '세달',
      fourMonth: '네달',
      fiveMonth: '다섯달 이상',
      portfolio: '포트폴리오',
      launching: '출시 목적',
      toyProject: '토이 프로젝트',
    },
  },
  {
    id: 2,
    title: { jobGroup: '직무' },
    contents: {
      planner: '기획',
      design: '디자인',
      frontend: '프론트엔드',
      backend: '백엔드',
    },
  },
  {
    id: 3,
    title: { field: '주제' },
    contents: {
      community: '커뮤니티',
      beautyFashion: '뷰티/패션',
      finance: '금융',
      entertainment: '엔터',
      game: '게임',
      travel: '여행',
      sns: 'SNS',
      mobility: '모빌리티',
      education: '교육',
      b2b: 'B2B',
      commerce: '커머스',
      metaverse: '메타버스',
      health: '헬스',
      food: '음식',
      newsInformation: '뉴스/정보',
      parenting: '육아',
      religion: '종교',
      topicUndecided: '주제 X',
    },
  },
  {
    id: 4,
    title: { projectPeriod: '프로젝트 기간' },
    contents: {
      oneMonth: '한달 이하',
      twoMonth: '두달',
      threeMonth: '세달',
      fourMonth: '네달',
      fiveMonth: '다섯달 이상',
    },
  },
  {
    id: 5,
    title: { projectType: '프로젝트 목적' },
    contents: {
      portfolio: '포트폴리오',
      launching: '출시 목적',
      toyProject: '토이 프로젝트',
    },
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex,
  };
};

function MainFilteringSection() {
  const { currentItem, chageItem } = useTabs(0, tabContent);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gliderWidth, setGliderWidth] = useState(92);
  const myRef = useRef();
  // myRef.current.children = 0;
  // const gliderWidth = myRef.current?.children[currentIndex].offsetWidth;
  console.log(myRef.current?.children[currentIndex].offsetWidth);
  console.log(myRef.current);

  useEffect(() => {
    setGliderWidth(myRef.current.children[currentIndex].offsetWidth);
    console.log(myRef.current);
    console.log('currentItem:', currentItem);
    console.log('currentIndex:', currentIndex);
    console.log('gliderWidth:', gliderWidth);
  }, [currentItem, currentIndex, gliderWidth]);

  return (
    <MainFilteringSectionContainer>
      <h1>
        <span>수영</span> 님 맞춤 프로젝트 찾기
      </h1>
      <MainFilteringSectionWrapper>
        <FilteringBox>
          <FilteringTab>
            <TabWrapper ref={myRef}>
              {tabContent.map((section, index) => (
                <TabItem
                  key={section.id}
                  currentTab={currentIndex === index}
                  role='presentation'
                  onClick={() => {
                    chageItem(index);
                    setCurrentIndex(index);
                  }}
                >
                  {Object.values(section.title)}
                  {Object.values(section.title).toString() === '추천' && (
                    <InformationIcon />
                  )}
                </TabItem>
              ))}
            </TabWrapper>
            <Glider currentIndex={currentIndex} gliderWidth={gliderWidth} />
          </FilteringTab>
          <FilteringButtonBox>
            {console.log(currentItem)}
            {/* {tabContent.map(section =>
              Object.entries(section.contents).map(([key, value]) => (
                <FilteringButton key={key} name={value} />
              )),
            )} */}
            {Object.entries(currentItem.contents).map(([key, value]) => (
              <FilteringButton key={key} name={value} />
            ))}
          </FilteringButtonBox>
        </FilteringBox>
        <SelectedBox>
          <SelectedButton name='커뮤니티' />
          <SelectedButton name='메타버스' />
          <SelectedButton name='2달' />
          <SelectedButton name='포트폴리오' />
          <SelectedButton name='디자인' />
          <SelectedButton name='커뮤니티' />
          <SelectedButton name='메타버스' />
          <SelectedButton name='2달' />
          <SelectedButton name='포트폴리오' />
          <SelectedButton name='디자인' />
          <SelectedButton name='여행' />
          <SelectedButton name='여행' />
          <SelectedButton name='여행' />
          <SelectedButton name='여행' />
          <SelectedButton name='여행' />
          <SelectedButton name='여행' />
          <SelectedButton name='여행' />
          <SelectedButton name='여행' />
        </SelectedBox>
      </MainFilteringSectionWrapper>
    </MainFilteringSectionContainer>
  );
}

export default MainFilteringSection;
