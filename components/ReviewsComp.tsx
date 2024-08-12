"use client";
import React from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Ensure Swiper styles are included
import '@fortawesome/fontawesome-svg-core/styles.css'

interface Reviews {
  id: number;
  stars: number; // Updated property name to 'stars' for consistency
  title: string;
  text: string;
  name: string;
}

const ReviewsComp: React.FC<{ allreviews: Reviews[] }> = ({ allreviews }) => {
  return (
    <section className=" p-10 h-1/2 md:h-2/3 bg-[#f9f9f9]"> {/* Brownish background color */}
      <div className="lg:mx-auto max-w-5xl ">
        <h1 className="text-[2rem] tracking-widest font-bold m-8 text-center">
          Felling Lucky
        </h1>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={"coverflow"}
          loop={true}
          // spaceBetween={}
          breakpoints={{
            700: {
              slidesPerView: 3, // Show 2.5 slides on medium screens
            },
            450: {
              slidesPerView: 1, // Show 1.5 slides on small screens
            },
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 1,
            slideShadows: false,
          }}
          className="coverflow "
        >
          {allreviews.map((review) => (
            <SwiperSlide key={review.id} className="py-5">
              <div className="review bg-white p-10 mb-14 rounded-lg shadow-md"> 
                <div className="stars flex mb-2">
                  {/* {[5].map((_, i) => ( */}
                    <i  className="fas fa-star text-yellow-500"></i> 
                  {/* // ))} */}
                </div>

                <h3 className="text-xl font-semibold mb-2">{review.title}</h3>

                <p className="text-gray-700 mb-2">{review.text}</p>

                <p className="text-right text-gray-600">- {review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsComp;
