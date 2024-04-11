import React from "react";
import { ReactNode } from "react";
import { IconMenu2 } from "@tabler/icons-react";

// takes a function for the button
// takes an icon
// takes a text

interface Props {
  icon: ReactNode;
  onClick: () => void;
  text: string;
}

function NavbarButton({ icon, onClick, text }: Props) {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div className="flex min-w-20 justify-end" onClick={handleButtonClick}>
      <button className="flex items-center gap-1 px-2 py-2 hover:bg-secondary hover:transition-all dark:hover:bg-dark-secondary">
        <div className="[&>*]:size-5 [&>*]:lg:size-6">{icon}</div>
        {text && <h1 className="text-sm sm:text-base">{text}</h1>}
      </button>
    </div>
  );
}

export default NavbarButton;
