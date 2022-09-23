import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/usersSlice';
import projectReducer from '../slices/projectSlice';
import profileReducer from '../slices/profileSlice';

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
