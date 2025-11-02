import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const API_KEY = import.meta.env.VITE_MY_API_KEY;

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Extract ?q= from URL
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (!query) return;

    async function fetchVideos() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}`
        );
        const data = await res.json();
        setResults(data.items || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [query]);

  if (loading) return <p className="text-center text-gray-400 mt-10">Loading...</p>;
  console.log(results)

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen p-6 mt-20 md:ml-20">
      <h2 className="text-2xl font-semibold mb-6">
        Search Results for <span className="text-red-500">"{query}"</span>
      </h2>

      <div className="flex flex-col gap-6">
        {results.map((video) => (
          <Link to={`/player/${video.id.videoId}`}
            key={video.id.videoId}
            className="md:flex gap-4 hover:bg-[#1f1f1f] p-3 rounded-xl transition-all"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-full md:w-64 md:h-40 object-cover rounded-xl"
            />
            <div>
              <h2 className="text-lg mt-2 font-semibold">{video.snippet.title}</h2>
              <p className="text-gray-400">{video.snippet.channelTitle}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
