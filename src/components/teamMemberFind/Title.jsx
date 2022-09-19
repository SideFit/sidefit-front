import React, { useContext } from 'react';
import styled from 'styled-components';
import { WarringTitle } from '../../elements/teamMemberFind/WarringText';
import HiddenStore from './HiddenStore';

function Title() {
  const { titleContent, titleHidden, onChangeTitleContent } =
    useContext(HiddenStore);

  return (
    <TitleContainer>
      <SubTitle>프로젝트 제목 </SubTitle>
      <ProjectTitle>
        <TitleInput
          onChange={onChangeTitleContent}
          type='text'
          name='title'
          value={titleContent}
          placeholder='Ex)여행 소셜 미디어 플랫폼'
        />
        <Line2 className={titleHidden ? 'LineNoContents' : 'LineContents'} />
      </ProjectTitle>
      <WarringTitle text='올바른 형식의 제목을 입력해주세요' />
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  width: 1066px;
  height: 30px;
  display: flex;
  flex-direction: row;
  margin-bottom: 66px;
`;

const SubTitle = styled.div`
  width: 130px;
  height: 28px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin: 0px 60px 0px 68px;
  letter-spacing: -2px;
`;

const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line2 = styled.div`
  width: 522px;
  height: 1px;
  border: 1px;
  &.LineContents {
    background: rgba(255, 255, 255, 0.38);
  }
  &.LineNoContents {
    background: #ff5252;
  }
`;

const TitleInput = styled.textarea`
  width: 480px;
  height: 24px;
  margin: 0px 0px 7px -2px;
  font-size: 16px;
  outline: none;
  resize: none;
  overflow: hidden;
  line-height: 24px;
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
`;

export default Title;
