import { IconMenu2 } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import { IconSun } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider.tsx";
import Sidebar from "./Sidebar.tsx";

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

  const { isDarkMode, setIsDarkMode } = useStateContext();
  const { isSideBar, setIsSideBar } = useStateContext();

  const handleSidebar = () => {
    setIsSideBar(!isSideBar);
  };

  setIsDarkMode(checkTheme());

  return (
    <div className="transition-all duration-300 dark:bg-dark-background dark:text-dark-text">
      <Sidebar />
      <div className="mx-auto flex h-16 items-center justify-between border-b-[1px] border-[#d1d1d160] px-2">
        <button
          className="rounded-sm px-2 pb-2 pt-2 font-light hover:bg-secondary hover:font-medium hover:transition-all dark:hover:bg-dark-secondary dark:hover:hover:text-accent"
          onClick={handleSidebar}
        >
          <div className="flex items-center gap-1">
            <IconMenu2 className="size-5 lg:size-6"></IconMenu2>
            <h1 className="text-sm transition-all sm:text-base">Menu</h1>
          </div>
        </button>
        <h1 className="text-base font-medium transition-all sm:text-lg md:text-xl lg:text-2xl">
          E. Salih Özdemir
        </h1>
        <button
          onClick={themeSwitch}
          className="rounded-sm px-4 pb-2 pt-2 font-light hover:bg-secondary hover:font-medium hover:transition-all dark:hover:bg-dark-secondary dark:hover:hover:text-accent"
        >
          {isDarkMode ? (
            <IconSun className="size-5 lg:size-6"></IconSun>
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
