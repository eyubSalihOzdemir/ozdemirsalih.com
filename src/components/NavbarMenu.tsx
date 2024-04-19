import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function NavbarMenu({ children }: Props) {
  return (
    <div className="fixed z-[1] grid w-max animate-fade gap-4 rounded-sm border-l-0 border-[#fa9372] bg-black px-4 py-4 text-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] shadow-[#ef709b] transition-all animate-duration-200">
      {children}
    </div>
  );
}

export default NavbarMenu;
