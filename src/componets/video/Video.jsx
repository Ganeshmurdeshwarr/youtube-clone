import React from "react";
import { IoMdMore } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";
import {formatDuration, formatViews, timeAgo} from '../../utility/helperFunctions'

const Video = ({ item }) => {

  

  console.log(item)
  return (
    <div  className="relative z-10  rounded-2xl text-white hover:bg-[#2e2e2e] transition-all duration-500 p-2  ">
      <img
        className=" w-full  h-42 object-cover  rounded-2xl "
        src={item.snippet.thumbnails.high.url}
        alt=""
      />
      <h2 className="absolute right-3 top-[48%] md:top-[48%] bg-black px-1 rounded-[5px]">
      {formatDuration(item.contentDetails.duration)}
      </h2>
      <div className=" mt-4 flex gap-x-4 ">
        <img className="w-10 h-10 rounded-4xl" src={item.channelDetails
.snippet.thumbnails.high.url} alt="" />
        <div>
          <h2 className="videoTitle">{item.snippet.title}</h2>
          <div className="flex gap-x-2 items-center">
            <h2 className="text-gray-400">{item.snippet.channelTitle} </h2>
            <span>
              <HiCheckCircle />
            </span>
          </div>

          <div className="text-gray-400">
            <span>{formatViews(item.statistics.viewCount)} views </span>
            <span>{timeAgo(item.snippet.publishedAt)}</span>
          </div>
        </div>
        <IoMdMore className=" h-10 w-10 block" />
      </div>
    </div>
  );
};

export default Video;
