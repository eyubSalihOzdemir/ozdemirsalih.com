import { ReactNode, useState } from "react";
import NavbarMenu from "./NavbarMenu";

interface Props {
  onClick: () => void;
  icon: ReactNode;
  hoverItems?: ReactNode[];
}

function NavbarButton({ onClick, icon, hoverItems }: Props) {
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
      <div className="relative mx-2 my-[2px] flex size-5 items-center">
        {icon}
        {isHovered && hoverItems && (
          <div className="">
            <NavbarMenu onRightSide={true}>
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
          </div>
        )}
      </div>
    </button>
  );
}

export default NavbarButton;
