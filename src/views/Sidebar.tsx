import { useStateContext } from "../contexts/ContextProvider.tsx";
import { IconHome2 } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconWriting } from "@tabler/icons-react";
import { IconCamera } from "@tabler/icons-react";
import { IconVideo } from "@tabler/icons-react";
import { IconSailboat } from "@tabler/icons-react";
import { IconBookmarks } from "@tabler/icons-react";
import SidebarButton from "../components/SidebarButton.tsx";
import { useNavigate } from "react-router-dom";
import SidebarTitle from "../components/SidebarTitle.tsx";
SidebarTitle;
import { IconTerminal2 } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { t } = useTranslation();
  const { isSideBar, setIsSideBar } = useStateContext();
  const navigate = useNavigate();

  return (
    <div>
      {/* outisde of sidebar */}
      <div
        className={
          isSideBar
            ? "fixed z-10 h-full w-full cursor-pointer bg-black opacity-30 transition-all"
            : "pointer-events-none fixed h-full w-full bg-black opacity-0 transition-all"
        }
        onClick={() => {
          setIsSideBar(false);
        }}
      ></div>
      {/* sidebar itself */}
      <div
        className={`fixed top-0 z-20 block h-full w-64 border-r-4 border-rose-400 bg-[#0F1111] transition-all duration-300 ease-in-out md:w-72 ${
          isSideBar ? "left-0" : "left-[-16rem] md:left-[-18rem]"
        }`}
      >
        <div className="mx-2 my-4 h-full">
          <SidebarButton
            icon={<IconHome2 />}
            onClick={() => {
              navigate("/");
              setIsSideBar(false);
            }}
            text={t("navbar.menuButtons.home")}
            isBig={false}
          />
          <SidebarButton
            icon={<IconUser />}
            onClick={() => {
              navigate("/about");
              setIsSideBar(false);
            }}
            text={t("navbar.menuButtons.about")}
            isBig={false}
          />
          <div className="mt-4">
            <SidebarTitle text={t("navbar.menuButtons.blog")} />
            <SidebarButton
              icon={<IconWriting />}
              onClick={() => {
                navigate("/articles");
                setIsSideBar(false);
              }}
              text={t("navbar.submenuButtons.articles")}
              underDevelopment={false}
            />
            <SidebarButton
              icon={<IconSailboat />}
              onClick={() => {
                console.log("Article clicked");
              }}
              text={t("navbar.submenuButtons.lifeUpdates")}
              underDevelopment={true}
            />
            <SidebarButton
              icon={<IconCamera />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text={t("navbar.submenuButtons.photographs")}
              underDevelopment={true}
            />
            <SidebarButton
              icon={<IconVideo />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text={t("navbar.submenuButtons.videos")}
              underDevelopment={true}
            />
            <SidebarButton
              icon={<IconBookmarks />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text={t("navbar.submenuButtons.bookmarks")}
              underDevelopment={true}
            />
          </div>
          <div className="mt-4">
            <SidebarTitle text={t("navbar.menuButtons.dev")} />
            <SidebarButton
              icon={<IconTerminal2 />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text={t("navbar.submenuButtons.projects")}
              underDevelopment={true}
            />
            <SidebarButton
              icon={<IconTerminal2 />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text={t("navbar.submenuButtons.shorts")}
              underDevelopment={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
