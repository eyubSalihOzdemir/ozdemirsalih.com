// import React, { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  title: string;
  width?: string;
  height?: string;
  text?: string;
  footer?: string;
}

function Card({ title, footer }: Props) {
  return (
    <div className="flex h-full  min-w-52 max-w-[26rem] flex-col rounded-sm border p-2 text-left transition-transform hover:scale-105 hover:bg-secondary">
      <h1 className="text-md line-clamp-2	">{title}</h1>
      <h1 className="text-sm text-dark-secondary/60">{footer}</h1>
    </div>
  );
}

export default Card;
