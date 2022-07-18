import React from 'react';
import styled from 'styled-components';
import SubFilteringSection from '../components/SubFilteringSection';
import FindTeamMemberListsSection from '../components/FindTeamMemberListsSection';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;

function FindTeamMember() {
  return (
    <HomeContainer>
      <MainContainer>
        <SubFilteringSection />
        <FindTeamMemberListsSection />
      </MainContainer>
    </HomeContainer>
  );
}

export default FindTeamMember;
