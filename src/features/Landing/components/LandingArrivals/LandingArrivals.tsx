import React from "react";

export const LandingArrivals: React.FC = () => {
  return (
    <div className="">
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
            <h3 className="flex justify-start items-center  mb-[8px] text-[23px]">
              <div className="w-10 border-b-[black] border-b-2 border-solid mr-4"></div>
              New Arrivals
            </h3>
            <h2 className="text-[40px] font-[1000]">NEW COLLECTIONS</h2>
            <p className="mt-2 text-[rgb(70,70,70)] text-[16px]">
              Discover our new collection of brand new shoes! and much more.
            </p>
            <button className="mt-4 relative cursor-pointer after:content-[''] after:absolute after:h-[100%]  after:w-[30%] after:border-b-2 after:border-b-[black] after:border-solid after:left-0 after:hover:w-full after:hover:duration-[0.5s]">
              <span className="text-[14px] font-[1000]">VIEW MORE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
