import React from "react";
import Home from "../src/pages/Home";
import Anime from "../src/pages/Anime";
import Manga from "../src/pages/Manga";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "../src/components/BaseLayout";
const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/anime",
        element: <Anime />,
      },
      {
        path: "/manga",
        element: <Manga />,
      },
    ],
  },
]);

export default router;
