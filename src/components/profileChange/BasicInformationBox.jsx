import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import DutyDropdown from '../../elements/profileChange/DutyDropdown';
import ImageChangeButton from '../../elements/profileChange/ImageChangeButton';
import ButtonStore from './ButtonStore';

const HomeContainer = styled.div`
  width: 1200px;
  height: 765px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 24px;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 1109px;
  font-weight: 700;
  font-size: 24.1px;
  line-height: 36px;
  margin: 42px 0px 0px 67px;
`;

const Line = styled.div`
  margin: 13px 0px 56px 67px;
  width: 1066px;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
`;

const Subheading = styled.div`
  margin: 0px 0px 0px 67px;
  width: 114px;
  height: 28px;
  font-weight: 600;
  font-size: 17.5px;
  line-height: 28px;
  letter-spacing: -0.5px;
`;

// const ProfileImage = styled.img.attrs({
//   src: `${profileImage}`,
//   alt: 'profileImage',
// })`
//   width: 148px;
//   height: 148px;
//   margin: 0px 0px 0px 128px;
//   cursor: pointer;
// `;

const IntroduceBox = styled.textarea`
  background: #121a26;
  border-radius: 8px;
  margin-left: 128px;
  width: 721px;
  height: 100px;
  color: white;
  resize: none;
  border: none;
  outline: none;
  overflow: hidden;
  padding: 22px 32px;
`;

const TagBox = styled.input`
  background: #121a26;
  border-radius: 8px;
  margin-left: 128px;
  width: 721px;
  height: 65px;
  resize: none;
  border: none;
  outline: none;
  overflow: hidden;
  padding: 24px 32px;
  color: #3ea6ff;
  ::placeholder {
    color: #3ea6ff;
  }
`;

function BasicInformationBox() {
  const { imageInput, images, setImages } = useContext(ButtonStore);

  // const inputRef = useRef();
  const saveImage = e => {
    if (e.target.files[0]) {
      // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(images.preview_URL);
      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImages(() => ({
        image_file: e.target.files[0],
        preview_URL: previewURL,
      }));
    }
  };

  useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      URL.revokeObjectURL(images.preview_URL);
    };
  }, []);

  return (
    <HomeContainer>
      <Title>기본 정보</Title>
      <Line />
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 72 }}>
        <Subheading>프로필사진</Subheading>
        <input
          type='file'
          accept='image/*'
          onChange={saveImage}
          style={{ display: 'none' }}
          ref={imageInput}
        />
        <img
          src={images.preview_URL}
          alt=''
          style={{ width: 148, height: 148, marginLeft: 128, outline: 'none' }}
        />
        <ImageChangeButton />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 80 }}>
        <Subheading>직무</Subheading>
        <DutyDropdown />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 50 }}>
        <Subheading style={{ marginTop: 10 }}>한 줄 자기소개</Subheading>
        <IntroduceBox
          maxLength={100}
          placeholder='새롭고 다양한 시도를 좋아합니다.'
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Subheading style={{ marginTop: 10 }}>태그</Subheading>
        <TagBox placeholder='#포트폴리오용' />
      </div>
    </HomeContainer>
  );
}

export default BasicInformationBox;
