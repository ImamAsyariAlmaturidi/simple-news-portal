import React from "react";
import { FaSearchengin } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ setPage, activePage }) => {
  const navItems = [
    { name: "Latest News", key: "home" },
    { name: "Manga", key: "manga" },
    { name: "Anime", key: "anime" }
  ];
  const [input, setInput] = useState("");

  function formOnSubmitHandler(e) {
    e.preventDefault();
    setInput("");
  }

  return (
    <>
      <header className="flex justify-around py-6 text-white fixed z-30 w-full bg-gradient-to-r from-stone-800 to-pink-700 shadow-sm shadow-black">
        <h1 className="text-center">Logo</h1>
        <div>
          <ul className="flex justify-between w-56 cursor-pointer  tracking-wide">
            {navItems.map((item) => (
              <li
                key={item.key}
                className={`${
                  activePage === item.key ? "text-orange-400" : "text-white"
                }`}
                onClick={() => setPage(item.key)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={formOnSubmitHandler}>
          <div className="text-center text-2xl flex justify-around w-56">
            <input
              className="border-2 text-center rounded-lg text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="" type="submit">
              <FaSearchengin className="text-1xl mt-1" />
            </button>
          </div>
        </form>
      </header>
    </>
  );
};

export default Navbar;
