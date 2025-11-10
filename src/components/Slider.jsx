import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = ({plants}) => {


  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={2}
      loop={Infinity}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      style={{
    '--swiper-navigation-color': '#22c55e', 
    '--swiper-pagination-color': '#22c55e',    
  }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <div className="">
        {plants.map((plant) => (
        <SwiperSlide >
          <img className="w-full h-[600px] object-cover rounded-2xl " src={plant.image} alt="" />
        </SwiperSlide>
      ))}
      </div>
    </Swiper>
  );
};

export default Slider;
