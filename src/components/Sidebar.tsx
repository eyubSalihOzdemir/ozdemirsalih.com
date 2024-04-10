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
            ? "bg-background fixed left-0 top-0 block h-full w-64 transition-all duration-300 ease-in-out dark:bg-dark-background md:w-72"
            : "bg-background fixed left-[-16rem] top-0 block h-full w-64 transition-all duration-300 ease-in-out dark:bg-dark-background md:left-[-18rem] md:w-72"
        }
      >
        <div className="divide-divider h-full flex-col divide-y-2 bg-opacity-50 p-2">
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
              text="Writings"
            />
            <SidebarButton
              icon={<IconSailboat />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text="Life Updates"
            />
            <SidebarButton
              icon={<IconCamera />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text="Photographs"
            />
            <SidebarButton
              icon={<IconVideo />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text="Videos"
            />
            <SidebarButton
              icon={<IconBookmarks />}
              onClick={() => {
                console.log("Writing clicked");
              }}
              text="Bookmarks"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
