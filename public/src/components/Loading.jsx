import React from "react";
import gif from "../assets/sleeping-cute.gif"
const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <img src={gif} />
      </div>
    </div>
  );
};

export default Loading;
