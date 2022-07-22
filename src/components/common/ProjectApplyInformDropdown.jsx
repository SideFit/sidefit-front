import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useOutsideClick from '../../hooks/useOutsideClick';

const ProjectApplyInformDropdownBox = styled.div`
  background: white;
  width: 504px;
  height: 683px;
  border-radius: 8px;
  z-index: 100;
  position: absolute;
  top: 60px;
  right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    border-color: white transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    right: 45px;
    position: absolute;
    top: -8px;
    width: 1px;
    z-index: 1;
  }
`;

const ProjectApplyInformDropdownWrapper = styled.div`
  width: 90%;
  height: 90%;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
`;

const InformTypeBox = styled.div`
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InformType = styled.div`
  color: black;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  p:first-child {
    color: ${props => (props.switchTab === 'apply' ? 'black' : 'grey')};
    cursor: pointer;
  }
  p:last-child {
    color: ${props => (props.switchTab === 'project' ? 'black' : 'grey')};
    cursor: pointer;
  }
`;

const InformContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ApplyInformBox = styled.div`
  width: 95%;
  height: 104px;
  /* border: 1px solid orange; */
  display: flex;
  border-bottom: 1px solid grey;
  padding: 10px 0;
`;

const UserBox = styled.div`
  /* border: 1px solid orange; */
  width: 80px;
  height: 100%;
  div {
    background: ${props => props.color};
    width: 48px;
    height: 48px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ApplyInformWapper = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 100%;
`;

const ApplyDescriptionBox = styled.div`
  /* border: 1px solid orange; */
  width: 100%;
  height: 70%;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: black;
    span {
      color: #3ea6ff;
    }
  }
`;

const ChattingAndDateBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: #2962ff;
    border-radius: 4px;
    width: 88px;
    height: 36px;
    border: none;
    color: white;
  }
  p {
    color: grey;
    font-weight: 400;
    font-size: 14px;
  }
`;

function ProjectApplyInformDropdown({ setViewInform }) {
  const [switchTab, setSwitchTab] = useState('apply');
  const insideRef = useRef();
  const changeProjectTab = () => {
    setSwitchTab('project');
  };

  const changeApplyTab = () => {
    setSwitchTab('apply');
  };

  useOutsideClick(insideRef, () => {
    setViewInform(false);
  });

  return (
    <ProjectApplyInformDropdownBox ref={insideRef}>
      <ProjectApplyInformDropdownWrapper>
        <InformTypeBox>
          <InformType switchTab={switchTab}>
            <p role='presentation' onClick={changeApplyTab}>
              자원 알림
            </p>
            <p role='presentation' onClick={changeProjectTab}>
              프로젝트 알림
            </p>
          </InformType>
        </InformTypeBox>
        <InformContainer>
          <ApplyInformBox>
            <UserBox color='#1B5E20'>
              <div>토</div>
            </UserBox>
            <ApplyInformWapper>
              <ApplyDescriptionBox>
                <p>
                  ‘토끼’님이 여행 소셜 미디어 플랫폼 <span>UX/UI 디자이너</span>
                  로 지원했어요!
                </p>
              </ApplyDescriptionBox>
              <ChattingAndDateBox>
                <button type='button'>채팅하기</button>
                <p>1일 전</p>
              </ChattingAndDateBox>
            </ApplyInformWapper>
          </ApplyInformBox>
          <ApplyInformBox>
            <UserBox color='#651FFF'>
              <div>고</div>
            </UserBox>
            <ApplyInformWapper>
              <ApplyDescriptionBox>
                <p>
                  ‘고라니’님이 여행 소셜 미디어 플랫폼
                  <span>UX/UI 디자이너</span>로 지원했어요!
                </p>
              </ApplyDescriptionBox>
              <ChattingAndDateBox>
                <button type='button'>채팅하기</button>
                <p>1일 전</p>
              </ChattingAndDateBox>
            </ApplyInformWapper>
          </ApplyInformBox>
          <ApplyInformBox>
            <UserBox color='#0043CE'>
              <div>거</div>
            </UserBox>
            <ApplyInformWapper>
              <ApplyDescriptionBox>
                <p>
                  ‘거북이’님이 여행 소셜 미디어 플랫폼
                  <span>UX/UI 디자이너</span>로 지원했어요!
                </p>
              </ApplyDescriptionBox>
              <ChattingAndDateBox>
                <button type='button'>채팅하기</button>
                <p>1일 전</p>
              </ChattingAndDateBox>
            </ApplyInformWapper>
          </ApplyInformBox>
          <ApplyInformBox>
            <UserBox color='#AD1457'>
              <div>오</div>
            </UserBox>
            <ApplyInformWapper>
              <ApplyDescriptionBox>
                <p>
                  ‘오미자’님이 여행 소셜 미디어 플랫폼
                  <span>UX/UI 디자이너</span>로 지원했어요!
                </p>
              </ApplyDescriptionBox>
              <ChattingAndDateBox>
                <button type='button'>채팅하기</button>
                <p>1일 전</p>
              </ChattingAndDateBox>
            </ApplyInformWapper>
          </ApplyInformBox>
          <ApplyInformBox>
            <UserBox color='#ED6663'>
              <div>호</div>
            </UserBox>
            <ApplyInformWapper>
              <ApplyDescriptionBox>
                <p>
                  ‘호랑이’님이 여행 소셜 미디어 플랫폼
                  <span>UX/UI 디자이너</span>로 지원했어요!
                </p>
              </ApplyDescriptionBox>
              <ChattingAndDateBox>
                <button type='button'>채팅하기</button>
                <p>1일 전</p>
              </ChattingAndDateBox>
            </ApplyInformWapper>
          </ApplyInformBox>
          <ApplyInformBox>
            <UserBox color='#FFB0B0;'>
              <div>사</div>
            </UserBox>
            <ApplyInformWapper>
              <ApplyDescriptionBox>
                <p>
                  ‘사자’님이 여행 소셜 미디어 플랫폼 <span>UX/UI 디자이너</span>
                  로 지원했어요!
                </p>
              </ApplyDescriptionBox>
              <ChattingAndDateBox>
                <button type='button'>채팅하기</button>
                <p>1일 전</p>
              </ChattingAndDateBox>
            </ApplyInformWapper>
          </ApplyInformBox>
        </InformContainer>
      </ProjectApplyInformDropdownWrapper>
    </ProjectApplyInformDropdownBox>
  );
}

ProjectApplyInformDropdown.propTypes = {
  setViewInform: PropTypes.func.isRequired,
};

export default ProjectApplyInformDropdown;
