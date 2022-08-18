import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/usersSlice';
import projectReducer from '../slices/projectSlice';

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
