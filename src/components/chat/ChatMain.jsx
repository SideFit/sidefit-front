import React from 'react';
import styled from 'styled-components';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import ChatMainTopBanner from './ChatMainTopBanner';
import messageProfileImage from '../../images/messageProfileImage.png';

const ChatMainContainer = styled.section`
  width: 100%;
  height: 900px;
`;
const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChatBox = styled.div`
  width: 891px;
  height: 752px;
`;

const OthersMessageBox = styled.div`
  width: 891px;
  height: 80px;
`;

const OthersMessageWrapper = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
`;

const MessageProfileImage = styled.div`
  width: fit-content;
  height: 80px;
  img {
    width: 36px;
    height: 36px;
  }
`;

const MessageWrapper = styled.div`
  width: fit-content;
  height: 80px;
`;

const MyMessageBox = styled.div`
  width: 891px;
  height: 80px;
  display: flex;
  justify-content: flex-end;
`;

const OtherMessageContent = styled.div`
  border-radius: 0px 8px 8px 8px;
  width: fit-content;
  height: 44px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.16)
    ),
    #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 14px;
`;

const MyMessageWrapper = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MessageTop = styled.div`
  display: flex;
  width: fit-content;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  p {
    padding-left: 10px;
  }
  p:last-child {
    color: grey;
  }
`;

const MyMessageContent = styled.div`
  width: fit-content;
  height: 44px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.16)
    ),
    #121212;
  border-radius: 8px 0px 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 14px;
`;

const LastChat = styled.div`
  width: 891px;
  height: 64px;
  border-radius: 24px;
  border: none;
  text-align: left;
  background: white;
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  p {
    width: 811px;
    height: 48px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.15px;
  }
`;
function ChatMain() {
  return (
    <ChatMainContainer>
      <ChatMainTopBanner />
      <ChatWrapper>
        <ChatBox>
          <OthersMessageBox>
            <OthersMessageWrapper>
              <MessageProfileImage>
                <img src={messageProfileImage} alt='profile' />
              </MessageProfileImage>
              <MessageWrapper>
                <MessageTop>
                  <p>사이드핏핏</p>
                  <p>오후 3:25</p>
                </MessageTop>
                <OtherMessageContent>
                  <p>안녕하세요! 디자이너로 지원한 핏핏입니다!</p>
                </OtherMessageContent>
              </MessageWrapper>
            </OthersMessageWrapper>
          </OthersMessageBox>
          <MyMessageBox>
            <MyMessageWrapper>
              <MessageTop>
                <p>로카로카</p>
                <p>오후 3:27</p>
              </MessageTop>
              <MyMessageContent>
                <p>반가워여</p>
              </MyMessageContent>
            </MyMessageWrapper>
          </MyMessageBox>
          <MyMessageBox>
            <MyMessageWrapper>
              <MessageTop>
                <p>로카로카</p>
                <p>오후 3:27</p>
              </MessageTop>
              <MyMessageContent>
                <p>반가워여</p>
              </MyMessageContent>
            </MyMessageWrapper>
          </MyMessageBox>
          <MyMessageBox>
            <MyMessageWrapper>
              <MessageTop>
                <p>로카로카</p>
                <p>오후 3:27</p>
              </MessageTop>
              <MyMessageContent>
                <p>반가워여</p>
              </MyMessageContent>
            </MyMessageWrapper>
          </MyMessageBox>
          <OthersMessageBox>
            <OthersMessageWrapper>
              <MessageProfileImage>
                <img src={messageProfileImage} alt='profile' />
              </MessageProfileImage>
              <MessageWrapper>
                <MessageTop>
                  <p>사이드핏핏</p>
                  <p>오후 3:25</p>
                </MessageTop>
                <OtherMessageContent>
                  <p>우앙 신기하네여</p>
                </OtherMessageContent>
              </MessageWrapper>
            </OthersMessageWrapper>
          </OthersMessageBox>
          <OthersMessageBox>
            <OthersMessageWrapper>
              <MessageProfileImage>
                <img src={messageProfileImage} alt='profile' />
              </MessageProfileImage>
              <MessageWrapper>
                <MessageTop>
                  <p>사이드핏핏</p>
                  <p>오후 3:25</p>
                </MessageTop>
                <OtherMessageContent>
                  <p>우앙 신기하네여</p>
                </OtherMessageContent>
              </MessageWrapper>
            </OthersMessageWrapper>
          </OthersMessageBox>
          <MyMessageBox>
            <MyMessageWrapper>
              <MessageTop>
                <p>로카로카</p>
                <p>오후 3:27</p>
              </MessageTop>
              <MyMessageContent>
                <p>반가워여</p>
              </MyMessageContent>
            </MyMessageWrapper>
          </MyMessageBox>
          <OthersMessageBox>
            <OthersMessageWrapper>
              <MessageProfileImage>
                <img src={messageProfileImage} alt='profile' />
              </MessageProfileImage>
              <MessageWrapper>
                <MessageTop>
                  <p>사이드핏핏</p>
                  <p>오후 3:25</p>
                </MessageTop>
                <OtherMessageContent>
                  <p>우앙 신기하네여</p>
                </OtherMessageContent>
              </MessageWrapper>
            </OthersMessageWrapper>
          </OthersMessageBox>
        </ChatBox>
        <LastChat>
          <p>
            그리고 객체지향 프로그래밍에서는 프로젝트를 독립적인 객체 단위로 분
            리해서 작업할 수 있기 때문에 여러 개발자와 협업해 규모가 큰
            프로젝트를 진행할 수 있으며 유지보수측면도 뛰어나다는 장점이
            있습니다.
          </p>
          <BsArrowUpCircleFill size={40} color='#00C4B4' />
        </LastChat>
      </ChatWrapper>
    </ChatMainContainer>
  );
}

export default ChatMain;
