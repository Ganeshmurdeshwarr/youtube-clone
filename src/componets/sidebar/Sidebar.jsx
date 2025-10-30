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
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({openSidBar,setOpenSideBar}) => {

 const dispatch = useDispatch();
 const navigate = useNavigate()

  const handleLogOut=()=>{
    dispatch(logOutUser())
    navigate('/login')
  }

  return (
    <nav className={`sidebar  h-screen mt-14 md:mt-18 py-4 px-2 mr-8  z-30 bg-[#0f0f0f] transition-all duration-300 fixed  ${ openSidBar ? 'block ':'hidden md:block '}
    ${ openSidBar ? 'open':''}`}>
      <ul onClick={() => setOpenSideBar((prev) => !prev)} className="mb-4">
        <li>
          <Link to="/" className="flex items-center gap-3">
          <BiHome className="w-6 h-6" />
          <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/Shorts" className="flex items-center gap-3">
         <SiYoutubeshorts className="w-6 h-6"  />
          <span>Shorts</span>
          </Link>
        </li>
        <li>
          <Link to="/Subscriptions" className="flex items-center gap-3">
          <MdOutlineSubscriptions className="w-6 h-6"  />
          <span>Subscriptions</span>
          </Link>
        </li>
     
        <li>
          <Link to="/YouTubeMusic" className="flex items-center gap-3">
          <SiYoutubemusic className="w-6 h-6" />
          <span>YouTube Music</span>
          </Link>
        </li>
      </ul>

      <hr />


      <ul onClick={() => setOpenSideBar((prev) => !prev)} className="mb-4 mt-2">
        <li>
          <span>You &gt;</span>
        </li>
        <li>
          <Link to="/history" className="flex items-center gap-3">
          <FaRegClock className="w-6 h-6"  />
           <span>History</span>
          </Link>
        </li>
        <li>
          <Link to="/playlist" className="flex items-center gap-3">
          <MdOutlinePlaylistPlay className="w-6 h-6"  />
           <span>Playlists</span>
          </Link>
        </li>
        <li>
          <Link to="/yourvideos" className="flex items-center gap-3">
          <CiYoutube className="w-6 h-6"  />
           <span>Your videos</span>
          </Link>
        </li>
        <li>
          <Link to="/yourCourse" className="flex items-center gap-3">
         <FaRedhat className="w-6 h-6"  />
          <span>Your Courses</span>
          </Link>
        </li>
        <li>
          <Link to="/liked" className="flex items-center gap-3">
          <AiFillLike  className="w-6 h-6" />
           <span>Liked videos</span>
          </Link>
        </li>
        <li>
          <Link to="/downloads" className="flex items-center gap-3">
         <FaDownLong className="w-6 h-6"  />
          <span>Download</span>
          </Link>
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
