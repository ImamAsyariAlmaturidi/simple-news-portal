import React from "react";
import Dialog from "./Dialog";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="navbar fixed text-white flex justify-around bg-red-300 z-50 items-center p-4">
      <div className="flex items-center">
        <a href="https://neko-news.vercel.app">
          <img
            src="https://media1.tenor.com/m/vORI9e-AqoUAAAAC/menhera-chan-chibi.gif"
            alt="Anime GIF"
            className="w-12 h-12"
          />
        </a>
      </div>
      <div>
        <Dialog buttonName="Add Article"/>
      </div>
      <div>
        <Dialog buttonName="Add User" />
      </div>
      <div>
        <button onClick={logout} className="btn btn-xl">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
