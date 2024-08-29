import React from "react";

interface LandingArrivalsProps {
  overlayRef: React.RefObject<HTMLDivElement>;
}

export const LandingArrivals: React.FC<LandingArrivalsProps> = ({
  overlayRef,
}) => {
  /*  <div
        ref={overlayRef}
        className=""
      />*/
  return (
    <div
      ref={overlayRef}
      className="relative top-[100vh] z-[3] bg-white transition-transform duration-300 ease-in-out  bg-white"
    >
      <div className="flex mx-[10%] pt-[120px]">
        <div className="w-[41%] pb-[40px] pl-[30px] pr-[50px]">
          <img
            src="https://bazz.qodeinteractive.com/wp-content/uploads/2018/08/h1-img-1.jpg"
            alt=""
          />
        </div>
        <div className="w-[28%]  flex flex-col justify-center items-center pr-[10px]">
          <img
            src="https://bazz.qodeinteractive.com/wp-content/uploads/2018/06/h1-img-2.jpg"
            alt=""
          />
        </div>
        <div className="w-[31%] flex flex-col justify-center items-center">
          <div className="pl-[25px] pb-[44px]">
            <h3 className="pl-[11px] mb-[8px] text-[23px] light">
              <span className=""></span>New Arrivals
            </h3>
            <h2 className="text-[40px] bold">NEW COLLECTIONS</h2>
            <p>Discover our new collection of brand new shoes!</p>
            <a href="">
              <span>VIEW MORE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
