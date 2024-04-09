import iRobotLogo from "../assets/i-robot-logo.png";
import iRobotLogoWhite from "../assets/i-robot-logo-white.png";
import { useStateContext } from "../contexts/ContextProvider.tsx";

function Home() {
  const { isDarkMode } = useStateContext();

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col overflow-auto">
      <div className="flex justify-center">
        <img
          src={isDarkMode ? iRobotLogoWhite : iRobotLogo}
          alt="SVG Logo Image"
          className="size-48 fill-lime-500"
        ></img>
      </div>
      <div className="flex grow items-center justify-center font-medium">
        Currently under development...
      </div>
    </div>
  );
}

export default Home;
