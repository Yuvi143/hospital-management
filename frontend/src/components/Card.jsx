import React from 'react'

const Card = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Hospital Image */}
      <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-lg font-semibold">Hospital Image</span>
        <button className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          Book Appointment
        </button>
      </div>

      {/* Hospital Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Hospital Name</h3>
        <p className="text-gray-600 text-sm mt-1">
          Specialization: [specialization], Availability: [availability]
        </p>
      </div>
    </div>
  )
}

export default Card
