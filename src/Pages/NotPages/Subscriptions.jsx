import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mrvideo from '../../assets/sub/mrvideo.png'
import mr from '../../assets/sub/mr.webp'
import carry from '../../assets/sub/carry.jpg'
import carryvideo from '../../assets/sub/carryvideo.jpg'


const Subscriptions = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);


  const catagory =[
     'All','Today','Videos', 'Shorts', 'Live', 'Posts', 'Podcast','Unwatched'
  ]

  useEffect(() => {
    // Fake video + channel data (with working image URLs)
    const fakeVideos = [
      {
        id: { videoId: "1" },
        snippet: {
          title: "MrBeast - I Gave $500,000 To Random People!",
          channelTitle: "MrBeast",
          channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
          thumbnails: {
            high: {
              url: mrvideo ,
            },
          },
        },
        channelThumbnail:
          mr,
      },
      {
        id: { videoId: "2" },
        snippet: {
          title: "CarryMinati Roast 2025 🔥",
          channelTitle: "CarryMinati",
          channelId: "UC295-Dw_tDNtZXFeAPAW6Aw",
          thumbnails: {
            high: {
              url: carryvideo,
            },
          },
        },
        channelThumbnail:
          carry,
      },
      {
        id: { videoId: "3" },
        snippet: {
          title: "BTS (방탄소년단) 'Dynamite' Official MV",
          channelTitle: "HYBE LABELS",
          channelId: "UC3IZKseVpdzPSBaWxBxundA",
          thumbnails: {
            high: {
              url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
            },
          },
        },
        channelThumbnail:
          "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=200",
      },
    ];

    setVideos(fakeVideos);
  }, []);

  return (
    <div className="py-4 mt-10 md:pl-14">
      <div className="flex  items-center gap-x-2  overflow-x-auto pt-6 mb-4">
        {catagory.map((item, id)=>{
          return <div className="bg-[#2e2e2e] px-6 py-2 rounded-2xl">{item}</div>
        })}
      </div>
  
    <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3">

      {videos.map((video) => (
        <div
          key={video.id.videoId}
          className="rounded-2xl bg-[#181818] overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
          onClick={() => navigate(`/player/${video.id.videoId}`)}
        >
          {/* Video Thumbnail */}
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            className="w-full aspect-video object-cover rounded-t-2xl"
          />

          {/* Channel & Details */}
          <div className="p-3 flex gap-3 items-start">
            <img
              src={video.channelThumbnail}
              alt={video.snippet.channelTitle}
              className="w-9 h-9 rounded-full object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png")
              }
            />
            <div>
              <h3 className="font-semibold text-sm text-white mb-1 line-clamp-2">
                {video.snippet.title}
              </h3>
              <p className="text-xs text-gray-400">
                {video.snippet.channelTitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Subscriptions;
