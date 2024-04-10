import { IconMenu2 } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import { IconSun } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider.tsx";
import Sidebar from "../components/Sidebar.tsx";
import NavbarButton from "../components/NavbarButton.tsx";

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
  setIsDarkMode(checkTheme());

  const handleSidebar = () => {
    setIsSideBar(!isSideBar);
  };

  return (
    <div>
      <Sidebar />
      <div className="border-divider mx-auto mb-4 flex h-16 items-center justify-between border-b-[1px] px-2">
        <NavbarButton
          icon={<IconMenu2 />}
          onClick={() => handleSidebar()}
          text="Menu"
        />
        <h1 className="text-base font-medium sm:text-lg md:text-xl lg:text-2xl">
          E. Salih Özdemir
        </h1>
        <NavbarButton
          icon={isDarkMode ? <IconSun /> : <IconMoon />}
          onClick={() => themeSwitch()}
          text=""
        />
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
