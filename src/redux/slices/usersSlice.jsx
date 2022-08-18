import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import * as usersApi from '../../api/users';
import axios from 'axios';

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async () => {
    const response = await axios
      .get('http://localhost:4000/users')
      .then(res => {
        console.log(res.data);
        return response.data;
      });
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: { email: '', password: '' }, loading: false },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [fetchUserById.pending]: state => {
      state.loding = true;
    },
    [fetchUserById.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.loding = false;
    },
    [fetchUserById.rejected]: (state, action) => {
      state.loding = false;
      state.error = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
