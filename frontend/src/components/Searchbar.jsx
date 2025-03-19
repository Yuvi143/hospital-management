import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center md:text-3xl">
        Smart Hospital Finder & Booking
      </h1>

      {/* Search Bar */}
      <div className="flex items-center mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search Hospitals"
          className="flex-grow p-3 text-sm md:text-base focus:outline-none"
        />
        <button className="p-3 bg-black text-white flex items-center justify-center">
          <FaSearch className="w-5 h-5" />
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 text-center mt-3 text-sm md:text-base">
        Find hospitals by location, specialization, availability, and ratings.
      </p>
    </div>
  );
};

export default Searchbar;
