import React, { useEffect, useState } from "react";
import profile from "../../assets/profile_pic.jpg";
import thum from "../../assets/youtub_thum.jpg";
import bts from "../../assets/player/bts.jpg";
import carry from "../../assets/player/carry.jpg";
import hotel from "../../assets/player/hotel.jpg";
import react from "../../assets/player/react.jpg";
import youtube from "../../assets/player/youtube.jpg";

import { PiShareFat } from "react-icons/pi";
import { IoIosHeart, IoIosMore } from "react-icons/io";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos, PlayVideo } from "../../Redux/Playerslice";
import { formatViews, timeAgo } from "../../utility/helperFunctions";
import { toggleDisLiked, toggleLiked } from "../../Redux/likedVideos";
import { FaCut } from "react-icons/fa";
import { CiBookmark, CiFlag1 } from "react-icons/ci";
import Video from "../../componets/video/Video";

const MY_KEY = import.meta.env.VITE_MY_API_KEY;


const Player = ({ openSidBar }) => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, relatedVideos, loading, error } = useSelector(
    (state) => state.playerVideo
  );
  const { likedVideos, dislikedVideos } = useSelector(
    (state) => state.likedVideos
  );

  const isLiked = likedVideos.some((item) => item.id === video.video.id);
  const isDisLiked = dislikedVideos.some((item) => item.id === video.video.id);

  const [isMore, setIsMore] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handlesubBtn() {
    console.log('hi')
    setIsSubscribed(prev => !prev);
  }

  function handleMoreBtn() {
    setIsMore((prev) => !prev);
  }

  function handleComment() {
    setIsComment(true);
  }
  function handleCommentHide() {
    setIsComment(false);
  }

  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&maxResults=20&key=${MY_KEY}`
      );
      const data = await res.json();
      setComments(data.items);
    }
    getComments();
  }, [videoId]);

  useEffect(() => {
    dispatch(PlayVideo(videoId));
    dispatch(fetchRelatedVideos(videoId));
  }, [videoId, dispatch]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something Went Wrong</p>;
  if (!video || !video.video || !video.channel) return <p>Loading....</p>;

  const recommendedVideos = [
    {
      id: 1,
      thumbnail: hotel,
      title: "24 Hours In World's Most Expensive Hotel",
      channel: "MrBeast",
      views: "42M views",
      timeAgo: "2 weeks ago",
    },
    {
      id: 2,
      thumbnail: bts,
      title: "BTS – New Song Performance (Live Stage)",
      channel: "HYBE LABELS",
      views: "19M views",
      timeAgo: "3 days ago",
    },
    {
      id: 3,
      thumbnail: react,
      title: "React JS Full Crash Course 2025",
      channel: "freeCodeCamp.org",
      views: "1.1M views",
      timeAgo: "1 month ago",
    },
    {
      id: 4,
      thumbnail: carry,
      title: "CarryMinati – Roast On Viral Reels 🔥",
      channel: "CarryMinati",
      views: "8.7M views",
      timeAgo: "5 days ago",
    },
    {
      id: 5,
      thumbnail: youtube,
      title: "10 Tips To Grow On YouTube Fast in 2025!",
      channel: "Ali Abdaal",
      views: "640K views",
      timeAgo: "2 weeks ago",
    },
  ];

  return (
    video?.video &&
    video?.channel && (
      <section
        className={`w-full md:w-fit  lg:flex lg:gap-x-4  mt-10 md:mt-16 pt-2 md:ml-14 ${
          openSidBar ? "lg:ml-48" : "lg:ml-20"
        } `}
      >
        <div className="w-full   ">
        <div className="w-full ">
          <iframe
            className="w-full  aspect-video fixed top-0 mt-14 md:mt-4 md:static z-10 "
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            title="Youtube Video Player"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex gap-x-2 px-2 mt-64   md:mt-6  overflow-y-auto scroll-auto  ">
          <h2>{formatViews(video.video.statistics.viewCount)}</h2>
          <h2>{timeAgo(video.video.snippet.publishedAt)}</h2>
          <div className="whitespace-nowrap max-w-[180px]  w-fit overflow-x-hidden flex-1">
            {video.video.snippet.tags?.map((item, idx) => {
              return (
                <span key={idx} className="ml-2">
                  #{item}
                </span>
              );
            })}
          </div>
          <button>...more</button>
        </div>

        {/* video deatils */}

        <div className="w-full px-2 pt-2 text-white">
          <div className="w-full">
            <h2 className="text-md md:text-2xl font-bold">
              {video.video.snippet.localized.title}
            </h2>
  </div>
            <div className="lg:flex flex-1 justify-between items-center mt-4  ">
              {/* channel details */}
              <div className="flex lg:flex-1 items-center mt-2 md:mt-8 mb-2 md:mb-6  gap-x-4 lg ">
                <img
                  className="w-10 h-10 md:w-14 md:h-14 rounded-4xl"
                  src={video.channel.snippet.thumbnails.high.url}
                  alt=""
                />
                <div className="">
                  <h2 className="text-sm md:text-2xl lg:w-30 font-bold">
                    {" "}
                    {video.channel.snippet.title}
                  </h2>
                  <h2 className="text-sm font-stretch-semi-expandedbold">
                    {formatViews(video.channel.statistics.subscriberCount)}
                  </h2>
                </div>
                <button
                  onClick={handlesubBtn}
                  className={`${
                    isSubscribed ? "bg-red-500" : "bg-white"
                  } text-black px-6 py-2 ml-2 rounded-3xl font-bold h-fit`}
                >
                  Subscribe
                </button>
              </div>
          

            {/* video shares */}

            <div className="w-full lg:flex-1 lg:w-auto flex gap-x-2 mt-4 ">
              <div className="flex">
                <div className="flex items-center gap-x-2 h-fit rounded-2xl bg-[#2e2e2e] px-2 py-1.5  ">
                  <button
                    onClick={() =>
                      dispatch(
                        toggleLiked({
                          id: video.video.id,
                          thumbnails: video.video.snippet.thumbnails.high.url,
                          title: video.video.snippet.title,
                        })
                      )
                    }
                  >
                    {isLiked ? (
                      <AiFillLike className="w-6 h-6" />
                    ) : (
                      <AiOutlineLike className="w-6 h-6" />
                    )}
                  </button>
                  <h2>{formatViews(video.video.statistics.likeCount)}</h2>
                  <div className="w-0.5 bg-white h-4"></div>

                  <button
                    onClick={() =>
                      dispatch(
                        toggleDisLiked({
                          id: video.video.id,
                          thumbnails: video.video.snippet.thumbnails.high.url,
                          title: video.video.snippet.title,
                        })
                      )
                    }
                  >
                    {isDisLiked ? (
                      <AiFillDislike className="w-6 h-6" />
                    ) : (
                      <AiOutlineDislike className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
              <h2 className="flex items-center gap-x-2 h-fit rounded-2xl bg-[#2e2e2e] px-2 py-1.5  ">
                {" "}
                <PiShareFat className="w-6 h-6" />
                share
              </h2>
              <h2 className="flex items-center gap-x-2 h-fit rounded-2xl bg-[#2e2e2e] px-2 py-1.5  ">
                <IoIosHeart className="w-6 h-6 " />
                thanks
              </h2>
              <div
                onClick={handleMoreBtn}
                className="flex relative items-center gap-x-2 h-fit rounded-2xl bg-[#2e2e2e] px-2 py-2  "
              >
                <IoIosMore className="w-4 h-4 rounded-2xl" />

                <div
                  className={` ${
                    isMore ? "block" : "hidden"
                  }    absolute top-10 right-0  w-30 rounded-2xl p-2 bg-[#2e2e2e]  z-10`}
                >
                  <h2 className="flex gap-x-2 items-center mb-1">
                    <FaCut className="w-5 h-5" />
                    Clip
                  </h2>
                  <h2 className="flex gap-x-2 items-center mb-1">
                    <CiBookmark className="w-5 h-5" />
                    Save
                  </h2>
                  <h2 className="flex gap-x-2 items-center">
                    <CiFlag1 className="w-5 h-5" />
                    Report
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* video desciription */}

          <div
            className={`${
              isComment ? "h-auto" : "h-38 p-2 overflow-y-hidden"
            } w-full  mt-10 md:mt-10 rounded-2xl bg-[#2e2e2e] lg:h-auto `}
          >
            <div className="flex justify-between">
              <h2 className="pt-2 pl-2 text-2xl">Comments</h2>
              <p
                onClick={handleComment}
                className={`${
                  isComment ? "hidden" : " block"
                } pt-2 pr-2 text-xl lg:hidden`}
              >
                Click for more
              </p>
            </div>

            {comments.map((item, idx) => {
              return (
                <div key={idx} className="p-1 flex my-4 ">
                  <div className="mr-4">
                    <img
                      className="rounded-4xl"
                      src={
                        item.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg">
                      {item.snippet.topLevelComment.snippet.authorDisplayName}
                    </h2>
                    <div className="mb-4">
                      {item.snippet.topLevelComment.snippet.textDisplay}
                    </div>
                    <div className="flex gap-x-2">
                      <AiOutlineLike className="w-6 h-6" />
                      <p>{item.snippet.topLevelComment.snippet.likeCount}</p>
                      <AiOutlineLike className="w-6 h-6" />

                      <h2 className="ml-10">Replay</h2>
                    </div>
                  </div>
                </div>
              );
            })}
            <h2
              onClick={handleCommentHide}
              className="lg:hidden text-xl font-bold mt-8 text-center bg-[#1e1e2e] py-4"
            >
              Hide comments
            </h2>
          </div>
          
        </div>
        </div>

<h2 className="lg:hidden mt-8 text-white text-2xl font-bold">Recommended videos</h2>
        {/* recommended videos */}
        <div className="mt-6 lg:w-[30%] md:mt-6 rounded-2xl md:grid grid-cols-2 gap-x-4 lg:block">
          {recommendedVideos.map((item, id) => {
            return (
              <div key={id} className="text-white mb-4 ">
                <img
                  className="rounded-2xl w-full"
                  src={item.thumbnail}
                  alt=""
                />
                <h2 className="mt-2 text-xl font-bold ">{item.title}</h2>

                <div className="flex gap-x-8 sm:block">
                <h2>{item.channel} </h2>
                <div className="flex items-center gap-x-2">
                  <h2>{item.views}</h2>
                  <p>{item.timeAgo}</p>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )
  );
};

export default Player;
