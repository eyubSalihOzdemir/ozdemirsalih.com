import { Navigate, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <div>you idiot</div>,
  },
]);

export default router;
