"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Person,
  Favorite,
  Search,
  LocalMall,
  Menu,
  Close,
  ArrowForwardIos,
} from "@mui/icons-material"; // Import the Close icon
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
// import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  console.log("hiii");

  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="mx-2 py-2 md:px-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button className="p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
        </div>

        {/* Logo */}
        <div className="block w-2/3 md:w-1/6 mx-4 text-center md:text-left">
          <Link href="/" className="text-2xl text-left font-bold text-gray-800">
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
          <button className="hover:bg-gray-300 mx-1.5">
            <Favorite />
          </button>
          <button className="hover:bg-gray-300 mx-1.5">
            <LocalMall />
          </button>
        </div>

        {/* Mobile Icons */}
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
          <button className="hover:bg-gray-300 p-2">
            <Favorite />
          </button>
          <button className="hover:bg-gray-300 p-2">
            <Search />
          </button>
          <button className="hover:bg-gray-300 p-2">
            <LocalMall />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white shadow-lg z-50">
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
              <li >
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
              <li >
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
              <li >
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
              <li >
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
  );
};

export default NavBar;
