import { createBrowserRouter } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
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
        element: <div>Articles</div>,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
      {
        path: "/about",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
