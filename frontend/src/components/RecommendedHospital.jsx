import React from 'react'
import Card from './Card'


const RecommendedHospital = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-8">
      {/* Section Title */}
      <h2 className="text-xl font-bold mb-4">Recommended Hospitals</h2>
      <Card />
      {/* Buttons */}
      <div className="p-4 flex flex-col gap-3">
        <button className="w-full border border-black py-2 rounded-md text-black font-semibold">
          Check Bed Availability
        </button>
        <button className="w-full border border-black py-2 rounded-md text-black font-semibold">
          Emergency Contacts
        </button>
        <button className="w-full bg-black text-white py-2 rounded-md font-semibold">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default RecommendedHospital;

