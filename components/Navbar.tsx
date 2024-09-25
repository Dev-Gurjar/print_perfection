"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Person,
  Favorite,
  Search,
  LocalMall,
  Menu,
  Delete,
  Close,
  ArrowForwardIos,
} from "@mui/icons-material";
// import { Close } from "@mui/icons-material";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { favorites, dresses } from "@/utils/data";
import DressSection from "./DressSection";
// import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  console.log("hiii");

  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFavModalOpen, setIsFavModalOpen] = useState(false);
  const [favorite, setFavorites] = useState(favorites);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItem] = useState([]);

  const handleDelete = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    );
  };
  return (
    <>
      <nav className="bg-white shadow fixed top-0 left-0 w-full z-10">
        <div className="mx-2 py-2 md:px-4 lg:py-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button className="p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </button>
          </div>

          {/* Logo */}
          <div className="block w-2/3 md:w-1/6 mx-4 text-center md:text-left">
            <Link
              href="/"
              className="text-2xl text-left font-bold text-gray-800"
            >
              <p className="text-body-bold font-bold">PRINT PERFECTION</p>
            </Link>
          </div>

          {/* Navbar Items */}
          <div className="hidden md:block w-2/4 text-center mx-3">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li className="p-2 relative">
                <Link href="/shop" className="hover:text-gray-900 shop">
                  SHOP
                </Link>
                {/* <div className="absolute shop1 hidden w-48 bg-white rounded-md shadow-lg mt-2">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/shop/new-arrivals"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/sale"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Sale
                    </Link>
                  </li>
                </ul>
              </div> */}
              </li>
              <li className="p-2 relative">
                <Link href="/story" className="hover:text-gray-900">
                  OUR STORY
                </Link>
                {/* <div className="absolute hidden w-48 bg-white rounded-md shadow-lg mt-2">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/story/about-us"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/story/our-mission"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Our Mission
                    </Link>
                  </li>
                </ul>
              </div> */}
              </li>
              <li className="p-2">
                <Link href="/journal" className="hover:text-gray-900">
                  JOURNAL
                </Link>
              </li>
              <li className="p-2">
                <Link href="/last-chance" className="hover:text-gray-900">
                  LAST CHANCE
                </Link>
              </li>
            </ul>
          </div>
          {/* desktop icons */}
          <div className="hidden md:flex space-x-2">
            <button className="mr-3 border border-black p-3 px-6">
              <h1>SHOP ALL</h1>
            </button>
            <button
              className={`hover:bg-gray-300 px-1.5 ${
                isSignedIn ? "pt-2.5" : "pt-0"
              }`}
              onClick={() => {
                if (!isSignedIn) {
                  window.location.href = "/sign-in";
                }
              }}
            >
              {isSignedIn ? <UserButton /> : <Person className="!pt-0" />}
            </button>
            <button
              className="hover:bg-gray-300 p-2"
              onClick={() => {
                setIsFavModalOpen(true);
                setIsCartOpen(false);
              }}
            >
              <Favorite />
            </button>
            <button className="hover:bg-gray-300 p-2">
              <Search />
            </button>
            <button
              className="hover:bg-gray-300 p-2"
              onClick={() => {
                setIsCartOpen(true);
                setIsFavModalOpen(false);
              }}
            >
              <LocalMall />
            </button>
          </div>

          {/* Mobile icon */}
          <div className="flex  md:hidden">
            <button
              className={`hover:bg-gray-300 mx-1.5 ${
                isSignedIn ? "pt-2.5" : "pt-0"
              }`}
              onClick={() => {
                if (!isSignedIn) {
                  window.location.href = "/sign-in";
                }
              }}
            >
              {isSignedIn ? <UserButton /> : <Person />}
            </button>
            <button
              className="hover:bg-gray-300 mx-1.5"
              onClick={() => {
                setIsFavModalOpen(true);
                setIsCartOpen(false);
              }}
            >
              <Favorite />
            </button>

            <button
              className="hover:bg-gray-300 mx-1.5"
              onClick={() => {
                setIsCartOpen(true);
                setIsFavModalOpen(false);
              }}
            >
              <LocalMall />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white shadow-lg z-10">
            <div className="p-4">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Close />
              </button>

              {/* Search Bar */}
              <div className="mt-6 mb-4">
                <div className="flex items-center border-b border-gray-400">
                  <Search className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full text-lg px-2 py-1 focus:outline-none"
                  />
                </div>
              </div>

              {/* Dress Categories */}
              <ul className="space-y-6">
                <li>
                  <a href="maxi" className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">MAXI DRESSES</h3>
                      <p className="text-sm text-gray-600">
                        Free flowing, romantic ankle length
                      </p>
                    </div>
                    <ArrowForwardIos className="text-gray-400" />
                  </a>
                </li>
                <li>
                  <a href="midi" className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">MIDI DRESSES</h3>
                      <p className="text-sm text-gray-600">
                        Carry you effortlessly from day to night
                      </p>
                    </div>
                    <ArrowForwardIos className="text-gray-400" />
                  </a>
                </li>
                <li>
                  <a href="mini" className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">MINI DRESSES</h3>
                      <p className="text-sm text-gray-600">
                        Timeless length to wear casual or dress up
                      </p>
                    </div>
                    <ArrowForwardIos className="text-gray-400" />
                  </a>
                </li>
                <li>
                  <a href="tops" className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">TOPS</h3>
                      <p className="text-sm text-gray-600">
                        Designed to bring out the goddess within
                      </p>
                    </div>
                    <ArrowForwardIos className="text-gray-400" />
                  </a>
                </li>
              </ul>

              {/* New Arrivals Button */}
              <button className="mt-8 w-full bg-black text-white py-3 text-center text-lg font-semibold">
                NEW ARRIVALS
              </button>

              {/* Lower Section Links */}
              {/* <div className="mt-8 text-center space-y-4">
              <Link href="/journal" className="block text-lg font-light">
                JOURNAL
              </Link>
              <Link href="/our-story" className="block text-lg font-light">
                OUR STORY
              </Link>
              <Link href="/log-in" className="block text-lg font-light">
                LOG IN
              </Link>
            </div> */}

              {/* Review Section */}
              <div className="mt-8 p-4 bg-gray-100">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                </div>
                <h2 className="text-lg font-bold">LOVE THESE DRESSES</h2>
                <p className="text-gray-600">
                  Wonderful. I can't say enough about how much I love their
                  dresses and their customer service.
                </p>
                <p className="mt-2 font-bold">GABRIELLA H.</p>
              </div>
            </div>
          </div>
        )}
      </nav>

      {isFavModalOpen && (
        <>
          <div
            className="relative w-full h-screen backdrop-blur-sm z-10 top-0 right-0"
            onClick={() => setIsFavModalOpen(false)}
          >
            {" "}
          </div>

          <div
            className={`fixed overflow-scroll bg-white z-30 h-[85vh] rounded-lg shadow-black shadow-2xl p-4
          ${
            window.innerWidth < 768
              ? "bottom-0 left-0 w-full max-w-[99vw] mt-4" // For mobile view, full width and slides up
              : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[800px]" // For desktop, centered
          }`}
          >
            {/* Modal Header */}
            <div className="flex border-b-2 pb-4 justify-between items-center mb-4">
              <h2 className="text-4xl font-bold">Favorites</h2>
              <button
                onClick={() => setIsFavModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Close />
              </button>
            </div>

            {/* Conditional rendering based on favorites */}
            {favorite.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-lg font-bold">
                  You don't have any favorites yet
                </p>
                <p>
                  Tap the heart on any product to save it to your favorites.
                </p>
              </div>
            ) : (
              <div>
                {favorite.map((item) => (
                  <div
                    key={item.id}
                    className="border-b py-4 flex items-center justify-between "
                  >
                    <div className="flex items-start w-full justify-between space-x-6 ">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-40 rounded-lg flex-shrink-0"
                      />

                      {/* Product Details */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500">₹{item.price}</p>

                        {/* Size selection dropdown */}
                        <select className="mt-2 p-1 w-24 border rounded">
                          <option value="" disabled selected>
                            Select Size
                          </option>
                          {item.availabelsizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>

                        {/* Button and Delete Option */}
                        <div className="mt-4 flex items-center space-x-4 justify-between">
                          {/* Add to Cart Button */}
                          <button className="bg-black text-white px-4 py-2 rounded">
                            Add to Cart
                          </button>

                          {/* Delete Button */}
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Delete />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {isCartOpen && (
        <>
          <div
            className="fixed w-full h-screen backdrop-blur-sm z-20 top-0 right-0"
            onClick={() => setIsCartOpen(false)}
          >
            {" "}
          </div>

          <div
            className={`fixed overflow-scroll bg-white z-30 h-[85vh] rounded-lg shadow-black shadow-2xl p-4
          ${
            window.innerWidth < 768
              ? "bottom-0 left-0 w-full max-w-[99vw] mt-4" // For mobile view, full width and slides up
              : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[800px]" // For desktop, centered
          }`}
          >
            {/* Modal Header */}
            <div className="flex border-b-2 pb-4 justify-between items-center mb-4">
              <h2 className="text-4xl font-bold">Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Close />
              </button>
            </div>

            {/* Conditional rendering based on favorites */}
            {CartItems.length === 0 ? (
              <div>
                <div className="text-center py-5">
                  <p className="text-lg font-bold">Your Cart is Empty</p>
                  <p>
                    Let's find you the perfect hand blocked piece for your
                    closet.
                  </p>
                </div>
                <DressSection dresses={dresses} />
              </div>
            ) : (
              <div>
                {favorite.map((item) => (
                  <div
                    key={item.id}
                    className="border-b py-4 flex items-center justify-between "
                  >
                    <div className="flex items-start w-full justify-between space-x-6 ">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-40 rounded-lg flex-shrink-0"
                      />

                      {/* Product Details */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500">₹{item.price}</p>

                        {/* Size selection dropdown */}
                        <select className="mt-2 p-1 w-24 border rounded">
                          <option value="" disabled selected>
                            Select Size
                          </option>
                          {item.availabelsizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>

                        {/* Button and Delete Option */}
                        <div className="mt-4 flex items-center space-x-4 justify-between">
                          {/* Add to Cart Button */}
                          <button className="bg-black text-white px-4 py-2 rounded">
                            Add to Cart
                          </button>

                          {/* Delete Button */}
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Delete />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
