import alien from "../assets/notfound-alien.png";
import { IconHome } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between px-6 py-10">
      <div className="col-span-3 flex w-full items-center">
        <div className="mx-4 h-min w-full border-[1px]"></div>
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-medium md:text-7xl">404</h1>
          <h1 className="text-2xl font-medium md:text-3xl">Not Found</h1>
        </div>
        <div className="mx-4 h-min w-full border-[1px]"></div>
      </div>
      <div className="flex flex-col justify-items-center gap-2">
        <p className="text-base font-medium md:text-lg">Let's start again...</p>
        <button
          className="flex h-12 items-center justify-center gap-1 rounded-lg border text-base font-medium md:text-lg"
          onClick={handleGoHome}
        >
          <IconHome></IconHome>
          Home
        </button>
      </div>
      <img src={alien} className="animate-bounce-slow h-40  md:h-44" />
    </div>
  );
}

export default NotFound;
