import React, { useContext, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styled from 'styled-components';
import ModalPortal from '../../components/loginAndSignup/ModalPortals';
import ButtonStore from '../../components/profileChange/ButtonStore';
import ImageModalFrame from './ImageModalFrame';

const ImageChangeDropdownBox = styled.div`
  width: 200px;
  height: 140px;
  display: flex;
  margin-left: 36px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
  z-index: 30;
  position: relative;
`;

const SelectBox = styled.div`
  width: 155px;
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -1.5px;
  color: rgba(255, 255, 255, 0.6);
`;

const ArrowIcon = styled(RiArrowDownSLine)`
  margin-left: 175px;
  position: absolute;
  color: white;
  width: 24px;
  height: 24px;
`;

const BoxLine = styled.div`
  width: 200px;
  height: 1px;
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.38);
`;

const DropdownItemBox = styled.ul`
  background: #121a26;
  width: 200px;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  position: absolute;
  top: 35px;
`;

const DropdownItem = styled.li`
  display: flex;
  letter-spacing: -1.5px;
  color: rgba(255, 255, 255, 0.6);
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  padding-left: 15px;
  &:hover {
    background: #448aff;
    color: white;
  }
`;

function ImageChangeButton() {
  const [toggle, setToggle] = useState(false);
  const [imageChange, setImageChange] = useState('사진변경');

  const imageItem = [{ name: '이미지 업로드' }, { name: '삭제' }];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const { onClickImageChange, imageModalOpen, imageModal } =
    useContext(ButtonStore);

  return (
    <ImageChangeDropdownBox>
      <SelectBox onClick={handleToggle}>
        {imageChange}
        <ArrowIcon />
      </SelectBox>
      <BoxLine />
      {toggle && (
        <DropdownItemBox>
          {imageItem.map(item => (
            <DropdownItem
              onClick={() => {
                handleToggle();
                setImageChange(item.name);
                return item.name === '이미지 업로드'
                  ? onClickImageChange()
                  : imageModalOpen();
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownItemBox>
      )}
      <ModalPortal>
        {imageModal && <ImageModalFrame open={imageModal} />}
      </ModalPortal>
    </ImageChangeDropdownBox>
  );
}

export default ImageChangeButton;
