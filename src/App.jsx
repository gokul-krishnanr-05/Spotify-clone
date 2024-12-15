import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Display from "./components/Display";
import Sidebar from "./components/Sidebar";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";
import Player from "./components/Player";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pages/*" element={<MainApp />} />
      </Routes>
    </div>
  );
};

const MainApp = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />

        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </div>
  );
};

export default App;
