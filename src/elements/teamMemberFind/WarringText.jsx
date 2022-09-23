import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import warring from '../../images/warring.png';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 44px 0px 0px -480px;
  &.WarringHidden {
    display: none;
  }
  &.WarringOn {
    display: flex;
  }
`;

const WaringText = styled.div`
  width: auto;
  height: 20px;
  color: #ff5252;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.4px;
  margin-left: 6px;
`;

const WarringImage = styled.img.attrs({
  src: `${warring}`,
  alt: 'warring',
})`
  width: 20px;
  height: 20px;
`;

export function WarringTitle({ text }) {
  const { titleHidden } = useContext(HiddenStore);

  return (
    <div>
      <HomeContainer className={titleHidden ? 'WarringOn' : 'WarringHidden'}>
        <WarringImage />
        <WaringText>{text}</WaringText>
      </HomeContainer>
    </div>
  );
}

export function WarringType({ top, left, text }) {
  const { typeHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginLeft: left, marginTop: top }}>
      <HomeContainer className={typeHidden ? 'WarringOn' : 'WarringHidden'}>
        <WarringImage />
        <WaringText>{text}</WaringText>
      </HomeContainer>
    </div>
  );
}

export function WarringSelect({ left, top, text }) {
  const { selectHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginLeft: left, marginTop: top }}>
      <HomeContainer className={selectHidden ? 'WarringOn' : 'WarringHidden'}>
        <WarringImage />
        <WaringText>{text}</WaringText>
      </HomeContainer>
    </div>
  );
}

export function WarringIntroduce({ top, text }) {
  const { introduceContentHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginTop: top }}>
      <HomeContainer
        className={introduceContentHidden ? 'WarringOn' : 'WarringHidden'}
      >
        <WarringImage />
        <WaringText>{text}</WaringText>
      </HomeContainer>
    </div>
  );
}

export function WarringRecruitment({ text }) {
  const { RecruitmentsHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginLeft: 480, marginTop: -35 }}>
      <HomeContainer
        className={RecruitmentsHidden ? 'WarringOn' : 'WarringHidden'}
      >
        <WarringImage />
        <WaringText>{text}</WaringText>
      </HomeContainer>
    </div>
  );
}

WarringRecruitment.propTypes = {
  text: PropTypes.string.isRequired,
};

WarringTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

WarringType.propTypes = {
  text: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};

WarringSelect.propTypes = {
  text: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};

WarringIntroduce.propTypes = {
  text: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
};
