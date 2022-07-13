import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import headerLogo from '../images/headerLogo.png';

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
`;

const HeaderNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderAside = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  margin-right: 35px;
`;

const HeaderLogo = styled.img.attrs({
  src: `${headerLogo}`,
  alt: 'headerLogo',
})`
  width: 95px;
  height: 18px;
  color: white;
  margin: 0 25px;
`;

const HeaderLists = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: auto;
  padding: 0;
`;

const HeaderItem = styled.li`
  margin: 0 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:last-child {
    background: #d12771;
  }
`;

const HeaderSearchBarContainer = styled.div`
  width: 200px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 5px;
`;
const HeaderSearchBar = styled.input.attrs({
  placeholder: '프로젝트',
})`
  width: 150px;
  height: 35px;
  background: transparent;
  color: white;
  border: none;
  font-size: 20px;
`;

const LoginButton = styled.button`
  border: 1px solid grey;
  width: 100px;
  height: 35px;
  color: white;
  background: black;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <HeaderLogo />
        <HeaderLists>
          <HeaderItem>프로젝트</HeaderItem>
          <HeaderItem>팀원찾기</HeaderItem>
          <HeaderItem>채팅</HeaderItem>
          <HeaderItem>팀원모집하기</HeaderItem>
        </HeaderLists>
      </HeaderNavigation>
      <HeaderAside>
        <HeaderSearchBarContainer>
          <FiSearch size={20} />
          <HeaderSearchBar />
        </HeaderSearchBarContainer>
        <LoginButton>로그인</LoginButton>
      </HeaderAside>
    </HeaderContainer>
  );
}

export default Header;
