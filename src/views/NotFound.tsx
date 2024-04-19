import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function NotFound() {
  const navigate = useNavigate();
  const { setActiveNavbarButton } = useStateContext();

  const handleButtonClick = () => {
    setActiveNavbarButton("home");
    navigate("/");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-evenly bg-[#0F1111] px-12 py-10 font-Roboto text-white transition-all">
      <h1 className="animate-fade-down text-4xl font-semibold animate-duration-500 animate-ease-out">
        404 Not Found
      </h1>
      <div className="animate-fade-down text-center text-3xl font-light animate-delay-100 animate-duration-500 animate-ease-out">
        <span>
          This page might be feeling a little depressed. Let's give it a virtual
          hug and head back to the&nbsp;
        </span>
        <button
          className="inline-block bg-gradient-to-r from-[#ef709b] to-[#fa9372] bg-clip-text font-medium text-transparent transition-all hover:animate-wiggle hover:transition-all"
          onClick={handleButtonClick}
        >
          Homepage!
        </button>
      </div>

      <h1 className="animate-fade-down text-center text-lg font-extralight animate-delay-200 animate-duration-500 animate-ease-out">
        Don't forget to check on your friends once in a while - you never know
        how much they might need you.
      </h1>
    </div>
  );
}

export default NotFound;
