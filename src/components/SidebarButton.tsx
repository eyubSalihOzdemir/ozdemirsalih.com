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
    <button
      className={`${isBig && "mb-4"} flex h-${isBig ? "12" : "10"} w-full items-center justify-start gap-2 rounded-button p-2 hover:bg-secondary dark:hover:bg-dark-secondary ${
        underDevelopment && "pointer-events-none text-black/30"
      }`}
      onClick={handleButtonClick}
    >
      <div className={`[&>*]:size-${isBig ? "6" : "5"}`}>{icon}</div>
      <h1 className="text-start">{text}</h1>
    </button>
  );
}

export default SidebarButton;
