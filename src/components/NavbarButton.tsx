import { ReactNode, useState } from "react";
import NavbarMenu from "./NavbarMenu";

interface Props {
  text?: string;
  onClick: () => void;
  icon?: ReactNode;
  isSelected: boolean;
  hoverItems?: ReactNode[];
}

function NavbarButton({
  text,
  onClick,
  icon,
  isSelected = false,
  hoverItems,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    onClick();
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex items-center py-0 duration-300 lg:text-lg ${hoverItems && "cursor-default"}`}
      onClick={handleButtonClick}
    >
      <div className={`${icon && "flex items-center gap-1"}`}>
        {icon && (
          <div className={`flex size-5 items-center ${!text && "mx-2"}`}>
            {icon}
          </div>
        )}
        {text && (
          <h1
            className={`transition-all ${isSelected ? "inline-block bg-gradient-to-r from-[#ef709b] to-[#fa9372] bg-clip-text text-transparent" : "inline-block bg-gradient-to-r from-[#ef709b] to-[#fa9372] bg-clip-text text-white"} ${hoverItems && isHovered && "opacity-60"}`}
          >
            {text}
          </h1>
        )}
        {isHovered && hoverItems && (
          <NavbarMenu>
            {hoverItems.map((hoverItem, index) => (
              <div key={index}>
                <button
                  className="w-full text-start transition-all"
                  onClick={() => setIsHovered(false)}
                >
                  {hoverItem}
                </button>
              </div>
            ))}
          </NavbarMenu>
        )}
      </div>
    </button>
  );
}

export default NavbarButton;
