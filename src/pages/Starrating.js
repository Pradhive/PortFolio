import React from "react";

const Starrating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round((rating / 100) * maxStars);

  return (
    <div className="flex space-x-1">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="text-yellow-500 text-[30px] fill-current ">
          ★
        </span>
      ))}
    </div>
  );
};

export default Starrating;
