import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const LeftContent = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
    navigate("/");
  };

  return (
    <div className="my-12 flex flex-col items-center ">
      <h1 className="text-3xl text-white">John Doe</h1>
      <br />
      <div className="flex -space-x-1 overflow-hidden">
        <img
          className="inline-block h-24 w-24 rounded-full ring-0 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
      </div>

      <br />

      <button
        onClick={handleLogout}
        className="bg-gray-100 p-2 px-4 rounded-lg hover:bg-gray-300"
      >
        Logout
      </button>
    </div>
  );
};

export default LeftContent;
