import React, { useEffect, useState } from "react";
import Header from "./componets/header/Header";
import Sidebar from "./componets/sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import LikedVideos from "./Pages/Liked/LikedVideos";
import Shorts from "./Pages/NotPages/Shorts";
import Subscriptions from "./Pages/NotPages/Subscriptions";
import YouTubeMusic from "./Pages/NotPages/YouTubeMusic";
import Downloads from "./Pages/NotPages/Downloads";
import YourCourse from "./Pages/NotPages/YourCourse";
import YourVideos from "./Pages/NotPages/YourVideos";
import Playlist from "./Pages/NotPages/Playlist";
import History from "./Pages/NotPages/History";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Player from "./Pages/Player/Player";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { clearUser, setUser } from "./Redux/authSlice";
import SearchPage from "./Pages/search/Search";

const App = () => {
  const [openSidBar, setOpenSideBar] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          setUser({
            accessToken: currentUser.accessToken,
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          })
        );
      } else {
        dispatch(clearUser());
      }
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (loadingAuth)
    return <div className="text-white text-center mt-20">Loading...</div>;

  return (
   <Routes>
  <Route path="/login" element={<Login />} />

  {user ? (
    <Route
      path="/"
      element={
        <>
          <Header setOpenSideBar={setOpenSideBar} />
          <div className="w-full flex h-[90vh]">
            <Sidebar openSidBar={openSidBar} setOpenSideBar={setOpenSideBar}/>
            <main className="flex-1 mx-2 overflow-y-auto transition duration-500">
              <Outlet /> {/* Home and Player will appear here */}
            </main>
          </div>
        </>
      }
    >
      {/* ✅ Nested routes inside "/" */}
      <Route index element={<Home openSidBar={openSidBar} />} />
      <Route path="player/:videoId" element={<Player openSidBar={openSidBar} />} />
      <Route path="liked" element={<LikedVideos openSidBar={openSidBar} />} />
      <Route path="Shorts" element={<Shorts/>} />
      <Route path="Subscriptions" element={<Subscriptions/>} />
      <Route path="youTubeMusic" element={<YouTubeMusic/>} />
      <Route path="history" element={<History/>} />
      <Route path="playlist" element={<Playlist/>} />
      <Route path="yourvideos" element={<YourVideos/>} />
      <Route path="yourCourse" element={<YourCourse/>} />
      <Route path="downloads" element={<Downloads/>} />
      <Route path="/search" element={<SearchPage />} />
    </Route>
  ) : (
    <Route path="*" element={<Navigate to="/login" replace />} />
  )}
</Routes>

  );
};

export default App;
