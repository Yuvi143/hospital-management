import React from 'react'

const ReviewCard = ({ name, review, rating }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full md:w-1/3">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <span className="font-semibold">{name}</span>
      </div>
      <p className="text-gray-700">{review}</p>
      <div className="flex mt-2">
        {Array(rating).fill().map((_, i) => (
          <span key={i} className="text-yellow-500">⭐</span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
