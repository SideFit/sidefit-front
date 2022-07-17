import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import FindTeamMember from './pages/FindTeamMember';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/findTeamMember' element={<FindTeamMember />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
