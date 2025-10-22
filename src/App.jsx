import React, { useState } from "react";
import Header from "./componets/header/Header";
import Sidebar from "./componets/sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Player from "./Pages/Player/Player";

const App = () => {
  const [openSidBar, setOpenSideBar] = useState(false);

  return (
    <>
     
        <Header setOpenSideBar={setOpenSideBar} />
        <div className="w-full flex  h-[90vh] ">
          <Sidebar openSidBar={openSidBar} />
          <main className="flex-1 mx-2 overflow-y-auto transition duration-500">
             <Routes>
            <Route path="/" element={<Home openSidBar={openSidBar} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/player" element={<Player />} />
            </Routes>
          </main>
        </div>
    </>
  );
};

export default App;
