import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import * as usersApi from '../../api/users';
import { Cookies } from 'react-cookie';
import axios from 'axios';

export const fetchUserByEmail = createAsyncThunk(
  'user/fetchUserByEmail',
  async () => {
    const response = await axios.get('http://localhost:4000/users');
    // console.log(response.data);
    return response.data;
  },
);
const cookies = new Cookies();
export const loginUserByEmail = createAsyncThunk(
  'user/loginUserByEmail',
  async (userInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/login',
        userInfo,
      );
      console.log(response);
      cookies.set('accessToken', response.data.accessToken, {
        path: '/',
      });
      console.log(cookies);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  user: null,
  isLogin: false,
  error: null,
  token: null,
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
  },
  extraReducers: {
    [fetchUserByEmail.pending]: state => {
      state.isLogin = true;
    },
    [fetchUserByEmail.fulfilled]: (state, action) => {
      state.user = action.payload;
      // console.log(state.user);
      state.isLogin = false;
    },
    [fetchUserByEmail.rejected]: (state, action) => {
      state.isLogin = false;
      state.error = action.payload;
    },
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
  },
});

export const { loginSuccess, setErrorEmpty, setToken } = userSlice.actions;
export default userSlice.reducer;
