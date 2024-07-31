import React from "react";
import { FaSearchengin } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = ({ setPage, activePage }) => {
  const navItems = [
    { name: "Latest News", key: "home" },
    { name: "Manga", key: "manga" },
    { name: "Anime", key: "anime" },
  ];
  const [input, setInput] = useState("");
  const [article, setArticle] = useState([])

  function formOnSubmitHandler(e) {
    e.preventDefault();
    setInput("");
  }



  async function fetchArticle () {
    try {
      const { data } = await axios.get(`https://server.imam-asyari.online/public/article/?search=${input}`)
      setArticle(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   fetchArticle()
  }, [input]);

  return (
    <>
      <header className="flex justify-around py-6 text-white fixed z-30 w-full bg-gradient-to-r from-stone-800 to-pink-700 shadow-sm shadow-black font-poppins">
        <h1 className="text-center">Logo</h1>
        <div>
          <ul className="flex justify-between w-56 cursor-pointer">
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
