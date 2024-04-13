import { ReactNode } from "react";

interface Props {
  text?: string;
  onClick: () => void;
  icon?: ReactNode;
  isSelected: boolean;
}

function NavbarButton({ text, onClick, icon, isSelected = false }: Props) {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button
      className="flex items-center py-2 duration-300 hover:scale-110 hover:transition-all"
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
            className={`${isSelected && "inline-block bg-gradient-to-r from-[#ef709b] to-[#fa9372] bg-clip-text text-transparent transition-all"}`}
          >
            {text}
          </h1>
        )}
      </div>
    </button>
  );
}

export default NavbarButton;
