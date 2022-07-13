import React from 'react';
import styled from 'styled-components';
import MainFilteringSection from '../components/MainFilteringSection';
import MainTop from '../components/MainTop';
import ProjectListsSection from '../components/ProjectListsSection';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <HomeContainer>
      <MainTop />
      <MainContainer>
        <MainFilteringSection />
        <ProjectListsSection />
      </MainContainer>
    </HomeContainer>
  );
}

export default Home;
