import {
  IconMenu2,
  IconWriting,
  IconSailboat,
  IconCamera,
  IconVideo,
  IconBookmarks,
} from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import { IconSun } from "@tabler/icons-react";
import { Outlet, useNavigate } from "react-router-dom";
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
  // const [activeButton, setActiveButton] = useState("/");
  const {
    activeNavbarButton: activeSidebarButton,
    setActiveNavbarButton: setActiveSidebarButton,
  } = useStateContext();
  const navigate = useNavigate();

  // setIsDarkMode(checkTheme());

  //TODO: remove this when adding light theme support:
  themeSwitch();

  const handleSidebar = () => {
    setIsSideBar(!isSideBar);
  };

  const handleNavbarButton = (route: string, activeButton: string) => {
    // setActiveButton(activeButton);
    setActiveSidebarButton(activeButton);

    navigate(`/${route}`);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="bg-[#0F1111] font-Roboto text-white transition-all">
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
              onClick={() => handleNavbarButton("", "home")}
              isSelected={activeSidebarButton === "home"}
            />
            <NavbarButton
              text="Blog"
              onClick={() => {}}
              isSelected={activeSidebarButton === "blog"}
              hoverItems={[
                <div
                  className="flex gap-2"
                  onClick={() => handleNavbarButton("articles", "blog")}
                >
                  <IconWriting className="size-5" />
                  Articles
                </div>,
                <div className="flex gap-2">
                  <IconSailboat className="size-5" />
                  Life Updates
                </div>,
                <div className="flex gap-2">
                  <IconCamera className="size-5" />
                  Photographs
                </div>,
                <div className="flex gap-2">
                  <IconVideo className="size-5" />
                  Videos
                </div>,
                <div className="flex gap-2">
                  <IconBookmarks className="size-5" />
                  Bookmarks
                </div>,
              ]}
            />
            <NavbarButton
              text="Dev"
              onClick={() => {}}
              isSelected={activeSidebarButton === "dev"}
              hoverItems={[<h1>Projects</h1>, <h1>Tech Stack</h1>]}
            />
            <NavbarButton
              text="About"
              onClick={() => handleNavbarButton("about", "about")}
              isSelected={activeSidebarButton === "about"}
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
      <div className="mx-auto h-[calc(100vh-80px)] max-w-[1440px] overflow-auto">
        <div className="mx-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
