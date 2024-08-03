import {
    createBrowserRouter,
    redirect,
    RouterProvider,
  } from "react-router-dom";
  import Login from "../src/components/Login";
  import BaseLayout from "../src/components/BaseLayout";
  import Dashboard from "../src/pages/Dashboard";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      element: <BaseLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
          loader: () => {
            if (!localStorage.access_token) {
              return redirect("/");
            }
            return null;
          },
        },
      ],
    },
  ]);
  
  export default router;
  