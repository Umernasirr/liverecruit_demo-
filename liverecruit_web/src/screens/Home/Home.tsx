import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-0 h-screen">
        <div className="bg-blue-900">
          <LeftContent />
        </div>
        <div className="col-span-4 bg-red-400">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
