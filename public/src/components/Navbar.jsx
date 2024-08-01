import React from "react";
import { useNavigate } from "react-router-dom";
import anime from '../assets/mythikore-anime-girl-2.gif'
const Navbar = () => {
  const navigate = useNavigate()
  const navParams = [
    { name: "Latest News", key: "" },
    { name: "Manga", key: "manga" },
    { name: "Anime", key: "anime" },
  ];

  return (
    <>
      <header className="flex justify-around py-6 text-white  fixed z-30 w-full bg-gradient-to-r font-bold from-pink-400 to-pink-600 shadow-lg shadow-black font-poppins">
        <img src={anime} className="w-7"></img>
        <div>
          <ul className="flex  justify-between w-56 cursor-pointer">
            {navParams.map((item) => (
              <li
                className="hover:text-orange-500"
                key={item.key}
                onClick={() => navigate(`/${item.key}`)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
