import { useStateContext } from "../contexts/ContextProvider.tsx";
import { IconHome2 } from "@tabler/icons-react";
import { IconWriting } from "@tabler/icons-react";
import { IconCamera } from "@tabler/icons-react";
import { IconVideo } from "@tabler/icons-react";
import { IconSailboat } from "@tabler/icons-react";
import { IconBookmarks } from "@tabler/icons-react";
import SidebarButton from "./SidebarButton.tsx";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const { isSideBar, setIsSideBar } = useStateContext();
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={
          isSideBar
            ? "fixed h-full w-full cursor-pointer bg-black opacity-30 transition-all"
            : "pointer-events-none fixed h-full w-full bg-black opacity-0 transition-all"
        }
        onClick={() => {
          setIsSideBar(false);
        }}
      ></div>
      <div
        className={
          isSideBar
            ? "fixed left-0 top-0 block h-full w-64 bg-white transition-all duration-300 ease-in-out dark:bg-dark-background md:w-72"
            : "fixed left-[-16rem] top-0 block h-full w-64 bg-white transition-all duration-300 ease-in-out dark:bg-dark-background md:left-[-18rem] md:w-72"
        }
      >
        <div className="h-full flex-col divide-y-2 divide-divider bg-opacity-50 p-2">
          <SidebarButton
            icon={<IconHome2 />}
            onClick={() => {
              navigate("/");
              setIsSideBar(false);
            }}
            text="Home"
            isBig={true}
          />
          <div className="py-4">
            <h1 className="start flex h-10 items-end pb-1 pl-2 text-xl font-semibold">
              Blog
            </h1>
            <SidebarButton
              icon={<IconWriting />}
              onClick={() => {
                navigate("/articles");
                setIsSideBar(false);
              }}
              text="Articles"
              underDevelopment={true}
            />
            <SidebarButton
              icon={<IconSailboat />}
              onClick={() => {
                console.log("Article clicked");
              }}
              text="Life Updates"
              underDevelopment={true}
            />
            <SidebarButton
              icon={<IconCamera />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text="Photographs"
              underDevelopment={true}
            />
            <SidebarButton
              icon={<IconVideo />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text="Videos"
              underDevelopment={true}
            />
            <SidebarButton
              icon={<IconBookmarks />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text="Bookmarks"
              underDevelopment={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
