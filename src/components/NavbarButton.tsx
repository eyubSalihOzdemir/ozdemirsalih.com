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
  let timeoutId: NodeJS.Timeout;

  const handleButtonClick = () => {
    onClick();
  };
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex items-center py-0 duration-300 lg:text-lg ${hoverItems && "cursor-default"}`}
      onClick={handleButtonClick}
    >
      {/* className={`${icon && "flex items-center gap-1"}`} */}
      <div>
        <div className="flex items-center gap-1">
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
        </div>
        {isHovered && hoverItems && (
          <NavbarMenu>
            {hoverItems.map((hoverItem, index) => (
              <div onClick={() => setIsHovered(false)} key={index}>
                {hoverItem}
              </div>
            ))}
          </NavbarMenu>
        )}
      </div>
    </button>
  );
}

export default NavbarButton;
