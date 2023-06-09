import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import VideoPage from "./components/VideoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/watch/:videoId" element={<VideoPage />} />
        <Route
          path="*"
          element={<div> Not Found or You do not have permission.</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
