import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/recruiter");
    }
  }, [isAuthenticated]);

  return (
    <div className="h-screen w-screen bg-red-100 flex justify-center items-center ">
      <div className="bg-white w-full sm:w-1/2 lg:w-1/3 h-1/2 mx-12 sm:mx-0 shadow-xl flex justify-center items-center">
        <div className="my-12">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl text-center font-semibold">Login</h1>
            <br />
            <p className="text-lg text-blue-900">Email:</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 h-12 rounded-md my-2 placeholder:text-gray-500 px-2 outline-blue-300 "
              placeholder="Enter your email"
            />
            <br />
            <p className="text-lg text-blue-900">Password:</p>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 h-12 rounded-md my-2 placeholder:text-gray-500 px-2 outline-red-300 "
              placeholder="Enter your password"
            />
            <br />
            <br />
            <button
              className="bg-red-400 text-white text-lg font-bold h-12 items-center rounded-2xl flex text-center w-full justify-center"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
