import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Dress {
  id: string;
  name: string;
  bname: string;
  imageUrl: string;
}

interface DressSectionProps {
  dresses: Dress[];
}

const DressSection: React.FC<DressSectionProps> = ({ dresses }) => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div>
        <ul className="mt-8 grid gap-4  grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {dresses.map((dress) => (
            <li key={dress.id}>
              <Link href={`/dresses/${dress.id}`}>
                <div className="group block overflow-hidden">
                  <Image
                    src={dress.imageUrl}
                    alt={dress.name}
                    layout="responsive"
                    width={300} // adjust the width and height as needed
                    height={600}
                    className="object-cover h-20 transition duration-500 group-hover:scale-105 "
                  />
                  <div className="relative flex flex-col items-center bg-white pt-2">
                    <h3 className="text-3xl text text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {dress.name}
                    </h3>
                    <button className=" w-1/2 m-3 text-center border divide-slate-200 py-1.5">
                      <p className="px-2 w-9/8">Shop {dress.bname}</p>
                    </button>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DressSection;
