import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recruiter" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
