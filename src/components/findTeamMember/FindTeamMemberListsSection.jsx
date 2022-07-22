import React from 'react';
import styled from 'styled-components';
import FilteringDropdown from '../home/FilteringDropdown';
import FindTeamMemberCard from './FindTeamMemberCard';

const MemberListsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MemberListsTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  p {
    font-size: 16px;
    color: gray;
    span {
      color: white;
    }
  }
`;

const ProjectCardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 35px;
  padding-bottom: 100px;
  width: 100%;
`;

function FindTeamMemberListsSection() {
  return (
    <MemberListsSectionContainer>
      <MemberListsTop>
        <p>
          총 <span>9개</span>의 사이드 프로젝트
        </p>
        <FilteringDropdown />
      </MemberListsTop>
      <ProjectCardContainer>
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
        <FindTeamMemberCard />
      </ProjectCardContainer>
    </MemberListsSectionContainer>
  );
}

export default FindTeamMemberListsSection;
