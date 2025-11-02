import React, { useState } from "react";
import youtube_logo from "../../assets/youtube_icon.png";
import profile_pic from "../../assets/profile_pic.jpg";

import { FaBars, FaMicrophone } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({ setOpenSideBar }) => {

   const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
  e.preventDefault(); // 🧠 Prevents page reload
  if (!query.trim()) return;
  navigate(`/search?q=${encodeURIComponent(query)}`);
};



  return (
    <header className="fixed top-0 gap-x-4 md:gap-x-2 bg-[#0f0f0f] opacity-98 z-20  w-full flex md:justify-between sm:justify-between justify-between px-3 md:px-6 py-3 items-center  ">
      <div className=" flex  gap-x-5 items-center  md:mr-0 ">
        <FaBars
          onClick={() => setOpenSideBar((prev) => !prev)}
          className="w-6 h-6   md:w-8 md:h-8 cursor-pointer opacity-80 transition"
        />
        <img
          className="w-10 h-7 md:w-10 md:h-8 rounded-[10px] md:rounded-xl"
          src={youtube_logo}
          alt="youtube logo"
        />
      </div>

       <form onSubmit={handleSearch} className="border-2  flex justify-between items-center px-2 py-2 md:px-0 md:py-0 outline-0  md:w-[40%] lg:w-[50%] md:border-2 border-[#2e2e2e] rounded-4xl  md:bg-[#121417]">
        <input
          type="text  "
          placeholder="Search"
          className="border-0 outline-0 w-40 sm:w-full md:w-full  md:px-2 md:py-3 md:rounded-l-4xl md:pl-6 md:border-0"
           value={query}
        onChange={(e) => setQuery(e.target.value)}
      
        />
        <button
          type="submit "
          className="md:bg-[#2e2e2e] md:px-2  md:py-3 rounded-r-4xl  md:border-0 outline-0  "
        >
          <AiOutlineSearch className="h-6 w-6 md:rounded-r-4xl md:mx-2" />
        </button>  
 
      </form>
     

      
     


      <div className="flex  items-center gap-x-5 w-fit ">
        <div className="hidden md:flex items-center gap-x-2 text-md font-bold md:text-xl  back-color px-3 py-2 lg:px-4  rounded-4xl  ">
          <AiOutlinePlus className=" w-6 h-6  lg:w-8 lg:h-8" />
          Create
        </div>
        <MdNotifications className="hidden md:block w-8 h-8" />
        <img
          className="w-8 h-8 md:w-10 md:h-10 rounded-4xl cursor-pointer hover:opacity-90 transition"
          src={profile_pic}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
