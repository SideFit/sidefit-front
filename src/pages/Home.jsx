import React from 'react';
import styled from 'styled-components';
import MainFilteringSection from '../components/home/MainFilteringSection';
import MainTop from '../components/home/MainTop';
import ProjectListsSection from '../components/home/ProjectListsSection';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.main`
  width: 1199px;
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
