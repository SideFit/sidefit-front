import React, { useState } from 'react';
import styled from 'styled-components';
import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import PortfolioIcon from '../../elements/home/PortfolioIcon';
import NewIcon from '../../elements/home/NewIcon';

const ProjectCardContainer = styled.div`
  width: 273px;
  height: 307px;
`;

const ProjectImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  width: 100%;
  height: 120px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: start;
`;
const IconBox = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProjectInformation = styled.div`
  background: #1f2b3c;
  width: 100%;
  height: 187px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  h2 {
    width: 90%;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    width: 90%;
    font-size: 13px;
    color: grey;
  }

  p:nth-child(2) {
    margin-top: -20px;
  }

  p:nth-child(3) {
    color: lightgrey;
  }

  p:nth-child(3)::after {
    content: '';
    width: 100%;
    display: block;
    border-bottom: 1px solid grey;
    margin-top: 15px;
  }
`;

const RecruitmentStatusAndBookmark = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: lightgrey;
    span {
      color: #3ea6ff;
      font-weight: 500;
    }
  }
`;

const BookmarkButton = styled(RiBookmarkLine)`
  &:hover {
    cursor: pointer;
  }
`;
const BookmarkedButton = styled(RiBookmarkFill)`
  &:hover {
    cursor: pointer;
  }
`;

function ProjectCard({ imageUrl, title, type, field, hashtag, createdDate }) {
  const [iconClicked, setIconClicked] = useState(false);

  const toggleIconClicked = () => {
    setIconClicked(!iconClicked);
  };

  const timeForToday = dateInput => {
    const today = new Date();
    const computeDate = new Date(dateInput);

    const betweenTime = Math.floor(
      (today.getTime() - computeDate.getTime()) / 1000 / 60,
    );
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 7) {
      return `${betweenTimeDay}일전`;
    }

    return `${computeDate.getMonth() + 1}월 ${computeDate.getDate()}일`;
  };
  return (
    <ProjectCardContainer>
      <ProjectImage imageUrl={imageUrl}>
        <IconBox>
          <PortfolioIcon type={type} />
          <NewIcon createdDate={createdDate} />
        </IconBox>
      </ProjectImage>
      <ProjectInformation>
        <h2>{title}</h2>
        <p>
          {field} · {timeForToday(createdDate)}
        </p>
        <p>{hashtag.join(' ')}</p>
        <RecruitmentStatusAndBookmark>
          <p>
            모집완료 <span>1/2</span>
          </p>
          {iconClicked ? (
            <BookmarkedButton onClick={toggleIconClicked} />
          ) : (
            <BookmarkButton onClick={toggleIconClicked} />
          )}
        </RecruitmentStatusAndBookmark>
      </ProjectInformation>
    </ProjectCardContainer>
  );
}

ProjectCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  hashtag: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdDate: PropTypes.string.isRequired,
};

export default ProjectCard;
