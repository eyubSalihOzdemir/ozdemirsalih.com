import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  onClick: () => void;
  text: string;
  isBig?: boolean;
}

function SidebarButton({ icon, onClick, text, isBig = false }: Props) {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button
      className={`${isBig && "mb-4"} flex h-${isBig ? "12" : "10"} rounded-button w-full items-center justify-start gap-2 p-2 hover:bg-secondary dark:hover:bg-dark-secondary`}
      onClick={handleButtonClick}
    >
      <div className={`[&>*]:size-${isBig ? "6" : "5"}`}>{icon}</div>
      {text}
    </button>
  );
}

export default SidebarButton;
