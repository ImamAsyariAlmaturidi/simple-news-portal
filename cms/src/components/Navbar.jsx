import React from "react";

const Navbar = () => {
  return (
    <div className="navbar fixed text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <img
          src="https://media1.tenor.com/m/vORI9e-AqoUAAAAC/menhera-chan-chibi.gif"
          alt="Anime GIF"
          className="w-12 h-12"
        />
      </div>
      <div>
        <a className="text-xl font-semibold">News Portal Anime CMS</a>
      </div>
    </div>
  );
};

export default Navbar;
