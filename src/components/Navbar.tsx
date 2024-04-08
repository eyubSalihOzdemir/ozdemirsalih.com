import { IconMenu2 } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";

// dark theme bg: bg-[#191919]
// dark theme text color: text - [#D1D1D1]
// logo: <img src={irobotsvg} width={48} className="" />

function Navbar() {
  return (
    <div>
      <div className="mx-auto flex h-16 items-center justify-between border-b-[1px] border-[#d1d1d160] px-4">
        <button>
          <div className="flex items-center gap-1">
            <IconMenu2 className="size-5 lg:size-6"></IconMenu2>
            <h1 className="text-sm sm:text-base">Menu</h1>
          </div>
        </button>
        <h1 className="text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
          E. Salih Özdemir
        </h1>
        <button>
          <IconMoon className="size-5 lg:size-6"></IconMoon>
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
