import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { setToken } from './redux/slices/usersSlice';
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
import NotFound from './pages/NotFound';

function App() {
  const token = useSelector(state => state.user.token);
  const [cookies] = useCookies(['accessToken']);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      const { accessToken } = cookies;
      if (accessToken) {
        dispatch(setToken(accessToken));
      }
    }
  }, [dispatch, token, cookies]);

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
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
