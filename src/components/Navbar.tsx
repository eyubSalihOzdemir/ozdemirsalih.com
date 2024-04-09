import { IconMenu2 } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider.tsx";

function Navbar() {
  const checkTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      return true;
    } else {
      document.documentElement.classList.remove("dark");
      return false;
    }
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // const [isDarkMode, setIsDarkMode] = useState(() => checkTheme());
  const { isDarkMode, setIsDarkMode } = useStateContext();

  setIsDarkMode(checkTheme());

  return (
    <div className="transition-all duration-300 dark:bg-[#191919] dark:text-[#D1D1D1]">
      <div className="mx-auto flex h-16 items-center justify-between border-b-[1px] border-[#d1d1d160] px-4">
        <button>
          <div className="flex items-center gap-1">
            <IconMenu2 className="size-5 lg:size-6"></IconMenu2>
            <h1 className="text-sm font-medium sm:text-base">Menu</h1>
          </div>
        </button>
        <h1 className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
          E. Salih Özdemir
        </h1>
        <button onClick={themeSwitch}>
          {isDarkMode ? (
            <IconMenu2 className="size-5 lg:size-6"></IconMenu2>
          ) : (
            <IconMoon className="size-5 lg:size-6"></IconMoon>
          )}
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
