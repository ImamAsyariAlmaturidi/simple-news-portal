import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useParams
} from "react-router-dom";
import Login from "../src/components/Login";
import BaseLayout from "../src/components/BaseLayout";
import Dashboard from "../src/pages/Dashboard";
import AddFormUser from "../src/components/AddUserForm";
import ArticleEdit from "../src/components/ArticleEdit"
import TableSupport from "../src/components/TableSupport";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
      {
        path: "/add-user",
        element: <AddFormUser />,
        loader: () => {
            if (!localStorage.access_token) {
              return redirect("/");
            }
            return null;
          },
      },
      {
        path: "/edit-article/:articleId",
        element: <ArticleEdit />,
        loader: () => {
            if (!localStorage.access_token) {
              return redirect("/");
            }
            return null;
          },
      },
      {
        path: "/dashboard/category",
        element: <TableSupport />,
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
