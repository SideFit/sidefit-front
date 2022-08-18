/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import profileImage from '../../images/profileImage.png';

const ButtonStore = createContext();

export function ButtonStoreProvider({ children }) {
  const [select, setSelect] = useState([]);

  const imageInput = useRef();
  const onClickImageChange = () => {
    imageInput.current.click();
  };
  const [imageModal, setImageModal] = useState(false);
  const imageModalOpen = () => {
    setImageModal(!imageModal);
    document.body.style.overflow = 'hidden';
  };

  const ModalChange = () => {
    setImageModal(!imageModal);
    document.body.style.overflow = 'unset';
  };

  URL.revokeObjectURL(profileImage);
  const [images, setImages] = useState({
    image_file: '',
    preview_URL: profileImage,
  });

  const deleteImage = () => {
    // createObjectURL()을 통해 생성한 기존 URL을 폐기
    URL.revokeObjectURL(images.preview_URL);
    setImages({
      image_file: '',
      preview_URL: profileImage,
    });
    setImageModal(!imageModal);
    document.body.style.overflow = 'unset';
  };

  return (
    <ButtonStore.Provider
      value={{
        images,
        setImages,
        deleteImage,
        select,
        setSelect,
        imageInput,
        onClickImageChange,
        imageModal,
        setImageModal,
        imageModalOpen,
        ModalChange,
      }}
    >
      {children}
    </ButtonStore.Provider>
  );
}

ButtonStoreProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
export default ButtonStore;
