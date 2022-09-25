import React from 'react';
import styled from 'styled-components';
import SubFilteringButton from '../../elements/findTeamMember/SubFilteringButton';

const SubFilteringSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  border: 1px solid red;
`;

const SubFilteringSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  width: 433px;
  height: 36px;
`;

function SubFilteringSection() {
  return (
    <SubFilteringSectionContainer>
      <SubFilteringSectionWrapper>
        <SubFilteringButton name='전체' />
        <SubFilteringButton name='기획' />
        <SubFilteringButton name='디자인' />
        <SubFilteringButton name='프론트엔드' />
        <SubFilteringButton name='서버' />
        <SubFilteringButton name='그 외' />
      </SubFilteringSectionWrapper>
    </SubFilteringSectionContainer>
  );
}

export default SubFilteringSection;
