import {
  IconMenu2,
  IconWriting,
  IconSailboat,
  IconCamera,
  IconVideo,
  IconBookmarks,
  IconClipboardText,
  IconNote,
  IconWorld,
} from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import { IconSun } from "@tabler/icons-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider.tsx";
import Sidebar from "./Sidebar.tsx";
import NavbarButton from "../components/NavbarButton.tsx";
import IconButton from "../components/IconButton.tsx";
import { useTranslation } from "react-i18next";
import FlagTR from "../components/FlagTR.tsx";
import FlagEN from "../components/FlagEN.tsx";

function Navbar() {
  const { t, i18n } = useTranslation();
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

    // force dark mode until we support light mode
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
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
    <div className="dark h-screen font-Roboto text-white transition-all">
      {width < breakpoint && <Sidebar />}
      <div className="border-divide sticky top-0 z-10 mx-auto mb-4 flex h-16 max-w-[1440px] items-center justify-between bg-[#0f1111] px-6">
        {width < breakpoint ? (
          // mobile layout, show menu button and a sidebar
          <div>
            <NavbarButton
              icon={<IconMenu2 />}
              text={t("navbar.menuButtons.menu")}
              onClick={() => handleSidebar()}
              isSelected={false}
            />
          </div>
        ) : (
          // desktop layout, show full navbar
          <div className="flex gap-6">
            <NavbarButton
              text={t("navbar.menuButtons.home")}
              onClick={() => handleNavbarButton("", "home")}
              isSelected={activeSidebarButton === "home"}
            />
            <NavbarButton
              text={t("navbar.menuButtons.blog")}
              onClick={() => {}}
              isSelected={activeSidebarButton === "blog"}
              hoverItems={[
                <div
                  className="flex gap-2"
                  onClick={() => handleNavbarButton("articles", "blog")}
                >
                  <IconWriting className="size-5" />
                  {t("navbar.submenuButtons.articles")}
                </div>,
                <button disabled onClick={() => {}}>
                  <div className="flex gap-2 text-gray-500">
                    <IconSailboat className="size-5" />
                    {t("navbar.submenuButtons.lifeUpdates")}
                  </div>
                </button>,
                <button disabled onClick={() => {}}>
                  <div className="flex gap-2 text-gray-500">
                    <IconCamera className="size-5" />
                    {t("navbar.submenuButtons.photographs")}
                  </div>
                </button>,
                <button disabled onClick={() => {}}>
                  <div className="flex gap-2 text-gray-500">
                    <IconVideo className="size-5" />
                    {t("navbar.submenuButtons.videos")}
                  </div>
                </button>,
                <button disabled onClick={() => {}}>
                  <div className="flex gap-2 text-gray-500">
                    <IconBookmarks className="size-5" />
                    {t("navbar.submenuButtons.bookmarks")}
                  </div>
                </button>,
              ]}
            />
            <NavbarButton
              text={t("navbar.menuButtons.dev")}
              onClick={() => {}}
              isSelected={activeSidebarButton === "dev"}
              hoverItems={[
                <button disabled onClick={() => {}}>
                  <div className="flex gap-2 text-gray-500">
                    <IconClipboardText className="size-5" />
                    {t("navbar.submenuButtons.projects")}
                  </div>
                </button>,
                <button disabled onClick={() => {}}>
                  <div className="flex gap-2 text-gray-500">
                    <IconNote className="size-5" />
                    {t("navbar.submenuButtons.shorts")}
                  </div>
                </button>,
              ]}
            />
            <NavbarButton
              text={t("navbar.menuButtons.about")}
              onClick={() => handleNavbarButton("about", "about")}
              isSelected={activeSidebarButton === "about"}
            />
          </div>
        )}
        <div className="flex">
          {/* theme change button */}
          <div className="hidden">
            <IconButton
              icon={isDarkMode ? <IconSun /> : <IconMoon />}
              // onClick={() => themeSwitch()}
              onClick={() => {}}
            />
          </div>
          {/* language change button */}
          <IconButton
            icon={<IconWorld />}
            onClick={() => {}}
            hoverItems={[
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                  localStorage.setItem("language", "en");
                }}
              >
                <div className="flex gap-2">
                  {/* <IconClipboardText className="size-5" /> */}
                  <div className="flex items-center justify-center gap-2">
                    <FlagEN />
                    {t("languages.en")}
                  </div>
                </div>
              </button>,
              <button
                onClick={() => {
                  i18n.changeLanguage("tr");
                  localStorage.setItem("language", "tr");
                }}
              >
                <div className="flex gap-2">
                  {/* <IconCpu2 className="size-5" /> */}
                  <div className="flex items-center justify-center gap-2">
                    <FlagTR />
                    {t("languages.tr")}
                  </div>
                </div>
              </button>,
            ]}
          />
        </div>
      </div>
      {/* h-[calc(100vh-80px)] */}
      {/* min-h-[calc(100vh-80px)] */}
      <div className="mx-auto h-[calc(100vh-80px)] max-w-[1440px]">
        <div className="mx-6 h-full max-h-max flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
