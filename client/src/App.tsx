import { useState } from 'react'
import React from "react";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import MainMenu from "./components/nav-component/MainMenu";
import Cloud from "./pages/cloud/Cloud";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <div className="App">
      {/* <NavComp /> */}
      <MainMenu />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
