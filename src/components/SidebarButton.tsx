import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  onClick: () => void;
  text: string;
  isBig?: boolean;
  underDevelopment?: boolean;
}

function SidebarButton({
  icon,
  onClick,
  text,
  isBig = false,
  underDevelopment = false,
}: Props) {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    // h-${isBig ? "12" : "10"}
    <button
      className={`${isBig && "mb-4"} flex w-full items-center justify-start ${
        underDevelopment && "pointer-events-none text-black/30"
      }`}
      onClick={handleButtonClick}
    >
      <div className={`${icon && "flex items-center gap-2 px-2 py-2"}`}>
        {icon && (
          <div className={`size-${isBig ? "6" : "5"} flex items-center`}>
            {icon}
          </div>
        )}
        <h1 className="text-starts">{text}</h1>
      </div>
    </button>
  );
}

export default SidebarButton;
