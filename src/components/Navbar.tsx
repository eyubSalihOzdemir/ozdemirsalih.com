import React from "react";
import irobotsvg from "../assets/i-robot-logo.svg";
import { IconMenu2 } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";

// dark theme bg: bg-[#191919]
// dark theme text color: text - [#D1D1D1]
// logo: <img src={irobotsvg} width={48} className="" />

function Navbar() {
  return (
    <div className="h-16 flex justify-between items-center mx-auto px-4 border-b-[1px] border-[#d1d1d160]">
      <button>
        <div className="flex gap-1">
          <IconMenu2></IconMenu2>
          <h1>Menu</h1>
        </div>
      </button>
      <h1 className="font-bold text-2xl">E. Salih Özdemir</h1>
      <button>
        <IconMoon></IconMoon>
      </button>
    </div>
  );
}

export default Navbar;
