import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const MY_KEY = import.meta.env.VITE_MY_API_KEY ;

export const PlayVideo = createAsyncThunk(
  "player/PlayVideo",
  async (videoId, { rejectWithValue }) => {
    try {
      // Fetch video details
      const videoRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${MY_KEY}`
      );
      const videoData = await videoRes.json();

      // ✅ Safety check for empty or invalid response
      if (!videoData.items || videoData.items.length === 0) {
        return rejectWithValue("No video found for this ID");
      }

      const video = videoData.items[0];
      const channelId = video.snippet?.channelId;

      // ✅ Double-check that channelId exists
      if (!channelId) {
        return rejectWithValue("Channel ID missing in video data");
      }

      // Fetch channel details
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${MY_KEY}`
      );
      const channelData = await channelRes.json();

      if (!channelData.items || channelData.items.length === 0) {
        return rejectWithValue("No channel found for this ID");
      }

      const channel = channelData.items[0];

      return { video, channel };
    } catch (error) {
      console.error("Error in PlayVideo:", error.message);
      return rejectWithValue(error.message);
    }
  }
);


export const fetchRelatedVideos = createAsyncThunk(
  'player/relatedVideos', async(videoId, { rejectWithValue })=>{

    try {
      
      const relatedRes = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=10&key=${MY_KEY}`)
  
      const relatedJson =await relatedRes.json();
      console.log("🔹 Related API Response:", relatedJson); 
       return relatedJson.items
    } catch (error) {
      console.log(error.message)
      return rejectWithValue(error.message);
    }

  }
)



const PlayerSlice = createSlice({
  name: "player",
  initialState: {
    video: null,
    relatedVideos:[],
    loading: false,
    loadingRelated: false,
    error: null,
     errorRelated: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(PlayVideo.pending, (state)=> {state.loading =true})
    .addCase(PlayVideo.fulfilled, (state,action)=> {state.loading =false; state.video = action.payload})
    .addCase(PlayVideo.rejected, (state,action)=>{ state.loading =false ; state.error = action.payload})


    .addCase(fetchRelatedVideos.pending ,(state)=> {state.loadingRelated =true})
    .addCase(fetchRelatedVideos.fulfilled, (state,action)=> {state.loadingRelated =false; state.relatedVideos = action.payload})
    .addCase(fetchRelatedVideos.rejected, (state,action)=>{ state.loadingRelated =false ; state.errorRelated = action.payload})
  },
});


 export default PlayerSlice.reducer 