// import React, { ReactNode } from "react";

import { useRef } from "react";
import useInViewPort from "../hooks/UseInViewPort";

interface Props {
  onClick?: () => void;
  title: string;
  description: string;
  thumbnail: string;
  footer: string;
}

function Card({ title, footer, description, thumbnail }: Props) {
  const targetRef = useRef<HTMLImageElement>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.5 });

  // max-w-[26rem]
  return (
    <div className="flex h-full w-full min-w-52 flex-col overflow-hidden rounded-md border border-secondary text-left transition-transform hover:scale-[102%]">
      <img
        ref={targetRef}
        //
        src={inViewport ? thumbnail : "src/assets/image-icon.png"}
        alt="Article image"
        className={`h-40 w-full object-cover`}
      />
      <div className="p-4">
        <h1 className="line-clamp-2 text-lg font-medium">{title}</h1>
        <h1 className="pb-4 text-sm text-secondary">{footer}</h1>
        <span className="font-light">{description}</span>
      </div>
    </div>
  );
}

export default Card;
