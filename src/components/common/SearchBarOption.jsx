import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoIosInformationCircleOutline, IoMdClose } from 'react-icons/io';
import { FiClock } from 'react-icons/fi';
import COLOR from '../../constants/color';

const SearchBarOptionBox = styled.div`
  width: 452px;
  height: 440px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 0px 0px 8px 8px;
  position: absolute;
  top: 40px;
  display: ${props => (props.searchOption ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const SearchBarOptionWrapper = styled.div`
  width: 380px;
  height: 376px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RecommendationTagsBox = styled.div`
  width: 380px;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RecentSearchListBox = styled.div`
  width: 380px;
  height: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TitleBoxWrapper = styled.div`
  width: 380px;
  height: 56px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
`;
const TitleBox = styled.div`
  width: fit-content;
  width: ${props => (props.recentSearchList ? '380px' : 'fit-content')};
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
  p {
    width: 82px;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.25px;
    color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
    cursor: pointer;
  }
`;

const InformationIcon = styled(IoIosInformationCircleOutline)`
  color: ${COLOR.POINT_BLUE};
  margin-left: 6.5px;
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
`;

const TagsWrapper = styled.div`
  width: 380px;
  height: 36px;
  display: flex;
  justify-content: space-evenly;
`;

const TagItem = styled.button`
  width: 78px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.25px;
  color: ${COLOR.TEXT_HIGH_EMPHASIS};
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  border-radius: 4px;
`;

const SearchItemBox = styled.div`
  width: 380px;
  height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemWrapper = styled.div`
  width: 350px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  p {
    width: 250px;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 0.25px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
    /* border: 1px solid red; */
  }
`;

const ClockIcon = styled(FiClock)`
  width: 20px;
  height: 20px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
`;

const CloseIcon = styled(IoMdClose)`
  width: 24px;
  height: 24px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
  cursor: pointer;
`;

function SearchBarOption({ searchOption }) {
  return (
    <SearchBarOptionBox searchOption={searchOption}>
      <SearchBarOptionWrapper>
        <RecommendationTagsBox>
          <TitleBoxWrapper>
            <TitleBox>
              <h3>추천태그로 검색해보세요</h3>
              <InformationIcon />
            </TitleBox>
          </TitleBoxWrapper>
          <TagsWrapper>
            <TagItem>커뮤니티</TagItem>
            <TagItem>포트폴리오</TagItem>
            <TagItem>메타버스</TagItem>
            <TagItem>2달</TagItem>
          </TagsWrapper>
        </RecommendationTagsBox>
        <RecentSearchListBox>
          <TitleBoxWrapper>
            <TitleBox recentSearchList>
              <h3>최근 검색 목록</h3>
              <p>전체삭제</p>
            </TitleBox>
          </TitleBoxWrapper>
          <SearchItemBox>
            <ItemWrapper>
              <ClockIcon />
              <p>프론트엔드</p>
              <CloseIcon />
            </ItemWrapper>
            <ItemWrapper>
              <ClockIcon />
              <p>UX디자인</p>
              <CloseIcon />
            </ItemWrapper>
            <ItemWrapper>
              <ClockIcon />
              <p>단기프로젝트</p>
              <CloseIcon />
            </ItemWrapper>
            <ItemWrapper>
              <ClockIcon />
              <p>포트폴리오</p>
              <CloseIcon />
            </ItemWrapper>
          </SearchItemBox>
        </RecentSearchListBox>
      </SearchBarOptionWrapper>
    </SearchBarOptionBox>
  );
}

SearchBarOption.propTypes = {
  searchOption: PropTypes.bool.isRequired,
};

export default SearchBarOption;
