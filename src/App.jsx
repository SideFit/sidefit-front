import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import FindTeamMember from './pages/FindTeamMember';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/Profile' element={<Profile />} />
        <Route path='/' element={<Home />} />
        <Route path='/findTeamMember' element={<FindTeamMember />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
