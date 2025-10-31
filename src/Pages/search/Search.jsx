import React, { useState } from "react";

const API_KEY = "YOUR_YOUTUBE_API_KEY";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch() {
    if (!query) return;

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}`
      );
      const data = await res.json();
      setResults(data.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen p-6">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 rounded-lg bg-[#1f1f1f] outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-6">
        {results.map((video) => (
          <div
            key={video.id.videoId}
            className="flex gap-4 hover:bg-[#1f1f1f] p-3 rounded-xl transition-all"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-64 h-40 object-cover rounded-xl"
            />
            <div>
              <h2 className="text-xl font-semibold">{video.snippet.title}</h2>
              <p className="text-gray-400">{video.snippet.channelTitle}</p>
              <p className="text-gray-500 text-sm mt-1">
                {video.snippet.description.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
