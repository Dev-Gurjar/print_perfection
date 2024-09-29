import Products from "@/components/Products";
import React from "react";

const products = [
  {
    id: 1,
    name: "Jasmine Maxi Dress - Sea Mist",
    price: "Rs. 14,200.00",
    imageUrl:
      "https://asia.daughtersofindia.net/cdn/shop/files/Kyra-Maxi-Lilac-6.jpg?v=1710883860&width=1000",
    reviews: "99 reviews",
  },
  {
    id: 2,
    name: "Poet Blouse - Vanilla",
    price: "Rs. 10,500.00",
    imageUrl:
      "https://asia.daughtersofindia.net/cdn/shop/files/Kyra-Maxi-Lilac-6.jpg?v=1710883860&width=1000",
    reviews: "20 reviews",
  },
  {
    id: 3,
    name: "Kyra Midi Dress - Musk",
    price: "Rs. 11,100.00",
    imageUrl:
      "https://asia.daughtersofindia.net/cdn/shop/files/Kyra-Maxi-Lilac-6.jpg?v=1710883860&width=1000",
    reviews: "252 reviews",
  },
  {
    id: 4,
    name: "Kyra Midi Dress - Fuchsia Bloom",
    price: "Rs. 11,100.00",
    imageUrl:
      "https://asia.daughtersofindia.net/cdn/shop/files/Kyra-Maxi-Lilac-6.jpg?v=1710883860&width=1000",
    reviews: "116 reviews",
  },
];

const Shop = () => {

  return (
    <>
    <div className="mb-20">
    <Products products={products} />
    </div>
    </>
 );
};

export default Shop;
