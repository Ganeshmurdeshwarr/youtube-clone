import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { FaRedhat, FaRegClock } from "react-icons/fa";
import { FaDownLong } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlinePlaylistPlay, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic, SiYoutubeshorts } from "react-icons/si";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = ({openSidBar}) => {

 const dispatch = useDispatch();
 const navigate = useNavigate()

  const handleLogOut=()=>{
    dispatch(logOutUser())
    navigate('/login')
  }

  return (
    <nav className={`sidebar  h-screen mt-14 md:mt-18 py-4 px-2 mr-8  z-30 bg-[#0f0f0f] transition-all duration-300 fixed  ${ openSidBar ? 'block ':'hidden md:block '}
    ${ openSidBar ? 'open':''}`}>
      <ul className="mb-4">
        <li>
          <BiHome className="w-6 h-6" />
          <span>Home</span>
        </li>
        <li>
         <SiYoutubeshorts className="w-6 h-6"  />
          <span>Shorts</span>
        </li>
        <li>
          <MdOutlineSubscriptions className="w-6 h-6"  />
          <span>Subscriptions</span>
        </li>
     
        <li>
          <SiYoutubemusic className="w-6 h-6" />
          <span>YouTube Music</span>
        </li>
      </ul>

      <hr />


      <ul className="mb-4 mt-2">
        <li>
          <span>You &gt;</span>
        </li>
        <li>
          <FaRegClock className="w-6 h-6"  />
           <span>History</span>
        </li>
        <li>
          <MdOutlinePlaylistPlay className="w-6 h-6"  />
           <span>Home</span>
        </li>
        <li>
          <CiYoutube className="w-6 h-6"  />
           <span>Your videos</span>
        </li>
        <li>
         <FaRedhat className="w-6 h-6"  />
          <span>Your Courses</span>
        </li>
        <li>
          <AiFillLike  className="w-6 h-6" />
           <span>Liked videos</span>
        </li>
        <li>
         <FaDownLong className="w-6 h-6"  />
          <span>Download</span>
        </li>
      </ul>
      <hr />

<ul className="mt-5">
  <li onClick={handleLogOut}><IoMdLogOut   className="w-6 h-6"/>
  <span>Logout</span></li>
</ul>
     
    </nav>
  );
};

export default Sidebar;
