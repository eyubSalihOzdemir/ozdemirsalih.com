import iRobotLogo from "../assets/i-robot-logo.png";
import iRobotLogoWhite from "../assets/i-robot-logo-white.png";
import { useStateContext } from "../contexts/ContextProvider.tsx";

function Home() {
  const { isDarkMode } = useStateContext();

  return (
    <div className="mx-6 flex h-[calc(100vh-80px)] flex-col overflow-auto">
      <div className="flex h-full flex-col items-start gap-4 pt-24">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="animate-duration-500 animate-fade-down animate-ease-out text-3xl">
              Hello there!
            </h1>
            <div className="animate-duration-500 animate-fade-down animate-delay-100 animate-ease-out flex-rows-1 text-5xl">
              <span>My name is&nbsp;</span>
              <span className="animate-gradient bg-gradient-to-r from-rose-300 via-orange-300 to-rose-300 bg-[length:200%_auto] bg-clip-text font-medium text-transparent transition-all duration-500">
                Salih
              </span>
            </div>
          </div>
          {/* <img
            src={isDarkMode ? iRobotLogoWhite : iRobotLogo}
            alt="logo image"
            className="size-36"
          ></img> */}
        </div>

        <div className="animate-duration-500 animate-fade-down animate-delay-200 animate-ease-out flex-rows-1 items-baseline pt-8 text-xl font-light">
          <span>
            I develop web & mobile apps. Learn more about my development
            experience&nbsp;
          </span>
          <button className="hover:animate-wiggle font-medium text-rose-300 transition-colors hover:text-orange-400">
            here.
          </button>
        </div>

        <div className="animate-duration-500 animate-fade-down animate-delay-300 animate-ease-out flex pt-4 text-xl font-light">
          <span>Discover my personal content on my&nbsp;</span>
          <button className="hover:animate-wiggle font-medium text-rose-300 transition-colors hover:text-orange-400">
            blog.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
