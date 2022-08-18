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
import NotFound from './pages/NotFound';

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
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
