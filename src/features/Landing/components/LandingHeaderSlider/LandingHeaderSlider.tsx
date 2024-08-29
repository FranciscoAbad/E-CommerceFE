import React, { RefObject, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";

export const LandingHeaderSlider: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-[100vh] overflow-hidden ">
        <Swiper
          className="h-full"
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            prevEl: ".feed-title-slide-prev",
            nextEl: ".feed-title-slide-next",
          }}
          speed={900}
          effect="Cube"
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="w-full">
              <img
                className="object-cover w-full h-full"
                src="https://bazz.qodeinteractive.com/wp-content/uploads/2018/06/h1-slider1-background-img.jpg"
                alt=""
              />
              <div className="absolute w-full h-[100vh] top-[0] flex justify-center items-center">
                <h1 className="flex items-start text-[150px] leading-[120px] font-[1000] text-[white]">
                  HEARTLESS
                  <h3 className="text-[55px] pl-4 leading-[55px] text-[white]">
                    TM
                  </h3>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
