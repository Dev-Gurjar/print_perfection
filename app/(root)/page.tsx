import DressSection from "@/components/DressSection";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { dresses } from "@/utils/dressdata";

export default function Home() {
  return (
    <>
      <div className="relative">
        <a href="/collections">
          <picture>
            <source media="(max-width: 1024px)" srcSet="/commingsoon.png" />
            <img
              src="/IMG_7700.PNG"
              alt="banner"
              className="w-screen h-screen object-cover"
            />
          </picture>
        </a>
        <div className="absolute lg:hidden w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-7xl font-bold tracking-widest mb-4">
            Comming Soon
          </h2>
        </div>
      </div>

      <div className="mt-20 mx-auto box-border max-w-5xl text-center p-10">
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
              className="w-screen h-screen max-w-full object-cover"
            />
          </picture>
        </a>
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-7xl font-bold tracking-widest mb-4">
            Support the Artists
          </p>
          <button className=" w-1/3 mt-5 text-center border border-black py-1.5">
            <p className="px-2 w-9/8">Shop Now</p>
          </button>
        </div>
      </div>
      <div className="my-20 mx-auto box-border max-w-5xl text-center p-10">
        <p className="box-border text-xl tracking-widest">
          We support the art of hand block printing and sustainably handmade
          garments that utilise tradition and ritual through ancient practice.
          Our aim is to bridge the gap between artisan and consumer, our
          connection with one another, and the Earth.
        </p>
      </div>
      <iframe className="w-full h-1/2 aspect-video ..." width="full"  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Q6hqGWfxgFO010qA&amp;controls=0"  referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </>
  );
}
