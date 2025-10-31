import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const MY_KEY = import.meta.env.VITE_MY_API_KEY;
const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=20&regionCode=IN&key=${MY_KEY}`;

export const addVideoToHome = createAsyncThunk(
  "homeVideo/addVideo",
  async (_, { rejectWithValue }) => {
    try {
      // fetching videos

      const videoRes = await fetch(url);
      const videoData = await videoRes.json();

      if (!videoRes.ok) {
        throw new Error(videoData.error?.message || "failed to fetch Videos");
      }

      // fetching channels data

      const channelIds = [
        ...new Set(videoData.items.map((item) => item.snippet.channelId)),
      ];

      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails&id=${channelIds.join(",")}&key=${MY_KEY}`);

      const channelData = await channelRes.json() || [];

      const mergedVideos = videoData.items.map((item) => {
        const channel = channelData.items.find(
          (channelitem) => channelitem.id === item.snippet.channelId
        );
        return {
          ...item,
          channelDetails : channel || {}
        };
      });

      return mergedVideos;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

const HomeVideoSlice = createSlice({
  name: "homeVideo",
  initialState: {
    videos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addVideoToHome.pending, (state) => {
        state.loading = true;
      })
      .addCase(addVideoToHome.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(addVideoToHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went Wrong";
      });
  },
});

export default HomeVideoSlice.reducer;
