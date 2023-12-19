import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Starrating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handlemousemove = (index) => {
    setHover(index);
  };

  const handlemouseleave = () => {
    setHover(rating);
  };
  return (
    <>
      <div className="star-rating">
        {[...Array(5)].map((_, indx) => {
          indx += 1;
          return (
            <FaStar
              className={indx <= (rating || hover) ? "active" : "inactive"}
              size={40}
              onClick={() => handleClick(indx)}
              onMouseMove={() => handlemousemove(indx)}
              onMouseLeave={handlemouseleave}
            />
          );
        })}
      </div>
    </>
  );
};

export default Starrating;
