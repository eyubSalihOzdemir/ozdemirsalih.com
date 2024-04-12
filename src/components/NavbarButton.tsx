// import React from "react";
import { ReactNode } from "react";
// import { IconMenu2 } from "@tabler/icons-react";

// takes a function for the button
// takes an icon
// takes a text

interface Props {
  text?: string;
  onClick: () => void;
  icon?: ReactNode;
}

function NavbarButton({ text, onClick, icon }: Props) {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button className="flex items-center py-2" onClick={handleButtonClick}>
      <div className={`${icon && "flex items-center gap-1"}`}>
        {icon && (
          <div className={`flex size-5 items-center ${!text && "mx-2"}`}>
            {icon}
          </div>
        )}
        {text && <h1 className="">{text}</h1>}
      </div>
    </button>
  );
}

export default NavbarButton;
