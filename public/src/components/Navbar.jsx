import React from "react";

const Navbar = ({ setPage, activePage }) => {
  const navItems = [
    { name: "Latest News", key: "home" },
    { name: "Manga", key: "manga" },
    { name: "Anime", key: "anime" },
  ];

  return (
    <>
      <header className="flex justify-around py-6 text-white fixed z-30 w-full bg-gradient-to-r font-bold from-pink-400 to-pink-600 shadow-lg shadow-black font-poppins">
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
      </header>
    </>
  );
};

export default Navbar;
