import React, { useState } from "react";

const playlists = [
  {
    id: 1,
    name: "JavaScript Mastery",
    videos: "3 videos",
    thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
    videoList: [
      {
        id: "vid1",
        title: "Learn JavaScript in 1 Hour",
        thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
      },
      {
        id: "vid2",
        title: "JavaScript ES6 Crash Course",
        thumbnail: "https://i.ytimg.com/vi/NCwa_xi0Uuc/hqdefault.jpg",
      },
      {
        id: "vid3",
        title: "DOM Manipulation Tutorial",
        thumbnail: "https://i.ytimg.com/vi/0ik6X4DJKCc/hqdefault.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "React Projects Playlist",
    videos: "3 videos",
    thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg",
    videoList: [
      {
        id: "vid4",
        title: "React Todo App",
        thumbnail: "https://i.ytimg.com/vi/E1E08i2UJGI/hqdefault.jpg",
      },
      {
        id: "vid5",
        title: "Netflix Clone in React",
        thumbnail: "https://i.ytimg.com/vi/ATz8wg6sg30/hqdefault.jpg",
      },
      {
        id: "vid6",
        title: "React Hooks Explained",
        thumbnail: "https://i.ytimg.com/vi/f687hBjwFcM/hqdefault.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Web Dev Crash Course",
    videos: "3 videos",
    thumbnail: "https://i.ytimg.com/vi/Zftx68K-1D4/hqdefault.jpg",
    videoList: [
      {
        id: "vid7",
        title: "HTML + CSS + JS in 1 Video",
        thumbnail: "https://i.ytimg.com/vi/3JluqTojuME/hqdefault.jpg",
      },
      {
        id: "vid8",
        title: "Responsive Design Basics",
        thumbnail: "https://i.ytimg.com/vi/srvUrASNj0s/hqdefault.jpg",
      },
      {
        id: "vid9",
        title: "Web Hosting & Deployment",
        thumbnail: "https://i.ytimg.com/vi/QyFcl_Fba-k/hqdefault.jpg",
      },
    ],
  },
];

const Playlist = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handleSelect = (playlist) => {
    setSelectedPlaylist(
      selectedPlaylist?.id === playlist.id ? null : playlist
    );
  };

  return (
    <div className="text-white mt-12 md:mt-20 md:ml-14 md:pl-2 pt-4">
      <h2 className="text-4xl font-bold mb-6">Playlists</h2>

      {/* Filter Tabs */}
      <div className="flex items-center gap-x-3 gap-y-3 flex-wrap mb-8">
        {["A-Z", "Playlists", "Courses", "Owned", "Saved"].map((tab, i) => (
          <button
            key={i}
            className={`py-1.5 px-4 rounded-full font-medium ${
              i === 0
                ? "bg-white text-black"
                : "bg-[#2e2e2e] hover:bg-[#3b3b3b] text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Playlist Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => handleSelect(playlist)}
            className={`bg-[#181818] rounded-2xl overflow-hidden hover:bg-[#222] transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
              selectedPlaylist?.id === playlist.id ? "ring-2 ring-gray-50-500" : ""
            }`}
          >
            <img
              src={playlist.thumbnail}
              alt={playlist.name}
              className="w-full h-44 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{playlist.name}</h3>
              <p className="text-sm text-gray-400">{playlist.videos}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Playlist Videos */}
      {selectedPlaylist && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
            {selectedPlaylist.name} — Videos
          </h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {selectedPlaylist.videoList.map((video) => (
              <div
                key={video.id}
                className="bg-[#181818] rounded-xl overflow-hidden hover:bg-[#252525] transition-all duration-300"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-2">
                  <p className="text-sm font-semibold">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlist;
