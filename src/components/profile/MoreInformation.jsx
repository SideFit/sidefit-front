import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import axios from 'axios';
import { fetchUserByEmail } from '../../redux/slices/usersSlice';
import InformationBox from '../../elements/profile/InformationBox';

function MoreInformation() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  useEffect(() => {
    dispatch(fetchUserByEmail());
    return () => dispatch(fetchUserByEmail());
  }, []);

  // const test = async () => {
  //   const test2 = await axios.get('http://localhost:8080/api/healthcheck');
  //   console.log(test2);
  // };
  return (
    <MoreInformationBox>
      <Information>추가 정보</Information>
      {user &&
        user
          .filter(data => data.id === 1)
          .map(data => (
            <InformationBox
              key={data.id}
              state={data.state}
              mbti={data.mbti}
              filed={data.filed}
              skills={data.skills}
              URL={data.url_link}
            />
          ))}
    </MoreInformationBox>
  );
}
const MoreInformationBox = styled.div`
  width: 1200px;
  height: 395px;
  display: flex;
  flex-direction: column;
`;

const Information = styled.div`
  margin-top: 64px;
  width: 110px;
  height: 36px;
  letter-spacing: -2px;
  font-size: 24px;
  font-weight: 700;
`;
export default MoreInformation;
