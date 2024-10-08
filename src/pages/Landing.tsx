import React, { useEffect, useRef } from "react";
import { TopNavBar } from "../components/TopNavBar/TopNavBar";
import { LandingHeaderSlider } from "../features/Landing/components/LandingHeaderSlider/LandingHeaderSlider";
import { LandingArrivals } from "../features/Landing/components/LandingArrivals/LandingArrivals";
import { LandingTwoCardExplore } from "../features/Landing/components/LandingTwoCardExplore/LandingTwoCardExplore";
import { LandingScrollEfectContainer } from "../features/Landing/components/LandingScrollEffectContainer/LandingScrollEffectContainer";

export const Landing: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const newTopPosition =
          viewportHeight - scrollPosition > 0
            ? viewportHeight - scrollPosition
            : 0;
        console.log(scrollPosition);
        overlayRef.current.style.top = `${newTopPosition}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <TopNavBar />
      <LandingHeaderSlider />
      <LandingScrollEfectContainer overlayRef={overlayRef}>
        <LandingArrivals />
        <LandingTwoCardExplore />
      </LandingScrollEfectContainer>
    </>
  );
};
