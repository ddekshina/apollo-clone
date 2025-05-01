'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-2 h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-blue-800 font-bold text-xl">Apollo247 Clone</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Doctors</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Pharmacy</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Lab Tests</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Health Records</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Login / Signup
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-blue-600">Doctors</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Pharmacy</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Lab Tests</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Health Records</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
                Login / Signup
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}