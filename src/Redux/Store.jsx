import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import popularVideos from './actions/videos.action'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    popularVideos:popularVideos
  },
});
