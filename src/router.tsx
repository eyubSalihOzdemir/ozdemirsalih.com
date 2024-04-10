import { createBrowserRouter } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Articles from "./views/Articles";
import Root from "./views/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
