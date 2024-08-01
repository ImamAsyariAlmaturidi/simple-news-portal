import React from "react";

const Navbar = () => {
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
        <button className="btn btn-ghost btn-xl">Add Article</button>
      </div>
      <div>
        <button className="btn btn-ghost btn-xl">Add User</button>
      </div>
      <div>
        <button className="btn btn-ghost btn-xl">Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
