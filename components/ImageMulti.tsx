import React from "react";
import Image from "next/image";

interface ImgData {
  name: string;
  price: string;
  imageUrl1: string;
  imageUrl2: string;
}

const ImageMulti: React.FC<{ imgData: ImgData }> = ({ imgData }) => {
  return (
    <a href="#" className="group block px-1.5 h-96 lg:h-[35rem] w-full">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={imgData.imageUrl1}
          alt={`${imgData.name} image 1`}
          layout="fill"
          objectFit="contain"
          className="absolute hmax-w-full max-h-full inset-0 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        <Image
          src={imgData.imageUrl2}
          alt={`${imgData.name} image 2`}
          layout="fill"
          objectFit="contain"
          className="absolute max-w-full max-h-full inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        />
      </div>
    </a>
  );
};

export default ImageMulti;
