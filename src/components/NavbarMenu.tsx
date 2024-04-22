import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

// shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] shadow-[#ef709b]

function NavbarMenu({ children }: Props) {
  return (
    <div className="fixed z-[1] grid w-max animate-fade gap-4 rounded-lg border-l-0 border-[#fa9372] bg-black px-4 py-4 text-sm  transition-all animate-duration-200">
      {children}
    </div>
  );
}

export default NavbarMenu;
