"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Product } from "@/utils/data"; // Adjust the path as necessary

const TESelect = dynamic(
  () => import("tw-elements-react").then((mod) => mod.TESelect),
  { ssr: false }
);

// Define the interface for the props of the Products component
interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const filterOptions = [
    { text: "Availability", optgroup: true, disabled: true },
    { text: "Available", value: "available" },
    { text: "Size", optgroup: true, disabled: true },
    { text: "XS", value: "xs" },
    { text: "S", value: "s" },
    { text: "M", value: "m" },
    { text: "L", value: "l" },
    { text: "XL", value: "xl" },
    { text: "2XL", value: "2xl" },
    { text: "3XL", value: "3xl" },
  ];

  return (
    <div className="flex flex-col md:flex-row mt-16 md:mt-24 lg:mt-25">
      {/* Sidebar Filters */}
      <aside className="hidden md:block w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-300 md:mr-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">AVAILABILITY</h3>
          <ul>
            <li>
              <input type="checkbox" id="available" className="mr-2" />
              <label htmlFor="available">Available (73)</label>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">SIZE</h3>
          <ul>
            {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
              <li key={size}>
                <input type="checkbox" id={size} className="mr-2" />
                <label htmlFor={size}>{size} (73)</label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-4">
        {/* Sort Dropdown */}
        <div className="my-4 grid grid-cols-2 gap-4">
          <p className="hidden md:block">32 products</p>
          <TESelect
            label="Sort By"
            data={[
              { text: "Featured", value: "f" },
              { text: "Price: Low to High", value: "lh" },
              { text: "Price: High to Low", value: "hl" },
            ]}
            className="w-full lg:w-2/3 ml-auto"
          />
          <TESelect
            data={filterOptions}
            multiple
            selectAll={false}
            label="Filters"
            className="md:hidden"
          />
        </div>
        {/* Category Banner */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-10">
          <div className="relative">
            <img
              src="https://asia.daughtersofindia.net/cdn/shop/products/Nora-Primrose-2.jpg?v=1670559166&width=1000"
              alt="Category 1"
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-white text-base text-center">Shop Category</p>
            </div>
          </div>
          {/* Repeat similar divs for other categories as needed */}
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <span
              key={product._id}
              className="grid__item grid-product small--one-half medium-up--one-quarter"
            >
              {/* <div className="grid-product__content"> */}
              {/* <div className="grid__item-image-wrapper"> */}
              <a href="#" className="grid-product__link">
                {/* Favorite Button */}
                <button
                  className="grid__favorite-button"
                  aria-label="Favorite product"
                />
                <div className="grid-product__image-mask relative h-0 pb-[150%]">
                  <Image
                    src={product.image1}
                    alt={`${product.name} image 1`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    className="absolute w-full h-full object-cover hmax-w-full max-h-full inset-0 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  />
                  <div className="grid-product__secondary-image small--hide absolute inset-0 w-full h-full">
                    <Image
                      src={product.image2}
                      alt={`${product.name} image 2`}
                      layout="fill"
                      objectFit="cover"
                      loading="lazy"
                      className="absolute w-full h-full max-w-full max-h-full inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    />
                  </div>
                </div>
              </a>
              <div className="grid-product__meta text-center">
                <div className="grid-product__title">{product.name}</div>

                <span
                  className="stamped-product-reviews-badge"
                  style={{ display: "block" }}
                >
                  <span
                    className="stamped-badge"
                    aria-label={`${product.reviews} reviews`}
                  >
                    <span>{product.reviews} reviews</span>
                  </span>
                </span>
                <div className="grid-product__price">Rs. {product.price}</div>
              </div>
              {/* </div> */}
              {/* </div> */}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
