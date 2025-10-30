import React from "react";
import { SiYoutubeshorts } from "react-icons/si";

const Shorts = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-[80vh] md:ml-20 overflow-x-hidden">
      <div className="flex items-center gap-3 mb-6">
        <SiYoutubeshorts className="text-red-500 text-6xl animate-bounce" />
        <h2 className="text-4xl font-bold">YouTube Shorts</h2>
      </div>

      <p className="text-lg text-gray-400 animate-pulse">
        🚧 Feature coming soon... Stay tuned!
      </p>

      <div className="mt-10 flex gap-6 opacity-70 animate-pulse">
        <div className="w-32 h-56 bg-gray-800 rounded-2xl"></div>
        <div className="w-32 h-56 bg-gray-800 rounded-2xl"></div>
        <div className="w-32 h-56 bg-gray-800 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Shorts;
