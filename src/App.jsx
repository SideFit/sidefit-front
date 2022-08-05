import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import FindTeamMember from './pages/FindTeamMember';
import Header from './components/common/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/common/Footer';
import ProfileChange from './pages/ProfileChange';
import TeamMemberFind from './pages/TeamMemberFind';
import FindTwoContainer from './components/teamMemberFind/FindTwoContainer';
import CompleteConatainer from './components/teamMemberFind/CompleteContainer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/findTeamMember' element={<FindTeamMember />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/profileChange' element={<ProfileChange />} />
        <Route path='/teammemberfind' element={<TeamMemberFind />} />
        <Route path='/teammemberfind/2' element={<FindTwoContainer />} />
        <Route path='/teammemberfind/3' element={<CompleteConatainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
