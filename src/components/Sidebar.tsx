import React from "react";
import { useStateContext } from "../contexts/ContextProvider.tsx";

function Sidebar() {
  const { isSideBar, setIsSideBar } = useStateContext();

  return (
    <div>
      <div
        className={
          isSideBar
            ? "fixed z-10 h-full w-full bg-dark-background opacity-60 transition-all"
            : "pointer-events-none fixed z-10 h-full w-full bg-dark-background opacity-0 transition-all"
        }
        onClick={() => {
          setIsSideBar(false);
        }}
      ></div>
      <div
        className={
          isSideBar
            ? "transform-all fixed left-0 top-0 z-20 block h-full w-64 border-r border-r-accent bg-dark-secondary duration-500 ease-in-out md:w-72"
            : "transform-all fixed left-[-16rem] top-0 z-20 block h-full w-64 border-r border-r-accent bg-dark-secondary duration-500 ease-in-out md:left-[-18rem] md:w-72"
        }
      >
        Lorem ipsum dolor sit amet
      </div>
    </div>
  );
}

export default Sidebar;
