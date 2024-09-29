"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageMulti from "./ImageMulti";

interface MCarousel {
  id: string;
  name: string;
  price: string;
  imageUrl1: string;
  imageUrl2: string;
}

const Slider: React.FC<{ mCarousels: MCarousel[] }> = ({ mCarousels }) => {
  return (
    <div className=" my-8 ">
      <Swiper
        centeredSlides={true}
        loop={true}
        pagination={{
          type: 'bullets',
          clickable: true,

        }}      
        breakpoints={{
          950: {
            slidesPerView: 4, // Show 2.5 slides on medium screens
          },
          680: {
            slidesPerView: 3, // Show 2.5 slides on medium screens
          },
          450: {
            slidesPerView: 2, // Show 1.5 slides on small screens
          },
          0:{
            slidesPerView:1.5,
          }
        }}
      >
        {mCarousels.map((carousel) => (
          <SwiperSlide key={carousel.id} className="">
            <ImageMulti imgData={carousel} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <button className=" w-1/3 mt-5 text-center border border-slate-200 py-1.5">
          <p className="px-2 tracking-widest w-9/8">SHOP ALL NEW ARRIVALS</p>
        </button>
      </div>
    </div>
  );
};

export default Slider;
