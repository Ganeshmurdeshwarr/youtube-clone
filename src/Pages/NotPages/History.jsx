import React from "react";

const sampleHistory = [
  {
    id: 1,
    title: "How JavaScript Works Behind the Scenes",
    channel: "Programming Hero",
    thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
    views: "1.5M views",
    time: "2 days ago",
  },
  {
    id: 2,
    title: "Top 10 React Tips for Beginners",
    channel: "CodeWithHarry",
    thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg",
    views: "820K views",
    time: "1 week ago",
  },
  {
    id: 3,
    title: "Understanding Async Await in JavaScript",
    channel: "FreeCodeCamp.org",
    thumbnail: "https://i.ytimg.com/vi/V_Kr9OSfDeU/hqdefault.jpg",
    views: "2.3M views",
    time: "1 month ago",
  },
];

const History = () => {
  return (
    <div className="text-white mt-12 md:mt-20 md:ml-14 md:pl-2 pt-4 rounded-2xl">
      <h2 className="text-4xl font-bold mb-6">Watch History</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {sampleHistory.map((video) => (
          <div key={video.id} className=" p-3 rounded-xl hover:bg-[#252525] transition">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-2xl mb-2 w-full"
            />
            <h3 className="font-semibold text-lg">{video.title}</h3>
            <p className="text-sm text-gray-400">{video.channel}</p>
            <p className="text-sm text-gray-500">
              {video.views} • {video.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
