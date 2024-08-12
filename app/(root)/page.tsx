import DressSection from "@/components/DressSection";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

import { dresses, mcarousel, reviews } from "@/utils/data";
import Slider from "@/components/Slider";
import ReviewsComp from "@/components/ReviewsComp";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="relative">
        <a href="/collections">
          <picture>
            <source media="(max-width: 768px)" srcSet="/IMG_7700.PNG" />
            <img
              src="/commingsoon.png"
              alt="banner"
              className="w-screen h-dvh object-cover"
            />
          </picture>
        </a>
        <div className="absolute hidden md:block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-7xl font-bold tracking-widest mb-4">
            Comming Soon
          </h2>
          <button className=" w-1/3 mt-5 text-center border border-black py-1.5">
            <p className="px-2 w-9/8">Shop Now</p>
          </button>
        </div>
      </div>

      <div className="mt-10 mx-auto box-border max-w-5xl text-center px-10">
        <p className="text-4xl tracking-wide mb-9 box-border">
          Slowly, Ethically and Handcrafted
        </p>
        <p className="box-border text-xl tracking-widest">
          {" "}
          Our ethically handcrafted creation are born from a blend of patience
          and passion. Each piece is a testament to timeless artistry and
          sustainable practices, lovingly made with attention to every detail.
          Embracing a slower pace, we honor the craft and the planet, offering
          you not just a product, but a meaningful story woven into each
          carefully crafted item.
        </p>
      </div>

      <DressSection dresses={dresses} />

      <div className="relative">
        <a href="/collections">
          <picture>
            <source media="(max-width: 768px)" srcSet="/commingsoon.png" />
            <img
              src="/commingsoon.png"
              alt="banner"
              className="w-screen h-dvh max-w-full object-cover"
            />
          </picture>
        </a>
        <div className="absolute  w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-7xl px-3 font-bold tracking-widest mb-4">
            Support the Artists
          </p>
          <button className=" w-1/3 mt-5 text-center border border-black py-1.5">
            <p className="px-2 w-9/8">Shop Now</p>
          </button>
        </div>
      </div>
      <div className=" mx-auto box-border max-w-5xl text-center p-20">
        <p className="box-border text-xl tracking-widest">
          We support the art of hand block printing and sustainably handmade
          garments that utilise tradition and ritual through ancient practice.
          Our aim is to bridge the gap between artisan and consumer, our
          connection with one another, and the Earth.
        </p>
      </div>
      <iframe
        className="w-full h-5/6 aspect-video ..."
        width="full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Q6hqGWfxgFO010qA&amp;controls=0"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

      <Slider mcarousels={mcarousel} />

      <div className="relative">
        <a href="/collections">
          <picture>
            <source media="(max-width: 768px)" srcSet="/Givings.webp" />
            <img
              src="/Givingl.webp"
              alt="banner"
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
          </picture>
        </a>
      </div>

      <div
        id="flower"
        className="relative p-10 md:p-20 pb-0 flex flex-col items-center"
      >
        <div className="relative w-auto">
          <Image
            src={"/flower.webp"}
            alt="banner"
            width={1600} // Adjust the width as needed
            height={120} // Adjust the height as needed
            className="object-contain" // Ensure the image maintains its aspect ratio
          />
        </div>
        <div className="relative m-10  mx-auto box-border max-w-5xl text-center ">
          <p className="box-border text-xl ">
            Daughters of India are empowered women in the workplace. We
            encourage Indian artisans, their families and communities to keep
            their sustainable craftsmanship alive and rise above impoverished
            and outdated circumstances. Every purchase contributes directly to
            supporting women empowerment initiatives in India through our
            charity partnerships.
          </p>
        </div>
      </div>

      <ReviewsComp reviews={reviews} />

      <div className="my-10 mx-auto box-border max-w-5xl text-center px-10">
        <p className="text-4xl tracking-wide mb-9 box-border">
          Our Charity Partners
        </p>
        <p className="box-border text-xl tracking-widest">
          {" "}
          We support women's empowerment through our charity partnerships with
          Sewing the Seeds and Barakat Bundle. We have pledged an ongoing
          monthly donation of $10,000 to support these organisations.
        </p>
        <button className=" w-1/3 m-5 text-center hover:underline py-1.5">
          <p className="px-2 text-2xl w-9/8">Learn More</p>
        </button>
      </div>

      <Footer/>
    </>
  );
}
