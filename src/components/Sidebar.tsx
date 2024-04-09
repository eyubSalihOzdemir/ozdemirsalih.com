import React from "react";
import { useStateContext } from "../contexts/ContextProvider.tsx";
import { IconHome2 } from "@tabler/icons-react";
import { IconWriting } from "@tabler/icons-react";
import { IconCamera } from "@tabler/icons-react";
import { IconVideo } from "@tabler/icons-react";
import { IconSailboat } from "@tabler/icons-react";
import { IconBookmarks } from "@tabler/icons-react";

function Sidebar() {
  const { isSideBar, setIsSideBar } = useStateContext();

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
          <button className="mb-4 flex h-12 w-full items-center justify-start gap-2 rounded-lg p-2 hover:bg-secondary dark:hover:bg-dark-secondary">
            <IconHome2 />
            <h1>Home</h1>
          </button>
          <div className="py-4">
            <h1 className="start flex h-10 items-end pb-1 pl-2 text-xl font-semibold">
              Blog
            </h1>
            <button className="flex h-10 w-full items-center justify-start gap-2 rounded-lg p-2 hover:bg-secondary dark:hover:bg-dark-secondary">
              <IconWriting className="size-5" />
              Writings
            </button>
            <button className="flex h-10 w-full items-center justify-start gap-2 rounded-lg p-2 hover:bg-secondary dark:hover:bg-dark-secondary">
              <IconSailboat className="size-5" />
              Life Updates
            </button>
            <button className="flex h-10 w-full items-center justify-start gap-2 rounded-lg p-2 hover:bg-secondary dark:hover:bg-dark-secondary">
              <IconCamera className="size-5" />
              Photographs
            </button>
            <button className="flex h-10 w-full items-center justify-start gap-2 rounded-lg p-2 hover:bg-secondary dark:hover:bg-dark-secondary">
              <IconVideo className="size-5" />
              Videos
            </button>
            <button className="flex h-10 w-full items-center justify-start gap-2 rounded-lg p-2 hover:bg-secondary dark:hover:bg-dark-secondary">
              <IconBookmarks className="size-5" />
              Bookmarks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
