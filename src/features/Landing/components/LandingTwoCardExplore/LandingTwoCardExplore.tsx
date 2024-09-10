import React from "react";

export const LandingTwoCardExplore: React.FC = () => {
  return (
    <div className="relative mt-24">
      <div className="flex justify-evenly items-center">
        <div
          className='w-[49%] h-[66vh] relative flex justify-center bg-[url("https://bazz.qodeinteractive.com/wp-content/uploads/2018/08/h1-img-3.jpg")] 
        bg-cover after:absolute after:inset-0 after:bg-[url("https://bazz.qodeinteractive.com/wp-content/uploads/2018/08/h1-img-5.png")] after:bg-center after:bg-no-repeat after:bg-contain after:pointer-events-none'
        >
          <button className="mt-[320px] h-[52px] px-[47px] border-2 border-solid border-white  bg-[white] text-[14px] font-[1000] hover:bg-transparent hover:text-[white] transition-all duration-[0.5s]">
            SHOP NOW
          </button>
        </div>
        <div
          className='w-[49%] h-[66vh] relative flex justify-center  bg-[url("https://bazz.qodeinteractive.com/wp-content/uploads/2018/08/h1-img-4.jpg")] 
        bg-cover after:absolute after:inset-0 after:bg-[url("https://bazz.qodeinteractive.com/wp-content/uploads/2018/08/h1-img-6.png")] after:bg-center after:bg-no-repeat after:bg-contain after:pointer-events-none'
        >
          <button className="mt-[320px] h-[52px] px-[47px] border-2 border-solid border-white  bg-[white] text-[14px] font-[1000] hover:bg-transparent hover:text-[white] transition-all duration-[0.5s]">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};
