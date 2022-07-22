import React from 'react';
import styled from 'styled-components';
import footerLogo from '../images/footerLogo.png';

const FooterContainer = styled.footer`
  border-top: 1px solid #fff;
  background-color: #121a26;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100%;
  justify-content: space-evenly;
  margin-bottom: 60px;
  img {
    width: 90px;
    height: 18px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <img src={footerLogo} alt='footerLogo' />
        <p>Copyright ⓒ 2022 SIDEFIT. All rights reserved.</p>
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;
