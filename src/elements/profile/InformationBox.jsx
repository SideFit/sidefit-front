import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

function InformationBox({ state, mbti, filed, skills }) {
  return (
    <>
      <CurrentStatus>
        <Title>현재상태</Title>
        {state &&
          state.map(data => (
            <InformationsBoxs key={data}>{data}</InformationsBoxs>
          ))}
      </CurrentStatus>
      <CurrentStatus>
        <Title>MBTI</Title>
        <InformationsBoxs>{mbti}</InformationsBoxs>
      </CurrentStatus>
      <CurrentStatus>
        <Title>관심분야</Title>
        {filed &&
          filed.map(data => (
            <InformationsBoxs key={data}>{data}</InformationsBoxs>
          ))}
      </CurrentStatus>
      <CurrentStatus>
        <Title>기술스택</Title>
        {skills &&
          skills.map(data => (
            <InformationsBoxs key={data}>{data}</InformationsBoxs>
          ))}
      </CurrentStatus>
      <CurrentStatus>
        <Title>URL</Title>
        <LinkBox>
          <FaLink />
        </LinkBox>
        <URLBox>포트폴리오</URLBox>
        <LinkBox>
          <FaLink />
        </LinkBox>
        <URLBox>이력서</URLBox>
      </CurrentStatus>
    </>
  );
}

const InformationsBoxs = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  margin-right: 16px;
  width: auto;
  height: 36px;
  font-size: 12px;
  display: flex;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
`;

const CurrentStatus = styled.div`
  margin-top: 24px;
  width: 1200px;
  height: 36px;
  display: flex;
`;

const Title = styled.div`
  width: 100px;
  height: 36px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-right: 111px;
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

InformationBox.propTypes = {
  state: PropTypes.arrayOf(PropTypes.string).isRequired,
  mbti: PropTypes.string.isRequired,
  filed: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InformationBox;
