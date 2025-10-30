import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import HomeVideoReducer from './HomeVideoSlice'
import PlayerVideo from './Playerslice'
import LikedVideos from "./likedVideos"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    homeVideo: HomeVideoReducer,
    playerVideo: PlayerVideo,
    likedVideos: LikedVideos,
  },
});
