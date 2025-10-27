import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import HomeVideoReducer from './HomeVideoSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    homeVideo: HomeVideoReducer
  },
});
