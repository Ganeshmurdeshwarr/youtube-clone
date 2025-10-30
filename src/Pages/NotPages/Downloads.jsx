import React from "react";
import { FaDownload } from "react-icons/fa";

const mockDownloads = [
  {
    id: 1,
    title: "JavaScript Crash Course for Beginners",
    channel: "FreeCodeCamp",
    thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
    size: "420 MB",
    duration: "2:30:10",
  },
  {
    id: 2,
    title: "React JS Tutorial – Full Course for Beginners",
    channel: "Programming with Mosh",
    thumbnail: "https://i.ytimg.com/vi/Dorf8i6lCuk/hqdefault.jpg",
    size: "510 MB",
    duration: "3:10:45",
  },
  {
    id: 3,
    title: "Learn Tailwind CSS in 1 Hour",
    channel: "Traversy Media",
    thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
    size: "270 MB",
    duration: "1:02:31",
  },
];

const Downloads = () => {
  return (
    <div className="text-white mt-12 md:mt-20 md:ml-14 md:pl-2 pt-4">
      <h2 className="text-4xl font-bold mb-6 flex items-center gap-2">
        <FaDownload className="text-blue-400" />
        Downloads
      </h2>

      {mockDownloads.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockDownloads.map((video) => (
            <div
              key={video.id}
              className="bg-[#181818] rounded-xl overflow-hidden hover:bg-[#222] transition duration-300"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full object-cover h-48"
                />
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{video.channel}</p>
                <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
                  <span>{video.size}</span>
                  <button className="text-blue-400 hover:text-blue-500 transition">
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <FaDownload className="text-6xl text-gray-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-semibold mb-2">
            No Downloads Available
          </h3>
          <p className="text-gray-400">
            Videos you download for offline viewing will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Downloads;
