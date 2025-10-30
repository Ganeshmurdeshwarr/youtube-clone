import React from "react";
import { SiYoutubemusic } from "react-icons/si";

const YouTubeMusic = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-[80vh] md:ml-20 overflow-x-hidden">
      <div className="flex items-center gap-3 mb-6">
        <SiYoutubemusic className="text-red-500 text-6xl animate-bounce" />
        <h2 className="text-4xl font-bold">YouTube Music</h2>
      </div>

      <p className="text-lg text-gray-400 animate-pulse">
        🎧 Feature coming soon... Enjoy the rhythm of updates!
      </p>

      <div className="mt-10 flex gap-6 opacity-70 animate-pulse">
        <div className="w-28 h-28 md:w-48 md:h-48 bg-gray-800 rounded-full"></div>
        <div className="w-28 h-28 md:w-48 md:h-48 bg-gray-800 rounded-full"></div>
        <div className="w-28 h-28 md:w-48 md:h-48 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default YouTubeMusic;
