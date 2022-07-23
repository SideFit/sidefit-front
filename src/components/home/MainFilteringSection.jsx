import React from 'react';
import styled from 'styled-components';
import FilteringButton from './FilteringButton';
import SelectedButton from '../../elements/home/SelectedButton';

const MainFilteringSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

const MainFilteringWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  flex-wrap: wrap;
  width: 500px;
  height: 120px;
`;

const SelectedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
`;

function MainFilteringSection() {
  return (
    <MainFilteringSectionContainer>
      <MainFilteringWrapper>
        <FilteringButton name='전체' />
        <FilteringButton name='모집직군' />
        <FilteringButton name='주제' />
        <FilteringButton name='프로젝트 기간' />
        <FilteringButton name='프로젝트 목적' />
        <FilteringButton name='기획' />
        <FilteringButton name='디자인' />
        <FilteringButton name='프론트엔드' />
        <FilteringButton name='서버' />
        <FilteringButton name='그 외' />
      </MainFilteringWrapper>
      <SelectedWrapper>
        <SelectedButton name='디자인' />
        <SelectedButton name='2주 프로젝트' />
        <SelectedButton name='포트폴리오' />
        <SelectedButton name='O2O' />
      </SelectedWrapper>
    </MainFilteringSectionContainer>
  );
}

export default MainFilteringSection;
