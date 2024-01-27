"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '.';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
        </Link>

        <div className="hidden sm:flex justify-center flex-grow">
          <Link href="/home" className="mx-4 text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/cars" className="mx-4 text-gray-700 hover:text-gray-900">
            Cars
          </Link>
          <Link href="/about" className="mx-4 text-gray-700 hover:text-gray-900">
            About
          </Link>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-2">
            <Link href="/home" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/cars" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
              Cars
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
              About
            </Link>

            <CustomButton
              title="Sign in"
              btnType="button"
              containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
            />
          </div>
        )}
        {!isMenuOpen && (
          <div className="hidden sm:block">
            <CustomButton
              title="Sign in"
              btnType="button"
              containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
