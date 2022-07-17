import React from 'react';
import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import ProjectCard from './ProjectCard';
import Profile from '../images/Profile.png';

const MyBottomProfile = styled.div`
  width: 100%;
  height: 1465px;
  background: #121a26;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const MoreInformationBox = styled.div`
  width: 1200px;
  height: 395px;
  display: flex;
  flex-direction: column;
`;

const Information = styled.div`
  margin-top: 64px;
  width: 110px;
  height: 36px;
  letter-spacing: -2px;
  font-size: 24px;
  font-weight: 700;
`;

const CurrentStatus = styled.div`
  margin-top: 24px;
  width: 1200px;
  height: 36px;
  display: flex;
`;

const InformationTitle = styled.div`
  width: 100px;
  height: 36px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-right: 111px;
`;

const InformationBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  margin-right: 8px;
  width: auto;
  height: 36px;
  font-size: 12px;
  display: flex;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
`;

const LinkBox = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.74);
  border-radius: 10.8182px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const URLBox = styled.div`
  width: auto;
  height: 32px;
  font-size: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  margin-left: 8px;
  margin-right: 16px;
`;

const ProjectBox = styled.div`
  width: 1200px;
  height: 367px;
  display: flex;
  margin-top: 96px;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 24px;
`;

const ProjectCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 35px;
  flex-direction: row;
`;

const FeedbackBox = styled.div`
  margin-top: 80px;
  width: 1200px;
  height: 108;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;

const FeedbackContent = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: row;
  height: 48px;
`;

const FeedbackContents = styled.div`
  display: flex;
  margin-right: 36px;
  font-size: 12.5px;
  letter-spacing: -1px;
  flex-direction: row;
  align-items: center;
  width: 273px;
  height: 48px;
  justify-content: flex-start;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 8px;
`;

const BsPeopleBox = styled.div`
  display: flex;
  justify-items: flex-start;
  margin-right: 11px;
  margin-left: 19px;
  size: 20px;
`;

const ValueBox = styled.div`
  display: flex;
  margin-right: 18px;
  font-size: 13px;
  font-weight: bold;
`;

const Manners = styled.div`
  width: 1200px;
  height: 218px;
  display: flex;
  flex-direction: column;
`;

const MannersBox = styled.div`
  width: 1200px;
  height: 158px;
  display: flex;
  flex-direction: row;
`;

const MannerContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 24px 15px;
  line-height: 20px;
  letter-spacing: 0.4px;
  width: 234px;
  height: 110px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 8px;
  margin-right: 36px;
`;

const MannerDate = styled.div`
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: flex-end;
`;

// const TodayTime = () => {
//   const now = new Date();
//   const TodayYear = now.getFullYear();
//   const TodayMonth = now.getMonth() + 1;
//   const TodayDate = now.getDate();

//   return `${TodayYear}.${TodayMonth}.${TodayDate}`;
// };

const ProfileImage = styled.img.attrs({
  src: `${Profile}`,
})`
  width: 27.53px;
  height: 27.53px;
  border-radius: 12px;
  margin-right: 143px;
`;

function BottomProfile() {
  return (
    <MyBottomProfile>
      <MoreInformationBox>
        <Information>추가 정보</Information>
        <CurrentStatus>
          <InformationTitle>현재상태</InformationTitle>
          <InformationBox>프로젝트 찾는 중</InformationBox>
          <InformationBox>구직 중</InformationBox>
          <InformationBox>포트폴리오 제작 중</InformationBox>
        </CurrentStatus>
        <CurrentStatus>
          <InformationTitle>MBTI</InformationTitle>
          <InformationBox>ENTP</InformationBox>
        </CurrentStatus>
        <CurrentStatus>
          <InformationTitle>관심분야</InformationTitle>
          <InformationBox>금융</InformationBox>
          <InformationBox>여행</InformationBox>
        </CurrentStatus>
        <CurrentStatus>
          <InformationTitle>기술스택</InformationTitle>
          <InformationBox>Java</InformationBox>
          <InformationBox>Spring</InformationBox>
          <InformationBox>React</InformationBox>
        </CurrentStatus>
        <CurrentStatus>
          <InformationTitle>URL</InformationTitle>
          <LinkBox>
            <FaLink />
          </LinkBox>
          <URLBox>포트폴리오</URLBox>
          <LinkBox>
            <FaLink />
          </LinkBox>
          <URLBox>이력서</URLBox>
        </CurrentStatus>
      </MoreInformationBox>
      <ProjectBox>
        <ProjectTitle>진행 중인 프로젝트</ProjectTitle>
        <ProjectCardBox>
          <ProjectCard />
          <ProjectCard />
        </ProjectCardBox>
      </ProjectBox>
      <FeedbackBox>
        <ProjectTitle>받은 피드백</ProjectTitle>
        <FeedbackContent>
          <FeedbackContents>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>6</ValueBox>팀 미팅시간을 잘 지켜요.
          </FeedbackContents>
          <FeedbackContents>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>6</ValueBox>커뮤니케이션 역량이 뛰어나요
          </FeedbackContents>
          <FeedbackContents>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>6</ValueBox> 리더쉽이 뛰어나요
          </FeedbackContents>
          <FeedbackContents>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>6</ValueBox> 리더쉽이 뛰어나요
          </FeedbackContents>
        </FeedbackContent>
      </FeedbackBox>
      <Manners>
        <ProjectTitle>받은 매너 평가</ProjectTitle>
        <MannersBox>
          <MannerContent>
            그래픽 디자인 실력이 좋으세요. 친절하고 매너가 좋네요 빠른 응답과
            성실한 참여가 돋보이는 분입니다.
            <MannerDate>
              <ProfileImage /> 2022.06.22
            </MannerDate>
          </MannerContent>
          <MannerContent>
            그래픽 디자인 실력이 좋으세요. 친절하고 매너가 좋네요 빠른 응답과
            성실한 참여가 돋보이는 분입니다.
            <MannerDate>
              <ProfileImage /> 2022.06.22
            </MannerDate>
          </MannerContent>
        </MannersBox>
      </Manners>
    </MyBottomProfile>
  );
}

export default BottomProfile;
