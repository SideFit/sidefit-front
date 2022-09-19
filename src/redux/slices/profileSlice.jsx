import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfileLists = createAsyncThunk(
  'project/fetchProfile',
  async () => {
    const result = await axios.get('http://localhost:4000/profile');
    console.log(result.data);
    return result.data;
  },
);

const initialState = {
  lodaing: false,
  profileLists: null,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfileSuccess(state, action) {
      state.profileLists = action.payload;
      state.loading = false;
    },
  },
  extraReducers: {
    [fetchProfileLists.pending]: state => {
      state.lodaing = true;
    },
    [fetchProfileLists.fulfilled]: (state, action) => {
      state.profileLists = action.payload;
      state.loading = false;
    },
    [fetchProfileLists.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { fetchProfileSuccess } = profileSlice.actions;
export default profileSlice.reducer;
