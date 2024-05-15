import { createBrowserRouter } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import About from "./views/About";
import Articles from "./views/Articles";
import Article from "./views/Article";
import Shorts from "./views/Shorts";
import Short from "./views/Short";

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
      {
        path: "/shorts",
        element: <Shorts />,
      },
      {
        path: "/shorts/:id",
        element: <Short />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
