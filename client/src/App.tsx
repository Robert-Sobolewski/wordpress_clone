import { useState } from 'react'
import logo from './logo.svg'
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainMenu from "./components/nav-component/MainMenu";
import Cloud from "./pages/cloud/Cloud";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <NavComp /> */}
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
