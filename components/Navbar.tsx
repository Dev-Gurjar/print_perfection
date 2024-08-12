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
} from "@mui/icons-material"; // Import the Close icon
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

const NavBar = () => {
  console.log("hiii");

  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="mx-2 py-1.5 md:px-4 flex items-center justify-between">

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button className="p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
        </div>

        {/* Logo */}
        <div className="block w-2/3 md:w-1/6 mr-4 text-center md:text-left">
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
              <div className="absolute shop1 hidden w-48 bg-white rounded-md shadow-lg mt-2">
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
              </div>
            </li>
            <li className="p-2 relative">
              <Link href="/story" className="hover:text-gray-900">
                OUR STORY
              </Link>
              <div className="absolute hidden w-48 bg-white rounded-md shadow-lg mt-2">
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
              </div>
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

        {/* Add CSS to show dropdown on hover */}
        <style jsx>{`
          .shop:hover .shop1 {
            display: block;
          }
        `}</style>

        {/* Rest of your code... */}
        <div className="flex  md:hidden">
          <button
            className={`hover:bg-gray-300 mx-1.5 ${isSignedIn ? 'pt-2.5' : 'pt-0'}`}
            onClick={() => {
              if (!isSignedIn) {
                window.location.href = "/sign-in";
              }
            }}
          >
            {isSignedIn ? <UserButton  /> : <Person />}
          </button>
          <button className="hover:bg-gray-300 mx-1.5">
            <Favorite />
          </button>
          <button className="hover:bg-gray-300 mx-1.5">
            <LocalMall />
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-2">
          <button className="mr-3 border border-black px-4">
            <h1>Shop Now</h1>
          </button>
          <button
            className={`hover:bg-gray-300 px-1.5 ${isSignedIn ? 'pt-2.5' : 'pt-0'}`}
            onClick={() => {
              if (!isSignedIn) {
                window.location.href = "/sign-in";
              }
            }}
          >
            {isSignedIn ? <UserButton /> : <Person className="!pt-0"/>}
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

            <ul className="space-y-4 mt-8">
              <li>
                <Link
                  href="/shop"
                  className="block text-lg text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SHOP
                </Link>
                <div className="mt-2">
                  <Link
                    href="/shop/new-arrivals"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href="/shop/sale"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sale
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="/story"
                  className="block text-lg text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  OUR STORY
                </Link>
                <div className="mt-2">
                  <Link
                    href="/story/about-us"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/story/our-mission"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Mission
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="block text-lg text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  JOURNAL
                </Link>
              </li>
              <li>
                <Link
                  href="/last-chance"
                  className="block text-lg text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LAST CHANCE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
