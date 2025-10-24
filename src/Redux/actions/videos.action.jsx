import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getPopularVideos = createAsyncThunk(
    'api/PopularVideos' , async (_,{rejectWithValue})=>{

        try {
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${import.meta.env.VITE_MY_API_KEY}`);
            if(!res.ok) throw new Error('Failed to fetch popular videos');

            const json = await res.json();
            console.log(json.items)
            return json.items
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message)
        }
    }
)


const PopularVideos = createSlice({
    name:'popularVideos',
    initialState:{
    videos: [],
    loading: false,
    error: null,
    },
    reducers:{},
    extraReducers: (builder)=> {
        builder
        .addCase(getPopularVideos.pending, (state )=>{ state.loading = true;})
        .addCase(getPopularVideos.fulfilled, (state ,action)=>{ state.loading = false; state.videos = action.payload})
        .addCase(getPopularVideos.rejected, (state ,action)=>{ state.loading = false; state.error = action.payload})
    }

})

export default PopularVideos.reducer; 