import { IconMenu2 } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import { IconSun } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider.tsx";
import Sidebar from "../components/Sidebar.tsx";
import NavbarButton from "../components/NavbarButton.tsx";

function Navbar() {
  // const checkTheme = () => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     return true;
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     return false;
  //   }
  // };

  const themeSwitch = () => {
    // if (document.documentElement.classList.contains("dark")) {
    //   document.documentElement.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    //   setIsDarkMode(false);
    // } else {
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    //   setIsDarkMode(true);
    // }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  };

  const { isDarkMode, setIsDarkMode } = useStateContext();
  const { isSideBar, setIsSideBar } = useStateContext();
  const [activeButton, setActiveButton] = useState("home");

  // setIsDarkMode(checkTheme());

  //TODO: remove this when adding light theme support:
  themeSwitch();

  const handleSidebar = () => {
    setIsSideBar(!isSideBar);
  };

  const handleNavbarButton = (text: string) => {
    setActiveButton(text);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="font-Roboto bg-[#0F1111] text-white transition-all">
      {width < breakpoint && <Sidebar />}
      <div className="border-divide mx-auto mb-4 flex h-16 max-w-[1440px] items-center justify-between px-6">
        {width < breakpoint ? (
          // mobile layout, show menu button and a sidebar
          <div>
            <NavbarButton
              icon={<IconMenu2 />}
              text="Menu"
              onClick={() => handleSidebar()}
              isSelected={false}
            />
          </div>
        ) : (
          // desktop layout, show full navbar
          <div className="flex gap-6">
            <NavbarButton
              text="Home"
              onClick={() => handleNavbarButton("home")}
              isSelected={activeButton === "home"}
            />
            <NavbarButton
              text="Blog"
              onClick={() => handleNavbarButton("blog")}
              isSelected={activeButton === "blog"}
            />
            <NavbarButton
              text="Dev"
              onClick={() => handleNavbarButton("dev")}
              isSelected={activeButton === "dev"}
            />
            <NavbarButton
              text="About"
              onClick={() => handleNavbarButton("about")}
              isSelected={activeButton === "about"}
            />
          </div>
        )}
        <NavbarButton
          icon={isDarkMode ? <IconSun /> : <IconMoon />}
          // onClick={() => themeSwitch()}
          onClick={() => {}}
          isSelected={false}
        />
      </div>
      <div className="mx-auto max-w-[1440px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
