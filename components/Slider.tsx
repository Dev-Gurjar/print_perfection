"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface MCarousel {
  id: string;
  name: string;
  price: string;
  imageUrl1: string;
  imageUrl2: string;
}

const Slider: React.FC<{ mcarousels: MCarousel[] }> = ({ mcarousels }) => {
  return (
    <div className="relative my-10 overflow-hidden">
      <Swiper
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          950: {
            slidesPerView: 4, // Show 2.5 slides on medium screens
          },
          680:{
            slidesPerView: 3, // Show 2.5 slides on medium screens
          },
          450: {
            slidesPerView: 2, // Show 1.5 slides on small screens
          },
        }}
      >
        {mcarousels.map((carousel) => (
          <SwiperSlide key={carousel.id} className="relative">
            <a href="#" className="group block px-1.5 w-full">
              <div className="relative w-full h-[24rem] overflow-hidden">
                <Image
                  src={carousel.imageUrl1}
                  alt={`${carousel.name} image 1`}
                  layout="fill"
                  objectFit="contain"
                  className="absolute h-full inset-0 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <Image
                  src={carousel.imageUrl2}
                  alt={`${carousel.name} image 2`}
                  layout="fill"
                  objectFit="contain"
                  className="absolute h-full inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                />
              </div>
              <div className="relative text-center bg-white pt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {carousel.name}
                </h3>
                <p className="mt-1.5 tracking-wide text-gray-900">
                  Rs {carousel.price}
                </p>
              </div>
            </a>
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
