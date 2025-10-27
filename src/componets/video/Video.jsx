import React from "react";
import { IoMdMore } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";

const Video = ({ item }) => {
  const formatViews = (view) => {
    const num = Number(view);
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000_000).toFixed(1) + "k";
    if (num < 1_000) return num;
    return num;
  };

  function timeAgo(publisheaAt) {
    const now = new Date();
    const publishedDate = new Date(publisheaAt);
    const seconds = Math.floor((now - publishedDate) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count > 0)
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }

    return "Just now";
  }

  function formatDuration(isoDuration){
     
    const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours =(match[1]|| '').replace('H', '') || 0;
    const minutes =(match[2]|| '').replace('M', '') || 0;
    const seconds =(match[3]|| '').replace('S', '') || 0;
    return hours> 0
    ? `${hours}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2, "0")}`:`${minutes}:${String(seconds).padStart(2, "0")}`
  }

  return (
    <div className="relative z-10  rounded-2xl text-white hover:bg-[#2e2e2e] transition-all duration-500 p-2  ">
      <img
        className=" w-full  h-42 object-cover  rounded-2xl "
        src={item.snippet.thumbnails.high.url}
        alt=""
      />
      <h2 className="absolute right-3 top-[53%] md:top-[48%] bg-black px-1 rounded-[5px]">
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
