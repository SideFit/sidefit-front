/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const HiddenStore = createContext();

export function HiddenStoreProvider({ children }) {
  const [titleContent, setTitleContent] = useState('');
  const [titleHidden, setTitleHidden] = useState('');
  const onChangeTitleContent = e => {
    setTitleContent(e.target.value);
  };

  const [type, setType] = useState();
  const [typeHidden, setTypeHidden] = useState('');
  const handleClickRadioButton = e => {
    setType(e.target.value);
  };

  const [introduceContent, setIntroduceContent] = useState('');
  const [introduceContentHidden, setIntroduceContentHidden] = useState('');
  const onIntroduceContentChange = e => {
    setIntroduceContent(e.target.value);
  };
  const [btnType, setBtnType] = useState('');
  const onClickBtnType = e => {
    setBtnType(e.target.value);
  };
  const [select, setSelect] = useState([]);
  const [selectHidden, setSelectHidden] = useState('');
  const onSelectChangeHandler = e => {
    setSelect(e.target.value);
  };

  const titleCheck = () => {
    return titleContent.length === 0
      ? setTitleHidden(true)
      : setTitleHidden(false);
  };
  const tpyeCheck = () => {
    return type === undefined ? setTypeHidden(true) : setTypeHidden(false);
  };
  const selectCheck = () => {
    return select.length === 0 ? setSelectHidden(true) : setSelectHidden(false);
  };
  const introduceContentCheck = () => {
    return introduceContent.length === 0
      ? setIntroduceContentHidden(true)
      : setIntroduceContentHidden(false);
  };

  const check = () => {
    titleCheck();
    tpyeCheck();
    selectCheck();
    introduceContentCheck();
  };

  // INFORMATIONTWO STATE
  const [selected, setSelected] = useState('기획');

  const [Recruitments, setRecruitment] = useState([]);
  const [RecruitmentsHidden, setRecruitmentHidden] = useState('');

  const [inputs, setInputs] = useState({ stack: '' });
  const [stackItem, setStackItem] = useState([]);

  const [tag, setTag] = useState({ stack: '' });
  const [tagItems, setTagItems] = useState([]);

  const [period, setPeriod] = useState('2주');

  const RecruitmentsCheck = () => {
    return Recruitments.length === 0
      ? setRecruitmentHidden(true)
      : setRecruitmentHidden(false);
  };

  // TEAMMEMBERFIND
  const [next, setNext] = useState(true);
  const nextHandler = () => {
    setNext(!next);
  };

  const navigate = useNavigate();
  const SecondPage = () => {
    navigate('/teammemberfind/2');
  };

  const navigate2 = useNavigate();
  const FindTeamMemberPage = () => {
    navigate2('/findTeamMember');
  };

  return (
    <HiddenStore.Provider
      value={{
        period,
        setPeriod,
        nextHandler,
        next,
        tag,
        setTag,
        tagItems,
        setTagItems,
        stackItem,
        setStackItem,
        inputs,
        setInputs,
        FindTeamMemberPage,
        onSelectChangeHandler,
        SecondPage,
        selected,
        setSelected,
        Recruitments,
        setRecruitment,
        RecruitmentsHidden,
        RecruitmentsCheck,
        check,
        titleHidden,
        typeHidden,
        introduceContentHidden,
        selectHidden,
        titleContent,
        type,
        introduceContent,
        btnType,
        select,
        setSelect,
        titleCheck,
        tpyeCheck,
        selectCheck,
        introduceContentCheck,
        onChangeTitleContent,
        handleClickRadioButton,
        onIntroduceContentChange,
        onClickBtnType,
      }}
    >
      {children}
    </HiddenStore.Provider>
  );
}

HiddenStoreProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
export default HiddenStore;
