import { IconMenu2 } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import { IconSun } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // bg-background
  return (
    <div className="transition-all dark:bg-dark-background dark:text-dark-text">
      <Sidebar />
      <div className="border-divide mx-auto mb-4 flex h-16 max-w-[1080px] items-center justify-between px-6">
        {width < breakpoint ? (
          // mobile layout, show menu button and a sidebar
          <div>
            <NavbarButton
              icon={<IconMenu2 />}
              onClick={() => handleSidebar()}
              text="Menu"
            />
          </div>
        ) : (
          // desktop layout, show full navbar
          <div className="flex gap-6">
            <NavbarButton text="Home" onClick={() => {}} />
            <NavbarButton text="Blog" onClick={() => {}} />
            <NavbarButton text="Dev" onClick={() => {}} />
            <NavbarButton text="About" onClick={() => {}} />
          </div>
        )}
        <NavbarButton
          icon={isDarkMode ? <IconSun /> : <IconMoon />}
          onClick={() => themeSwitch()}
        />
      </div>
      <Outlet />
    </div>
  );

  // <div className="transition-all dark:bg-dark-background dark:text-dark-text">
  //   <Sidebar />
  //   <div className="mb-4 flex h-16 items-center justify-between border-b-[1px] border-divider px-2">
  //     <NavbarButton
  //       icon={<IconMenu2 />}
  //       onClick={() => handleSidebar()}
  //       text="Menu"
  //     />
  //     <h1 className="text-center text-base font-medium sm:text-lg md:text-xl">
  //       E. Salih Özdemir
  //     </h1>
  //     <NavbarButton
  //       icon={isDarkMode ? <IconSun /> : <IconMoon />}
  //       onClick={() => themeSwitch()}
  //       text=""
  //     />
  //   </div>
  //   <Outlet />
  // </div>
}

export default Navbar;
