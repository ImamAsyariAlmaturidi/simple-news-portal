import React from "react";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Navbar from "./components/Navbar";
import { useState } from "react";
import router from "../routers";
import { RouterProvider } from "react-router-dom";
function App() {
  const [page, setPage] = useState("home");

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
