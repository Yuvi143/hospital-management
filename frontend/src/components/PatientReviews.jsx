import React from "react";
import ReviewCard from "./ReviewCard";

const PatientReviews = () => {
  const reviews = [
    { name: "Patient1", review: "Great experience, highly recommended", rating: 5 },
    { name: "Patient2", review: "Excellent service", rating: 4 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Patient Reviews</h2>
      <p className="text-gray-600 mb-4">See what others have to say</p>
      <div className="flex flex-col md:flex-row gap-4">
        {reviews.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PatientReviews;

