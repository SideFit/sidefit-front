import React from 'react';
import styled from 'styled-components';
import ChatButton from './ChatButton';
import MeetingInvite from '../../elements/profile/MeetingInvite';
import profile from '../../images/profile.png';

const MyTopProfile = styled.div`
  width: 100%;
  height: 372px;
  margin-top: 60px;
  background: #1f2b3c;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: -13px;
`;

const ProfileImage = styled.img.attrs({
  src: `${profile}`,
})`
  width: 148px;
  height: 148px;
  border-radius: 65px;
  margin-bottom: 90px;
  margin-left: 75px;
  margin-right: 6px;
`;

const ProfileContext = styled.div`
  width: 1050px;
  height: 230px;
  margin-left: 56px;
  margin-bottom: 10px;
  flex-direction: column;
`;

// const MannersTemperature = styled.div`
//   width: 150px;
//   height: 230px;
//   background-color: grey;
// `;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Contents1 = styled.div`
  width: 100%;
  height: 36px;
  font-family: sans-serif;
  display: flex;
  letter-spacing: -2px;
  align-items: center;
  margin-bottom: 15px;
`;

const Contents11 = styled.div`
  width: 160px;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  display: flex;
`;
const Contents12 = styled.div`
  width: 100%;
  font-size: 20px;
  color: #999999;
  display: flex;
`;

const Contents2 = styled.div`
  width: 100%;
  color: #999999;
  font-size: 11.5px;
  display: flex;
  margin-bottom: 8px;
`;

const Contents3 = styled.div`
  width: 100%;
  height: 70px;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Contents4 = styled.div`
  width: 100%;
  height: 50px;
  font-size: 13px;
  display: flex;
  align-items: flex-start;
  color: #5ba1df;
  margin-bottom: 8px;
`;

function TopProfile() {
  return (
    <MyTopProfile>
      <ProfileImage />
      <ProfileContext>
        <Contents1>
          <Contents11>사이드 핏핏</Contents11>
          <Contents12>UI/UX 디자이너</Contents12>
        </Contents1>
        <Contents2>마지막 접속일 7일 전</Contents2>
        <Contents3>
          새롭고 다양한 시도를 좋아합니다. 되도록 고양이와 사용자를 이롭게 하는
          디자인이 옳다고 믿습니다. Figma Lover
        </Contents3>
        <Contents4>#포트폴리오용 #FIGMA #직장인</Contents4>
        <ButtonBox>
          <ChatButton />
          <MeetingInvite />
        </ButtonBox>
      </ProfileContext>
    </MyTopProfile>
  );
}

export default TopProfile;
