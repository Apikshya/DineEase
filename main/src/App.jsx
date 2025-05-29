import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OurStories from "./pages/OurStories";
import Booking from "./pages/Booking";

import { BrowserRouter, Routes , Route, Link , useNavigate, Outlet } from "react-router-dom";

function App() {
  return <div className="bg-green-200">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/ourstories" element={<OurStories/>}/>
      <Route path="/booking" element={<Booking/>}/>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App;
