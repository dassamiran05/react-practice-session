import React, { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./imageslider.css";

const ImageSlider = () => {
  const [currentindex, setCurrentIndex] = useState(0);
  const [click, setClick] = useState(false);
  console.log(currentindex);
  const imgData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1693122080619-82129cc613b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1682687220866-c856f566f1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1682686581580-d99b0230064e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const handleleft = () => {
    setClick(true);
    setCurrentIndex((prev) =>
      prev === 0 ? (prev = imgData.length - 1) : prev - 1
    );
  };
  const handleRight = () => {
    setClick(true);
    setCurrentIndex((prev) =>
      prev === imgData.length - 1 ? (prev = 0) : prev + 1
    );
  };

  useEffect(() => {
    if (!click) {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === imgData.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
  }, [currentindex, click]);

  return (
    <>
      <div className="w-100 vh-100 d-flex overflow-hidden position-relative">
        <div className="position-absolute nav-button">
          <span className="left" onClick={handleleft}>
            <BsChevronLeft />
          </span>
          <span className="right" onClick={handleRight}>
            <BsChevronRight />
          </span>
        </div>
        <div className={`w-100 h-100 image-back`}>
          <img
            src={imgData[currentindex]?.image}
            alt={`image-${currentindex + 1}`}
          />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
