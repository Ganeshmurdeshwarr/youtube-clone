import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const YourCourse = () => {
  return (
    <div className="text-white mt-12 md:mt-20 md:ml-14 md:pl-2 pt-4">
      {/* Page Title */}
      <h2 className="text-4xl font-bold mb-6">Your Courses</h2>

      {/* Filter Tabs */}
      <div className="flex items-center gap-x-3 flex-wrap mb-8">
        {["All", "Videos", "Shorts", "Music"].map((tab, i) => (
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

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <FaGraduationCap className="text-6xl text-gray-500 mb-4 animate-bounce" />
        <h3 className="text-2xl font-semibold mb-2">
          Start creating your learning journey
        </h3>
        <p className="text-gray-400 mb-6">
          Upload or curate educational videos to organize your courses.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition duration-300">
          Create Course
        </button>
      </div>
    </div>
  );
};

export default YourCourse;
