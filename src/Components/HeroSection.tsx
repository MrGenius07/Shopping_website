import React from 'react';
import Link from "next/link"


function HeroSection() {
  return (
    <div className="relative bg-black-500 min-h-[40rem] md:h-auto flex items-center justify-center overflow-hidden rounded-md mt-12"> {/* Changed background color to bg-blue-500 */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center text-white">
        <h1 className="text-6xl md:text-6xl font-bold mb-4">Welcome to Our Shopping Platform</h1>
        <p className="text-lg md:text-xl mb-8">Discover the best deals on garments, groceries, and electrical products.</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out inline-flex items-center">
          <span>Shop Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
