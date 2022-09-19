import React from 'react';
import styled from 'styled-components';
import profile from '../../images/profile.png';

function MannerBox() {
  return (
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
  );
}

const ProjectTitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 24px;
`;

const Manners = styled.div`
  width: 1200px;
  height: 218px;
  display: flex;
  flex-direction: column;
`;
const MannerContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 24px 15px;
  line-height: 20px;
  letter-spacing: 0.4px;
  width: 273px;
  height: 140px;
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
const MannersBox = styled.div`
  width: 1200px;
  height: 158px;
  display: flex;
  flex-direction: row;
`;
const ProfileImage = styled.img.attrs({
  src: `${profile}`,
})`
  width: 27.53px;
  height: 27.53px;
  border-radius: 12px;
  margin-right: 143px;
`;
export default MannerBox;
