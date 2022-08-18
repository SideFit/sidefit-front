import React from 'react';
import styled from 'styled-components';
import FindContainer from '../components/teamMemberFind/FindContainer';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function TeamMemberFind() {
  return (
    <HomeContainer>
      <FindContainer />
    </HomeContainer>
  );
}

export default TeamMemberFind;
