import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, setToken } from '../../redux/slices/usersSlice';
import headerLogo from '../../images/headerLogo.png';
import HeaderProfileDropdown from './HeaderProfileDropdown';
import ProjectApplyInformDropdown from './ProjectApplyInformDropdown';
import ModalPortal from '../loginAndSignup/ModalPortals';
import ModalContainer from '../loginAndSignup/LoginSignupModalContainer';
import LogoutModalContainer from '../loginAndSignup/LogoutModalContainer';
import COLOR from '../../constants/color';
import { connecting } from '../../redux/slices/projectSlice';
import SearchBarOption from './SearchBarOption';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background: #1f2b3c;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1000;
  /* border: 1px solid green; */
`;

const HeaderNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid pink; */
  margin-left: 32px;
  width: 500px;
  height: fit-content;
`;

const HeaderAside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 36px;
  /* border: 1px solid orange; */
  margin-right: 32px;
  position: relative;
`;

const HeaderLogo = styled.img.attrs({
  src: `${headerLogo}`,
  alt: 'headerLogo',
})`
  width: 95px;
  height: 18px;
  color: white;
  /* margin: 0 25px; */
`;

const HeaderLists = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: auto;
  padding: 0;
  /* border: 1px solid blue; */
  height: fit-content;
`;

const HeaderItem = styled.li`
  /* margin: 0 16px; */
  margin-left: 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  cursor: pointer;
  /* border: 1px solid red; */
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${props => (props.selected ? 'white' : 'rgba(255, 255, 255, 0.38)')};
  &:hover {
    color: ${COLOR.WHITE};
  }
`;

const HeaderSearchBarContainer = styled.div`
  width: ${props => (props.searchOption ? '452px' : '200px')};
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #000000;
  border-radius: 4px;
  border: ${props =>
    props.searchOption ? `1px solid ${COLOR.TEXT_HIGHLIGHT}` : 'none'};
  transition: width linear 0.2s;
`;

const SearchIcon = styled(FiSearch)`
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  font-size: 20px;
  /* border: 1px solid red; */
  margin-left: 12px;
`;
const HeaderSearchBar = styled.input.attrs({
  placeholder: '프로젝트 검색',
})`
  width: ${props => (props.searchOption ? '395px' : '145px')};
  transition: width linear 0.2s;
  height: 24px;
  background: transparent;
  color: white;
  border: none;
  font-size: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.7px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  /* border: 1px solid red; */
  padding: 0;
  margin-left: 8px;
`;

const LoginButton = styled.button`
  width: fit-content;
  height: 26px;
  color: ${COLOR.WHITE};
  background: transparent;
  /* border: 1px solid red; */
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${COLOR.WHITE};
  margin-left: 32px;
`;

const AfterLoginHeaderAside = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  margin-right: 35px;
`;

const BellNotification = styled.div`
  width: 4px;
  height: 4px;
  background: #00c4b4;
  border-radius: 50%;
  transform: translate(-17px, -8px);
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  background: #00c4b4;
  border-radius: 50%;
  cursor: pointer;
`;

function Header() {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [viewInform, setViewInform] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSearchOption, setShowSearchOption] = useState(false);
  const [, , removeCookies] = useCookies(['accessToken']);

  const pathName = useLocation().pathname;

  useEffect(() => {
    dispatch(connecting());
    return () => dispatch(connecting());
  }, []);

  console.log(pathName);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openLogoutModal = () => {
    setShowConfirmModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLogoutModal = () => {
    setShowConfirmModal(false);
    document.body.style.overflow = 'unset';
  };

  const handleViewInform = () => {
    setViewInform(!viewInform);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const isLogin = () => {
    dispatch(loginSuccess());
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const isLogout = () => {
    removeCookies(['accessToken']);
    dispatch(setToken(null));
    setVisible(false);
    setViewInform(false);
  };

  const toggleSearchBarOption = () => {
    setShowSearchOption(prev => !prev);
    console.log(showSearchOption);
  };
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <Link to='/'>
          <HeaderLogo />
        </Link>
        <HeaderLists>
          <Link to='/project'>
            <HeaderItem selected={pathName === '/project'}>프로젝트</HeaderItem>
          </Link>
          <Link to='/findTeamMember'>
            <HeaderItem selected={pathName === '/findTeamMember'}>
              팀원찾기
            </HeaderItem>
          </Link>
          <Link to='/chat'>
            <HeaderItem selected={pathName === '/chat'}>채팅</HeaderItem>
          </Link>
          <Link to='/findTeamMember'>
            <HeaderItem
              style={{
                background: `${COLOR.POINT_BLUE}`,
                color: `${COLOR.WHITE}`,
                padding: '6px 16px',
              }}
            >
              팀원모집하기
            </HeaderItem>
          </Link>
        </HeaderLists>
      </HeaderNavigation>
      {token ? (
        <AfterLoginHeaderAside>
          <FaBell
            size={20}
            color='grey'
            style={{ cursor: 'pointer' }}
            onClick={handleViewInform}
          />
          <BellNotification />
          {viewInform && (
            <ProjectApplyInformDropdown setViewInform={setViewInform} />
          )}
          <UserAvatar
            onClick={() => {
              handleVisible();
            }}
          />
          {visible && (
            <HeaderProfileDropdown
              visible={visible}
              setVisible={setVisible}
              isLogout={isLogout}
              openLogoutModal={openLogoutModal}
            />
          )}
        </AfterLoginHeaderAside>
      ) : (
        <HeaderAside>
          <HeaderSearchBarContainer searchOption={showSearchOption}>
            <SearchIcon />
            <HeaderSearchBar
              searchOption={showSearchOption}
              onFocus={toggleSearchBarOption}
              onBlur={toggleSearchBarOption}
            />
          </HeaderSearchBarContainer>
          <SearchBarOption searchOption={showSearchOption} />
          <LoginButton onClick={openModal}>로그인/회원가입</LoginButton>
        </HeaderAside>
      )}
      {modalOpen && (
        <ModalPortal>
          <ModalContainer close={closeModal} isLogin={isLogin} />
        </ModalPortal>
      )}
      {showConfirmModal && (
        <ModalPortal>
          <LogoutModalContainer
            isLogout={isLogout}
            closeLogoutModal={closeLogoutModal}
          />
        </ModalPortal>
      )}
    </HeaderContainer>
  );
}

export default Header;
