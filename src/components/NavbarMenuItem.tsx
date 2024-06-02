import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  icon?: ReactNode;
  text: string;
  disabled?: boolean;
}

function NavbarMenuItem({ icon, text, disabled = false, onClick }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled ?? true}
        className={`flex h-full w-full items-center gap-2 py-[2px] ${disabled == true ? "text-gray-500" : ""}`}
      >
        {icon}
        {text}
      </button>
    </div>
  );
}

export default NavbarMenuItem;
