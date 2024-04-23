import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onRightSide?: boolean;
}

function NavbarMenu({ children, onRightSide = false }: Props) {
  return (
    <div
      className={`absolute z-[1] grid w-max animate-fade gap-4 rounded-lg border-l-0 border-[#fa9372] bg-black px-4 py-4 text-sm transition-all animate-duration-200 ${onRightSide && "right-0 top-6"}`}
    >
      {children}
    </div>
  );
}

export default NavbarMenu;
