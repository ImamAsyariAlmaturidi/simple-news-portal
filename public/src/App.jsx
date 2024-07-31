import React from "react";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Navbar from "./components/Navbar"
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
    <div className="bg-dark-background text-dark-text">
      <Navbar setPage={setPage} activePage={page}/>
      {page === "home" && <Home />}
      {page === "anime" && <Anime />}
      {page === "manga" && <Manga />}
    </div>
    </>
  );
}

export default App;
