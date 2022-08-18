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

export function WarringTextTitle({ top, left, warringName }) {
  const { titleHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginLeft: left, marginTop: top }}>
      <HomeContainer className={titleHidden ? 'WarringOn' : 'WarringHidden'}>
        <WarringImage />
        <WaringText>{warringName}</WaringText>
      </HomeContainer>
    </div>
  );
}

export function WarringTextType({ top, left, warringName }) {
  const { typeHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginLeft: left, marginTop: top }}>
      <HomeContainer className={typeHidden ? 'WarringOn' : 'WarringHidden'}>
        <WarringImage />
        <WaringText>{warringName}</WaringText>
      </HomeContainer>
    </div>
  );
}

export function WarringTextSelect({ top, left, warringName }) {
  const { selectHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginLeft: left, marginTop: top }}>
      <HomeContainer className={selectHidden ? 'WarringOn' : 'WarringHidden'}>
        <WarringImage />
        <WaringText>{warringName}</WaringText>
      </HomeContainer>
    </div>
  );
}

export function WarringTextIntroduce({ top, left, warringName }) {
  const { introduceContentHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginLeft: left, marginTop: top }}>
      <HomeContainer
        className={introduceContentHidden ? 'WarringOn' : 'WarringHidden'}
      >
        <WarringImage />
        <WaringText>{warringName}</WaringText>
      </HomeContainer>
    </div>
  );
}

export function WarringTextRecruitment({ warringName }) {
  const { RecruitmentsHidden } = useContext(HiddenStore);

  return (
    <div style={{ marginLeft: 480, marginTop: -35 }}>
      <HomeContainer
        className={RecruitmentsHidden ? 'WarringOn' : 'WarringHidden'}
      >
        <WarringImage />
        <WaringText>{warringName}</WaringText>
      </HomeContainer>
    </div>
  );
}

WarringTextRecruitment.propTypes = {
  warringName: PropTypes.string.isRequired,
};

WarringTextTitle.propTypes = {
  warringName: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
};

WarringTextType.propTypes = {
  warringName: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
};

WarringTextSelect.propTypes = {
  warringName: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
};

WarringTextIntroduce.propTypes = {
  warringName: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
};
