import React, { useEffect, useState } from "react";
import Header from "./componets/header/Header";
import Sidebar from "./componets/sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import Player from "./Pages/Player/Player";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { clearUser, setUser } from "./Redux/authSlice";

const App = () => {
  const [openSidBar, setOpenSideBar] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(true);

  const {user } = useSelector((state)=>state.auth)
  const dispatch = useDispatch();


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
      if(currentUser){
        dispatch(
          setUser({
            accessToken: currentUser.accessToken,
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          })
        );
      } else{
        dispatch(clearUser());
      }
      setLoadingAuth(false)
    });
    return ()=> unsubscribe();
  },[dispatch])
 


  
  
 
      if (loadingAuth) return <div className="text-white text-center mt-20">Loading...</div>;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          user ? (
            <>
              {" "}
              <Header setOpenSideBar={setOpenSideBar} />
              <div className="w-full flex  h-[90vh] ">
                <Sidebar openSidBar={openSidBar} />
                <main className="flex-1 mx-2 overflow-y-auto transition duration-500">
                  <Routes>
                    <Route
                      path="/"
                      element={<Home openSidBar={openSidBar} />}
                    />
                    <Route path="/player" element={<Player />} />
                  </Routes>
                </main>
              </div>
            </>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;
