import { createBrowserRouter } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Articles from "./views/Articles";
import Article from "./views/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
