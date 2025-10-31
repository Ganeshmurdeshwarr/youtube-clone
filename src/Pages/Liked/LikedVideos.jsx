import React from "react";

const LikedVideos = () => {
  const likedVideos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1602524817347-d43e3c0c50f8?w=800",
      title: "MrBeast - Surviving 50 Hours In Antarctica",
      channel: "MrBeast",
      views: "120M views",
      timeAgo: "1 month ago",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      title: "BTS - Yet To Come (Official MV)",
      channel: "HYBE LABELS",
      views: "89M views",
      timeAgo: "3 months ago",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?w=800",
      title: "How I Built a Full Stack App in 7 Days",
      channel: "Traversy Media",
      views: "1.2M views",
      timeAgo: "2 weeks ago",
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800",
      title: "CarryMinati - Best Roast Moments Compilation 🔥",
      channel: "CarryMinati",
      views: "9.4M views",
      timeAgo: "2 months ago",
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1603791452906-bb7b3e62f5c1?w=800",
      title: "Top 10 React Projects for 2025",
      channel: "CodeWithHarry",
      views: "720K views",
      timeAgo: "1 week ago",
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1602524817347-d43e3c0c50f8?w=800",
      title: "24 Hours in Dubai with $1,000,000",
      channel: "MrBeast",
      views: "63M views",
      timeAgo: "3 weeks ago",
    },
    {
      id: 7,
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      title: "BTS - Dynamite (Live Performance)",
      channel: "HYBE LABELS",
      views: "55M views",
      timeAgo: "5 months ago",
    },
    {
      id: 8,
      thumbnail: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?w=800",
      title: "Learn JavaScript in 1 Hour (Full Course)",
      channel: "freeCodeCamp.org",
      views: "3.4M views",
      timeAgo: "2 years ago",
    },
    {
      id: 9,
      thumbnail: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800",
      title: "Roasting 2025 Trends - CarryMinati Style",
      channel: "CarryMinati",
      views: "5.1M views",
      timeAgo: "6 days ago",
    },
    {
      id: 10,
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      title: "The Ultimate Productivity Guide for Developers",
      channel: "Ali Abdaal",
      views: "900K views",
      timeAgo: "1 month ago",
    },
  ];

  return (
    <div className="px-4 py-8 mt-10 md:pl-20 text-white">
      <h2 className="text-4xl font-bold mb-6">Liked Videos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {likedVideos.map((video) => (
          <div
            key={video.id}
            className="bg-[#181818] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm mb-1 line-clamp-2">{video.title}</h3>
              <p className="text-xs text-gray-400">{video.channel}</p>
              <div className="flex items-center gap-x-3 text-xs text-gray-400 mt-1">
                <span>{video.views}</span>
                <span>•</span>
                <span>{video.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;
