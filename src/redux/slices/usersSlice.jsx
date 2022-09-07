import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import * as usersApi from '../../api/users';
import { Cookies } from 'react-cookie';
import axios from 'axios';

const cookies = new Cookies();

export const loginUserByEmail = createAsyncThunk(
  'user/loginUserByEmail',
  async (userInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://3.39.135.44:8080/api/auth/login',
        userInfo,
      );
      console.log(response);
      cookies.set('accessToken', response.data.result.accessToken, {
        path: '/',
      });
      console.log(cookies);
      return response.data.result.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const emailDuplicationCheck = createAsyncThunk(
  'user/emailDuplicationCheck',
  async emailAddress => {
    const response = await axios.post(
      'http://3.39.135.44:8080/api/auth/email/check',
      emailAddress,
    );
    console.log(response);
    return response.data.success;
  },
);

export const nicknameDuplicationCheck = createAsyncThunk(
  'user/nicknameDuplicationCheck',
  async nickname => {
    const response = await axios.post(
      'http://3.39.135.44:8080/api/auth/nickname/check',
      nickname,
    );
    console.log(response);
    return response.data;
  },
);

export const sendAuthLinkByEmail = createAsyncThunk(
  'user/sendAuthLinkByEmail',
  async userEmail => {
    const response = await axios.post(
      'http://3.39.135.44:8080/api/auth/email',
      userEmail,
    );
    console.log(response);
    return response.data;
  },
);

const initialState = {
  user: null,
  isLogin: false,
  error: null,
  token: null,
  emailPossible: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
      state.error = null;
    },
    setErrorEmpty: state => {
      state.error = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setDuplicationEmpty: state => {
      state.emailPossible = null;
    },
  },
  extraReducers: {
    [loginUserByEmail.pending]: state => {
      state.isLogin = false;
    },
    [loginUserByEmail.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.isLogin = true;
      state.error = null;
      state.token = action.payload.accessToken;
    },
    [loginUserByEmail.rejected]: (state, action) => {
      state.isLogin = false;
      if (action.payload) {
        state.error = action.payload;
        console.log(action.payload);
      } else {
        state.error = action.error.message;
        console.log(action.error.message);
      }
    },
    [emailDuplicationCheck.pending]: state => {
      state.isLogin = false;
    },
    [emailDuplicationCheck.fulfilled]: (state, action) => {
      state.emailPossible = action.payload;
      state.error = null;
    },
    [emailDuplicationCheck.rejected]: state => {
      state.isLogin = false;
    },
  },
});

export const { loginSuccess, setErrorEmpty, setToken, setDuplicationEmpty } =
  userSlice.actions;
export default userSlice.reducer;
