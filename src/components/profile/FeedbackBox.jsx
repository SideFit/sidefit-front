import React from 'react';
import { BsPeople } from 'react-icons/bs';
import styled from 'styled-components';

function FeedbackBox() {
  const TextBox = [
    { id: 1, value: 6, text: '팀 미팅시간을 잘 지켜요.' },
    { id: 2, value: 5, text: '커뮤니케이션 역량이 뛰어나요' },
    { id: 3, value: 4, text: '리더쉽이 뛰어나요' },
    { id: 4, value: 3, text: '리더쉽이 뛰어나요' },
  ];
  return (
    <FeedbackContainer>
      <ProjectTitle>받은 피드백</ProjectTitle>
      <FeedbackContent>
        {TextBox.map(data => (
          <FeedbackContents key={data.id}>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>{data.value}</ValueBox>
            {data.text}
          </FeedbackContents>
        ))}
      </FeedbackContent>
    </FeedbackContainer>
  );
}

const FeedbackContainer = styled.div`
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
const ProjectTitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 24px;
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

export default FeedbackBox;
