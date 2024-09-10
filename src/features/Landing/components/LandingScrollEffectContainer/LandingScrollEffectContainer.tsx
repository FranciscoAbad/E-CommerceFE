import React, { RefObject } from "react";

interface LandingScrollEffectContainerProps {
  children: React.ReactNode;
  overlayRef: RefObject<HTMLDivElement>;
}

export const LandingScrollEfectContainer: React.FC<
  LandingScrollEffectContainerProps
> = ({ children, overlayRef }) => {
  return (
    <div
      className="relative top-[100vh] z-[3] bg-white transition-transform duration-300 ease-in-out"
      ref={overlayRef}
    >
      {children}
    </div>
  );
};
