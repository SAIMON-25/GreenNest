import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = ({ plants }) => {
  return (
    <Swiper
      spaceBetween={25}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{
        "--swiper-navigation-color": "#22c55e",
        "--swiper-pagination-color": "#22c55e",
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: { slidesPerView: 1, centeredSlides: true },
      }}
    >
      {plants?.map((plant, index) => (
        <SwiperSlide key={index}>
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
