import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { RiBookMarkLine } from 'react-icons/ri';
import { TbLogout } from 'react-icons/tb';
import PropTypes from 'prop-types';
import useOutsideClick from '../../hooks/useOutsideClick';

const HeaderProfileDropdownBox = styled.div`
  width: 196px;
  height: 148px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.16)
    ),
    #121212;
  border-radius: 8px;
  position: absolute;
  top: 50px;
  right: 10px;
`;

const HeaderProfileDropdownWrapper = styled.div`
  margin: 8px;
`;

const DropdownItem = styled.div`
  display: flex;
  width: 180px;
  height: 44px;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  p {
    width: 150px;
  }
  &:hover {
    background: grey;
  }
`;

function HeaderProfileDropdown({ setVisible, openLogoutModal }) {
  const modalEl = useRef();

  useOutsideClick(modalEl, () => {
    setVisible(false);
  });

  return (
    <HeaderProfileDropdownBox ref={modalEl}>
      <HeaderProfileDropdownWrapper>
        <DropdownItem>
          <FaUserCircle style={{ width: '30px' }} />
          <p>내 프로필</p>
        </DropdownItem>
        <DropdownItem>
          <RiBookMarkLine style={{ width: '30px' }} />
          <p>북마크</p>
        </DropdownItem>
        <DropdownItem onClick={openLogoutModal}>
          <TbLogout style={{ width: '30px' }} />
          <p>로그아웃</p>
        </DropdownItem>
      </HeaderProfileDropdownWrapper>
    </HeaderProfileDropdownBox>
  );
}

HeaderProfileDropdown.propTypes = {
  setVisible: PropTypes.func.isRequired,
  openLogoutModal: PropTypes.func.isRequired,
};

export default HeaderProfileDropdown;
