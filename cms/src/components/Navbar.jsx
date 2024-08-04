import React from "react";
import Dialog from "./Dialog";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

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
        <Button buttonName="List Category" path="/dashboard/category" />
      </div>
      <div>
        <Button buttonName="My Article" path="/dashboard" />
      </div>
      <div>
        <Dialog buttonName="Add Article" />
      </div>
      <div>
        <Button buttonName="Add Staff" path="/add-user" />
      </div>
      <div>
        <button onClick={logout} className="btn btn-xl btn-ghost">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
