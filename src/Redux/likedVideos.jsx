import { createSlice } from "@reduxjs/toolkit";

const likedSlice =createSlice({
    name :'like',
    initialState:{
        likedVideos: [],
        dislikedVideos:[],
    },
    reducers:{
        toggleLiked :(state , action)=>{
           const liked = action.payload;
           const exist =state.likedVideos.find((v)=> v.id === liked.id)

           if(exist){
           state.likedVideos=  state.likedVideos.filter((item)=>  item.id !== liked.id)
            }
            else{
                state.likedVideos.push(liked)
             state.dislikedVideos=   state.dislikedVideos.filter((item)=>  item.id !== liked.id)
           }
        },

        toggleDisLiked :(state, action)=>{
                const disLiked = action.payload;
                const exist = state.dislikedVideos.find((v)=> v.id === disLiked.id)

                if(exist){
                  state.dislikedVideos =  state.dislikedVideos.filter((item)=> item.id !== disLiked.id )
                } else{
                    state.dislikedVideos.push(disLiked);
                  state.likedVideos= state.likedVideos.filter((item)=>item.id !== disLiked.id )
                }

        }
    }
})

export const {toggleLiked, toggleDisLiked} = likedSlice.actions;
export default likedSlice.reducer