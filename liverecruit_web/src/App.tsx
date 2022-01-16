import { Route, Routes } from "react-router";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recruiter" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
