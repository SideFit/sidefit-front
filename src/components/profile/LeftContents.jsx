import React from 'react';
import styled from 'styled-components';
import InformationBox from '../../elements/InformationBox';
import ProjectCard from '../home/ProjectCard';
import team1 from '../../images/team1.png';

const HomeContainer = styled.div`
  width: 1200px;
  height: 1579px;
  display: flex;
  flex-direction: column;
`;
const ContentsTitle = styled.div`
  width: auto;
  font-weight: 600;
  font-size: 22.9px;
  line-height: 32px;
  margin-bottom: 16px;
`;

const BoxContents = styled.div`
  width: 788px;
  font-weight: 400;
  font-size: 12.1px;
  line-height: 28px;
  letter-spacing: 0.25px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 80px;
`;

const InformationContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
`;

const CardContainer = styled.div`
  width: 1200px;
  height: 307px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 35px;
  flex-direction: row;
`;

const TeamContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
`;

const TeamBox = styled.div`
  width: 64px;
  height: 120px;
  display: flex;
  justify-items: center;
  flex-direction: column;
  margin-right: 52px;
  margin-left: 16px;
`;

const TeamName = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  display: flex;
  justify-content: center;
  letter-spacing: 0.25px;
`;

const TeamPosition = styled.div`
  font-weight: 400;
  font-size: 12.1px;
  line-height: 28px;
  letter-spacing: 0.25px;
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 80px;
`;

const TeamImage = styled.img.attrs({
  src: `${team1}`,
  alt: 'headerLogo',
})`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

function LeftContents() {
  return (
    <HomeContainer>
      <ContentsTitle>프로젝트 소개</ContentsTitle>
      <BoxContents>
        저희는 “어디 가지?”라는 질문에 대한 해답을 주는 서비스를 개발하는
        팀입니다! <br />
        정보는 많지만 그 많은 정보들을 나의 취향에 맞게 필터링을 하는데에 많은
        시간을 쏟는 현대인들에게 효과적으로 솔루션을 제공할 뿐만 아니라, 새로운
        곳으로 가고싶은 설레임을 끊임없이 만들어주는 서비스를 만들고 있습니다.
        <br />
        <br />
        “갈 곳”이라는 것은 단지 해외여행에 국한된 것뿐만이 아닌 단순히 지인과
        가는 동네 구경, 맛집 탐방 등 내가 있는 곳이 여행지 혹은 갈 곳이 되어,
        새로운 장소를 찾아나서고, 새로운 장소에 대한 행복을 느끼며, 새로운
        장소를 찾는 과정이 빠르고 재미있는 경험을 선사하고자 합니다.
        <br />
        <br /> 타겟 페르소나는 20대 초반 대학생부터 30대 초중반 직장인까지로
        생각하고 있습니다. 관심 있으시면 더 자세한 페르소나 자료
        공유드리겠습니다!
      </BoxContents>
      <ContentsTitle>프로젝트 목표</ContentsTitle>
      <BoxContents>
        여행 산업 O2O 포트폴리오용이며, 출시는 미정입니다.
      </BoxContents>
      <ContentsTitle>프로젝트 기간</ContentsTitle>
      <BoxContents>2주 프로젝트</BoxContents>
      <ContentsTitle>모임 계획</ContentsTitle>
      <InformationContainer>
        <InformationBox name='주 1회' />
        <InformationBox name='주말 선호' />
        <InformationBox name='협의 가능' />
      </InformationContainer>
      <ContentsTitle>필요 스택</ContentsTitle>
      <InformationContainer>
        <InformationBox name='Java' />
        <InformationBox name='Spring' />
        <InformationBox name='Java' />
      </InformationContainer>
      <ContentsTitle>현재 팀원</ContentsTitle>
      <TeamContainer>
        <TeamBox>
          <TeamImage />
          <TeamName>Eric</TeamName>
          <TeamPosition>프론트엔드</TeamPosition>
        </TeamBox>
        <TeamBox>
          <TeamImage />
          <TeamName>Eric</TeamName>
          <TeamPosition>프론트엔드</TeamPosition>
        </TeamBox>
        <TeamBox>
          <TeamImage />
          <TeamName>Eric</TeamName>
          <TeamPosition>프론트엔드</TeamPosition>
        </TeamBox>
        <TeamBox>
          <TeamImage />
          <TeamName>Eric</TeamName>
          <TeamPosition>프론트엔드</TeamPosition>
        </TeamBox>
      </TeamContainer>
      <ContentsTitle>다른 프로젝트도 둘러보세요!</ContentsTitle>
      <CardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </CardContainer>
    </HomeContainer>
  );
}

export default LeftContents;
